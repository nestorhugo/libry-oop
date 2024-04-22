import express from "express";
import LibraryController from "../controllers/LibraryController";

const libraryRoutes = (libraryController: LibraryController) => {
  const router = express.Router();

  //   router.get("/", (req, res) => libraryController.listAllLibraries(req, res));

  return router;
};

export default libraryRoutes;
