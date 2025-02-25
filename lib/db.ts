import mysql from "mysql2/promise";

let pool: mysql.Pool | null = null;

export async function createConnection() {
  if (pool) {
    console.log("Using existing database connection pool.");
    return pool;
  }

  try {
    pool = mysql.createPool({
      host: process.env.DATABASE_HOST,
      port: 3306,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      waitForConnections: true,
      connectionLimit: 10, // Max connections allowed
      queueLimit: 0, // Unlimited queue
    });

    console.log("✅ MySQL Database connected successfully.");
    return pool;
  } catch (error) {
    console.error("❌ Error connecting to MySQL:", error);
    throw error;
  }
}

// Immediately establish a connection when the module loads
createConnection()
  .then(() => console.log("✅ Connection established on startup"))
  .catch((error) => console.error("❌ Connection failed:", error));

export async function getConnection() {
  if (!pool) await createConnection();
  return pool!.getConnection(); 
}
export async function closeConnection() {
  if (pool) {
    await pool.end();
    pool = null;
    console.log("✅ MySQL Database connection closed.");
  }
}
