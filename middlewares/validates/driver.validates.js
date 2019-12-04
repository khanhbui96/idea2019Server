const validator = require('validator');

module.exports.create = (req, res, next)=>{
    const errs = {};
    const data = req.fields;
    if(validator.isEmpty(data.name)){
        errs.name = 'Bạn phải nhập thông tin vào mục này'
    };
    if(validator.isEmpty(data.birthday)){
        errs.birthday = 'Bạn phải nhập thông tin vào mục này'
    };
    if(validator.isEmpty(data.number)){
        errs.number = 'Bạn phải nhập thông tin vào mục này'
    };
    if(validator.isEmpty(data.start)){
        errs.start = 'Bạn phải nhập thông tin vào mục này'
    };
    if(validator.isEmpty(data.level)){
        errs.level = 'Bạn phải nhập thông tin vào mục này'
    };
    if(validator.isEmpty(data.end)){
        errs.end = 'Bạn phải nhập thông tin vào mục này'
    };
    if(validator.isEmpty(data.rank)){
        errs.rank = 'Bạn phải nhập thông tin vào mục này'
    };
    if(validator.isEmpty(data.position)){
        errs.position = 'Bạn phải nhập thông tin vào mục này'
    };
    if(validator.isEmpty(data.unit)){
        errs.unit = 'Bạn phải nhập thông tin vào mục này'
    };
    if(validator.isEmpty(data.registArea)){
        errs.registArea = 'Bạn phải nhập thông tin vào mục này'
    };
    if(validator.isEmpty(data.degree)){
        errs.degree= 'Bạn phải nhập thông tin vào mục này'
    };
    if(validator.isEmpty(data.dateReceive)){
        errs.dateReceive= 'Bạn phải nhập thông tin vào mục này'
    };
    if(Object.keys(errs).length){
        res.status(404).json(errs)
    }else{next()};   
};
    
