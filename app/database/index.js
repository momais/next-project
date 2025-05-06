// app/database/index.js
import pool from './config.js';

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

export async function loginUser(email, password) {
  const [rows] = await pool.query(
    'SELECT * FROM cashbackengine_users WHERE email = ? AND password = ? AND usertype = 3',
    [email, password]
  );

  if (rows.length > 0) {
    return { success: true, user: rows[0] };
  } else {
    return { success: false, message: 'Invalid email or password' };
  }
}
