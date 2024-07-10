import Creator from "../models/user.model.js";
import Raffles from "../models/raffle.model.js";
import Strike from "../models/stike.model.js";

export const StrikeAction = async (req, res) => {
  try {
    const { creatorID, reason, type, adminID } = req.body;

    const creator = await Creator.findById(creatorID);

    console.log(creator)

    const raffles = await Raffles.find({ owner: creatorID });

    console.log(raffles)

    if (!creator) {
      return res.status(404).send({ message: "Creator not found" });
    }

    if (type === "suspend") {
      creator.state = "suspended";
      raffles.forEach(async (raffle) => {
        raffle.state = "suspended";
        await raffle.save();
      });
    }

    if (type === "unsuspend") {
      creator.state = "active";
      raffles.forEach(async (raffle) => {
        raffle.state = "active";
        await raffle.save();
      });
    }

    const newStrike = new Strike({
      creatorID,
      reason,
      type,
      byAdmin: adminID,
    });

    await newStrike.save();

    res.status(200).send({ message: "Usuario supendido exitosamente" });
  } catch (error) {
    res.status(400).send({message: error});
  }
};