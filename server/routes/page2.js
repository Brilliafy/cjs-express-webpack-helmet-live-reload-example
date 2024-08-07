var express = require('express'),
    router = express.Router();

router.get('/', function(req, res) {
    let { scriptNonce } = require("../middleware/nonces")
    res.render('page2', { scriptNonce });
});

module.exports = router;