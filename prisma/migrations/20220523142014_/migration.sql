/*
  Warnings:

  - You are about to drop the column `authorId` on the `comment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `comment_authorId_fkey`;

-- AlterTable
ALTER TABLE `comment` DROP COLUMN `authorId`,
    ADD COLUMN `articleId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `comment` ADD CONSTRAINT `comment_articleId_fkey` FOREIGN KEY (`articleId`) REFERENCES `blog`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
