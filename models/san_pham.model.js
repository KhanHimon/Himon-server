var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var san_pham_schema = new Schema({
    ten_san_pham: String,
    tac_gia: String,
    danh_muc: {
        type: Schema.Types.ObjectId,
        ref: 'danh_muc'
    },
    anh_san_pham : String,
    live_demo: String,
});

module.exports = mongoose.model('san_pham', san_pham_schema);