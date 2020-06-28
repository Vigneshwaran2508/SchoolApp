var express = require('express');
var router = express.Router();
var mongoose=require('mongoose')
var mongoUrl="mongodb://amy:amy@cluster0-shard-00-00-iv7f7.mongodb.net:27017,cluster0-shard-00-01-iv7f7.mongodb.net:27017,cluster0-shard-00-02-iv7f7.mongodb.net:27017/School?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
let student = require('../Student');

router.post('/',async(req,res)=>{
    var con = await mongoose.connect(mongoUrl,{
        useNewUrlParser: true, useUnifiedTopology: 
        true
    })
    console.log("connected in delete")
    console.log(req.body.data)

    student.deleteOne({_id:mongoose.Types.ObjectId(req.body.data)})
        .then((response)=>{
            console.log(response)
            res.setHeader('content-type', 'application/json');
            res.status(201).json({
                message: "Student delete list successfully!",
                data:response
                })
        })
        .catch((err)=>{
            res.status(500).json({
                error:err
                })
        })

})
module.exports = router;