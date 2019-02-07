
const services = require('../services/services');

module.exports = {
    registerUser : (req,res,next)=>{
        // check user exists
        // if !user create 
        // else return 
        var user = {
            email : req.body.email,
            password : req.body.password
        };
        console.log(user);

        services.userService.createUser(user).then((result)=>{
            console.log(result);
            res.send({
                status: true,
                data: result,
                message: "user created"
            });
        }).catch((err)=>{
            console.log(err);
            res.send({
                status: false,
                error: err,
                message : 'error'
            });
        })
    },

    loginUser : (req,res,next)=>{
        // login the user
        services.userService.findUserByEmailAndPassword(req.body.email,req.body.password).then((result)=>{
            res.send({
                status: true,
                data : result,
                message : 'user exists'
            });
        }).catch((err)=>{
            console.log(err);
            res.send({
                status: false,
                error : err,
                message : 'user dose not exists'
            });
        })
        
    },
    getUserById : (req,res,next)=>{
        // login the user
        services.userService.findUserById(req.body.id).then((result)=>{
            res.send({
                status: true,
                data : result,
                message : 'user exists'
            });
        }).catch((err)=>{
            console.log(err);
            res.send({
                status: false,
                error : err,
                message : 'user dose not exists'
            });
        })
        
    }
}

