const mongoose=require('mongoose')
const validator=require('validator')
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')
const Schema=mongoose.Schema

const addressSchema=new Schema({
    address:{
        cityName:{
          type:String,
          default:null
        },
        state:{
          type:String,
          default:null
        },
        country:{
          type:String,
          default:null 
        },
        postalCode:{
          type:Number,
          default:null
        },
        
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
})

const Address = mongoose.model('Address', addressSchema);
module.exports={
    Address
}