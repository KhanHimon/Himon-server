var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dich_vu_schema = new Schema({
    ten_dich_vu: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('dich_vu', dich_vu_schema);