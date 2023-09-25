import { Request, Response } from "express";
import { albumService } from "../services/album.services";
const AlbumService = new albumService();
export const addalbum = async (req: Request, res: Response) => {
  console.log("post request for adding a new album");
  console.log(req.body);
  const {
    title,
    poster_image,
    albumlink,
    platformposterimage,
    description,
    running_time,
    release_year,
    tags,
    albumProduction,
    albumCast,
    albumLanguage,
    albumPlatform,
    albumDirector,
    albumAuthor,
    albumCountry,
    albumGenre,
  } = req.body;
  const cid = title + release_year;
  const albumdetails = {
    title,
    poster_image,
    platformposterimage,
    description,
    running_time,
    release_year,
    albumlink,
    contentid: cid,
    tags,
    albumProduction,
    albumCast,
    albumLanguage,
    albumPlatform,
    albumDirector,
    albumAuthor,
    albumCountry,
    albumGenre,
  };
  const response = AlbumService.addalbumservice(albumdetails, res);
  return response;
};

export const allalbums = async (req: Request, res: Response) => {
  console.log("get request for all albums ");
  const response = AlbumService.allalbumsservice(res);
  return response;
};
export const albumbyid = async (req: Request, res: Response) => {
  console.log("get request for getting all details of album by its id");
  const { id } = req.params;
  const response = AlbumService.albumbyidservice(id, res);
  return response;
};

export const albumbygenre = async (req: Request, res: Response) => {
  console.log("get request for getting all details of album by its genre");
  const { genre } = req.params;
  // console.log(req.params);
  // console.log("my genre  is", genre);
  const response = AlbumService.albumbygenreservice(genre, res);
  return response;
};

export const albumbylanguage = async (req: Request, res: Response) => {
  console.log("get request for getting all details of album by its language");
  const { language } = req.params;
  console.log("language is", language);
  const response = AlbumService.albumbylanguageservice(language, res);
  return response;
};

export const albumbycast = async (req: Request, res: Response) => {
  console.log("get request for getting all details of album by its cast");
  const { id } = req.params;
  const response = AlbumService.albumbycastservice(id, res);
  return response;
};
export const updatealbum = async (req: Request, res: Response) => {
  console.log("update request for updating  existing album");
  console.log(req.body);
  const {
    title,
    poster_image,
    albumlink,
    platformposterimage,
    description,
    running_time,
    release_year,
    tags,
    albumProduction,
    albumCast,
    albumLanguage,
    albumPlatform,
    albumDirector,
    albumAuthor,
    albumCountry,
    albumGenre,
  } = req.body;
  const id = req.params.id;
  console.log("id " + id);
  const albumdetails = {
    title,
    contentid: id,
    poster_image,
    albumlink,
    platformposterimage,
    description,
    running_time,
    release_year,
    tags,
    albumProduction,
    albumCast,
    albumLanguage,
    albumPlatform,
    albumDirector,
    albumAuthor,
    albumCountry,
    albumGenre,
  };
  const response = AlbumService.updatealbumservice(id, albumdetails, res);
  return response;
};

export const deletealbum = async (req: Request, res: Response) => {
  console.log("delete request");
  // const title = req.params.title;
  // const release_year = req.params.release_year;
  // const id = title + release_year;
  const id = req.params.id;
  console.log(req.params.id);
  console.log(id);
  const response = AlbumService.deletealbumservice(id, res);
  return response;
};

export const albumbyplatform = async (req: Request, res: Response) => {
  console.log("get request for platform album");
  const { platform } = req.params;
  console.log(req.params);
  const response = AlbumService.albumbyplatformservice(platform, res);
  return response;
};
