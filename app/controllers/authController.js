const services = require('../services/services');

module.exports = {
    getToken :async  (req,res,next)=>{
        await services.authService.getToken().then((result)=>{
            if(result.status = true){
                res.send({
                    status: true,
                    data: {
                        token: result.token
                    },
                    message: 'token generated'
                })
            }
        }).catch((error)=>{
            console.log(error);
            res.send({
                status:false,
                message:' no token was generated'
            });
        })
    }
}