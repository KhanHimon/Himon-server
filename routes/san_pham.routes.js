const express = require('express');
const router = express.Router();

const san_pham_controller = require('../controllers/san_pham.controller');

router.get('/api/san_pham',san_pham_controller.san_pham_GET);
router.get('/api/san_pham=:id',san_pham_controller.san_pham_GET_ID);
router.post('/api/san_pham',san_pham_controller.san_pham_POST);
router.post('/api/san_pham_put=:id',san_pham_controller.san_pham_PUT);
router.post('/api/san_pham_delete=:id',san_pham_controller.san_pham_DELETE);

module.exports = router;