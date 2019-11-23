// this file makes the database connection, collects all the models
// and sets the associations
// other files can use this for database access by requiring it and
// assigning the exports

// assuming that this file (index.js) is in a subdirectory called models:
//  const models = require('./models');

// or (using deconstruction):
//  const { Person, PhoneNumber } = require('./models');

'use strict';

// database connection
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'cryptoDB.sqlite'
});

// import models
const User = sequelize.import("./User.js");
const Wallet = sequelize.import("./Wallet.js");
const Adress = sequelize.import("./Adress.js");
const Comment = sequelize.import("./Comment.js");


// associations
User.hasMany(Wallet, {foreignKey: "userId", as: "Wallets"});
Wallet.belongsTo(User, {foreignKey: "userId"});

User.hasMany(Comment, {foreignKey: "userId", as: "Comments"});
Comment.belongsTo(User, {foreignKey: "userId"});

Wallet.hasMany(Adress, {foreignKey: "walletId", as: "Adresses"});
Adress.belongsTo(Wallet, {foreignKey: "walletId"});

module.exports = {
  User, Wallet, Adress, Comment
};