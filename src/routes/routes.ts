import { Router } from "express";
import * as playerControllers from "../controllers/players-controller";

const router = Router();

router.get("/players", playerControllers.getPlayer);
router.post("/players", playerControllers.postPlayer);

router.get(`/players/:id`, playerControllers.getPlayerById);
router.delete(`/players/:id`, playerControllers.deletePlayer);

export default router;
