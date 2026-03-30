import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // ── Roles ────────────────────────────────────────────────
  const adminRole = await prisma.role.upsert({
    where: { name: 'admin' },
    update: {},
    create: { name: 'admin', label: 'Admin' },
  });

  const managerRole = await prisma.role.upsert({
    where: { name: 'manager' },
    update: {},
    create: { name: 'manager', label: 'Manager' },
  });

  const staffRole = await prisma.role.upsert({
    where: { name: 'staff' },
    update: {},
    create: { name: 'staff', label: 'Staff' },
  });

  // ── Users ────────────────────────────────────────────────
  const adminPassword = await bcrypt.hash('Admin@123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@enterprise.com' },
    update: {},
    create: {
      email: 'admin@enterprise.com',
      name: 'Admin',
      password: adminPassword,
    },
  });

  const managerPassword = await bcrypt.hash('Manager@123', 10);
  const manager = await prisma.user.upsert({
    where: { email: 'manager@enterprise.com' },
    update: {},
    create: {
      email: 'manager@enterprise.com',
      name: 'Manager',
      password: managerPassword,
    },
  });

  const staffPassword = await bcrypt.hash('Staff@123', 10);
  const staff = await prisma.user.upsert({
    where: { email: 'staff@enterprise.com' },
    update: {},
    create: {
      email: 'staff@enterprise.com',
      name: 'Staff',
      password: staffPassword,
    },
  });

  // ── Assign roles ─────────────────────────────────────────
  await prisma.userRole.upsert({
    where: { userId_roleId: { userId: admin.id, roleId: adminRole.id } },
    update: {},
    create: { userId: admin.id, roleId: adminRole.id },
  });

  await prisma.userRole.upsert({
    where: { userId_roleId: { userId: manager.id, roleId: managerRole.id } },
    update: {},
    create: { userId: manager.id, roleId: managerRole.id },
  });

  await prisma.userRole.upsert({
    where: { userId_roleId: { userId: staff.id, roleId: staffRole.id } },
    update: {},
    create: { userId: staff.id, roleId: staffRole.id },
  });

  // ── Sports & Clubs ──────────────────────────────────────
  const captainPwd = await bcrypt.hash('Captain@123', 10);

  const footballCaptain = await prisma.user.upsert({
    where: { email: 'vung.bui@enterprise.com' },
    update: { name: 'Bùi Thanh Vững' },
    create: { email: 'vung.bui@enterprise.com', name: 'Bùi Thanh Vững', password: captainPwd },
  });

  const badmintonCaptain = await prisma.user.upsert({
    where: { email: 'tan.nguyen@enterprise.com' },
    update: { name: 'Nguyễn Trọng Tấn' },
    create: { email: 'tan.nguyen@enterprise.com', name: 'Nguyễn Trọng Tấn', password: captainPwd },
  });

  const pickleballCaptain = await prisma.user.upsert({
    where: { email: 'uyen.pham@enterprise.com' },
    update: { name: 'Phạm Phương Uyên' },
    create: { email: 'uyen.pham@enterprise.com', name: 'Phạm Phương Uyên', password: captainPwd },
  });

  const footballClub = await prisma.club.upsert({
    where: { id: 'club-football-001' },
    update: {},
    create: {
      id: 'club-football-001',
      name: 'Saigon FC',
      sport: 'Football',
      description: 'CLB bóng đá Saigon FC',
      status: 'active',
      foundedAt: new Date('2024-02-10'),
      createdById: admin.id,
    },
  });

  const badmintonClub = await prisma.club.upsert({
    where: { id: 'club-badminton-001' },
    update: {},
    create: {
      id: 'club-badminton-001',
      name: 'HCM Badminton Club',
      sport: 'Badminton',
      description: 'CLB cầu lông HCM',
      status: 'active',
      foundedAt: new Date('2024-05-15'),
      createdById: admin.id,
    },
  });

  const pickleballClub = await prisma.club.upsert({
    where: { id: 'club-pickleball-001' },
    update: {},
    create: {
      id: 'club-pickleball-001',
      name: 'Pickleball Masters',
      sport: 'Pickleball',
      description: 'CLB pickleball',
      status: 'active',
      foundedAt: new Date('2024-08-20'),
      createdById: admin.id,
    },
  });

  // Reset members cho 3 CLB rồi rebuild sạch
  await prisma.clubMember.deleteMany({
    where: { clubId: { in: [footballClub.id, badmintonClub.id, pickleballClub.id] } },
  });

  await prisma.clubMember.createMany({
    data: [
      { clubId: footballClub.id, userId: footballCaptain.id, role: 'captain', status: 'active' },
      { clubId: footballClub.id, userId: manager.id, role: 'member', status: 'active' },
      { clubId: badmintonClub.id, userId: badmintonCaptain.id, role: 'captain', status: 'active' },
      { clubId: badmintonClub.id, userId: staff.id, role: 'member', status: 'active' },
      {
        clubId: pickleballClub.id,
        userId: pickleballCaptain.id,
        role: 'captain',
        status: 'active',
      },
      { clubId: pickleballClub.id, userId: admin.id, role: 'member', status: 'active' },
    ],
  });

  // Funds
  await prisma.clubFund.upsert({
    where: { clubId: footballClub.id },
    update: {},
    create: { clubId: footballClub.id, name: 'Quỹ Saigon FC', initialBalance: 5200 },
  });
  await prisma.clubFund.upsert({
    where: { clubId: badmintonClub.id },
    update: {},
    create: { clubId: badmintonClub.id, name: 'Quỹ HCM Badminton', initialBalance: 0 },
  });
  await prisma.clubFund.upsert({
    where: { clubId: pickleballClub.id },
    update: {},
    create: { clubId: pickleballClub.id, name: 'Quỹ Pickleball Masters', initialBalance: 3400 },
  });

  console.log('✅ Seed completed');
  console.log('   admin@enterprise.com   / Admin@123');
  console.log('   manager@enterprise.com / Manager@123');
  console.log('   staff@enterprise.com   / Staff@123');
  console.log('   3 clubs seeded: Football, Badminton, Pickleball');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
