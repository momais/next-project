import express from 'express';
import cors from 'cors';
import pool from './config.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/cashbackengine_users', async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT company_name, company_picture FROM cashbackengine_users WHERE usertype = 2 LIMIT 12'
    );
    res.json(rows);
  } catch (error) {
    console.error('Database Error:', error);
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
});

//  Register User
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const [existing] = await pool.query(
      'SELECT * FROM cashbackengine_users WHERE username = ? OR email = ?',
      [username, email]
    );

    if (existing.length > 0) {
      return res.status(409).json({ error: 'Username or Email already exists' });
    }

    await pool.query(
      'INSERT INTO cashbackengine_users (username, email, password, usertype) VALUES (?, ?, ?, 3)',
      [username, email, password]
    );

    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Register Error:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required' });
  }

  try {
    const [rows] = await pool.query(
  'SELECT * FROM cashbackengine_users WHERE email = ? AND password = ? AND usertype = 3',
  [email, password]
);
    
    if (rows.length > 0) {
      res.json({ success: true, message: 'Login successful', user: rows[0] });
    } else {
      res.json({ success: false, message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ success: false, message: 'Login failed' });
  }
});


// Start the server
const PORT = 5050;
app.listen(PORT, () => {
  console.log(`Database server is running on port ${PORT}...`);
});
