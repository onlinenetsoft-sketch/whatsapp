const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {

  console.log('Seeding database...');

  const hashedPassword = await bcrypt.hash('admin123', 10);

  const workspace = await prisma.workspace.create({
    data: {
      name: 'OnlineNetSoft Workspace',
      plan: 'PROFESSIONAL'
    }
  });

  const admin = await prisma.user.create({
    data: {
      name: 'Admin User',
      email: 'admin@onlinenetsoft.site',
      password: hashedPassword,
      role: 'SUPER_ADMIN',
      workspaceId: workspace.id
    }
  });

  await prisma.contact.createMany({
    data: [
      {
        name: 'John Doe',
        phone: '919999999999',
        email: 'john@example.com',
        tags: ['lead'],
        workspaceId: workspace.id
      },
      {
        name: 'Sarah Smith',
        phone: '918888888888',
        email: 'sarah@example.com',
        tags: ['customer'],
        workspaceId: workspace.id
      }
    ]
  });

  console.log('Database seeded successfully.');
  console.log('Admin Login:');
  console.log('Email: admin@onlinenetsoft.site');
  console.log('Password: admin123');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });