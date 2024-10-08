const router = require('express').Router();
const locationRoutes = require('./locationRoutes');
const userRoutes = require('./userRoutes');

router.use('/location', locationRoutes);
router.use('/user', userRoutes);

module.exports = router;