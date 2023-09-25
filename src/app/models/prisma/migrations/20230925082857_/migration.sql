-- CreateTable
CREATE TABLE "UserAuth" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserAuth_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Albums" (
    "id" TEXT NOT NULL,
    "contentid" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "poster_image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "running_time" TEXT NOT NULL,
    "release_year" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Albums_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlbumProduction" (
    "id" TEXT NOT NULL,
    "production_name" TEXT NOT NULL,
    "contentid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AlbumProduction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlbumCast" (
    "id" TEXT NOT NULL,
    "castname" TEXT NOT NULL,
    "contentid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AlbumCast_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlbumPlatform" (
    "id" TEXT NOT NULL,
    "platformname" TEXT NOT NULL,
    "contentid" TEXT NOT NULL,
    "platformposterimage" TEXT NOT NULL,
    "albumlink" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AlbumPlatform_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlbumDirector" (
    "id" TEXT NOT NULL,
    "directorname" TEXT NOT NULL,
    "contentid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AlbumDirector_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlbumAuthor" (
    "id" TEXT NOT NULL,
    "authorname" TEXT NOT NULL,
    "contentid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AlbumAuthor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlbumCountry" (
    "id" TEXT NOT NULL,
    "albumcountry" TEXT NOT NULL,
    "contentid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AlbumCountry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlbumGenre" (
    "id" TEXT NOT NULL,
    "albumgenre" TEXT NOT NULL,
    "contentid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AlbumGenre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlbumLanguage" (
    "id" TEXT NOT NULL,
    "albumlanguage" TEXT NOT NULL,
    "contentid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AlbumLanguage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserAuth_email_key" ON "UserAuth"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Albums_contentid_key" ON "Albums"("contentid");

-- AddForeignKey
ALTER TABLE "AlbumProduction" ADD CONSTRAINT "AlbumProduction_contentid_fkey" FOREIGN KEY ("contentid") REFERENCES "Albums"("contentid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlbumCast" ADD CONSTRAINT "AlbumCast_contentid_fkey" FOREIGN KEY ("contentid") REFERENCES "Albums"("contentid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlbumPlatform" ADD CONSTRAINT "AlbumPlatform_contentid_fkey" FOREIGN KEY ("contentid") REFERENCES "Albums"("contentid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlbumDirector" ADD CONSTRAINT "AlbumDirector_contentid_fkey" FOREIGN KEY ("contentid") REFERENCES "Albums"("contentid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlbumAuthor" ADD CONSTRAINT "AlbumAuthor_contentid_fkey" FOREIGN KEY ("contentid") REFERENCES "Albums"("contentid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlbumCountry" ADD CONSTRAINT "AlbumCountry_contentid_fkey" FOREIGN KEY ("contentid") REFERENCES "Albums"("contentid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlbumGenre" ADD CONSTRAINT "AlbumGenre_contentid_fkey" FOREIGN KEY ("contentid") REFERENCES "Albums"("contentid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlbumLanguage" ADD CONSTRAINT "AlbumLanguage_contentid_fkey" FOREIGN KEY ("contentid") REFERENCES "Albums"("contentid") ON DELETE RESTRICT ON UPDATE CASCADE;
