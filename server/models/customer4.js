const mongoose=require("mongoose");
const { options } = require("../routes/customer");
const Schema = mongoose.Schema;
const CustomerSchema4=new Schema({
    name3:{
        type:String,
        required:true
    },
    city3:{
        type:String,
        required:true
    },
    email3:{
        type:String,
        required:true
    },
    phone3:{
        type:String,
        required:true
    },
    shit3:{
        type:String,
        required:true
    },
});
module.exports=mongoose.model("Customer4",CustomerSchema4)