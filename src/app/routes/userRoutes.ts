import express from "express";
const router = express.Router();
// const userauth = require("../controllers/authcontroller");
import { authMidlleware } from "../middlewares/auth/authMiddleware";
import {
  usersignup,
  usersignin,
  allusers,
} from "../controllers/authcontroller";
import {
  addalbum,
  allalbums,
  deletealbum,
  updatealbum,
  albumbyplatform,
  albumbycast,
  albumbylanguage,
  albumbyid,
  albumbygenre,
} from "../controllers/album.controller";
router.post("/signup", usersignup);
router.post("/signin", usersignin);
router.get("/allusers", authMidlleware, allusers);
router.get("/allalbums", allalbums); // get all album list
router.get("/allalbums/:id", albumbyid); //getMovieById -> take albumId as param
router.get("/allalbums/genre/:genre", albumbygenre); //getMovieListByGenre -> take genre as param
router.get("/allalbums/language/:language", albumbylanguage); //getMovieListByLanguage -> take language as param
router.get("/allalbums/cast/:id", albumbycast); //get cast of a album where albumid is a param
router.post("/addalbum", addalbum);
router.put("/update/:id", updatealbum); //updateMovie -> take albumId as param
router.delete("/delete/:id", deletealbum); //deleteMovie -> take albumId as param
router.get("/allalbums/platform/:platform", albumbyplatform); //getMovieListByPlatform -> get platformId as param
module.exports = router;
