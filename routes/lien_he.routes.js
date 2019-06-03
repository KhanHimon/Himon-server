const express = require('express');
const router = express.Router();

const lien_he_controller = require('../controllers/lien_he.controller');

router.get('/api/lien_he', lien_he_controller.lien_he_GET);
router.get('/api/lien_he=:id', lien_he_controller.lien_he_GET_ID);
router.post('/api/lien_he', lien_he_controller.lien_he_POST);
router.post('/api/lien_he_put=:id',lien_he_controller.lien_he_PUT);
router.post('/api/lien_he_delete=:id', lien_he_controller.lien_he_DELETE);

module.exports = router;