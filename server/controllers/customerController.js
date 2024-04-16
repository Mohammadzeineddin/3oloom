const Customer1=require("../models/Customer")
const Customer2=require("../models/Customer2.js")
const mongoose=require("mongoose")

exports.homepage=async(req,res)=>{
    
    
    const locals={
        
        title : "جنوبنا",
        description:"مرحبًا بكم في موقعنا الذي يهدف إلى تقديم الدعم والمساعدة للأشخاص في جنوب لبنان. نحن هنا لنكون جزءًا من رحلتكم نحو التحسين والتطوير. سواء كنتم تبحثون عن مكان للسكن ، مواد غذائية ، أو معلومات حول المجتمع المحلي و احدث الاخبار، فإننا هنا لنقدم لكم المساعدة والإرشاد. تفضلوا بالاطلاع على محتوانا ولا تترددوا في التواصل معنا لأي استفسار أو مساعدة تحتاجونها"
    }
    res.render("main-Home",locals)
}
exports.login=async(req,res)=>{
    const locals={
        title : "تسجيل",
        description:"مرحبًا بكم في موقعنا الذي يهدف إلى تقديم الدعم والمساعدة للأشخاص في جنوب لبنان. نحن هنا لنكون جزءًا من رحلتكم نحو التحسين والتطوير. سواء كنتم تبحثون عن مكان للسكن ، مواد غذائية ، أو معلومات حول المجتمع المحلي و احدث الاخبار، فإننا هنا لنقدم لكم المساعدة والإرشاد. تفضلوا بالاطلاع على محتوانا ولا تترددوا في التواصل معنا لأي استفسار أو مساعدة تحتاجونها"
    } 
    res.render("customer/login",locals)
}
exports.map=async(req,res)=>{
    const locals={
        title : "تسجيل",
        description:"مرحبًا بكم في موقعنا الذي يهدف إلى تقديم الدعم والمساعدة للأشخاص في جنوب لبنان. نحن هنا لنكون جزءًا من رحلتكم نحو التحسين والتطوير. سواء كنتم تبحثون عن مكان للسكن ، مواد غذائية ، أو معلومات حول المجتمع المحلي و احدث الاخبار، فإننا هنا لنقدم لكم المساعدة والإرشاد. تفضلوا بالاطلاع على محتوانا ولا تترددوا في التواصل معنا لأي استفسار أو مساعدة تحتاجونها"
    } 
    res.render("customer/map",locals)
}
exports.me7=async(req,res)=>{
    const locals={
        title : "تسجيل",
        description:"مرحبًا بكم في موقعنا الذي يهدف إلى تقديم الدعم والمساعدة للأشخاص في جنوب لبنان. نحن هنا لنكون جزءًا من رحلتكم نحو التحسين والتطوير. سواء كنتم تبحثون عن مكان للسكن ، مواد غذائية ، أو معلومات حول المجتمع المحلي و احدث الاخبار، فإننا هنا لنقدم لكم المساعدة والإرشاد. تفضلوا بالاطلاع على محتوانا ولا تترددوا في التواصل معنا لأي استفسار أو مساعدة تحتاجونها"
    } 
    const messages = await req.flash("info");
    res.render("customer/me7",{messages,locals})
}
exports.talabAjar=async(req,res)=>{
    const locals={
        title : "تسجيل",
        description:"مرحبًا بكم في موقعنا الذي يهدف إلى تقديم الدعم والمساعدة للأشخاص في جنوب لبنان. نحن هنا لنكون جزءًا من رحلتكم نحو التحسين والتطوير. سواء كنتم تبحثون عن مكان للسكن ، مواد غذائية ، أو معلومات حول المجتمع المحلي و احدث الاخبار، فإننا هنا لنقدم لكم المساعدة والإرشاد. تفضلوا بالاطلاع على محتوانا ولا تترددوا في التواصل معنا لأي استفسار أو مساعدة تحتاجونها"
    }
    res.render("customer/talabAjar",locals)
}
exports.talabAkl=async(req,res)=>{
    const locals={
        title : "تسجيل",
        description:"مرحبًا بكم في موقعنا الذي يهدف إلى تقديم الدعم والمساعدة للأشخاص في جنوب لبنان. نحن هنا لنكون جزءًا من رحلتكم نحو التحسين والتطوير. سواء كنتم تبحثون عن مكان للسكن ، مواد غذائية ، أو معلومات حول المجتمع المحلي و احدث الاخبار، فإننا هنا لنقدم لكم المساعدة والإرشاد. تفضلوا بالاطلاع على محتوانا ولا تترددوا في التواصل معنا لأي استفسار أو مساعدة تحتاجونها"
    }
    res.render("customer/talabAkl",locals)
}
exports.talabatAjar=async(req,res)=>{
    const locals={
        title : "تسجيل",
        description:"مرحبًا بكم في موقعنا الذي يهدف إلى تقديم الدعم والمساعدة للأشخاص في جنوب لبنان. نحن هنا لنكون جزءًا من رحلتكم نحو التحسين والتطوير. سواء كنتم تبحثون عن مكان للسكن ، مواد غذائية ، أو معلومات حول المجتمع المحلي و احدث الاخبار، فإننا هنا لنقدم لكم المساعدة والإرشاد. تفضلوا بالاطلاع على محتوانا ولا تترددوا في التواصل معنا لأي استفسار أو مساعدة تحتاجونها"
    }
    try{
        const customers=await Customer1.find({}).limit(1000);
        res.render("customer/talabatAjar",{locals,customers})
    }catch(error){
console.log(error)
    }

}
exports.talbatAkl=async(req,res)=>{
    const locals={
        title : "تسجيل",
        description:"مرحبًا بكم في موقعنا الذي يهدف إلى تقديم الدعم والمساعدة للأشخاص في جنوب لبنان. نحن هنا لنكون جزءًا من رحلتكم نحو التحسين والتطوير. سواء كنتم تبحثون عن مكان للسكن ، مواد غذائية ، أو معلومات حول المجتمع المحلي و احدث الاخبار، فإننا هنا لنقدم لكم المساعدة والإرشاد. تفضلوا بالاطلاع على محتوانا ولا تترددوا في التواصل معنا لأي استفسار أو مساعدة تحتاجونها"
    }
    try{
        const customers2=await Customer2.find({}).limit(1000);
        res.render("customer/talbatAkl",{locals,customers2})
    }catch(error){
console.log(error)
    }
}
exports.homedaa=async(req,res)=>{
    const locals={
        title : "تسجيل",
        description:"مرحبًا بكم في موقعنا الذي يهدف إلى تقديم الدعم والمساعدة للأشخاص في جنوب لبنان. نحن هنا لنكون جزءًا من رحلتكم نحو التحسين والتطوير. سواء كنتم تبحثون عن مكان للسكن ، مواد غذائية ، أو معلومات حول المجتمع المحلي و احدث الاخبار، فإننا هنا لنقدم لكم المساعدة والإرشاد. تفضلوا بالاطلاع على محتوانا ولا تترددوا في التواصل معنا لأي استفسار أو مساعدة تحتاجونها"
    }
    res.render("customer/homeDaa",locals)
}
exports.postTalab=async(req,res)=>{
    console.log(req.body)
    const newCustomer1= new Customer1({
        name:req.body.name,
        city:req.body.city,
        email:req.body.email,
        phone:req.body.phone,
        price:req.body.price,
    })
    try{
        await Customer1.create(newCustomer1);
        await req.flash("info","لقد تم عرض طلبك")
        res.redirect("/me7")
    }catch(error){
console.log(error);
    }

}
exports.postAkl=async(req,res)=>{
    console.log(req.body)
    const newCustomer2= new Customer2({
        aklName:req.body.aklName,
        aklCity:req.body.aklCity,
        aklEmail:req.body.aklEmail,
        aklPhone:req.body.aklPhone,
        foodType:req.body.foodType,
    })
    try{
        await Customer2.create(newCustomer2);
        await req.flash("info","لقد تم عرض طلبك")
        res.redirect("/me7")
    }catch(error){
console.log(error);
    }

}