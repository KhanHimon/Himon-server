const express = require('express');
const router = express.Router();

const dich_vu_controller = require('../controllers/dich_vu.controller');

router.get('/api/dich_vu',dich_vu_controller.dich_vu_GET);
router.get('/api/dich_vu=:id',dich_vu_controller.dich_vu_GET_ID);
router.post('/api/dich_vu',dich_vu_controller.dich_vu_POST);
router.post('/api/dich_vu_put=:id',dich_vu_controller.dich_vu_PUT);
router.post('/api/dich_vu_delete=:id',dich_vu_controller.dich_vu_DELETE);

module.exports = router;