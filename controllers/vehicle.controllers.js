
const Vehicle = require('../models/Vehicle.model');
module.exports.create = async (req, res)=>{
    try{
        const errs = {};
        const number = await Vehicle.findOne({number: req.fields.number});
        const engine = await Vehicle.findOne({engine: req.fields.engine});
        const chassis = await Vehicle.findOne({chassis: req.fields.chassis});
        if(number){
            errs.number = 'Số đăng kí đã được đăng kí'
        };
        if(engine){
            errs.engine = 'Số máy đã được đăng kí'
        };
        if(chassis){
            errs.chassis = 'Số khung đã được đăng kí'
        };
        console.log(errs)
    if(Object.keys(errs).length){
        res.status(404).json(errs)
    }else{
        const newVehicle = new Vehicle({
            ...req.fields,
            verify: {
                start: '',
                end: ''
            }
        });
        newVehicle.save();
        res.json(newVehicle)
    }
   
    }catch(err){
        console.log(err)
    }
};
module.exports.getAll = async (req, res)=>{
    try{
        const vehicles = await Vehicle.find();
        res.json(vehicles);
    }catch(err){
        console.log(err)
    }
};
module.exports.deleteById = async (req, res)=>{
    try{
        const vehicle = await Vehicle.findById(req.params.id);
        await vehicle.remove()
        await res.json(vehicle);
    }catch(err){
        console.log(err)
    }
};
module.exports.updateById = async (req, res)=>{
    try{
        await Vehicle.findOneAndUpdate({_id: req.params.id}, {...req.fields});
        const newVehicle = await Vehicle.findById(req.params.id)
        await res.json(newVehicle);
    }catch(err){
        console.log(err)
    }
};
module.exports.findById = async (req, res)=>{
    try{
        const vehicle = await Vehicle.findById(req.params.id);
        await res.json(vehicle);
    }catch(err){
        console.log(err)
    }
};