
const MotoBike = require('../models/MotoBike.model');
module.exports.create = async (req, res)=>{
    try{
        const errs = [];    
        if(errs.length){
            res.status(404).json(errs)
        }else{
            const newMotoBike = new MotoBike({...req.fields});
            newMotoBike.save();
            res.json(newMotoBike)
        }
   
    }catch(err){
        console.log(err)
    }
};
module.exports.getAll = async (req, res)=>{
    try{
        const defineLevels = await MotoBike.find();
        res.json(defineLevels);
    }catch(err){
        console.log(err)
    }
};
module.exports.deleteById = async (req, res)=>{
    try{
        const defineLevel = await MotoBike.findById(req.params.id);
        await defineLevel.remove()
        await res.json(defineLevel);
    }catch(err){
        console.log(err)
    }
};
module.exports.updateById = async (req, res)=>{
    try{
        await MotoBike.findOneAndUpdate({_id: req.params.id}, {...req.fields});
        const newMotoBike = await MotoBike.findById(req.params.id)
        await res.json(newMotoBike);
    }catch(err){
        console.log(err)
    }
};
module.exports.findById = async (req, res)=>{
    try{
        const motoBike = await MotoBike.findById(req.params.id);
        await res.json(motoBike);
    }catch(err){
        console.log(err)
    }
};