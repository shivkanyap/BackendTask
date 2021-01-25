
const express = require("express")
const _ = require("lodash")
const imageThumbnail = require('image-thumbnail');
const router = express.Router()
const { authenticateUser}=require('../Middleware/authentication')


// http://localhost:3005/image/thumbnail

router.post('/thumbnail',authenticateUser,async(req,res,next)=>{
    
let options = { width: 50, height: 50, responseType: 'base64', jpegOptions: { force:true, quality:90 } }
const imgpath=req.body.imgpath

try {
    const thumbnail = await imageThumbnail({ uri:imgpath })
   
    res.send(thumbnail)
} catch (err) {
    
    res.send(err)
}
})

module.exports={
    imageRouter:router
}