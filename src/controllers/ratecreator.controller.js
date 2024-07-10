import Creator from "../models/user.model.js";
import Rating from "../models/rating.model.js";
export const rateCreator = async (req, res) => {
  const { creatorId, userId, rating } = req.body;

  try {
    const creator = await Creator.findById(creatorId);

    if (!creator) {
      return res.status(400).json({ message: "Creator not found" });
    }

    const newRating = new Rating({
      creatorId,
      userId,
      rating,
    });

    newRating.save();

    const totalRatings = await Rating.countDocuments({ creatorId });

    const sumRatings = await Rating.aggregate([
      {
        $match: { creatorId },
      },
      {
        $group: {
          _id: null,
          total: { $sum: "$rating" },
        },
      },
    ]);

    const averageRating = sumRatings[0].total / totalRatings;

    creator.rating = averageRating.toFixed(2);

    creator.countRating = totalRatings;

    await creator.save();

    res.status(200).json({ message: "Rating update" });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
