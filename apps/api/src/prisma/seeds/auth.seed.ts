import type { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

export async function seedAuth(prisma: PrismaClient) {
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
    create: { email: 'admin@enterprise.com', name: 'Admin', password: adminPassword },
  });

  const managerPassword = await bcrypt.hash('Manager@123', 10);
  const manager = await prisma.user.upsert({
    where: { email: 'manager@enterprise.com' },
    update: {},
    create: { email: 'manager@enterprise.com', name: 'Manager', password: managerPassword },
  });

  const staffPassword = await bcrypt.hash('Staff@123', 10);
  const staff = await prisma.user.upsert({
    where: { email: 'staff@enterprise.com' },
    update: {},
    create: { email: 'staff@enterprise.com', name: 'Staff', password: staffPassword },
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

  console.log('  ✅ Auth seeded (roles + users)');
  return { admin, manager, staff };
}
