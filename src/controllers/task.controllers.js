const Task = require("../models/task.models");

const createTask = async (req, res, next) => {
  const { titulo, description } = req.body;
  try {
    const newTask = await Task.create(titulo, description);
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
};

const getTasks = async (req, res, next) => {
  try {
    const getTasks = await Task.getAllTask();
    res.status(200).json(getTasks);
  } catch (error) {
    next(error);
  }
};

const getTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getTask = await Task.getTask(id);
    res.status(200).json(getTask);
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const resultDelete = await Task.deleteTask(id);
    res.status(200).json(resultDelete);
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { titulo, description } = req.body;
    const result = await Task.updateTask(id, titulo, description);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
};
