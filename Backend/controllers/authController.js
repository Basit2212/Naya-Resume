const User = require('../models/userModel');

// ✅ Sync Auth0 user to MongoDB
const syncAuth0User = async (req, res) => {
  try {
    const { sub, name, email, picture } = req.user;

    let user = await User.findOne({ auth0Id: sub });

    if (!user) {
      user = new User({
        auth0Id: sub,
        name,
        email,
        picture,
      });
      await user.save();
    }

    res.status(200).json({ message: 'User synced successfully', user });
  } catch (err) {
    console.error("Auth0 Sync Error:", err);
    res.status(500).json({ error: 'Failed to sync Auth0 user' });
  }
};




const email = async (req, res) => {
  const nodemailer = require("nodemailer");
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.USER_EMAIL,
      subject: `Message from ${name}`,
      text: message,
      html: `
        <h3>New Message from Contact Form</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ error: "Email sending failed" });
  }
};

module.exports = { syncAuth0User, email };
