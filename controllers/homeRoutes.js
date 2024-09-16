 const router = require('express').Router();
 const { User } = require('../models');

 //Prevent non logged in users from viewing the homepage
 router.get('/', async (req, res) => {
   try {
     const userData = await User.findAll({
    //    attributes: { exclude: ['password'] },
    //    order: [['name', 'ASC']],
    });

     const users = userData.map((project) => project.get({ plain: true }));
  res.render('homepage', users, { 
     });
   } catch (err) {
     res.status(500).json(err);
   }
 });

 router.post('/login', async (req, res) => {
  try {

    const userData = await User.findOne({ where: { username: req.body.username } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // // Create session variables based on the logged in user
    // req.session.save(() => {
    //   req.session.user_id = userData.id;
    //   req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });

  } catch (err) {
    res.status(400).json(err);
  }
});
 router.get('/login', (req, res) => {
// //    // If a session exists, redirect the request to the homepage
// //    if (req.session.logged_in) {
// //      res.redirect('/');
// //      return;
// //    }

   res.render('login');
 });

 router.get('/signup', (req, res) => {

  res.render('signup');
});

router.post('/signup', async (req, res) => {
  try {
    const newUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
      res.status(200).json(newUserData);
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

 module.exports = router;
