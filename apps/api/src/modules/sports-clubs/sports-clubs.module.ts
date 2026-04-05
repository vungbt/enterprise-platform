import { Module } from '@nestjs/common';
import { ClubMemberResolver, SportsClubsResolver } from './sports-clubs.resolver';
import { SportsClubsService } from './sports-clubs.service';

@Module({
  providers: [SportsClubsService, SportsClubsResolver, ClubMemberResolver],
})
export class SportsClubsModule {}
