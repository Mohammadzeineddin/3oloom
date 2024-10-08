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
router.post("/aardAjar",customerController.postaardAjar)
router.post("/aardEs",customerController.postaardEs)
router.get("/talabatAjar",customerController.talabatAjar)
router.get("/oroodAjar",customerController.oroodAjar)
router.get("/oroodEs",customerController.oroodEs)
router.get("/aardAjar",customerController.aardAjar)
router.get("/aardEs",customerController.aardEs)
router.get("/talbatAkl",customerController.talbatAkl)
router.get("/homeDaa",customerController.homedaa)
router.get("/map",customerController.map)
router.get("/main2",customerController.main2)
module.exports=router;
