/*
  Warnings:

  - The values [guest,client] on the enum `RoleTypes` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "RoleTypes_new" AS ENUM ('admin', 'user');
ALTER TABLE "roles" ALTER COLUMN "type" TYPE "RoleTypes_new" USING ("type"::text::"RoleTypes_new");
ALTER TYPE "RoleTypes" RENAME TO "RoleTypes_old";
ALTER TYPE "RoleTypes_new" RENAME TO "RoleTypes";
DROP TYPE "RoleTypes_old";
COMMIT;
