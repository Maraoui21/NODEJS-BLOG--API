/*
  Warnings:

  - You are about to drop the `image` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `image` to the `blog` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `image` DROP FOREIGN KEY `Image_blogId_fkey`;

-- AlterTable
ALTER TABLE `blog` ADD COLUMN `image` JSON NOT NULL;

-- DropTable
DROP TABLE `image`;
