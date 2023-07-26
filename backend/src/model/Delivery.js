const mongoose = require('mongoose');
const DeliverySchema = new mongoose.Schema({
    name:{
        type:String
    },
    organization:{
        type:String
    },
    mobile:{
        type:Number,
        maxlength:500 
    },
    email:{
        type:String,
    },
    message:{
        type:String
    },
    Numberofitems:{
        type:Number
    },
    Date:{
        type:Date
    }
   
})
const Delivery = new mongoose.model('Delivery',DeliverySchema);
module.exports = Delivery;
