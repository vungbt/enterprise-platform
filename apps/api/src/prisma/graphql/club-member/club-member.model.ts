import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ClubMemberRole } from '../prisma/club-member-role.enum';
import { ClubMemberStatus } from '../prisma/club-member-status.enum';
import { Club } from '../club/club.model';
import { User } from '../user/user.model';

@ObjectType()
export class ClubMember {

    @Field(() => String, {nullable:false})
    clubId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => ClubMemberRole, {defaultValue:'member',nullable:false})
    role!: `${ClubMemberRole}`;

    @Field(() => ClubMemberStatus, {defaultValue:'active',nullable:false})
    status!: `${ClubMemberStatus}`;

    @Field(() => Date, {nullable:false})
    joinedAt!: Date;

    @Field(() => Date, {nullable:true})
    leftAt!: Date | null;

    @Field(() => Club, {nullable:false})
    club?: Club;

    @Field(() => User, {nullable:false})
    user?: User;
}
