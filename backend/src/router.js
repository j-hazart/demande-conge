const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const congeControllers = require("./controllers/congeControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/conges", congeControllers.browse);
router.put("/conges/:id", congeControllers.edit);
router.post("/conges", congeControllers.add);

module.exports = router;
