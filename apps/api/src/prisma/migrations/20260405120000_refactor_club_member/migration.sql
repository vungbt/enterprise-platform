-- DropForeignKey (fund_contributions.memberId -> users)
ALTER TABLE "fund_contributions" DROP CONSTRAINT "fund_contributions_memberId_fkey";

-- DropForeignKey (club_members old FKs)
ALTER TABLE "club_members" DROP CONSTRAINT "club_members_clubId_fkey";
ALTER TABLE "club_members" DROP CONSTRAINT "club_members_userId_fkey";

-- Drop old primary key
ALTER TABLE "club_members" DROP CONSTRAINT "club_members_pkey";

-- Drop columns no longer needed
ALTER TABLE "club_members" DROP COLUMN "role";
ALTER TABLE "club_members" DROP COLUMN "joinedAt";

-- Add new columns
ALTER TABLE "club_members" ADD COLUMN "id" TEXT NOT NULL DEFAULT gen_random_uuid();
ALTER TABLE "club_members" ADD COLUMN "displayName" TEXT NOT NULL DEFAULT '';
ALTER TABLE "club_members" ADD COLUMN "email" TEXT;
ALTER TABLE "club_members" ADD COLUMN "phone" TEXT;
ALTER TABLE "club_members" ADD COLUMN "note" TEXT;
ALTER TABLE "club_members" ADD COLUMN "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE "club_members" ADD COLUMN "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- Make userId nullable
ALTER TABLE "club_members" ALTER COLUMN "userId" DROP NOT NULL;

-- Set new primary key
ALTER TABLE "club_members" ADD CONSTRAINT "club_members_pkey" PRIMARY KEY ("id");

-- Add unique constraint and index
CREATE UNIQUE INDEX "club_members_clubId_userId_key" ON "club_members"("clubId", "userId");
CREATE INDEX "club_members_clubId_idx" ON "club_members"("clubId");

-- Re-add FKs for club_members (userId now SET NULL on delete)
ALTER TABLE "club_members" ADD CONSTRAINT "club_members_clubId_fkey" FOREIGN KEY ("clubId") REFERENCES "clubs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "club_members" ADD CONSTRAINT "club_members_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Rename memberId -> clubMemberId in fund_contributions
ALTER TABLE "fund_contributions" RENAME COLUMN "memberId" TO "clubMemberId";

-- Update unique index on fund_contributions
DROP INDEX "fund_contributions_fundId_memberId_month_year_key";
CREATE UNIQUE INDEX "fund_contributions_fundId_clubMemberId_month_year_key" ON "fund_contributions"("fundId", "clubMemberId", "month", "year");

-- Add FK: fund_contributions.clubMemberId -> club_members(id)
ALTER TABLE "fund_contributions" ADD CONSTRAINT "fund_contributions_clubMemberId_fkey" FOREIGN KEY ("clubMemberId") REFERENCES "club_members"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Drop unused enum
DROP TYPE "ClubMemberRole";
