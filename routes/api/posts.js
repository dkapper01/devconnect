const express = require("express");
const router = express.Router();

// @routes  GET api/posts/test
// @desc    Tests post routes
// @access  Public

router.get("/test", (req, res) =>
  res.json({
    msg: "Posts Works"
  })
);

module.exports = router;
