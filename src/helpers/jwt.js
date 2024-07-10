import jwt from "jsonwebtoken";
import { SECRET } from "../config/config.js";

export const createAccessToken = async (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      SECRET,
      {
        expiresIn: "15d",
      },
      (err, token) => {
        if (err) reject(`error from jwt ${err.message}`);
        resolve(token);
      }
    );
  });
};
