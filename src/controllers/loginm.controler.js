import User from "../models/user.model.js";
import bycrypt from "bcryptjs"
import { createAccessToken } from "../helpers/jwt.js";


export const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
      let user = await User.findOne({email}); 
  
      if (!user) {
        return res.status(400).json({ message: "Usuario no encontrado" });
      }
    
      const isMatch = await bycrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Contraseña incorrecta" });
      }
  
      const token = await createAccessToken({ id: user._id, role: user.role });
      return res.json({ message: "logeado", token: token, id: user._id });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
