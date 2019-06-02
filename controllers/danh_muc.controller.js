const mongoose = require('mongoose');
const Danh_muc = require('../models/danh_muc.model');

module.exports = {
    danh_muc_GET: function(req,res){
        Danh_muc.find({}, function(err,danh_muc){
            if (err) { // Nếu lỗi
                console.log("ERROR :" + err);
            } else { // Nếu không lỗi
                res.json({
                    status: "200", // Đây là HTTP Status Code và mã 2xx để thể hiện request đã được server nhận và xử lý thành công
                    message: "GET APIs SUCCESS", // Đây là message thông báo cho việc đẫ lấy dữ liệu thành công
                    data: danh_muc, // Đây là các dữ liệu 
                    document: "Lấy Application Programing Interface của collection Danh mục thành công"
                });
                console.log("GET APIs :" + danh_muc); // log dữ liệu
            }
        });
    },
    danh_muc_GET_ID: function(req,res){
        Danh_muc.findById(req.params.id, function(err,danh_muc){
            if (err) { // Nếu lỗi
                console.log("ERROR :" + err);
            } else { // Nếu không lỗi
                res.json({
                    status: "200", // Đây là HTTP Status Code và mã 2xx để thể hiện request đã được server nhận và xử lý thành công
                    message: "GET APIs By ID SUCCESS", // Đây là message thông báo cho việc đẫ lấy dữ liệu thành công
                    data: danh_muc, // Đây là các dữ liệu 
                    document: "Lấy Application Programing Interface của collection Danh mục thành công"
                });
                console.log("GET APIs :" + danh_muc); // log dữ liệu
            }
        });
    },
    danh_muc_POST: function(req,res){},
    danh_muc_PUT: function(req,res){},
    danh_muc_DELETE: function(req,res){}
}