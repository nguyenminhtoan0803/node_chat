var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('error', 
    { 
      message: "error in page",
      error: {
        status: "page is error"
      }
    }
  );
});

module.exports = router;
