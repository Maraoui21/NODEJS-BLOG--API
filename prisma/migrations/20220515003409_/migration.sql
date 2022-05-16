-- CreateTable
CREATE TABLE `Image` (
    `id` VARCHAR(191) NOT NULL,
    `publicId` VARCHAR(191) NOT NULL,
    `format` VARCHAR(191) NOT NULL,
    `version` VARCHAR(191) NOT NULL,
    `blogId` INTEGER NOT NULL,

    UNIQUE INDEX `Image_publicId_key`(`publicId`),
    UNIQUE INDEX `Image_blogId_key`(`blogId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_blogId_fkey` FOREIGN KEY (`blogId`) REFERENCES `blog`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
