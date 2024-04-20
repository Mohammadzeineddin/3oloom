const mongoose=require("mongoose");
const Schema = mongoose.Schema;
const CustomerSchema3=new Schema({
    name2:{
        type:String,
        required:true
    },
    city2:{
        type:String,
        required:true
    },
    email2:{
        type:String,
        required:true
    },
    phone2:{
        type:String,
        required:true
    },
    price2:{
        type:String,
        required:true
    },
});
module.exports=mongoose.model("Customer3",CustomerSchema3)