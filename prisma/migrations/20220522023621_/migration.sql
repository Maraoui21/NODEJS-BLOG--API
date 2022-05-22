/*
  Warnings:

  - A unique constraint covering the columns `[image]` on the table `blog` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `image` to the `blog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `blog` ADD COLUMN `image` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `blog_image_key` ON `blog`(`image`);
