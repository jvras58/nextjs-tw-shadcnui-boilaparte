const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
require('dotenv/config');

const prisma = new PrismaClient();

async function main() {
  const users = [
    { 
      nome: process.env.NAME_STRING, 
      email: process.env.EMAIL_STRING, 
      password: process.env.ADMIN_PASSWORD 
    }
  ];

  for (const user of users) {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    const userData = {
      nome: user.nome,
      password: hashedPassword,
      email: user.email,
    };

    await prisma.user.create({
      data: userData,
    });
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });