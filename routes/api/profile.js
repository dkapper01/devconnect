const express = require("express");
const router = express.Router();

// @routes  GET api/profile/test
// @desc    Tests profile routes
// @access  Public

router.get("/test", (req, res) =>
  res.json({
    msg: "Users Profile"
  })
);

module.exports = router;
