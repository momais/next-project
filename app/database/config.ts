import mysql from 'mysql2/promise';

// Database configuration
const dbConfig = {
  host: '109.106.254.201',
  user: 'u970484384_usrcouponweb',
  password: 'r6SUC]blU]',
  database: 'u970484384_couponwebsite',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  charset: 'utf8mb4'
};

// Create connection pool
const pool = mysql.createPool(dbConfig);

// Get connection with retry
export async function getConnectionWithRetry(retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      const connection = await pool.getConnection();
      console.log('Database connection successful');
      return connection;
    } catch (error) {
      console.error(`Connection attempt ${i + 1} failed:`, error);
      if (i === retries - 1) {
        throw new Error('Failed to connect to database after multiple retries');
      }
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  throw new Error('Failed to connect to database');
}

// Verify database connection
export async function verifyConnection() {
  try {
    const connection = await getConnectionWithRetry();
    await connection.query('SELECT 1');
    connection.release();
    console.log('Database connection verified successfully');
    return true;
  } catch (error) {
    console.error('Database connection verification failed:', error);
    return false;
  }
}

// Initialize database
export async function initializeDatabase() {
  try {
    const connection = await getConnectionWithRetry();
    
    // Drop and recreate the table with proper column types
    await connection.query(`
      DROP TABLE IF EXISTS cashbackengine_users
    `);
    
    await connection.query(`
      CREATE TABLE cashbackengine_users (
        user_id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password CHAR(60) NOT NULL,
        usertype INT DEFAULT 3,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);
    
    connection.release();
    console.log('Database table recreated with correct column types');
    return true;
  } catch (error) {
    console.error('Database initialization failed:', error);
    return false;
  }
}

export { pool };
export default pool; 