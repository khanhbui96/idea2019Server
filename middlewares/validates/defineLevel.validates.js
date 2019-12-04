const validator = require('validator');

module.exports.create = (req, res, next)=>{
    const errs = {};
    const data = req.fields;
    if(validator.isEmpty(data.label)){
        errs.label = 'Bạn phải nhập thông tin vào mục này'
    };
    if(validator.isEmpty(data.fluel)){
        errs.fluel = 'Bạn phải nhập thông tin vào mục này'
    };
    if(Object.keys(errs).length){
        res.status(404).json(errs)
    }else{next()};   
};
    
