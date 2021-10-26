const Asistencia = require('../models/asistencia');
const path = require('path');

// s3
const AWS = require('aws-sdk');
const aws_keys = require('./credenciales-aws');
var s3 = new AWS.S3(aws_keys.s3);
const { v4: uuidv4 } = require('uuid');

async function postAsistencia(req,res){
    let  idb = uuidv4();
    let ruta = `proyecto/${idb}${req.body.extension}`

    const paramsS3 = {
        Bucket: "redes2-g6",
        Key:  ruta,
        Body: Buffer.from(req.body.imagen,'base64'),
        ContentType: "image",
        ACL: 'public-read'
    }
    let result = await s3.putObject(paramsS3, (err,data)=>{
        if(err){
           return 'err'
        }else{
           return data
        }
    }).promise();
    if(result == 'err') return res.status(200).json({
                        success: false,
                        message: " Not upload image..."
    });
    req.body.imagen = `https://s3-us-east-2.amazonaws.com/redes2-g6/${ruta}`
    req.body.id = Math.floor(Math.random()*90000)+10000
    
    const asistencia = await Asistencia.create(req.body);
     
    return res.status(200).json({
        success: true,
        data: asistencia,
        message: process.env.CARNET
    });

}
async function getAsistencias(req, res){

    try {
        const asistencia = await Asistencia.find();
        return res.status(200).json({
            success: true,
            data: asistencia,
            message: process.env.CARNET
        });
    } catch (error) {
        return res.status(200).json({
            success: true,
            data: [],
            message: process.env.CARNET
        });
    }
}

async function getAsistenciaxCarne(req,res){
    try {
        console.log(req.params.id)
        const asistencia = await Asistencia.find({carne: req.params.id});
        return res.status(200).json({
            success: true,
            data: asistencia,
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

async function getAsistenciaxEvento(req,res){
    try {
        console.log(req.params.id)
        const asistencia = await Asistencia.find({id: req.params.id});
        return res.status(200).json({
            success: true,
            data: asistencia,
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
    postAsistencia: postAsistencia,
    getAsistencias: getAsistencias,
    getAsistenciaxCarne : getAsistenciaxCarne,
    getAsistenciaxEvento : getAsistenciaxEvento,
}