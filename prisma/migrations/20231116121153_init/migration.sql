/*
  Warnings:

  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Product";

-- CreateTable
CREATE TABLE "Products" (
    "id" UUID NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);
