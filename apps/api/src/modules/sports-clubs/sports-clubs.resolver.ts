import { UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '@api/shared/auth/current-user.decorator';
import { JwtAuthGuard } from '@api/shared/auth/jwt-auth.guard';
import { PaginatedClub } from '@api/shared/graphql/graphql-pagination';
import { PaginationInput } from '@api/shared/graphql/pagination.types';
import { CaslAbilityGuard } from '@api/shared/permissions/casl-ability.guard';
import { CheckAbility } from '@api/shared/permissions/check-ability.decorator';
import {
  Club,
  ClubMember,
  ClubMemberUncheckedCreateInput,
  ClubUncheckedCreateInput,
  ClubUncheckedUpdateInput,
  Expense,
  User,
} from './sports-clubs.types';
import { SportsClubsService } from './sports-clubs.service';

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
  createClub(
    @Args('input') input: ClubUncheckedCreateInput,
    @CurrentUser() user: { id: string },
  ) {
    return this.sportsClubsService.createClub(input, user.id);
  }

  @Mutation(() => Club)
  @CheckAbility({ action: 'update', subject: 'Club' })
  updateClub(
    @Args('id') id: string,
    @Args('input') input: ClubUncheckedUpdateInput,
  ) {
    return this.sportsClubsService.updateClub(id, input);
  }

  @Mutation(() => Boolean)
  @CheckAbility({ action: 'delete', subject: 'Club' })
  deleteClub(@Args('id') id: string) {
    return this.sportsClubsService.deleteClub(id);
  }

  @Mutation(() => ClubMember)
  @CheckAbility({ action: 'create', subject: 'ClubMember' })
  addClubMember(@Args('input') input: ClubMemberUncheckedCreateInput) {
    return this.sportsClubsService.addClubMember(input);
  }

  @Mutation(() => Boolean)
  @CheckAbility({ action: 'delete', subject: 'ClubMember' })
  removeClubMember(@Args('clubId') clubId: string, @Args('userId') userId: string) {
    return this.sportsClubsService.removeClubMember(clubId, userId);
  }

  @ResolveField(() => [ClubMember])
  members(@Parent() club: Club) {
    return this.sportsClubsService.getMembersByClubId(club.id);
  }

  @ResolveField(() => [Expense])
  expenses(@Parent() club: Club) {
    return this.sportsClubsService.getExpensesByClubId(club.id);
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
  constructor(private readonly sportsClubsService: SportsClubsService) {}

  @ResolveField(() => User)
  user(@Parent() member: ClubMember) {
    return this.sportsClubsService.getUserById(member.userId);
  }

  @ResolveField(() => Club)
  club(@Parent() member: ClubMember) {
    return this.sportsClubsService.getClubById2(member.clubId);
  }
}
