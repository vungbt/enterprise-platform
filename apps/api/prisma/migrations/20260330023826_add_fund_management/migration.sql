/*
  Warnings:

  - Added the required column `createdById` to the `clubs` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ClubMemberStatus" AS ENUM ('active', 'left', 'banned');

-- CreateEnum
CREATE TYPE "FundTransactionType" AS ENUM ('contribution', 'expense', 'adjustment', 'refund');

-- CreateEnum
CREATE TYPE "FundFlow" AS ENUM ('inflow', 'outflow');

-- CreateEnum
CREATE TYPE "FundContributionStatus" AS ENUM ('pending', 'confirmed', 'cancelled');

-- AlterTable
ALTER TABLE "club_members" ADD COLUMN     "leftAt" TIMESTAMP(3),
ADD COLUMN     "status" "ClubMemberStatus" NOT NULL DEFAULT 'active';

-- AlterTable
ALTER TABLE "clubs" ADD COLUMN     "createdById" TEXT NOT NULL,
ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "expenses" ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "fundId" TEXT;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "club_funds" (
    "id" TEXT NOT NULL,
    "clubId" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Quy cau lac bo',
    "initialBalance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "club_funds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fund_transactions" (
    "id" TEXT NOT NULL,
    "fundId" TEXT NOT NULL,
    "type" "FundTransactionType" NOT NULL,
    "flow" "FundFlow" NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "balanceAfter" DOUBLE PRECISION NOT NULL,
    "note" TEXT,
    "refContribId" TEXT,
    "refExpenseId" TEXT,
    "refTransactionId" TEXT,
    "createdById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "fund_transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fund_contributions" (
    "id" TEXT NOT NULL,
    "fundId" TEXT NOT NULL,
    "memberId" TEXT NOT NULL,
    "month" INTEGER,
    "year" INTEGER,
    "amount" DOUBLE PRECISION NOT NULL,
    "note" TEXT,
    "paidAt" TIMESTAMP(3) NOT NULL,
    "status" "FundContributionStatus" NOT NULL DEFAULT 'pending',
    "confirmedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "fund_contributions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "club_funds_clubId_key" ON "club_funds"("clubId");

-- CreateIndex
CREATE INDEX "fund_transactions_fundId_createdAt_idx" ON "fund_transactions"("fundId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "fund_contributions_fundId_memberId_month_year_key" ON "fund_contributions"("fundId", "memberId", "month", "year");

-- CreateIndex
CREATE INDEX "expenses_clubId_fundId_idx" ON "expenses"("clubId", "fundId");

-- AddForeignKey
ALTER TABLE "clubs" ADD CONSTRAINT "clubs_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "club_funds" ADD CONSTRAINT "club_funds_clubId_fkey" FOREIGN KEY ("clubId") REFERENCES "clubs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fund_transactions" ADD CONSTRAINT "fund_transactions_fundId_fkey" FOREIGN KEY ("fundId") REFERENCES "club_funds"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fund_transactions" ADD CONSTRAINT "fund_transactions_refContribId_fkey" FOREIGN KEY ("refContribId") REFERENCES "fund_contributions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fund_transactions" ADD CONSTRAINT "fund_transactions_refExpenseId_fkey" FOREIGN KEY ("refExpenseId") REFERENCES "expenses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fund_transactions" ADD CONSTRAINT "fund_transactions_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fund_contributions" ADD CONSTRAINT "fund_contributions_fundId_fkey" FOREIGN KEY ("fundId") REFERENCES "club_funds"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fund_contributions" ADD CONSTRAINT "fund_contributions_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fund_contributions" ADD CONSTRAINT "fund_contributions_confirmedBy_fkey" FOREIGN KEY ("confirmedBy") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expenses" ADD CONSTRAINT "expenses_fundId_fkey" FOREIGN KEY ("fundId") REFERENCES "club_funds"("id") ON DELETE SET NULL ON UPDATE CASCADE;
