-- CreateTable
CREATE TABLE "Cart" (
    "idCart" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idProductFk" INTEGER NOT NULL,
    "idUserFK" INTEGER NOT NULL DEFAULT 1
);