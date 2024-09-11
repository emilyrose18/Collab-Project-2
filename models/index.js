const User = require('./User');
const Location = require('./Location');
const BucketList = require('./BucketList');

User.hasOne(BucketList, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(Location, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Location.belongsTo(User, {
  foreignKey: 'user_id',
});

BucketList.belongsTo(User, {
  foreignKey: 'user_id',
});

BucketList
module.exports = { User, Location, BucketList };
