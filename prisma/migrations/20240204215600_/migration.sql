/*
  Warnings:

  - Made the column `themeStepId` on table `Answer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `themeId` on table `ThemeStep` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Answer` DROP FOREIGN KEY `Answer_themeStepId_fkey`;

-- DropForeignKey
ALTER TABLE `ThemeStep` DROP FOREIGN KEY `ThemeStep_themeId_fkey`;

-- AlterTable
ALTER TABLE `Answer` MODIFY `themeStepId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `ThemeStep` MODIFY `themeId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `ThemeStep` ADD CONSTRAINT `ThemeStep_themeId_fkey` FOREIGN KEY (`themeId`) REFERENCES `Theme`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Answer` ADD CONSTRAINT `Answer_themeStepId_fkey` FOREIGN KEY (`themeStepId`) REFERENCES `ThemeStep`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
