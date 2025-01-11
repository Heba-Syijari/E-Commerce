import express from "express";
import {
  signup,
  login,
  logout,
  refreshToken,
} from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh-token", refreshToken);
// router.get("/profile", protectRoute, getProfile);
// router.get("/signup", (req, res) => {
//   res.send("Welcome signup");
// });
export default router;
