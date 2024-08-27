const Department = require('../models/department');

exports.getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    res.status(200).json(departments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createDepartment = async (req, res) => {
  try {
    const { name } = req.body;
    const department = new Department({ name });
    await department.save();
    res.status(201).json(department);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteDepartment = async (req, res) => {
  try {
    const department = await Department.findById(req.params.id);
    if (!department) return res.status(404).json({ message: 'Department not found' });
    await department.remove();
    res.status(200).json({ message: 'Department deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
