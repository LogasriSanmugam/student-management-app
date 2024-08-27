const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/', studentController.getAllStudents);
router.get('/department/:departmentId', studentController.getStudentsByDepartment);
router.post('/', studentController.createStudent);
router.delete('/:id', studentController.deleteStudent);

module.exports = router;
