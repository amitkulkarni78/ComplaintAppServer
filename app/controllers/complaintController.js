
const services = require('../services/services');

module.exports = {
    registerComplaint : async (req,res,next)=>{
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

        await services.complaintService.createComplaint(complaint).then((result)=>{
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
    getAllComplaints : async (req,res,next)=>{
        await services.complaintService.getAllComplaints().then((result)=>{
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
     deleteComplaint : async (req,res,next)=>{
        await services.complaintService.deleteComplaint(req.params['id']).then((result)=>{
            res.send({
                status: true,
                data : result,
                message : 'complaint was deleted'
            });
        }).catch((err)=>{
            res.send({
                status: false,
                error : err,
                message : 'error fetching the database'
            });
        })
    },
    
    updateComplaint : async (req,res,next)=>{

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
            complaint.actionLog = req.body.actionLog;
        }else{

        } 
        
        

        

        await services.complaintService.updateComplaintById(req.params['id'],complaint).then((result)=>{
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

