import express from "express";
import morgan from "morgan";
import cors from "cors";
import session from "express-session";
import indexRoutes from "../routes/index.routes.js";
import passport from "../config/passport.js";
import { SECRET } from "./config.js";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());

app.use(passport.session());

app.use("/api", indexRoutes);

export default app;
