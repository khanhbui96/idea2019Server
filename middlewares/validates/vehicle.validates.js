const validator = require('validator');

module.exports.create = (req, res, next)=>{
    const errs = {};
    const data = req.fields;
    if(validator.isEmpty(data.brand)){
        errs.brand = 'Bạn phải nhập thông tin vào mục này'
    };
    if(validator.isEmpty(data.type)){
        errs.type = 'Bạn phải nhập thông tin vào mục này'
    };
    if(validator.isEmpty(data.limit)){
        errs.limit = 'Bạn phải nhập thông tin vào mục này'
    };
    if(validator.isEmpty(data.number)){
        errs.number = 'Bạn phải nhập thông tin vào mục này'
    };
    if(validator.isEmpty(data.fuel)){
        errs.fuel = 'Bạn phải nhập thông tin vào mục này'
    };
    if(validator.isEmpty(data.date)){
        errs.date = 'Bạn phải nhập thông tin vào mục này'
    };
    if(validator.isEmpty(data.sourse)){
        errs.sourse = 'Bạn phải nhập thông tin vào mục này'
    };
    if(validator.isEmpty(data.chassis)){
        errs.chassis = 'Bạn phải nhập thông tin vào mục này'
    };
    if(validator.isEmpty(data.engine)){
        errs.engine = 'Bạn phải nhập thông tin vào mục này'
    };
    if(validator.isEmpty(data.owned)){
        errs.owned = 'Bạn phải nhập thông tin vào mục này'
    };
    if(validator.isEmpty(data.status)){
        errs.status= 'Bạn phải nhập thông tin vào mục này'
    };
    if(validator.isEmpty(data.productDate)){
        errs.productDate= 'Bạn phải nhập thông tin vào mục này'
    };
    if(validator.isEmpty(data.startDate)){
        errs.startDate = 'Bạn phải nhập thông tin vào mục này'
    };
    if(validator.isEmpty(data.level)){
        errs.level= 'Bạn phải nhập thông tin vào mục này'
    };
    if(validator.isEmpty(data.uses)){
        errs.uses = 'Bạn phải nhập thông tin vào mục này'
    };
    if(Object.keys(errs).length){
        res.status(404).json(errs)
    }else{next()};   
};
    
