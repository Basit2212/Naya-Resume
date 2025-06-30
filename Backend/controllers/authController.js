const User = require('../models/userModel');
const { hashPassword, comparePassword } = require('../utils/hash');
const jwt = require('jsonwebtoken');


const signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' });
    }

    const hashed = hashPassword(password);
    const newUser = new User({ name, email, password: hashed });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};


const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ error: 'Email and password required' });

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ error: 'User not found' });

    const isMatch = comparePassword(password, user.password);
    if (!isMatch)
      return res.status(401).json({ error: 'Invalid password' });

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { signup, login };
