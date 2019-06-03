const mongoose = require('mongoose');
const Dich_vu = require('../models/dich_vu.model');

module.exports = {
    dich_vu_GET: function(req,res){
        Dich_vu.find({}, function(err,dich_vu){
            if (err) { // Nếu lỗi
                console.log("ERROR :" + err);
            } else { // Nếu không lỗi
                res.json({
                    status: "200", // Đây là HTTP Status Code và mã 2xx để thể hiện request đã được server nhận và xử lý thành công
                    message: "GET APIs SUCCESS", // Đây là message thông báo cho việc đẫ lấy dữ liệu thành công
                    data: dich_vu, // Đây là các dữ liệu 
                    document: "Lấy Application Programing Interface của collection Dịch vụ thành công"
                });
                console.log("GET APIs :" + dich_vu); // log dữ liệu
            }
        }); 
    },
    dich_vu_GET_ID: function(req,res){
        Dich_vu.findById(req.params.id, function(err,dich_vu){
            if (err) { // Nếu lỗi
                console.log("ERROR :" + err);
            } else { // Nếu không lỗi
                res.json({
                    status: "200", // Đây là HTTP Status Code và mã 2xx để thể hiện request đã được server nhận và xử lý thành công
                    message: "GET APIs By ID SUCCESS", // Đây là message thông báo cho việc đẫ lấy dữ liệu thành công
                    data: dich_vu, // Đây là các dữ liệu 
                    document: "Lấy Application Programing Interface của collection Dịch vụ thành công"
                });
                console.log("GET APIs :" + dich_vu); // log dữ liệu
            }
        });
    },
    dich_vu_POST: function(req,res){
        const new_dich_vu = new Dich_vu({
            ten_dich_vu: req.body.ten_dich_vu
        });

        new_dich_vu.save().then(function(){
            Dich_vu.find({}, function (err, dich_vu) {
                if (err) {
                    console.log("ERROR :" + err);
                } else {
                    res.json({
                        status: "200", 
                        message: "POST APIs SUCCESS",
                        data: dich_vu,
                        document: "Thêm mới dữ liệu vào collection thành công"
                    });
                    console.log("POST APIs :" + new_dich_vu);
                }
            });
        });
    },
    dich_vu_PUT: function(req,res){
        let newValues = {};
        if (req.body.ten_dich_vu && req.body.ten_dich_vu.length > 2) {
            newValues.ten_dich_vu = req.body.ten_dich_vu;
        }
        const options = {
            new: true,
        }
        Dich_vu.findByIdAndUpdate(req.params.id,{ $set: newValues }, options, function(err, dich_vu_update){
            if (err) {
                console.log("ERROR :" + err);
            } else {
                res.json({
                    status: "200",
                    message: "PUT APIs SUCCESS",
                    data: dich_vu_update,
                    document: "Sửa dữ liệu thành công"
                });
                console.log("POST APIs :" + dich_vu_update);
            }
        });
    },
    dich_vu_DELETE: function(req,res){
        Dich_vu.findByIdAndRemove(req.params.id, function(err,dich_vu){
            if(err){

            } else{
                res.json({
                    status: "200",
                    message: "DELETE APIs SUCCESS",
                    data: dich_vu,
                    document: "Xóa dữ liệu thành công"
                });
                console.log("DELETE APIs :" + dich_vu);
            }
        });
    }
}