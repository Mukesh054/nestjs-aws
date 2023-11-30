-- CreateTable
CREATE TABLE "Product" (
    "id" UUID NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
