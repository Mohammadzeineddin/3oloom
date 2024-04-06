const Customer=require("../models/Customer")
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
exports.ooroodAjar=async(req,res)=>{
    const locals={
        title : "تسجيل",
        description:"مرحبًا بكم في موقعنا الذي يهدف إلى تقديم الدعم والمساعدة للأشخاص في جنوب لبنان. نحن هنا لنكون جزءًا من رحلتكم نحو التحسين والتطوير. سواء كنتم تبحثون عن مكان للسكن ، مواد غذائية ، أو معلومات حول المجتمع المحلي و احدث الاخبار، فإننا هنا لنقدم لكم المساعدة والإرشاد. تفضلوا بالاطلاع على محتوانا ولا تترددوا في التواصل معنا لأي استفسار أو مساعدة تحتاجونها"
    }
    try{
        const customers=await Customer.find({}).limit(1000);
        res.render("customer/ooroodAjar",{locals,customers})
    }catch(error){
console.log(error)
    }

}
exports.homedaa=async(req,res)=>{
    const locals={
        title : "تسجيل",
        description:"مرحبًا بكم في موقعنا الذي يهدف إلى تقديم الدعم والمساعدة للأشخاص في جنوب لبنان. نحن هنا لنكون جزءًا من رحلتكم نحو التحسين والتطوير. سواء كنتم تبحثون عن مكان للسكن ، مواد غذائية ، أو معلومات حول المجتمع المحلي و احدث الاخبار، فإننا هنا لنقدم لكم المساعدة والإرشاد. تفضلوا بالاطلاع على محتوانا ولا تترددوا في التواصل معنا لأي استفسار أو مساعدة تحتاجونها"
    }
    res.render("customer/homedaa",locals)
}
exports.postTalab=async(req,res)=>{
    console.log(req.body)
    const newCustomer= new Customer({
        name:req.body.name,
        city:req.body.city,
        email:req.body.email,
        phone:req.body.phone,
        price:req.body.price,
    })
    try{
        await Customer.create(newCustomer);
        await req.flash("info","لقد تم عرض طلبك")
        res.redirect("/me7")
    }catch(error){
console.log(error);
    }

}