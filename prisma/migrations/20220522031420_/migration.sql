/*
  Warnings:

  - You are about to drop the column `image` on the `blog` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[imgUrl]` on the table `blog` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `imgUrl` to the `blog` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `blog_image_key` ON `blog`;

-- AlterTable
ALTER TABLE `blog` DROP COLUMN `image`,
    ADD COLUMN `imgUrl` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `blog_imgUrl_key` ON `blog`(`imgUrl`);
