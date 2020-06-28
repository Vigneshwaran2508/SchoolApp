var express = require('express');
var router = express.Router();
var mongoose=require('mongoose')
var mongoUrl="mongodb://amy:amy@cluster0-shard-00-00-iv7f7.mongodb.net:27017,cluster0-shard-00-01-iv7f7.mongodb.net:27017,cluster0-shard-00-02-iv7f7.mongodb.net:27017/School?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"


let student = require('../Student');
router.post('/', async function(req, res, next) {
            console.log(req.body);
            var con = await mongoose.connect(mongoUrl,{
                useNewUrlParser: true, useUnifiedTopology: 
                true
            })
            console.log("connected in edit")

            var objForUpdate = {};

            if (req.body.name) objForUpdate.name = req.body.name;
            if (req.body.age) objForUpdate.age = req.body.age;
            if (req.body.std)objForUpdate.std= req.body.std;

            //before edit- There is no need for creating a new variable
            //var setObj = { $set: objForUpdate }

            objForUpdate = { $set: objForUpdate }

            

            student.update({_id:mongoose.Types.ObjectId(req.body.id)},objForUpdate,{multi:true,new:true})
                .then((docs)=>{
                    if(docs) {
                        res.status(201).json({
                            message: "Student updated successfully!",
                            data:docs
                            })
                    } else {
                        res.status(201).json({
                            message: "No such student exist!"
                            })
                    }
                }).catch((err)=>{
                    console.log(err),
                    res.status(500).json({
                    error: err
                    });
                })
  
  });

  module.exports = router;