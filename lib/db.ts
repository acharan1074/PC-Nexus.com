import { Pool, QueryResult } from 'pg'

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

pool.on('error', (err) => {
  console.error('[DB] Unexpected error on idle client', err)
})

export async function query<T = any>(text: string, params?: any[]): Promise<QueryResult<T>> {
  const start = Date.now()
  try {
    const result = await pool.query<T>(text, params)
    const duration = Date.now() - start
    console.log('[DB] Executed query', { text, duration, rows: result.rowCount })
    return result
  } catch (error) {
    console.error('[DB] Query error', { text, error })
    throw error
  }
}

export async function getClient() {
  return pool.connect()
}

export default pool
