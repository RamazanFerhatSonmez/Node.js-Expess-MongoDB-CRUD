const express = require('express')
var router = express.Router()
const mongoose = require('mongoose')

const Employee = mongoose.model('Employee');

module.exports.employee = function(req,res) {
    res.render("employee/addOrEdit", {
        viewTitle: "İnsert Employee"
    });
}
 module.exports.record = function(req,res) {
     if(req.body._id == '') {
         insertRecord(req, res);
     } else {
        updateRecord(req, res);
     }

     function insertRecord(req,res) {
        var employee = new Employee()
        var param = req.body;
        employee.fullName = param.fullName;
        employee.email = param.email;
        employee.mobile = param.mobile;
        employee.city = param.city;

        employee.save( (err,doc) => {
            if(!err) {
                res.redirect("employee/list")
            } else {
                if( err.name == 'ValidationError') {
                    handleValidationError(err, param);
                    res.render("employee/addOrEdit", {
                        viewTitle:  "Insert Employee",
                        employee:   param
                    });
                }
            }
        });
     }

     function updateRecord(req, res) {

        Employee.findOneAndUpdate(
            {_id: param._id,},
            param,
            {new: true},
            (err,doc) => {
                if(!err) {
                    res.redirect('employee/list');
                } else {
                    iff( err.name == )
                }
            }
        )
     }
 }