
let express = require("express");
let router = express.Router();
let bar = require("../build/instamancer");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index.pug", { title: "DM Solutions" });
});

module.exports = router;

//bar.foo();

/**/
