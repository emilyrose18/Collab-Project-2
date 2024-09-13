const router = require('express').Router();
const bucketlistRoutes = require('./bucketlistRoutes');
const userRoutes = require('./userRoutes');

router.use('/bucketlist', bucketlistRoutes);
router.use('/users', userRoutes);

module.exports = router;
