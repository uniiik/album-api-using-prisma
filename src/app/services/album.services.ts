import { Response } from "express";
// import AlbumList from "../controllers/album.controller";
import AlbumList from "../controllers/albumInterface";
import albumRepositories from "../repositories/album.repositories";
const newrepo = new albumRepositories();
export class albumService {
  public addalbumservice = async (albumdetails: AlbumList, res: Response) => {
    const addnewalbum = await newrepo.createAlbum(albumdetails);
    console.log("new album added successfully");
    return res.status(200).json({ message: albumdetails });
  };
  public allalbumsservice = async (res: Response) => {
    const allalbums = await newrepo.findAllAlbums();
    return res.status(200).json(allalbums);
  };
  public deletealbumservice = async (id: string, res: Response) => {
    const deletedalbum = await newrepo.deleteAlbum(id);
    return res.status(200).json({ message: "album deleted successfully" });
  };
  public updatealbumservice = async (
    contentid: string,
    albumdetails: any,
    res: Response
  ) => {
    console.log("previous content id " + contentid);
    const updatedalbum = await newrepo.updateAlbum(contentid, albumdetails);
    return res.status(200).json({ message: "updated successfully" });
  };
  public albumbyplatformservice = async (id: string, res: Response) => {
    const platformalbum = await newrepo.albumByPlatfrom(id);
    return res.status(200).json(platformalbum);
  };
  public albumbycastservice = async (albumid: string, res: Response) => {
    const castalbum = await newrepo.castbyalbumid(albumid);
    return res.status(200).json(castalbum);
  };
  public albumbylanguageservice = async (language: string, res: Response) => {
    const languagealbum = await newrepo.albumbylanguage(language);
    return res.status(200).json(languagealbum);
  };

  public albumbyidservice = async (albumid: string, res: Response) => {
    const getalbumbyid = await newrepo.albumbyidrepo(albumid);
    return res.status(200).json(getalbumbyid);
  };

  public albumbygenreservice = async (genre: string, res: Response) => {
    const getalbumbygenre = await newrepo.albumbygenre(genre);
    return res.status(200).json(getalbumbygenre);
  };
}
