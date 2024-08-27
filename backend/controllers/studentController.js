const Student = require('../models/student');
const Department = require('../models/department');

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().populate('department');
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getStudentsByDepartment = async (req, res) => {
  try {
    const students = await Student.find({ department: req.params.departmentId });
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createStudent = async (req, res) => {
  try {
    const { name, registrationNumber, department } = req.body;
    const student = new Student({ name, registrationNumber, department });
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    await student.remove();
    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
