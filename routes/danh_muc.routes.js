const express = require('express');
const router = express.Router();

const danh_muc_controller = require('../controllers/danh_muc.controller');

router.get('/api/danh_muc',danh_muc_controller.danh_muc_GET);
router.get('/api/danh_muc=:id',danh_muc_controller.danh_muc_GET_ID);
router.post('/api/danh_muc',danh_muc_controller.danh_muc_POST);
router.post('/api/danh_muc_put=:id',danh_muc_controller.danh_muc_PUT);
router.post('/api/danh_muc_delete=:id',danh_muc_controller.danh_muc_DELETE);

module.exports = router;