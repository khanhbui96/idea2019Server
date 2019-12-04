const validator = require('validator');

module.exports.create = (req, res, next)=>{
    const errs = {};
    const data = req.fields;
    if(validator.isEmpty(data.name)){
        errs.name = 'Bạn phải nhập thông tin vào mục này'
    };
    if(validator.isEmpty(data.unit)){
        errs.unit = 'Bạn phải nhập thông tin vào mục này'
    };
    if(validator.isEmpty(data.address)){
        errs.address = 'Bạn phải nhập thông tin vào mục này'
    };
    if(validator.isEmpty(data.type)){
        errs.type = 'Bạn phải nhập thông tin vào mục này'
    };
    if(validator.isEmpty(data.model)){
        errs.model = 'Bạn phải nhập thông tin vào mục này'
    };
    if(validator.isEmpty(data.color)){
        errs.color = 'Bạn phải nhập thông tin vào mục này'
    };
    if(validator.isEmpty(data.license)){
        errs.license = 'Bạn phải nhập thông tin vào mục này'
    };
    if(validator.isEmpty(data.duration)){
        errs.duration = 'Bạn phải nhập thông tin vào mục này'
    };
    if(Object.keys(errs).length){
        res.status(404).json(errs)
    }else{next()};
};
    
