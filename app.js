require("dotenv").config();
const express= require ("express");
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const expressLayout=require("express-ejs-layouts")
const flash=require("connect-flash")
const session = require("express-session")
const connectDB=require("./server/config/db.js")
const app = express();
const port = 3000
const mongoose=require("mongoose")
const passport = require("passport");
const cors =require("cors");
require("./auth")
connectDB(); 
//static  
app.get('/sitemap.xml', (req, res) => {
  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/main2', changefreq: 'monthly', priority: 0.8 },
    { url: '/map', changefreq: 'monthly', priority: 0.8 },
    // Add more URLs here
  ];
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(express.static("public"))
app.use("/css",express.static(__dirname+ "public/css"))
app.use("/js",express.static(__dirname+ " public/js"))
app.use("/img",express.static(__dirname+ "public/img"))
app.use(session({secret: "secret",
resave: false,
saveUninitialized: true,
cookie:{secure:false}}));
app.use(passport.initialize());  
app.use(passport.session());
app.use(cors());
//set views
app.use(expressLayout)
app.use(flash({sessionKeyName:"flashMessage"}))
app.set("layout","./layouts/main-Home")
app.set("view engine","ejs")
app.use("/",require("./server/routes/customer.js"))
app.get('/', function(req, res) {
    res.render('main-Home');
});
 // Create a stream to write to
  const sitemapStream = new SitemapStream({ hostname: 'https://jnoubna.onrender.com' });

  // Convert stream to a promise
  streamToPromise(Readable.from(links).pipe(sitemapStream)).then((data) => {
    res.header('Content-Type', 'application/xml');
    res.send(data.toString());
  }).catch((err) => {
    res.status(500).end();
  });
});
app.get('/auth/google', 
passport.authenticate('google', { scope:
    [ 'email', 'profile' ], }
));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/login',
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
