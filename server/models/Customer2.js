const mongoose=require("mongoose");
const Schema = mongoose.Schema;
const CustomerSchema2=new Schema({
    aklName:{
        type:String,
        required:true
    },
    aklCity:{
        type:String,
        required:true
    },
    aklEmail:{
        type:String,
        required:true
    },
    aklPhone:{
        type:String,
        required:true
    },
    foodType:{
        type:String,
        required:true
    },
});
module.exports=mongoose.model("Customer2",CustomerSchema2)