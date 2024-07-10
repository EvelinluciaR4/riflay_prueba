import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../helpers/jwt.js";

export const registerUser = async (req, res) => {
  const {
    name,
    email,
    password,
    city,
    phone,
    address,
    dni,
    role,
    gender,
    department,
    country,
  } = req.body;

  try {
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      city,
      phone,
      address,
      dni,
      email,
      department,
      country,
      password: hashPassword,
      gender,
      role,
    });

    const userSaved = await newUser.save();

    const token = await createAccessToken({ id: userSaved.id });

    res.cookie("token", token);

    res.status(201).json({
      message: "Usuario registrado exitosamente",
    });
  } catch (error) {
    res.status(400).send(error);
  }
};
