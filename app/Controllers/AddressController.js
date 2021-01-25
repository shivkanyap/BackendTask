const express=require('express')
const router=express.Router()
const { applyOperation } = require('fast-json-patch');
// const applyOperation = require('fast-json-patch').applyOperation;
const {Address}=require('../Model/Address')
const { authenticateUser}=require('../Middleware/authentication')
const  jsonpatch =require('json-patch');
// import * as jsonpatch from 'fast-json-patch/index.mjs';


router.post('/add',authenticateUser,(req,res)=>{
    const body=req.body
    const address =new Address(body)
    console.log(body)
    address.save()
    .then(address=>res.send(address))
    .catch(err=>res.send(err))
})

// http://localhost:3005/address/updateaddress/
router.patch('/updateaddress',authenticateUser,(req,res)=>{
    
    var document=req.body.document
    var patch=req.body.patch
    document = jsonpatch.apply(document, patch).newDocument;
 
 
    if(document){
        res.send(document)
    }
    else(
        res.send('err')
    )
   
})

module.exports={
    addressRouter:router
}