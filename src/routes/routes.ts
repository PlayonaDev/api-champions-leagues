import { Router } from "express";
import * as playerControllers from "../controllers/players-controller";
import * as clubControllers from "../controllers/clubs-controller";

const router = Router();

router.get("/players", playerControllers.getPlayer);
router.post("/players", playerControllers.postPlayer);

router.get(`/players/:id`, playerControllers.getPlayerById);
router.delete(`/players/:id`, playerControllers.deletePlayer);
router.patch(`/players/:id`, playerControllers.updatePlayer);

router.get(`/clubs`, clubControllers.getClubs);
export default router;
