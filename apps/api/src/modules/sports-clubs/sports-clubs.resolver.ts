import { CurrentUser } from '@api/shared/auth/current-user.decorator';
import { JwtAuthGuard } from '@api/shared/auth/jwt-auth.guard';
import type { DataLoaders } from '@api/shared/dataloader/dataloader.service';
import { PaginatedClub } from '@api/shared/graphql/graphql-pagination';
import { PaginationInput } from '@api/shared/graphql/pagination.types';
import { CaslAbilityGuard } from '@api/shared/permissions/casl-ability.guard';
import { CheckAbility } from '@api/shared/permissions/check-ability.decorator';
import { UseGuards } from '@nestjs/common';
import {
  Args,
  Context,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { SportsClubsService } from './sports-clubs.service';
import {
  AddClubMemberInput,
  Club,
  ClubMember,
  ClubUncheckedCreateInput,
  ClubUncheckedUpdateInput,
  Expense,
  User,
} from './sports-clubs.types';

@Resolver(() => Club)
@UseGuards(JwtAuthGuard, CaslAbilityGuard)
export class SportsClubsResolver {
  constructor(private readonly sportsClubsService: SportsClubsService) {}

  @Query(() => PaginatedClub, { name: 'clubs' })
  @CheckAbility({ action: 'read', subject: 'Club' })
  clubs(@Args('pagination', { nullable: true }) pagination?: PaginationInput) {
    return this.sportsClubsService.getClubs(pagination);
  }

  @Query(() => Club, { name: 'club' })
  @CheckAbility({ action: 'read', subject: 'Club' })
  club(@Args('id') id: string) {
    return this.sportsClubsService.getClubById(id);
  }

  @Query(() => [User], { name: 'candidateUsers' })
  candidateUsers() {
    return this.sportsClubsService.getCandidateUsers();
  }

  @Mutation(() => Club)
  @CheckAbility({ action: 'create', subject: 'Club' })
  createClub(@Args('input') input: ClubUncheckedCreateInput, @CurrentUser() user: { id: string }) {
    return this.sportsClubsService.createClub(input, user.id);
  }

  @Mutation(() => Club)
  @CheckAbility({ action: 'update', subject: 'Club' })
  updateClub(@Args('id') id: string, @Args('input') input: ClubUncheckedUpdateInput) {
    return this.sportsClubsService.updateClub(id, input);
  }

  @Mutation(() => Boolean)
  @CheckAbility({ action: 'delete', subject: 'Club' })
  deleteClub(@Args('id') id: string) {
    return this.sportsClubsService.deleteClub(id);
  }

  @Mutation(() => ClubMember)
  @CheckAbility({ action: 'create', subject: 'ClubMember' })
  addClubMember(@Args('input') input: AddClubMemberInput) {
    return this.sportsClubsService.addClubMember(input);
  }

  @Mutation(() => Boolean)
  @CheckAbility({ action: 'delete', subject: 'ClubMember' })
  removeClubMember(@Args('memberId') memberId: string) {
    return this.sportsClubsService.removeClubMember(memberId);
  }

  @ResolveField(() => [ClubMember])
  members(@Parent() club: Club, @Context('loaders') loaders: DataLoaders) {
    return loaders.membersByClubId.load(club.id);
  }

  @ResolveField(() => [Expense])
  expenses(@Parent() club: Club, @Context('loaders') loaders: DataLoaders) {
    return loaders.expensesByClubId.load(club.id);
  }

  @ResolveField(() => Int)
  membersCount(@Parent() club: Club) {
    return this.sportsClubsService.getMembersCount(club.id);
  }

  @ResolveField(() => String, { nullable: true })
  captainName(@Parent() club: Club) {
    return this.sportsClubsService.getCaptainName(club.id);
  }

  @ResolveField(() => Int)
  fundBalance(@Parent() club: Club) {
    return this.sportsClubsService.getFundBalance(club.id);
  }
}

@Resolver(() => ClubMember)
@UseGuards(JwtAuthGuard, CaslAbilityGuard)
export class ClubMemberResolver {
  @ResolveField(() => User)
  user(@Parent() member: ClubMember, @Context('loaders') loaders: DataLoaders) {
    return loaders.user.load(member.userId);
  }

  @ResolveField(() => Club)
  club(@Parent() member: ClubMember, @Context('loaders') loaders: DataLoaders) {
    return loaders.club.load(member.clubId);
  }
}
