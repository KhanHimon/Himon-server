const mongoose = require('mongoose');
const San_pham = require('../models/san_pham.model');

module.exports = {
    san_pham_GET: function(req,res){
        San_pham.find({}, function(err,san_pham){
            if (err) { // Nếu lỗi
                console.log("ERROR :" + err);
            } else { // Nếu không lỗi
                res.json({
                    status: "200", // Đây là HTTP Status Code và mã 2xx để thể hiện request đã được server nhận và xử lý thành công
                    message: "GET APIs SUCCESS", // Đây là message thông báo cho việc đẫ lấy dữ liệu thành công
                    data: san_pham, // Đây là các dữ liệu 
                    document: "Lấy Application Programing Interface của collection Sản phẩm thành công"
                });
                console.log("GET APIs :" + san_pham); // log dữ liệu
            }
        }).populate('danh_muc'); 
    },
    san_pham_GET_ID: function(req,res){
        San_pham.findById(req.params.id, function(err,san_pham){
            if (err) { // Nếu lỗi
                console.log("ERROR :" + err);
            } else { // Nếu không lỗi
                res.json({
                    status: "200", // Đây là HTTP Status Code và mã 2xx để thể hiện request đã được server nhận và xử lý thành công
                    message: "GET APIs By ID SUCCESS", // Đây là message thông báo cho việc đẫ lấy dữ liệu thành công
                    data: san_pham, // Đây là các dữ liệu 
                    document: "Lấy Application Programing Interface của collection Sản phẩm thành công"
                });
                console.log("GET APIs :" + san_pham); // log dữ liệu
            }
        }).populate('danh_muc');
    },
    san_pham_POST: function(req,res){
        const new_san_pham = new San_pham({
            ten_san_pham: req.body.ten_san_pham,
            tac_gia: req.body.tac_gia,
            danh_muc: req.body.danh_muc,
            anh_san_pham: req.body.anh_san_pham,
            live_demo: req.body.live_demo,
        });

        new_san_pham.save().then(function(){
            San_pham.find({}, function (err, san_pham) {
                if (err) {
                    console.log("ERROR :" + err);
                } else {
                    res.json({
                        status: "200", 
                        message: "POST APIs SUCCESS",
                        data: san_pham,
                        document: "Thêm mới dữ liệu vào collection thành công"
                    });
                    console.log("POST APIs :" + new_san_pham);
                }
            }).populate('danh_muc');
        });
    },
    san_pham_PUT: function(req,res){
        let newValues = {};
        if (req.body.ten_san_pham && req.body.ten_san_pham.length > 2) {
            newValues.ten_san_pham = req.body.ten_san_pham;
        }
        if (req.body.tac_gia && req.body.tac_gia.length > 2) {
            newValues.tac_gia = req.body.tac_gia;
        }
        if (req.body.danh_muc && req.body.danh_muc) {
            newValues.danh_muc = req.body.danh_muc;
        }
        if (req.body.live_demo && req.body.live_demo.length > 2) {
            newValues.live_demo = req.body.live_demo;
        }
        const options = {
            new: true,
        }
        San_pham.findByIdAndUpdate(req.params.id,{ $set: newValues }, options, function(err, san_pham_update){
            if (err) {
                console.log("ERROR :" + err);
            } else {
                res.json({
                    status: "200",
                    message: "PUT APIs SUCCESS",
                    data: san_pham_update,
                    document: "Sửa dữ liệu thành công"
                });
                console.log("POST APIs :" + san_pham_update);
            }
        }).populate('danh_muc');
    },
    san_pham_DELETE: function(req,res){
        San_pham.findByIdAndRemove(req.params.id, function(err,san_pham){
            if(err){

            } else{
                res.json({
                    status: "200",
                    message: "DELETE APIs SUCCESS",
                    data: san_pham,
                    document: "Xóa dữ liệu thành công"
                });
                console.log("DELETE APIs :" + san_pham);
            }
        }).populate('danh_muc');
    }
}