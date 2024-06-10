const LoginSchema = require("../models/incomeModels")

exports.addlogin = async (req, res) =>{
    const {name , password} = req.body 

    const login =  LoginSchema({
       name,
       password 
    })

    try{
       
if(!name || !password){
    return res.status(400).json({message : "All fields are required!"})
}

if(!name ){
    return res.status(400).json({message : "Please Enter Username"})
}

if(!password){
    return res.status(400).json({message : "Please Enter Password"}) 
}


await login.save()
res.status(200).json({message: "Login Successful"})
    }catch (error){
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }

   console.log(login)
}

exports.getLogin = async (req,res)=>{
    try{
        const login = await LoginSchema.find().sort({createdAt: -1})
        res.status(200).json(login)
    }catch (error){
       res.status(500).json({message: 'Server Error'})
    }
}

exports.deleteLogin = async (req,res)=>{
const {id}  = req.params;
LoginSchema.findByIdAndDelete(id)
.then((login) =>{
    res.status(200).json({message: "Id Deleted"})
})
.catch ((err) =>{
    res.status({message: "Server failed"})
})
}