const validator = require('validator');

module.exports.register = (req, res, next)=>{
    const errs = {};
    const data = req.fields;
    if(!validator.isLength(data.login, {min: 4, max: 40})){
        errs.login = 'Tên đăng nhập phải bao gồm từ 4 đến 40 kí tự'
    };
    if(validator.isEmpty(data.login)){
        errs.login = 'Bạn chưa nhập tên đăng nhập'
    };
    if(validator.isEmpty(data.type)){
        errs.type = 'Bạn chưa chọn loại'
    };
    if(!validator.isLength(data.password, {min: 6, max: 30})){
        errs.password = 'Mật khẩu phải bao gồm từ 6 đến 30 kí tự'
    };
    if(validator.isEmpty(data.password)){
        errs.password = 'Bạn chưa nhập mật khẩu'
    };
    if(!validator.equals(data.password, data.password2)){
        errs.password2 = 'Mật khẩu không khớp'
    };
    if(validator.isEmpty(data.password2)){
        errs.password2 = 'Bạn chưa xác nhận mật khẩu'
    };
    if(Object.keys(errs).length){
        res.status(404).json(errs)
    }else{next()};   
};
module.exports.login = (req, res, next)=>{
    const errs = {};
    const data = req.fields;
    
    if(!validator.isLength(data.login, {min: 4, max: 40})){
        errs.login = 'Tên đăng nhập phải bao gồm từ 4 đến 40 kí tự'
    };
    if(validator.isEmpty(data.login)){
        errs.login = 'Bạn chưa nhập tên đăng nhập'
    };
    if(!validator.isLength(data.password, {min: 6, max: 30})){
        errs.password = 'Mật khẩu phải bao gồm từ 6 đến 30 kí tự'
    };
    if(validator.isEmpty(data.password)){
        errs.password2 = 'Bạn chưa xác nhận mật khẩu'
    };
    if(Object.keys(errs).length){
        res.status(404).json(errs)
    }else{next()};   
}
    
