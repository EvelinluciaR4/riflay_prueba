import passport from "passport";
import { createAccessToken } from "../helpers/jwt.js";

export const loginController = async (req, res, next) => {
  passport.authenticate("local", async (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).json(info);
    const token = await createAccessToken({ id: user._id, role: user.role });
    res.json({ token });
  })(req, res, next);
};
