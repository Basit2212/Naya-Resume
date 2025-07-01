const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth')
const app = express();
require('dotenv').config(); // load .env variables

const mongoose = require('mongoose')
const userRoutes = require('./routes/user')

// app.use(cors({
//   origin: 'https://naya-resume.vercel.app',
//   credentials: true
// }));

app.use(cors({
  origin: 'http://localhost:5173', // must match your frontend dev server
  credentials: true
}));


app.use(express.json());


app.use('/api', authRoutes)
app.use('/api', userRoutes)

app.get('/', (req, res) => {
  res.send('Backend is running');
});


mongoose.connect(process.env.MONGO_URI).then(()=>console.log('MongoDB connected successfully')).catch((err)=> console.error('MongoDB connection Failed', err))

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});




