import { UseGuards } from '@nestjs/common';
import { Args, Mutation, ObjectType, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from '../../shared/auth/jwt-auth.guard';
import { UserEntity } from '../../shared/entities/user.entity';
import { Paginated, PaginationInput } from '../../shared/graphql/pagination.types';
import { CaslAbilityGuard } from '../../shared/permissions/casl-ability.guard';
import { CheckAbility } from '../../shared/permissions/check-ability.decorator';
import { ExpenseEntity } from '../expense/entities/expense.entity';
import { AddClubMemberInput } from './dto/add-club-member.input';
import { CreateClubInput } from './dto/create-club.input';
import { UpdateClubInput } from './dto/update-club.input';
import { ClubEntity } from './entities/club.entity';
import { ClubMemberEntity } from './entities/club-member.entity';
import { SportsClubsService } from './services/sports-clubs.service';

@ObjectType()
export class PaginatedClub extends Paginated(ClubEntity) {}

@Resolver(() => ClubEntity)
@UseGuards(JwtAuthGuard, CaslAbilityGuard)
export class SportsClubsResolver {
  constructor(private readonly sportsClubsService: SportsClubsService) {}

  @Query(() => PaginatedClub, { name: 'clubs' })
  @CheckAbility({ action: 'read', subject: 'Club' })
  clubs(@Args('pagination', { nullable: true }) pagination?: PaginationInput) {
    return this.sportsClubsService.getClubs(pagination);
  }

  @Query(() => ClubEntity, { name: 'club' })
  @CheckAbility({ action: 'read', subject: 'Club' })
  club(@Args('id') id: string) {
    return this.sportsClubsService.getClubById(id);
  }

  @Mutation(() => ClubEntity)
  @CheckAbility({ action: 'create', subject: 'Club' })
  createClub(@Args('input') input: CreateClubInput) {
    return this.sportsClubsService.createClub(input);
  }

  @Mutation(() => ClubEntity)
  @CheckAbility({ action: 'update', subject: 'Club' })
  updateClub(@Args('id') id: string, @Args('input') input: UpdateClubInput) {
    return this.sportsClubsService.updateClub(id, input);
  }

  @Mutation(() => Boolean)
  @CheckAbility({ action: 'delete', subject: 'Club' })
  deleteClub(@Args('id') id: string) {
    return this.sportsClubsService.deleteClub(id);
  }

  @Mutation(() => ClubMemberEntity)
  @CheckAbility({ action: 'create', subject: 'ClubMember' })
  addClubMember(@Args('input') input: AddClubMemberInput) {
    return this.sportsClubsService.addClubMember(input);
  }

  @Mutation(() => Boolean)
  @CheckAbility({ action: 'delete', subject: 'ClubMember' })
  removeClubMember(@Args('clubId') clubId: string, @Args('userId') userId: string) {
    return this.sportsClubsService.removeClubMember(clubId, userId);
  }

  @ResolveField(() => [ClubMemberEntity])
  members(@Parent() club: ClubEntity) {
    return this.sportsClubsService.getMembersByClubId(club.id);
  }

  @ResolveField(() => [ExpenseEntity])
  expenses(@Parent() club: ClubEntity) {
    return this.sportsClubsService.getExpensesByClubId(club.id);
  }
}

@Resolver(() => ClubMemberEntity)
@UseGuards(JwtAuthGuard, CaslAbilityGuard)
export class ClubMemberResolver {
  constructor(private readonly sportsClubsService: SportsClubsService) {}

  @ResolveField(() => UserEntity)
  user(@Parent() member: ClubMemberEntity) {
    return this.sportsClubsService.getUserById(member.userId);
  }

  @ResolveField(() => ClubEntity)
  club(@Parent() member: ClubMemberEntity) {
    return this.sportsClubsService.getClubById2(member.clubId);
  }
}
