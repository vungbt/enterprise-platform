import { Injectable, NotFoundException } from '@nestjs/common';
import { SportsClubsRepository } from '../repositories/sports-clubs.repository';
import { CreateClubInput } from '../dto/create-club.input';
import { UpdateClubInput } from '../dto/update-club.input';
import { AddClubMemberInput } from '../dto/add-club-member.input';
import { PaginationInput } from '../../../shared/graphql/pagination.types';

@Injectable()
export class SportsClubsService {
  constructor(private readonly sportsClubsRepository: SportsClubsRepository) {}

  getClubs(pagination?: PaginationInput) {
    const page = Math.max(pagination?.page ?? 1, 1);
    const limit = Math.min(Math.max(pagination?.limit ?? 20, 1), 100);
    return this.sportsClubsRepository.findAll({ page, limit });
  }

  async getClubById(id: string) {
    const club = await this.sportsClubsRepository.findByIdWithMembers(id);
    if (!club) {
      throw new NotFoundException(`Club with id "${id}" not found`);
    }
    return club;
  }

  createClub(input: CreateClubInput) {
    return this.sportsClubsRepository.create(input);
  }

  async updateClub(id: string, input: UpdateClubInput) {
    const club = await this.sportsClubsRepository.findById(id);
    if (!club) {
      throw new NotFoundException(`Club with id "${id}" not found`);
    }
    return this.sportsClubsRepository.update(id, input);
  }

  async deleteClub(id: string) {
    const club = await this.sportsClubsRepository.findById(id);
    if (!club) {
      throw new NotFoundException(`Club with id "${id}" not found`);
    }
    await this.sportsClubsRepository.delete(id);
    return true;
  }

  addClubMember(input: AddClubMemberInput) {
    return this.sportsClubsRepository.addMember(input);
  }

  async removeClubMember(clubId: string, userId: string) {
    await this.sportsClubsRepository.removeMember(clubId, userId);
    return true;
  }

  getMembersByClubId(clubId: string) {
    return this.sportsClubsRepository.findMembersByClubId(clubId);
  }

  getExpensesByClubId(clubId: string) {
    return this.sportsClubsRepository.findExpensesByClubId(clubId);
  }

  getUserById(userId: string) {
    return this.sportsClubsRepository.findUserById(userId);
  }

  getClubById2(clubId: string) {
    return this.sportsClubsRepository.findClubById(clubId);
  }
}
