
const DefineLevel = require('../models/DefineLevel.model');
module.exports.create = async (req, res)=>{
    try{
        const errs = [];    
        if(errs.length){
            res.status(404).json(errs)
        }else{
            const newDefineLevel = new DefineLevel({...req.fields});
            newDefineLevel.save();
            res.json(newDefineLevel)
        }
   
    }catch(err){
        console.log(err)
    }
};
module.exports.getAll = async (req, res)=>{
    try{
        const defineLevels = await DefineLevel.find();
        res.json(defineLevels);
    }catch(err){
        console.log(err)
    }
};
module.exports.deleteById = async (req, res)=>{
    try{
        const defineLevel = await DefineLevel.findById(req.params.id);
        await defineLevel.remove()
        await res.json(defineLevel);
    }catch(err){
        console.log(err)
    }
};
module.exports.updateById = async (req, res)=>{
    try{
        await DefineLevel.findOneAndUpdate({_id: req.params.id}, {...req.fields});
        const newDefineLevel = await DefineLevel.findById(req.params.id)
        await res.json(newDefineLevel);
    }catch(err){
        console.log(err)
    }
};
module.exports.findById = async (req, res)=>{
    try{
        const DefineLevel = await DefineLevel.findById(req.params.id);
        await res.json(DefineLevel);
    }catch(err){
        console.log(err)
    }
};