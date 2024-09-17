const router = require("express").Router();
const { User } = require("../models");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({});
    // console.log(userData);
    const users = userData.map((project) => project.get({ plain: true }));
    res.render("homepage", { loggedIn: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }
  
  } catch (err) {
    res.status(400).json(err);
  }
});
router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/signup", async (req, res) => {
  try {
    const newUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(200).json(newUserData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
