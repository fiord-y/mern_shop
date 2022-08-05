import express from "express";
import { authUser, getUserProfile } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

/*-------------------------------------------------------------------
@desc Auth user & get token
@route POST [/api/users/login]
@access universal
-------------------------------------------------------------------*/
router.post("/login", authUser);

/*-------------------------------------------------------------------
@desc Get user profile
@route POST [/api/users/profile]
@access private
-------------------------------------------------------------------*/
router.route("/profile").get(protect, getUserProfile);

export default router;
