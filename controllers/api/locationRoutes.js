const router = require("express").Router();
const { Location } = require("../../models");

router.post('/', async (req, res) => {
  try {
    const locationData = await Location.create({
      location: req.body.location,
      description: req.body.description,
      due_date: req.body.due_date,
    });
    res.status(200).json(locationData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;