import { PrismaService } from '@api/shared/database/prisma.service';
import type { PaginationInput } from '@api/shared/graphql/pagination.types';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import type {
  AddClubMemberInput,
  ClubUncheckedCreateInput,
  ClubUncheckedUpdateInput,
} from './sports-clubs.types';

@Injectable()
export class SportsClubsService {
  constructor(private readonly prisma: PrismaService) {}

  async getClubs(pagination?: PaginationInput) {
    const page = Math.max(pagination?.page ?? 1, 1);
    const limit = Math.min(Math.max(pagination?.limit ?? 20, 1), 100);
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      this.prisma.club.findMany({
        orderBy: { name: 'asc' },
        skip,
        take: limit,
      }),
      this.prisma.club.count(),
    ]);

    return {
      items,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async getClubById(id: string) {
    const club = await this.prisma.club.findUnique({
      where: { id },
      include: { members: true },
    });
    if (!club) {
      throw new NotFoundException(`Club with id "${id}" not found`);
    }
    return club;
  }

  createClub(input: ClubUncheckedCreateInput, createdById: string) {
    const { members: _m, expenses: _e, fund: _f, createdById: _c, ...rest } = input;
    return this.prisma.club.create({
      data: { ...rest, createdById } as Prisma.ClubUncheckedCreateInput,
    });
  }

  async updateClub(id: string, input: ClubUncheckedUpdateInput) {
    await this.getClubById(id);
    return this.prisma.club.update({
      where: { id },
      data: input as Prisma.ClubUncheckedUpdateInput,
    });
  }

  async deleteClub(id: string) {
    await this.getClubById(id);
    await this.prisma.club.delete({ where: { id } });
    return true;
  }

  async addClubMember(input: AddClubMemberInput) {
    const userId = input.userId?.trim();
    if (!userId) {
      throw new BadRequestException('userId is required');
    }
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException(`User with id "${userId}" not found`);
    }
    const displayName = input.displayName?.trim() || user.name;
    return this.prisma.clubMember.create({
      data: {
        clubId: input.clubId,
        userId,
        displayName,
        email: input.email?.trim() || null,
        phone: input.phone?.trim() || null,
        note: input.note?.trim() || null,
        role: input.role ?? 'member',
        status: input.status ?? 'active',
      },
    });
  }

  async removeClubMember(memberId: string) {
    await this.prisma.clubMember.delete({ where: { id: memberId } });
    return true;
  }

  getMembersByClubId(clubId: string) {
    return this.prisma.clubMember.findMany({ where: { clubId } });
  }

  getMembersCount(clubId: string) {
    return this.prisma.clubMember.count({ where: { clubId } });
  }

  async getCaptainName(clubId: string): Promise<string | null> {
    const member = await this.prisma.clubMember.findFirst({
      where: { clubId, role: 'captain' },
      include: { user: { select: { name: true } } },
    });
    return member?.user?.name ?? null;
  }

  async getFundBalance(clubId: string): Promise<number> {
    const fund = await this.prisma.clubFund.findUnique({
      where: { clubId },
      include: {
        transactions: {
          orderBy: { createdAt: 'desc' },
          take: 1,
          select: { balanceAfter: true },
        },
      },
    });
    if (!fund) return 0;
    const latest = fund.transactions[0];
    return latest ? latest.balanceAfter : fund.initialBalance;
  }

  getExpensesByClubId(clubId: string) {
    return this.prisma.expense.findMany({ where: { clubId } });
  }

  getUserById(userId: string) {
    return this.prisma.user.findUnique({ where: { id: userId } });
  }

  getCandidateUsers() {
    return this.prisma.user.findMany({
      where: { isActive: true, deletedAt: null },
      orderBy: { createdAt: 'desc' },
      take: 100,
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  getClubById2(clubId: string) {
    return this.prisma.club.findUnique({ where: { id: clubId } });
  }
}
