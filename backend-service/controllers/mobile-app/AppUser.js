import AppUser from "../../models/mobile-app/AppUser.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    //check if email exists
    const isEmailExist = await AppUser.exists({ email: email });

    if (isEmailExist)
      return res.status(403).json({ message: "Email Already Used" }).end();

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new AppUser({
      firstName,
      lastName,
      email,
      password: passwordHash,
    });

    const savedUser = await newUser.save();
    let user = savedUser.toObject();
    delete user.password;
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRETE_KEY);
    res.status(201).json({ user, token }).end();
  } catch (err) {
    return res
      .status(500)
      .json({ message: `Something went Wrong -> ${err}` })
      .end();
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //find user
    let user = await AppUser.findOne({ email: email });

    if (!user)
      return res.status(404).json({ message: "User not found!" }).end();
    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched)
      return res.status(403).json({ message: "Authentication Error" }).end();

    user = user.toObject();
    delete user.password;
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRETE_KEY);
    return res.status(201).json({ user, token }).end();
  } catch (err) {
    return res
      .status(500)
      .json({ message: `Something went Wrong -> ${err}` })
      .end();
  }
};
export { login, register };
