const express = require('express');
const router = express.Router();
const api = require('./api');

router.get('/Github/:username', api.pesquisachatbotGitHub);


module.exports = router;