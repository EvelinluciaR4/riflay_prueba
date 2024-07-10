import purchaseModel from "../models/purchase.model.js";

export const savePurchase = async (req, res) => {
  const { idUser, idBoard, amount, positions } = req.body;

  try {
    const newPurchase = new purchaseModel({
      idUser,
      idBoard,
      amount,
      positions,
    });

    await newPurchase.save();

    res.status(201).send(newPurchase._id);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
