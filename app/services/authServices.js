const jwt = require('jsonwebtoken');
/* const fs = require('fs')
const dotenv = require('dotenv')
const envConfig = dotenv.parse(fs.readFileSync('../config/.env')); */

console.log();
module.exports = {
    getToken : ()=>{
        
        return new Promise((resolve,reject)=>{
            try {
                var token = jwt.sign({sample: 'payload'},'secret',{ expiresIn: 30});
                console.log(token);
                var data = {
                    status: true,
                    token: token
                }
                resolve(data);
            } catch (error) {
                reject(error);
            }
        })
    },
    varifyToken :(token)=>{
        return new Promise ((resolve,reject)=>{
            
                jwt.verify(token,'secret',(err,decoded)=>{
                    if(!err){
                        console.log(decoded);
                        resolve(decoded);
                    }else{
                        reject(err);
                    }
                });
               
          
        })
    }
}