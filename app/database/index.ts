import bcrypt from 'bcrypt';
import { pool, getConnectionWithRetry } from './config';

// Find user by email (NextAuth)
export async function findUserByEmail(email: string) {
  const connection = await getConnectionWithRetry();
  try {
    console.log('Executing query to find user:', email);
    const [rows]: any = await connection.query(
      'SELECT user_id, username, email, password, usertype FROM cashbackengine_users WHERE email = ?',
      [email]
    );
    
    console.log('Query results:', rows);
    
    if (!rows || rows.length === 0) {
      console.log('No user found with email:', email);
      return null;
    }

    const user = rows[0];
    console.log('Found user:', { ...user, password: '[REDACTED]' });

    // Validate required fields
    if (!user.user_id || !user.username || !user.email || !user.password) {
      console.log('User missing required fields:', { 
        hasUserId: !!user.user_id,
        hasUsername: !!user.username,
        hasEmail: !!user.email,
        hasPassword: !!user.password
      });
      return null;
    }

    // Ensure user_id is a number
    user.user_id = Number(user.user_id);
    if (isNaN(user.user_id)) {
      console.log('Invalid user_id:', user.user_id);
      return null;
    }

    return {
      user_id: user.user_id,
      username: user.username,
      email: user.email,
      password: user.password,
      usertype: user.usertype
    };
  } catch (error) {
    console.error('Error in findUserByEmail:', error);
    throw error;
  } finally {
    connection.release();
  }
}

// Register user
interface RegisterData {
  username: string;
  email: string;
  password: string;
  usertype?: number;
}

export async function registerUser({
  username,
  email,
  password,
  usertype = 3,
}: RegisterData) {
  const connection = await getConnectionWithRetry();
  try {
    console.log('Checking for existing user with email:', email);
    // Check if email already exists
    const [existingUsers]: any = await connection.query(
      'SELECT user_id FROM cashbackengine_users WHERE email = ?',
      [email]
    );

    if (existingUsers.length > 0) {
      console.log('Email already registered:', email);
      throw new Error('Email already registered');
    }

    console.log('Hashing password for user:', email);
    // Hash password with proper salt rounds
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log('Generated hash:', hashedPassword);
    console.log('Generated hash length:', hashedPassword.length);

    // Verify the hash was generated correctly
    const isValidHash = await bcrypt.compare(password, hashedPassword);
    if (!isValidHash) {
      console.error('Hash verification failed during registration');
      throw new Error('Password hashing failed');
    }

    // First, ensure the table has the correct structure
    try {
      await connection.query(`
        ALTER TABLE cashbackengine_users 
        MODIFY COLUMN password CHAR(60) NOT NULL
      `);
      console.log('Successfully modified password column type');
    } catch (alterError) {
      console.log('Table modification not needed or failed:', alterError);
    }

    console.log('Inserting new user:', email);
    // Insert new user with verified hash
    const [result]: any = await connection.query(
      `INSERT INTO cashbackengine_users 
       (username, email, password, usertype)
       VALUES (?, ?, ?, ?)`,
      [username, email, hashedPassword, usertype]
    );

    if (!result.insertId) {
      console.error('Failed to create user - no insertId returned');
      throw new Error('Failed to create user');
    }

    // Verify the stored hash
    const [storedUser]: any = await connection.query(
      'SELECT password FROM cashbackengine_users WHERE user_id = ?',
      [result.insertId]
    );

    if (!storedUser || storedUser.length === 0) {
      console.error('Failed to verify stored hash');
      throw new Error('Failed to verify stored hash');
    }

    const storedHash = storedUser[0].password;
    console.log('Stored hash:', storedHash);
    console.log('Stored hash length:', storedHash.length);

    if (storedHash.length !== hashedPassword.length) {
      console.error('Hash length mismatch:', {
        generated: hashedPassword.length,
        stored: storedHash.length
      });
      throw new Error('Hash storage failed');
    }

    // Final verification of the stored hash
    const finalVerification = await bcrypt.compare(password, storedHash);
    if (!finalVerification) {
      console.error('Final hash verification failed');
      throw new Error('Hash verification failed');
    }

    console.log('User successfully created:', email);
    return {
      id: result.insertId,
      username,
      email
    };
  } catch (error) {
    console.error('Error in registerUser:', error);
    throw error;
  } finally {
    connection.release();
  }
}