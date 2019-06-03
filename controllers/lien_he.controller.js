const mongoose = require('mongoose');
const Lien_he = require('../models/lien_he.model');

module.exports = {
    // Lấy dữ liệu liên hệ từ databases
    lien_he_GET: function (req, res) {
        Lien_he.find({}, function (err, lien_he) { // Find collection Liên hệ với parameter rỗng tức là lấy hết dữ liệu trong collection đó
            if (err) { // Nếu lỗi
                console.log("ERROR :" + err);
            } else { // Nếu không lỗi
                res.json({
                    status: "200", // Đây là HTTP Status Code và mã 2xx để thể hiện request đã được server nhận và xử lý thành công
                    message: "GET APIs SUCCESS", // Đây là message thông báo cho việc đẫ lấy dữ liệu thành công
                    data: lien_he, // Đây là các dữ liệu 
                    document: "Lấy Application Programing Interface của collection Liên hệ thành công"
                });
                console.log("GET APIs :" + lien_he); // log dữ liệu
            }
        });
    },
    // Lấy dữ liệu liên hệ theo mã ID từ databases
    lien_he_GET_ID: function (req, res) {
        Lien_he.findById(req.params.id, function (err, lien_he) {
            if(err){
                console.log("ERROR :" + err);
                res.json({
                    error: `ERROR : + ${err}`
                });
            } else {
                res.json({
                    status: "200",
                    message: "GET APIs By ID SUCCESS",
                    data: lien_he,
                    document: "Lấy Application Programing Interface của collection Liên hệ thành công"
                });
            }
        });
    },
    // Thêm dữ liệu liên hệ vào databases
    lien_he_POST: function(req,res){
        const new_lien_he = new Lien_he({
            ten_lien_he: req.body.ten_lien_he,
            so_dien_thoai: req.body.so_dien_thoai,
            dia_chi_email: req.body.dia_chi_email,
            noi_dung: req.body.noi_dung
        });

        new_lien_he.save().then(function(){
            Lien_he.find({}, function (err, lien_he) {
                if (err) {
                    console.log("ERROR :" + err);
                } else {
                    res.json({
                        status: "200", 
                        message: "POST APIs SUCCESS",
                        data: lien_he,
                        document: "Thêm mới dữ liệu vào collection Liên hệ thành công"
                    });
                    console.log("POST APIs :" + new_lien_he);
                }
            });
        }); 
    },
    // Sửa dữ liệu liên hệ 
    lien_he_PUT: function(req,res){
        let newValues = {};
        if (req.body.ten_lien_he && req.body.ten_lien_he.length > 2) {
            newValues.ten_lien_he = req.body.ten_lien_he;
        }
        if (req.body.so_dien_thoai && req.body.so_dien_thoai.length > 2) {
            newValues.so_dien_thoai = req.body.so_dien_thoai;
        }
        if (req.body.dia_chi_email && req.body.dia_chi_email.length > 2) {
            newValues.dia_chi_email = req.body.dia_chi_email;
        }
        if (req.body.noi_dung && req.body.noi_dung.length > 2) {
            newValues.noi_dung = req.body.noi_dung;
        }
        const options = {
            new: true,
        }
        Lien_he.findByIdAndUpdate(req.params.id,{ $set: newValues }, options, function(err, lien_he_update){
            if (err) {
                console.log("ERROR :" + err);
            } else {
                res.json({
                    status: "200",
                    message: "PUT APIs SUCCESS",
                    data: lien_he_update,
                    document: "Sửa dữ liệu thành công"
                });
                console.log("POST APIs :" + lien_he_update);
            }
        });
    },
    // Xóa dữ liệu liên hệ trong databases
    lien_he_DELETE: function(req,res){
        Lien_he.findByIdAndRemove(req.params.id, function(err,lien_he){
            if(err){

            } else{
                res.json({
                    status: "200",
                    message: "DELETE APIs SUCCESS",
                    data: lien_he,
                    document: "Xóa dữ liệu thành công"
                });
                console.log("DELETE APIs :" + lien_he);
            }
        });
    }

}