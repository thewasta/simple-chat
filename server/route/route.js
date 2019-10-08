const router = require('express').Router(),
    {HTML_FILE} = require('./../config/settings');


router.get('*', async (req, res) => {
    res.sendFile(HTML_FILE);
});

module.exports.router = router;