const router = require("express").Router();
const { Blog, Comment, User } = require("../models");
const withAuth = require("../utils/auth");

// GET all blogs for homepage
router.get("/", async (req, res) => {
  try {
    const dbBlogData = await Blog.findAll({
      include: [
        {
          model: Comment,
          attributes: ["comment_content", "comment_date"],
        },
        { model: User, attributes: ["username"] },
      ],
    });

    const blogs = dbBlogData.map((blog) => blog.get({ plain: true }));

    res.render("homepage", {
      blogs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one blog
router.get("/blog/:id", async (req, res) => {
  try {
    const dbBlogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: ["comment_content", "comment_date"],
        },
        { model: User, attributes: ["username"] },
      ],
    });
    const blog = dbBlogData.get({ plain: true });
    res.render("blog", { ...blog, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Blog }],
    });

    const user = userData.get({ plain: true });

    res.render("dashboard", {
      ...user,
      loggedIn: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
