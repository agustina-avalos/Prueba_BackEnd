import { Router } from "express";

const router = Router();
import { getStationByID } from "../controllers/stationController.js";




router.get("/api/station/:id", getStationByID);



export default router;