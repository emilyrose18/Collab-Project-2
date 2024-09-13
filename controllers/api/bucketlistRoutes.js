const router = require('express').Router();
const { User, Location  } = require('../../models');

router.post('/', async (req, res) => {
    console.log("tomator", req.body);
    try {
      const locationData = await Location.create({
        location_name: req.body.location_name,
        description: req.body.description,
        due_date: req.body.due_date,
      });
        res.status(200).json(locationData);
    }
    catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  module.exports = router;