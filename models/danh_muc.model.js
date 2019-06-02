var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var danh_muc_schema = new Schema({
    ten_danh_muc: String,
    dich_vu: {
        type: Schema.Types.ObjectId,
        ref: 'dich_vu'
    }
});

module.exports = mongoose.model('danh_muc', danh_muc_schema);