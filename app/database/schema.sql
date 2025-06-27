CREATE TABLE IF NOT EXISTS cashbackengine_users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  usertype INT DEFAULT 3,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  emailVerified DATETIME,
  image VARCHAR(255),
  password VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS accounts (
  id VARCHAR(255) PRIMARY KEY,
  userId VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  provider VARCHAR(255) NOT NULL,
  providerAccountId VARCHAR(255) NOT NULL,
  refresh_token TEXT,
  access_token TEXT,
  expires_at BIGINT,
  token_type VARCHAR(255),
  scope VARCHAR(255),
  id_token TEXT,
  session_state VARCHAR(255),
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS sessions (
  id VARCHAR(255) PRIMARY KEY,
  sessionToken VARCHAR(255) UNIQUE NOT NULL,
  userId VARCHAR(255) NOT NULL,
  expires DATETIME NOT NULL,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS verification_tokens (
  identifier VARCHAR(255) NOT NULL,
  token VARCHAR(255) NOT NULL,
  expires DATETIME NOT NULL,
  PRIMARY KEY (identifier, token)
);

CREATE TABLE IF NOT EXISTS cashbackengine_transactions (
  transaction_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  fname VARCHAR(255),
  lname VARCHAR(255),
  email VARCHAR(255),
  telephone VARCHAR(50),
  status VARCHAR(100),
  amount DECIMAL(10,2),
  ref_id VARCHAR(255),
  reference_id VARCHAR(255),
  retailer_id VARCHAR(255),
  activation VARCHAR(255),
  payment_type VARCHAR(100),
  subscription VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
); 