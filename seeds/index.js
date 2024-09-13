const sequelize = require('../config/connection');
const seeduser = require('./userdata');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seeduser();

  process.exit(0);
};

seedAll();