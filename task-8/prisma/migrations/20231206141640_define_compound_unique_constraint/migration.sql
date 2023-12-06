/*
  Warnings:

  - A unique constraint covering the columns `[author_id,title]` on the table `posts` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "posts_title_key";

-- CreateIndex
CREATE UNIQUE INDEX "posts_author_id_title_key" ON "posts"("author_id", "title");
