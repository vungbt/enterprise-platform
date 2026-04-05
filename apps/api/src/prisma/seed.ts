import { PrismaClient } from '@prisma/client';
import { seedAuth } from './seeds/auth.seed';
import { seedClubs } from './seeds/clubs.seed';

const prisma = new PrismaClient();

async function main() {
  const users = await seedAuth(prisma);
  await seedClubs(prisma, users);

  console.log('✅ All seeds completed');
  console.log('   admin@enterprise.com   / Admin@123');
  console.log('   manager@enterprise.com / Manager@123');
  console.log('   staff@enterprise.com   / Staff@123');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
