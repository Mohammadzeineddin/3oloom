const express=require ("express");
const app = express();
const port = 3000
//static
app.use(express.static("public"))
app.use("/css",express.static(__dirname+ "public/css"))
app.use("/js",express.static(__dirname+ "public/js"))
app.use("/img",express.static(__dirname+ "public/img"))


//set views
app.set("views","./views")
app.set("view engine","ejs")
app.get("",(req,res)=>{
    res.render("main-Home")
})
app.get("/map.ejs",(req,res)=>{
    res.render("map.ejs")
})


//listen on port
app.listen(port,()=> console.log("app listening on port 3000"))
