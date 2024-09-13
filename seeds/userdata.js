const { User } = require('../models');

const userdata = [
  {
    username: 'emilyrose',
    email: 'emily@email.com',
    password: 'rainbows1234',
  },
  {
    username: 'lian1234',
    email: 'lian@email.com',
    password: 'cheeseburger33',
  },
  {
    username: 'stephanielee',
    email: 'stephanie@email.com',
    password: 'pinaboo2',
  },
  {
    username: 'luffyde',
    email: 'luffy@email.com',
    password: 'johncena',
  },
];

const seeduser = () => User.bulkCreate(userdata);
module.exports = seeduser;
