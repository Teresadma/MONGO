const {Router} = require ("express");
const router = Router();
const photoCtrl = require("../controller/photo.controller");

router.get("/photos", photoCtrl.getPhoto);
router.post("/photos", photoCtrl.postPhoto);
router.put("/photos", photoCtrl.postPhoto);
router.delete("/photos", photoCtrl.deletePhoto);
router.delete("/photos/all", photoCtrl.deleteAll);

module.exports = router;