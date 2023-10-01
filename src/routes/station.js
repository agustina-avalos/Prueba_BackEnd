import { Router } from "express";

const router = Router();
import { getStationByID } from "../controllers/stationController.js";




router.get("/api/station/:cre_id", getStationByID);



export default router;