import { query } from './db'

export async function initializeDatabase() {
  try {
    // Create tables
    await query(`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20),
        subject VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        status VARCHAR(50) DEFAULT 'new',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    await query(`
      CREATE TABLE IF NOT EXISTS job_applications (
        id SERIAL PRIMARY KEY,
        job_id VARCHAR(50) NOT NULL,
        job_title VARCHAR(255) NOT NULL,
        full_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20),
        experience_years INTEGER,
        cover_letter TEXT,
        resume_url VARCHAR(500),
        status VARCHAR(50) DEFAULT 'applied',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    await query(`
      CREATE TABLE IF NOT EXISTS testimonials (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        role VARCHAR(255),
        company VARCHAR(255),
        message TEXT NOT NULL,
        rating INTEGER DEFAULT 5,
        image_url VARCHAR(500),
        is_featured BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    await query(`
      CREATE TABLE IF NOT EXISTS blog_posts (
        id SERIAL PRIMARY KEY,
        title VARCHAR(500) NOT NULL,
        slug VARCHAR(500) NOT NULL UNIQUE,
        excerpt TEXT,
        content TEXT NOT NULL,
        category VARCHAR(100),
        author VARCHAR(255),
        image_url VARCHAR(500),
        is_published BOOLEAN DEFAULT FALSE,
        published_at TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    await query(`
      CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        title VARCHAR(500) NOT NULL,
        description TEXT,
        image_url VARCHAR(500),
        category VARCHAR(100),
        tags VARCHAR(255),
        link VARCHAR(500),
        is_featured BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    await query(`
      CREATE TABLE IF NOT EXISTS services (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        icon_name VARCHAR(50),
        features VARCHAR(1000),
        is_active BOOLEAN DEFAULT TRUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    console.log('[DB] Database initialized successfully')
  } catch (error) {
    console.error('[DB] Database initialization error:', error)
    throw error
  }
}

export async function seedDatabase() {
  try {
    // Check if services already exist
    const servicesResult = await query('SELECT COUNT(*) FROM services')
    const serviceCount = parseInt(servicesResult.rows[0].count, 10)

    if (serviceCount === 0) {
      await query(`
        INSERT INTO services (title, description, icon_name, features) VALUES
        ('Web Development', 'Custom web applications built with modern technologies', 'Code2', 'React,Next.js,Full-stack'),
        ('Mobile Apps', 'Native and cross-platform mobile applications', 'Smartphone', 'React Native,Native dev'),
        ('Cloud Solutions', 'Scalable cloud infrastructure and deployment', 'Cloud', 'AWS,Azure,DevOps'),
        ('Data & Analytics', 'Data engineering and analytics solutions', 'Database', 'Big data,Warehousing'),
        ('API Development', 'RESTful and GraphQL APIs with high performance', 'Zap', 'REST,GraphQL,Performance'),
        ('Cybersecurity', 'Security audits and secure development practices', 'Shield', 'Security,Compliance')
      `)
      console.log('[DB] Services seeded successfully')
    }

    // Check if projects already exist
    const projectsResult = await query('SELECT COUNT(*) FROM projects')
    const projectCount = parseInt(projectsResult.rows[0].count, 10)

    if (projectCount === 0) {
      await query(`
        INSERT INTO projects (title, description, category, tags, is_featured) VALUES
        ('E-commerce Platform', 'Full-stack e-commerce solution with payment integration', 'ecommerce', 'React,Node.js,Stripe', TRUE),
        ('SaaS Dashboard', 'Analytics dashboard for real-time data visualization', 'saas', 'Next.js,TypeScript,Charts', TRUE),
        ('Mobile Banking App', 'Secure mobile banking application with biometric auth', 'finance', 'React Native,Firebase', TRUE)
      `)
      console.log('[DB] Projects seeded successfully')
    }
  } catch (error) {
    console.error('[DB] Database seeding error:', error)
  }
}
