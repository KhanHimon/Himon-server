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
        }).populate('dich_vu'); 
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
        }).populate('dich_vu');
    },
    danh_muc_POST: function(req,res){
        const new_danh_muc = new Danh_muc({
            ten_danh_muc: req.body.ten_danh_muc,
            dich_vu: req.body.dich_vu
        });

        new_danh_muc.save().then(function(){
            Danh_muc.find({}, function (err, danh_muc) {
                if (err) {
                    console.log("ERROR :" + err);
                } else {
                    res.json({
                        status: "200", 
                        message: "POST APIs SUCCESS",
                        data: danh_muc,
                        document: "Thêm mới dữ liệu vào collection thành công"
                    });
                    console.log("POST APIs :" + new_danh_muc);
                }
            }).populate('dich_vu');
        });
    },
    danh_muc_PUT: function(req,res){
        let newValues = {};
        if (req.body.ten_danh_muc && req.body.ten_danh_muc.length > 2) {
            newValues.ten_danh_muc = req.body.ten_danh_muc;
        }
        if (req.body.dich_vu && req.body.dich_vu) {
            newValues.dich_vu = req.body.dich_vu;
        }
        const options = {
            new: true,
        }
        Danh_muc.findByIdAndUpdate(req.params.id,{ $set: newValues }, options, function(err, danh_muc_update){
            if (err) {
                console.log("ERROR :" + err);
            } else {
                res.json({
                    status: "200",
                    message: "PUT APIs SUCCESS",
                    data: danh_muc_update,
                    document: "Sửa dữ liệu thành công"
                });
                console.log("POST APIs :" + danh_muc_update);
            }
        }).populate('dich_vu');
    },
    danh_muc_DELETE: function(req,res){
        Danh_muc.findByIdAndRemove(req.params.id, function(err,danh_muc){
            if(err){

            } else{
                res.json({
                    status: "200",
                    message: "DELETE APIs SUCCESS",
                    data: danh_muc,
                    document: "Xóa dữ liệu thành công"
                });
                console.log("DELETE APIs :" + danh_muc);
            }
        });
    }
}