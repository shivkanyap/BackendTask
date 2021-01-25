const express=require('express')
const router=express.Router()
const {User}=require('../Model/User')
const { authenticateUser}=require('../Middleware/authentication')
const _=require('lodash')

// http://localhost:3005/users/register
router.post('/register',(req,res)=>{
    const body=req.body
    const user =new User(body)
    console.log(body)
    user.save()
    .then(user=>res.send(user))
    .catch(err=>res.send(err))
})
// http://localhost:3005/users/login
router.post('/login',(req,res)=>{
    const body=req.body
    User.findByCredentials(body.email,body.password)
    .then((user)=>{
        return user.generateToken()
    })
    .then((token)=>{
        res.send({token})
    })
    .catch((err)=>{
        res.send(err)
    })    
})

// http://localhost:3005/users/logout
router.delete('/logout', authenticateUser,function(req,res){
    const {user,token}=req
    User.findByIdAndUpdate(user._id,{$pull:{tokens:{token:token}}})
    .then(function(user){
        res.send({notice:'successfully logout...'})
    })
    .catch(function(err){
        res.send(err)
    })
})





module.exports={
    usersRouter:router
}