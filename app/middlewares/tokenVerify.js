const services = require('../services/services');
const jwt = require('jsonwebtoken');

module.exports = function(req,res,next){
        //if token validated then next
        //else send error
       
        if(!req.headers){
            res.send({
                status:false,
                message:'unauthorized'
            });
        }else{
            if(!req.headers.authrization){
                res.send({
                    status:false,
                    message:'unauthorized'
                });
            }else{
                var temp = req.headers.authrization;
                var temp = temp.split(' ');
                console.log(temp[1]);
                var token = temp[1];
                
               /* await services.authService.varifyToken(token).then((result)=>{
                    console.log(result);
                    next();
                }).catch((error)=>{
                    console.log(error);
                    res.send({
                        status:false,
                        message:'unauthorized'
                    });
                }) */

                
                jwt.verify(token,'secret',(err,decoded)=>{
                    if(!err){
                        console.log(decoded);
                       // resolve(decoded);
                       next();
                    }else{
                        //reject(err);
                        console.log(err);
                        res.send({
                            status:false,
                            message:'unauthorized'
                        });
                    }
                });
            }
        }

    }
