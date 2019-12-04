const bcrypt = require('bcryptjs');
const User = require('../models/User.model');
const jwt = require('jsonwebtoken');
module.exports.register = (req, res)=>{
    const {login, type, password} = req.fields;
    const errs = {};
    User.findOne({login: login})
        .then(user=>{
            if(user){
                errs.login = 'Tên đăng nhập đã được sử dụng!'
                res.status(404).json(errs)
            }
            bcrypt.genSalt(10)
                .then(salt=>{
                    bcrypt.hash(password, salt)
                        .then(hash=>{
                            const newUser = new User({
                                login,
                                type,
                                password: hash
                            });
                            newUser.save()
                                .then(New=>res.json(New))
                                .catch(err=>console.log(err))
                        })
                        .catch(err=>console.log(err))
                })
                .catch(err=>console.log(err))
        })
        .catch(err=>console.log(err))
    
};
module.exports.login = async (req, res)=>{
    const {login, password} = req.fields;
    const errs = {};
    try{
        const user = await User.findOne({login: login});
        if(!user){
            errs.login = 'Tên đăng nhập không đúng!'
            res.status(404).json(errs)
        };
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            errs.password = 'Mật khẩu không đúng!';
            res.status(404).json(errs)
        };
        jwt.sign({ id: user._id }, process.env.SECRET, { expiresIn: '4h'}, function(err, token) {
            res.json({
                success: true,
                token: token,
                type: user.type
            })
          })
    }catch(err){
        console.log(err)
    }
};
module.exports.getCurrentUser = (req, res)=>{
    res.json(req.user);
}