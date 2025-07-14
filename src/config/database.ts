import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

const connectDB = async () => {
  try {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL is not defined in environment variables');
    }
    
    await prisma.$connect();
    console.log('✅ Database connection established successfully');
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    // Don't exit process in serverless environment
    if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
      process.exit(1);
    }
    throw error;
  }
};

export { prisma, connectDB }; 