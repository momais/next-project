import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: "31.170.167.204", 
  user: "u145719651_usr_enjoy",    
  password: "Pwsdenjoy@12345",
  database: "u145719651_database_enjoy", 
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
