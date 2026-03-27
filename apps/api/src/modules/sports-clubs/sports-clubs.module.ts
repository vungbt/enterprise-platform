import { Module } from '@nestjs/common';
import { SportsClubsRepository } from './repositories/sports-clubs.repository';
import { SportsClubsService } from './services/sports-clubs.service';
import {
  SportsClubsResolver,
  ClubMemberResolver,
} from './sports-clubs.resolver';

@Module({
  providers: [
    SportsClubsRepository,
    SportsClubsService,
    SportsClubsResolver,
    ClubMemberResolver,
  ],
})
export class SportsClubsModule {}
