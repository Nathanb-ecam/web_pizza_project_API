let User = require('../models/userModel');

exports.searchUserByCredentials = async function(req,res){
    await User.findOne({where:{name:req.body.name,password:req.body.password}} )
    .then(data =>
        req.data= data)
    .catch(err => {
        res.status(500).json({ message: err.message })
})
    }
    

exports.listUsers = function (req,res){
    User.findAll({ attributes: ['user_id','name', 'password','isAdmin','points']} )
        .then(data => {
            // console.log(data.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}

exports.searchUser = function(req,res){
    const id = req.params.id;
    if(!isNaN(id)){
        User.findOne({ where: { user_id: req.params.user_id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message})) 
    }else{
        res.status(400).json({message:"Parameter 'id' must be a number"})
    }
    
}

exports.createUser = async function(req,res){
    let user = User.build({ name: req.body.name, password: req.body.password,isAdmin:req.body.isAdmin,points:req.body.points })
    // save object in DB
    await user.save()
        .then(data => {
            res.json(data);
    })
        .catch(err => {
            res.status(500).json({ message: err.message })
    })
}


exports.deleteUser = function (req,res){
    const id = req.params.id;
    if(!isNaN(id)){
        User.destroy({ where: { user_id: req.params.id } })
        .then(data=>res.json(data))
        .catch(err=>res.status(500).json({message:err.message}))
    }else{
        res.status(400).json({message:"Parameter 'id' must be a number"})
    }
    
}




