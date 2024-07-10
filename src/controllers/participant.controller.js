import User from "../models/participant.model.js";

export const saveParticipant = async (req, res) => {
  const { name, email, phone, address } = req.body;
  try {
    const newUser = new User({
      name,
      email,
      phone,
      address,
    });
    await newUser.save();
    res.status(201).send(newUser._id);
  } catch (error) {
    res.status(400).send(error);
  }
};
