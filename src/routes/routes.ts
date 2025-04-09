import { Router } from "express";
import * as playerControllers from "../controllers/players-controller";

const router = Router();

router.get("/players", playerControllers.getPlayer);
router.get(`/players/:id`, playerControllers.getPlayerById);

router.post("/players", playerControllers.postPlayer);

export default router;
