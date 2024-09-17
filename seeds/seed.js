const sequelize = require('../config/connection');
const { User , Location } = require('../models/');

const userData = require('./userData.json');
const locationData = require('./locationData.json')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    // individualHooks: true,
    // returning: true,
  });
  
  for (const location of locationData) {
    await Location.create({
      ...location,
      userId: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedAll();