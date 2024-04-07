const express=require("express");
const router=express.Router();
const customerController=require("../controllers/customerController")
router.get("/",customerController.homepage)
router.get("/login",customerController.login)
router.get("/me7",customerController.me7)
router.get("/talabAjar",customerController.talabAjar)
router.post("/talabAjar",customerController.postTalab)
router.get("/ooroodAjar",customerController.ooroodAjar)
router.get("/homeDaa",customerController.homedaa)
router.get("/map",customerController.map)
module.exports=router;
