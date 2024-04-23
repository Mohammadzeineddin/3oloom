const Customer1=require("../models/Customer")
const Customer2=require("../models/Customer2.js")
const Customer3=require("../models/Customer3.js")
const Customer4=require("../models/customer4.js")
const mongoose=require("mongoose")

exports.homepage=async(req,res)=>{
    
    
    const locals={
        
        title : "جنوبنا",
        description:"مرحبًا بكم في موقعنا الذي يهدف إلى تقديم الدعم والمساعدة للأشخاص في جنوب لبنان. نحن هنا لنكون جزءًا من رحلتكم نحو التحسين والتطوير. سواء كنتم تبحثون عن مكان للسكن ، مواد غذائية ، أو معلومات حول المجتمع المحلي و احدث الاخبار، فإننا هنا لنقدم لكم المساعدة والإرشاد. "
    }
    res.render("main-Home",locals)
}
exports.login=async(req,res)=>{
    const locals={
        title : "تسجيل",
        description:"مرحبًا بكم في موقعنا الذي يهدف إلى تقديم الدعم والمساعدة للأشخاص في جنوب لبنان. نحن هنا لنكون جزءًا من رحلتكم نحو التحسين والتطوير. سواء كنتم تبحثون عن مكان للسكن ، مواد غذائية ، أو معلومات حول المجتمع المحلي و احدث الاخبار، فإننا هنا لنقدم لكم المساعدة والإرشاد."
    } 
    res.render("customer/login",locals)
}
exports.map=async(req,res)=>{
    const locals={
        title : "تسجيل",
        description:"مرحبًا بكم في موقعنا الذي يهدف إلى تقديم الدعم والمساعدة للأشخاص في جنوب لبنان. نحن هنا لنكون جزءًا من رحلتكم نحو التحسين والتطوير. سواء كنتم تبحثون عن مكان للسكن ، مواد غذائية ، أو معلومات حول المجتمع المحلي و احدث الاخبار، فإننا هنا لنقدم لكم المساعدة والإرشاد."
    } 
    res.render("customer/map",locals)
}
exports.me7=async(req,res)=>{
    const locals={
        title : "تسجيل",
        description:"مرحبًا بكم في موقعنا الذي يهدف إلى تقديم الدعم والمساعدة للأشخاص في جنوب لبنان. نحن هنا لنكون جزءًا من رحلتكم نحو التحسين والتطوير. سواء كنتم تبحثون عن مكان للسكن ، مواد غذائية ، أو معلومات حول المجتمع المحلي و احدث الاخبار، فإننا هنا لنقدم لكم المساعدة والإرشاد."
    } 
    const messages = await req.flash("info");
    res.render("customer/me7",{messages,locals})
}
exports.talabAjar=async(req,res)=>{
    const locals={
        title : "تسجيل",
        description:"مرحبًا بكم في موقعنا الذي يهدف إلى تقديم الدعم والمساعدة للأشخاص في جنوب لبنان. نحن هنا لنكون جزءًا من رحلتكم نحو التحسين والتطوير. سواء كنتم تبحثون عن مكان للسكن ، مواد غذائية ، أو معلومات حول المجتمع المحلي و احدث الاخبار، فإننا هنا لنقدم لكم المساعدة والإرشاد. "
    }
    res.render("customer/talabAjar",locals)
}
exports.talabAkl=async(req,res)=>{
    const locals={
        title : "تسجيل",
        description:"مرحبًا بكم في موقعنا الذي يهدف إلى تقديم الدعم والمساعدة للأشخاص في جنوب لبنان. نحن هنا لنكون جزءًا من رحلتكم نحو التحسين والتطوير. سواء كنتم تبحثون عن مكان للسكن ، مواد غذائية ، أو معلومات حول المجتمع المحلي و احدث الاخبار، فإننا هنا لنقدم لكم المساعدة والإرشاد."
    }
    res.render("customer/talabAkl",locals)
}
exports.aardAjar=async(req,res)=>{
    const locals={
        title : "تسجيل",
        description:"مرحبًا بكم في موقعنا الذي يهدف إلى تقديم الدعم والمساعدة للأشخاص في جنوب لبنان. نحن هنا لنكون جزءًا من رحلتكم نحو التحسين والتطوير. سواء كنتم تبحثون عن مكان للسكن ، مواد غذائية ، أو معلومات حول المجتمع المحلي و احدث الاخبار، فإننا هنا لنقدم لكم المساعدة والإرشاد. "
    }
    res.render("customer/aardAjar",locals)
}
exports.oroodAjar=async(req,res)=>{
    const locals={
        title : "تسجيل",
        description:"مرحبًا بكم في موقعنا الذي يهدف إلى تقديم الدعم والمساعدة للأشخاص في جنوب لبنان. نحن هنا لنكون جزءًا من رحلتكم نحو التحسين والتطوير. سواء كنتم تبحثون عن مكان للسكن ، مواد غذائية ، أو معلومات حول المجتمع المحلي و احدث الاخبار، فإننا هنا لنقدم لكم المساعدة والإرشاد."
    }
    try{ 
        const customers3=await Customer3.find({}).limit(1000);
        res.render("customer/oroodAjar",{locals,customers3})
    }catch(error){
console.log(error)
    }

}
exports.aardEs=async(req,res)=>{
    const locals={
        title : "تسجيل",
        description:"مرحبًا بكم في موقعنا الذي يهدف إلى تقديم الدعم والمساعدة للأشخاص في جنوب لبنان. نحن هنا لنكون جزءًا من رحلتكم نحو التحسين والتطوير. سواء كنتم تبحثون عن مكان للسكن ، مواد غذائية ، أو معلومات حول المجتمع المحلي و احدث الاخبار، فإننا هنا لنقدم لكم المساعدة والإرشاد."
    }
    res.render("customer/aardEs",locals)
}
exports.oroodEs=async(req,res)=>{
    const locals={
        title : "تسجيل",
        description:"مرحبًا بكم في موقعنا الذي يهدف إلى تقديم الدعم والمساعدة للأشخاص في جنوب لبنان. نحن هنا لنكون جزءًا من رحلتكم نحو التحسين والتطوير. سواء كنتم تبحثون عن مكان للسكن ، مواد غذائية ، أو معلومات حول المجتمع المحلي و احدث الاخبار، فإننا هنا لنقدم لكم المساعدة والإرشاد."
    }
    try{
        const customers4=await Customer4.find({}).limit(1000);
        res.render("customer/oroodEs",{locals,customers4})
    }catch(error){
console.log(error)
    }
}
exports.talabatAjar=async(req,res)=>{
    const locals={
        title : "تسجيل",
        description:"مرحبًا بكم في موقعنا الذي يهدف إلى تقديم الدعم والمساعدة للأشخاص في جنوب لبنان. نحن هنا لنكون جزءًا من رحلتكم نحو التحسين والتطوير. سواء كنتم تبحثون عن مكان للسكن ، مواد غذائية ، أو معلومات حول المجتمع المحلي و احدث الاخبار، فإننا هنا لنقدم لكم المساعدة والإرشاد."
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
        description:"مرحبًا بكم في موقعنا الذي يهدف إلى تقديم الدعم والمساعدة للأشخاص في جنوب لبنان. نحن هنا لنكون جزءًا من رحلتكم نحو التحسين والتطوير. سواء كنتم تبحثون عن مكان للسكن ، مواد غذائية ، أو معلومات حول المجتمع المحلي و احدث الاخبار، فإننا هنا لنقدم لكم المساعدة والإرشاد."
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
        description:"مرحبًا بكم في موقعنا الذي يهدف إلى تقديم الدعم والمساعدة للأشخاص في جنوب لبنان. نحن هنا لنكون جزءًا من رحلتكم نحو التحسين والتطوير. سواء كنتم تبحثون عن مكان للسكن ، مواد غذائية ، أو معلومات حول المجتمع المحلي و احدث الاخبار، فإننا هنا لنقدم لكم المساعدة والإرشاد. "
    }
    res.render("customer/homeDaa",locals)
}
exports.akhbar=async(req,res)=>{
    const locals={
        title : "تسجيل",
        description:"مرحبًا بكم في موقعنا الذي يهدف إلى تقديم الدعم والمساعدة للأشخاص في جنوب لبنان. نحن هنا لنكون جزءًا من رحلتكم نحو التحسين والتطوير. سواء كنتم تبحثون عن مكان للسكن ، مواد غذائية ، أو معلومات حول المجتمع المحلي و احدث الاخبار، فإننا هنا لنقدم لكم المساعدة والإرشاد."
    }
    res.render("customer/akhbar",locals)
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
exports.postaardAjar=async(req,res)=>{
    console.log(req.body)
    const newCustomer3= new Customer3({
        name2:req.body.name2,
        city2:req.body.city2,
        email2:req.body.email2,
        phone2:req.body.phone2,
        price2:req.body.price2,
    })
    try{
        await Customer3.create(newCustomer3);
        await req.flash("info","لقد تم عرض طلبك")
        res.redirect("/homeDaa")
    }catch(error){
console.log(error);
    }

}
exports.postaardEs=async(req,res)=>{
    console.log(req.body)
    const newCustomer4= new Customer4({
        name3:req.body.name3,
        city3:req.body.city3,
        email3:req.body.email3,
        phone3:req.body.phone3,
        shit3:req.body.shit3,
    })
    try{
        await Customer4.create(newCustomer4);
        await req.flash("info","لقد تم عرض طلبك")
        res.redirect("/homeDaa")
    }catch(error){
console.log(error);
    }

}