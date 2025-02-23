const DataModel = require('../models/DataModel');

// Create Data
exports.createData = async (req, res, next) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({ error: 'Name and email are required' });
        }
        const newData = await DataModel.create({ name, email });
        res.status(201).json({ message: 'Data saved successfully', data: newData });
    } catch (error) {
        next(error);
    }
};

// Get All Data
exports.getAllData = async (req, res, next) => {
    try {
        const data = await DataModel.find();
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};
