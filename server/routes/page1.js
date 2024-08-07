var express = require('express'),
    router = express.Router();

router.get('/', function(req, res) {
    let { scriptNonce } = require("../middleware/nonces")
    res.render('page1', { scriptNonce });
});

module.exports = router;