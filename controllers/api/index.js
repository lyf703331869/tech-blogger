const router = require("express").Router();

const userRoutes = require("./user-routes");
const blogRoutes = require("./blog-routes");

router.use("/blogs", blogRoutes);
router.use("/users", userRoutes);

module.exports = router;
