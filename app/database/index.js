// app/database/index.js
import pool from './config.js';

// Used by the register route
export async function registerUser(username, email, password) {
  const [existing] = await pool.query(
    'SELECT * FROM cashbackengine_users WHERE username = ? OR email = ?',
    [username, email]
  );

  if (existing.length > 0) {
    return { success: false, message: 'Username or Email already exists' };
  }

  await pool.query(
    'INSERT INTO cashbackengine_users (username, email, password, usertype) VALUES (?, ?, ?, 3)',
    [username, email, password]
  );

  return { success: true, message: 'Registration successful' };
}

// Used by NextAuth credentials provider
export async function getUserByEmail(email) {
  const [rows] = await pool.query(
    'SELECT * FROM cashbackengine_users WHERE email = ? AND usertype = 3',
    [email]
  );

  if (rows.length > 0) {
    return rows[0]; // Return the user object for authentication
  }

  return null;
}
