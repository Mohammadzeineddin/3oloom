const express= require ("express");
const app = express();
const port = 3000
const passport = require("passport");
const session = require("express-session")
const cors =require("cors");
require("./auth")
//static
app.use(express.static("public"))
app.use("/css",express.static(__dirname+ "public/css"))
app.use("/js",express.static(__dirname+ "public/js"))
app.use("/img",express.static(__dirname+ "public/img"))
app.use(session({secret: "secret",
resave: false,
saveUninitialized: true,
cookie:{secure:false}}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(express.urlencoded({
    extended:false,
    limit:10000,
    parameterLimit:8,
}));
//set views
app.set("views","./views")
app.set("view engine","ejs")
app.get("",(req,res)=>{ 
    res.render("main-Home") 
})
app.get("/map.ejs",(req,res)=>{ 
    res.render("map.ejs")   
}) 

app.get("/sign1-1.ejs",(req,res)=>{ 
    res.render("sign1-1.ejs") 
}) 
app.get("/home-da3.ejs",(req,res)=>{ 
    res.render("home-da3.ejs")   
}) 
app.get("/home-me7.ejs",(req,res)=>{ 
    res.render("home-me7.ejs")   
}) 
app.get("/talab-ajar.ejs",(req,res)=>{ 
    res.render("talab-ajar.ejs")   
}) 
app.get("/3orood-ajar.ejs",(req,res)=>{ 
    res.render("3orood-ajar.ejs")   
}) 
app.get('/auth/google', 
passport.authenticate('google', { scope:
    [ 'email', 'profile' ], }
));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/sign1-1.ejs',
        failureRedirect: '/auth/google/failure'
}));
app.get("/auth/google/failure",isloggedin,(req,res)=>{ 
    res.send("something went wrong")
})

app.get("/auth/protected",isloggedin,(req,res)=>{
    let name = req.user.displayName;
    res.send(`hello ${name}`)
})
app.post("/home-me7.ejs",function(req,res){
        console.log(req.body);
})
function isloggedin(req,res,next){
req.user ? next():res.sendStatus(401);
}


//listen on port
app.listen(port,()=> console.log("app listening on port 3000"))