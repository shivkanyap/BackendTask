const express=require('express')
const router=express.Router()
const {usersRouter}=require('../app/Controllers/UserController')
const { addressRouter} =require('../app/Controllers/AddressController')
const {imageRouter}=require('../app/Controllers/ImageController')

router.use('/users',usersRouter)

router.use('/address', addressRouter)
router.use('/image',imageRouter)

module.exports={
    routes:router
}