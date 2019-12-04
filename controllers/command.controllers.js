
const Command = require('../models/Command.model');
module.exports.create = async (req, res)=>{
    try{
        const errs = [];
    
        if(errs.length){
            res.status(404).json(errs)
        }else{
            const newCommand = new Command({...req.fields});
            newCommand.save();
            res.json(newCommand)
        }
   
    }catch(err){
        console.log(err)
    }
};
module.exports.getAll = async (req, res)=>{
    try{
        const vehicles = await Command.find();
        res.json(vehicles);
    }catch(err){
        console.log(err)
    }
};
module.exports.deleteById = async (req, res)=>{
    try{
        const vehicle = await Command.findById(req.params.id);
        await vehicle.remove()
        await res.json(vehicle);
    }catch(err){
        console.log(err)
    }
};
module.exports.updateById = async (req, res)=>{
    try{
        await Command.findOneAndUpdate({_id: req.params.id}, {...req.fields});
        const newCommand = await Command.findById(req.params.id)
        await res.json(newCommand);
    }catch(err){
        console.log(err)
    }
};
module.exports.findById = async (req, res)=>{
    try{
        const vehicle = await Command.findById(req.params.id);
        await res.json(vehicle);
    }catch(err){
        console.log(err)
    }
};