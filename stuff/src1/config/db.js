const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function connectDB() {

  try {

    await prisma.$connect();

    console.log('PostgreSQL connected successfully');

  } catch (error) {

    console.error('Database connection failed:', error);

    process.exit(1);

  }
}

module.exports = connectDB;
module.exports.prisma = prisma;