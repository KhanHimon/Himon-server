var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lien_he_schema = new Schema({
    ten_lien_he : String,
    so_dien_thoai: String,
    dia_chi_email: String,
    noi_dung: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('lien_he', lien_he_schema);