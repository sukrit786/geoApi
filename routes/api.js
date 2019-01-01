const express = require('express');

const router = express.Router();
const Job = require('../models/jobs');

router.get('/abc', (req,res,next)=>{
    // Job.find({}).then((job)=>{
    //     res.send(job);
    // });
    Job.aggregate().near({
        near: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
        maxDistance: 10000,
        spherical: true,
        distanceField: "dist.calculated"
       }).then((job)=>{
            res.send(job)
        });
});
//update
router.put('/abc/:id', (req,res,next)=>{
    Job.findOneAndUpdate({_id:req.params.id},req.body).then((job) =>{
        res.send(job);
});
});
//add new player
router.post('/abc', (req,res,next)=>{
    Job.create(req.body).then((job)=>{
        res.send(job);
    }).catch(next);
});

router.delete('/abc/:id', (req,res,next)=>{
    Job.findOneAndDelete({_id:req.params.id}).then((job)=>{
        res.send(job);
    });
});

module.exports = router;