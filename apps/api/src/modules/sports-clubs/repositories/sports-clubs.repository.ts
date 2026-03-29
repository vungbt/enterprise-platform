import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/database/prisma.service';
import type { AddClubMemberInput } from '../dto/add-club-member.input';
import type { CreateClubInput } from '../dto/create-club.input';
import type { UpdateClubInput } from '../dto/update-club.input';

@Injectable()
export class SportsClubsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(pagination: { page: number; limit: number }) {
    const skip = (pagination.page - 1) * pagination.limit;
    const take = pagination.limit;

    const [items, total] = await Promise.all([
      this.prisma.club.findMany({
        orderBy: { name: 'asc' },
        skip,
        take,
      }),
      this.prisma.club.count(),
    ]);

    return {
      items,
      total,
      page: pagination.page,
      limit: pagination.limit,
      totalPages: Math.ceil(total / pagination.limit),
    };
  }

  findById(id: string) {
    return this.prisma.club.findUnique({
      where: { id },
    });
  }

  findByIdWithMembers(id: string) {
    return this.prisma.club.findUnique({
      where: { id },
      include: { members: true },
    });
  }

  create(data: CreateClubInput) {
    return this.prisma.club.create({ data });
  }

  update(id: string, data: UpdateClubInput) {
    return this.prisma.club.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return this.prisma.club.delete({
      where: { id },
    });
  }

  addMember(data: AddClubMemberInput) {
    return this.prisma.clubMember.create({ data });
  }

  removeMember(clubId: string, userId: string) {
    return this.prisma.clubMember.delete({
      where: { clubId_userId: { clubId, userId } },
    });
  }

  findMembersByClubId(clubId: string) {
    return this.prisma.clubMember.findMany({
      where: { clubId },
    });
  }

  findExpensesByClubId(clubId: string) {
    return this.prisma.expense.findMany({
      where: { clubId },
    });
  }

  findUserById(userId: string) {
    return this.prisma.user.findUnique({
      where: { id: userId },
    });
  }

  findClubById(clubId: string) {
    return this.prisma.club.findUnique({
      where: { id: clubId },
    });
  }
}
