'use strict';
var studentController = require('../controllers/studentController');

module.exports = function(app) {


    app.gett('/', studentController.employee);
    app.post('/', studentController.record);
    app.get('/list', studentController.list);
    app.get('/:id', studentController.addOrEdit);
    app.get('/delete/:id', studentController.delete)
}