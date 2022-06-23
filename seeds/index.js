const sequelize = require("../config/connection");
const { Blog, Comment, User } = require("../models");
const blogData = require("./blog-seeds.json");
const commentData = require("./comment-seeds.json");
const userData = require("./user-seeds.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {});

  await Blog.bulkCreate(blogData, {});

  await Comment.bulkCreate(commentData, {});

  process.exit(0);
};

seedDatabase();
