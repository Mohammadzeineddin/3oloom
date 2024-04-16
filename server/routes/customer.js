const express=require("express");
const router=express.Router();
const customerController=require("../controllers/customerController")
router.get("/",customerController.homepage)
router.get("/login",customerController.login)
router.get("/me7",customerController.me7)
router.get("/talabAjar",customerController.talabAjar)
router.get("/talabAkl",customerController.talabAkl)
router.post("/talabAjar",customerController.postTalab)
router.post("/talabAkl",customerController.postAkl)
router.get("/talabatAjar",customerController.talabatAjar)
router.get("/talbatAkl",customerController.talbatAkl)
router.get("/homeDaa",customerController.homedaa)
router.get("/map",customerController.map)
module.exports=router;