import { Router } from "express";
import { signup } from "../controllers/user-controller";
import { login } from "../controllers/user-controller"

const router = Router();


// CRUD USUARIO


router.post("/singnup", signup)
router.post("/login", )

export default router;