// app/database/index.js
import pool from './config.js';

export async function getUserByEmail(email) {
  const [rows] = await pool.query('SELECT * FROM cashbackengine_users WHERE email = ?', [email]);
  return rows[0]; // or null if not found
}

export async function createUser(username, email, hashedPassword) {
  const [existing] = await pool.query(
    'SELECT * FROM cashbackengine_users WHERE username = ? OR email = ?',
    [username, email]
  );

  if (existing.length > 0) {
    return { success: false, message: 'Username or email already exists' };
  }

  await pool.query(
    'INSERT INTO cashbackengine_users (username, email, password, usertype) VALUES (?, ?, ?, 3)',
    [username, email, hashedPassword]
  );

  return { success: true };
}
