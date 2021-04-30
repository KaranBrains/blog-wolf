const router = require("express").Router();
const controller = require("./userController");


router.post("/signin", controller.signIn);
router.post("/signup", controller.signUp);

module.exports = router;
