import type { PrismaClient, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

export async function seedClubs(
  prisma: PrismaClient,
  users: { admin: User; manager: User; staff: User },
) {
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

  // ── Clubs ────────────────────────────────────────────────
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
      createdById: users.admin.id,
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
      createdById: users.admin.id,
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
      createdById: users.admin.id,
    },
  });

  // ── Members ──────────────────────────────────────────────
  await prisma.clubMember.deleteMany({
    where: { clubId: { in: [footballClub.id, badmintonClub.id, pickleballClub.id] } },
  });

  await prisma.clubMember.createMany({
    data: [
      {
        clubId: footballClub.id,
        userId: footballCaptain.id,
        displayName: 'Bùi Thanh Vững',
        status: 'active',
      },
      {
        clubId: footballClub.id,
        userId: users.manager.id,
        displayName: 'Manager',
        status: 'active',
      },
      {
        clubId: badmintonClub.id,
        userId: badmintonCaptain.id,
        displayName: 'Nguyễn Trọng Tấn',
        status: 'active',
      },
      { clubId: badmintonClub.id, userId: users.staff.id, displayName: 'Staff', status: 'active' },
      {
        clubId: pickleballClub.id,
        userId: pickleballCaptain.id,
        displayName: 'Phạm Phương Uyên',
        status: 'active',
      },
      { clubId: pickleballClub.id, userId: users.admin.id, displayName: 'Admin', status: 'active' },
      // Members without user accounts
      {
        clubId: footballClub.id,
        displayName: 'Nguyễn Văn A',
        email: 'nguyenvana@gmail.com',
        phone: '0901234567',
        status: 'active',
      },
      {
        clubId: badmintonClub.id,
        displayName: 'Trần Thị B',
        phone: '0912345678',
        status: 'active',
      },
    ],
  });

  // ── Funds ────────────────────────────────────────────────
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

  console.log('  ✅ Clubs seeded (3 clubs + members + funds)');
}
