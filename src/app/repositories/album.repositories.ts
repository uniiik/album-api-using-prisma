import { PrismaClient } from "@prisma/client";
import AlbumList from "../controllers/albumInterface";
import { platform } from "os";
const prisma = new PrismaClient();
export default class albumRepositories {
  public deleteAlbum = async (contentid: string) => {
    await prisma.albumProduction.deleteMany({
      where: {
        contentid: contentid,
      },
    });

    await prisma.albumCast.deleteMany({
      where: {
        contentid: contentid,
      },
    });

    await prisma.albumLanguage.deleteMany({
      where: {
        contentid: contentid,
      },
    });

    await prisma.albumPlatform.deleteMany({
      where: {
        contentid: contentid,
      },
    });

    await prisma.albumDirector.deleteMany({
      where: {
        contentid: contentid,
      },
    });

    await prisma.albumAuthor.deleteMany({
      where: {
        contentid: contentid,
      },
    });

    await prisma.albumGenre.deleteMany({
      where: {
        contentid: contentid,
      },
    });

    await prisma.albumCountry.deleteMany({
      where: {
        contentid: contentid,
      },
    });

    // Delete the main album record
    await prisma.albums.delete({
      where: {
        contentid: contentid,
      },
    });
  };
  public updateAlbum = async (contentid: string, album_data: AlbumList) => {
    const updatedalbum = await prisma.albums.update({
      where: { contentid },
      data: {
        title: album_data.title,
        poster_image: album_data.poster_image,
        description: album_data.description,
        running_time: album_data.running_time,
        release_year: album_data.release_year,
        tags: album_data.tags,
      },
    });
    await prisma.albumProduction.updateMany({
      where: { contentid },
      data: { production_name: album_data.albumProduction },
    });
    await prisma.albumCast.updateMany({
      where: { contentid },
      data: { castname: album_data.albumCast },
    });

    await prisma.albumLanguage.updateMany({
      where: { contentid },
      data: { albumlanguage: album_data.albumLanguage },
    });

    await prisma.albumPlatform.updateMany({
      where: { contentid },
      data: {
        platformname: album_data.albumPlatform,
        platformposterimage: album_data.platformposterimage,
        albumlink: album_data.albumlink,
      },
    });

    await prisma.albumDirector.updateMany({
      where: { contentid },
      data: { directorname: album_data.albumDirector },
    });

    await prisma.albumAuthor.updateMany({
      where: { contentid },
      data: { authorname: album_data.albumAuthor },
    });

    await prisma.albumGenre.updateMany({
      where: { contentid },
      data: { albumgenre: album_data.albumGenre },
    });

    await prisma.albumCountry.updateMany({
      where: { contentid },
      data: { albumcountry: album_data.albumCountry },
    });
    return updatedalbum;
  };
  public findAllAlbums = async () => {
    const allalbums = await prisma.albums.findMany({
      include: {
        albumProduction: true,
        albumCast: true,
        albumLanguage: true,
        albumPlatform: true,
        albumDirector: true,
        albumAuthor: true,
        albumGenre: true,
        albumCountry: true,
      },
    });

    return allalbums;
  };
  /*new repository code */
  public albumByPlatfrom = async (id: string) => {
    const allalbums = await prisma.albums.findMany({
      where: {
        albumPlatform: {
          some: { platformname: id },
        },
      },
    });
    const titles = allalbums.map((album) => album.title);
    return titles;
  };

  public castbyalbumid = async (albumid: string) => {
    const allalbums = await prisma.albumCast.findMany({
      where: {
        contentid: albumid,
      },
    });
    const castList = allalbums.map((album) => album.castname);

    return castList;
  };

  public albumbylanguage = async (language: string) => {
    const albumsWithLanguage = await prisma.albums.findMany({
      where: {
        albumLanguage: {
          some: {
            albumlanguage: {
              contains: language, // Check if the language is contained within the comma-separated list
            },
          },
        },
      },
      select: {
        title: true, // Select only the 'title' field from the albums
      },
    });

    // Extract titles from the result
    const albumTitles = albumsWithLanguage.map((album) => album.title);

    return albumTitles;
  };

  public albumbyidrepo = async (albumid: string) => {
    const allalbums = await prisma.albums.findMany({
      where: {
        contentid: albumid,
      },
      include: {
        albumProduction: true,
        albumCast: true,
        albumLanguage: true,
        albumPlatform: true,
        albumDirector: true,
        albumAuthor: true,
        albumGenre: true,
        albumCountry: true,
      },
    });
    // const castList = allalbums.map((album) => album.castname);

    return allalbums;
  };

  public albumbygenre = async (genre: string) => {
    const albumsWithGenre = await prisma.albums.findMany({
      where: {
        albumGenre: {
          some: {
            albumgenre: {
              contains: genre, // Check if the genre is contained within the comma-separated list
            },
          },
        },
      },
      select: {
        title: true, // Select only the 'title' field from the albums
      },
    });

    // Extract titles from the result
    const albumTitles = albumsWithGenre.map((album) => album.title);

    return albumTitles;
  };

  public createAlbum = async (album_data: AlbumList) => {
    const album = await prisma.albums.create({
      data: {
        contentid: album_data.contentid,
        title: album_data.title,
        poster_image: album_data.poster_image,
        description: album_data.description,
        running_time: album_data.running_time,
        release_year: album_data.release_year,
        tags: album_data.tags,
      },
    });
    const album_Production = await prisma.albumProduction.create({
      data: {
        contentid: album_data.contentid,
        production_name: album_data.albumProduction,
        // content: { connect: { contentid: album_data.contentid } },
      },
    });

    const album_Cast = await prisma.albumCast.create({
      data: {
        contentid: album_data.contentid,
        castname: album_data.albumCast,
        // cast: { connect: { contentid: album_data.contentid } },
      },
    });
    const album_Language = await prisma.albumLanguage.create({
      data: {
        contentid: album_data.contentid,
        albumlanguage: album_data.albumLanguage,
        // language: { connect: { contentid: album_data.contentid } },
      },
    });
    const album_Platform = await prisma.albumPlatform.create({
      data: {
        contentid: album_data.contentid,
        platformname: album_data.albumPlatform,
        platformposterimage: album_data.poster_image,
        albumlink: album_data.albumPlatform,
        // platform: { connect: { contentid: album_data.contentid } },
      },
    });
    const album_Director = await prisma.albumDirector.create({
      data: {
        contentid: album_data.contentid,
        directorname: album_data.albumDirector,
        // director: { connect: { contentid: album_data.contentid } },
      },
    });
    const album_Author = await prisma.albumAuthor.create({
      data: {
        contentid: album_data.contentid,
        authorname: album_data.albumAuthor,
        // author: { connect: { contentid: album_data.contentid } },
      },
    });

    const album_Genre = await prisma.albumGenre.create({
      data: {
        contentid: album_data.contentid,
        albumgenre: album_data.albumGenre,
        // genre: { connect: { contentid: album_data.contentid } },
      },
    });

    const album_Country = await prisma.albumCountry.create({
      data: {
        contentid: album_data.contentid,
        albumcountry: album_data.albumCountry,
        // country: { connect: { contentid: album_data.contentid } },
      },
    });
  };
}
