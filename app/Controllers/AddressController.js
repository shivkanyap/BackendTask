const express=require('express')
const router=express.Router()
const {Address}=require('../Model/Address')
const { authenticateUser}=require('../Middleware/authentication')


router.post('/add',authenticateUser,(req,res)=>{
    const body=req.body
    const address =new Address(body)
    console.log(body)
    address.save()
    .then(address=>res.send(address))
    .catch(err=>res.send(err))
})

// http://localhost:3005/address/updateaddress/:id
router.patch('/updateaddress/:id',authenticateUser,(req,res)=>{
    const id=req.params.id
    const body=req.body
    Address.findByIdAndUpdate({_id:id},body,{new:true,runValidators:true})
    .then(adres=>{
        res.send(adres)
    })
    .catch(err=>{
        res.send(err)
    })
   
})

module.exports={
    addressRouter:router
}