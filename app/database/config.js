import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: "109.106.254.201", 
  user: "u970484384_usrcouponweb",    
  password: "r6SUC]blU]",
  database: "u970484384_couponwebsite", 
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
