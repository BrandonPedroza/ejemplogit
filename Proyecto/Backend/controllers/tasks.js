const Task = require('../models/task');

async function main(req,res){
   
    return res.status(200).json({
        success: true,
        message: process.env.CARNET
    })
}

async function getTask(req,res){
   
    const tasks = await Task.find()
    try {
        return res.status(200).json({
            success: true,
            data: tasks,
            message: process.env.CARNET
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: [],
            message: process.env.CARNET
        });
    } 
}

async function  postTask(req,res){
    
    req.body.procesado = process.env.CARNET
    const tasks = await Task.create(req.body)
    
    try {
        return res.status(200).json({
            success: true,
            data: tasks,
            message: process.env.CARNET
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: [],
            message: process.env.CARNET
        });
    }
}

async function getTaskCarne(req,res){
    const { carne } = req.params;
    const tasks = await Task.find({ carne: carne })
    try {
        return res.status(200).json({
            success: true,
            data: tasks,
            message: process.env.CARNET
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: [],
            message: process.env.CARNET
        });
    } 
}

module.exports = {
    main:main,
    getTask:getTask,
    postTask:postTask,
    getTaskCarne:getTaskCarne
}