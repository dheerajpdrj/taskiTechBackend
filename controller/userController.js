const User = require("../model/user");

const registerUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      mobile,
      gender,
      dob,
      doj,
      description,
      role,
      department,
    } = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({
        success: false,
        message: "Email already registered",
      });
    }
    const newUser = new User({
      firstName,
      lastName,
      email,
      mobile,
      gender,
      dob,
      doj,
      description,
      role,
      department,
    });
    const userData = await newUser.save();

    res.json({
      user: userData,
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Server error" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find();

    res.json(users);
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Server error" });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.json({
      user: user,
      success: true,
      message: "User fetched successfully",
    });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Server error" });
  }
};

const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      firstName,
      lastName,
      email,
      mobile,
      gender,
      dob,
      doj,
      description,
      role,
      department,
    } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        firstName,
        lastName,
        email,
        mobile,
        gender,
        dob,
        doj,
        description,
        role,
        department,
      },
      { new: true }
    );

    res.json({
      user: updatedUser,
      success: true,
      message: "User updated successfully",
    });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Server error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    
    await User.findByIdAndDelete(id);

    res.json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Server error" });
  }
};

module.exports = { registerUser, getAllUsers, editUser, deleteUser, getUser };
