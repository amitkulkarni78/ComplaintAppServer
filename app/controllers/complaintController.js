
const services = require('../services/services');

module.exports = {
    registerComplaint : (req,res,next)=>{
        // check user exists
        // if !user create 
        // else return 
        var complaint = {
            title : req.body.title,
            description : req.body.description,
            status: req.body.status,
            email : req.body.userEmail,
            actionLog : req.body.actionLog 
        };
        console.log(complaint);

        services.complaintService.createComplaint(complaint).then((result)=>{
            console.log(result);
            res.send({
                status: true,
                data: result,
                message: "complaint created"
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
    getAllComplaints : (req,res,next)=>{
        services.complaintService.getAllComplaints().then((result)=>{
            res.send({
                status: true,
                data : result,
                message : 'got all complaints'
            });
        }).catch((err)=>{
            res.send({
                status: false,
                error : err,
                message : 'error fetching the database'
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
    updateComplaint : (req,res,next)=>{

        var complaint = {};

        if(req.body.title){
            complaint.title = req.body.title;
        }if(req.body.description){
            complaint.description = req.body.description;
        }if(req.body.status){
            complaint.status = req.body.status;
        }if(req.body.email){
            complaint.email = req.body.email;
        }if(req.body.actionLog){
            
        } 
        complaint.actionLog = "complaint was updated by "+req.body.email;
        

        

        services.complaintService.updateComplaintById(req.params['id'],complaint).then((result)=>{
            res.send({
                status : true,
                data: result,
                message : 'complaint updated' 
            });
        }).catch((err)=>{
            console.log(err);
            res.send({
                status:false,
                error:err,
                message: 'error while updating complaint'
            });
        })
    }
}
