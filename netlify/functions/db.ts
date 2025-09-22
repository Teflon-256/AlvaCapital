import { Pool } from 'pg';
const pool = new Pool({
  connectionString: process.env.NEON_DB_URL,
  ssl: { rejectUnauthorized: false }
});

export async function handler() {
  try {
    const result = await pool.query('SELECT * FROM your_table'); // Replace 'your_table' with your actual table name
    return {
      statusCode: 200,
      body: JSON.stringify(result.rows),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
