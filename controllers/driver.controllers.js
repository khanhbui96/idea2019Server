
const Driver = require('../models/Driver.model');
module.exports.create = async (req, res)=>{
    try{
        const errs = {};
        const number = await Driver.findOne({number: req.fields.number});
        if(number){
            errs.number = 'Số giấy phép đã được đăng kí'
        };
        if(Object.keys(errs).length){
            res.status(404).json(errs)
        }else{
            const newDriver = new Driver({...req.fields});
            newDriver.save();
            res.json(newDriver)
        }
   
    }catch(err){
        console.log(err)
    }
};
module.exports.getAll = async (req, res)=>{
    try{
        const vehicles = await Driver.find();
        res.json(vehicles);
    }catch(err){
        console.log(err)
    }
};
module.exports.deleteById = async (req, res)=>{
    try{
        const vehicle = await Driver.findById(req.params.id);
        await vehicle.remove()
        await res.json(vehicle);
    }catch(err){
        console.log(err)
    }
};
module.exports.updateById = async (req, res)=>{
    console.log(req.fields)
    try{
        await Driver.findOneAndUpdate({_id: req.params.id}, {...req.fields});
        const newDriver = await Driver.findById(req.params.id)
        await res.json(newDriver);
    }catch(err){
        console.log(err)
    }
};
module.exports.findById = async (req, res)=>{
    try{
        const vehicle = await Driver.findById(req.params.id);
        await res.json(vehicle);
    }catch(err){
        console.log(err)
    }
};