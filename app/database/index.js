import pool from './config.js';
import bcrypt from 'bcrypt';

// REGISTER a new user
export async function registerUser(username, email, password) {
  const [existing] = await pool.query(
    'SELECT * FROM cashbackengine_users WHERE username = ? OR email = ?',
    [username, email]
  );

  if (existing.length > 0) {
    throw new Error('Username or Email already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await pool.query(
    'INSERT INTO cashbackengine_users (username, email, password, usertype) VALUES (?, ?, ?, 3)',
    [username, email, hashedPassword]
  );
}

// FIND user by email for login
export async function findUserByEmail(email) {
  const [rows] = await pool.query(
    'SELECT * FROM cashbackengine_users WHERE email = ?',
    [email]
  );
  return rows[0] || null;
}