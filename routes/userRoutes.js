const express = require("express");
const {
  registerUser,
  getAllUsers,
  getUser,
  deleteUser,
  editUser,
} = require("../controller/userController");

const router = express.Router();

router.post("/register", registerUser);
router.get("/get_users", getAllUsers);
router.get("/get_user/:id", getUser);
router.delete("/delete_user/:id", deleteUser);
router.put("/update_user/:id", editUser);

module.exports = router;
