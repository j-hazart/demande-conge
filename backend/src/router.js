const express = require("express");

const router = express.Router();

const { verifyPassword } = require("./services/auth");

const userControllers = require("./controllers/userControllers");
const congeControllers = require("./controllers/congeControllers");

router.post(
  "/users/login",
  userControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

router.get("/conges", congeControllers.browse);
router.put("/conges/:id", congeControllers.edit);
router.post("/conges", congeControllers.add);
router.delete("/conges/:id", congeControllers.destroy);

module.exports = router;
