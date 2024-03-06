const express= require ("express");
const app = express();
const port = 3000
const passport = require("passport");
const session = require("express-session")
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

function isloggedin(req,res,next){
req.user ? next():res.sendStatus(401);
}
app.use(passport.initialize());
app.use(passport.session());
//listen on port
app.listen(port,()=> console.log("app listening on port 3000"))