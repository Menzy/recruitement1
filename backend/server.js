const express = require('express');
const cors = require('cors');
const jobRoutes = require('./routes/jobs')
const blogRoutes = require('./routes/blog')
const adminRoutes = require('./routes/admin')
const mongoose = require('mongoose');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/v1/jobs', jobRoutes);
app.use('/api/v1/blog', blogRoutes);
app.use('/api/v1/admin', adminRoutes);

const PORT = process.env.PORT || 4000;

// mongoose.connect(process.env.MONGODB_URI)
//     .then(() => {
//         console.log('Connected to MongoDB');
//         app.listen(PORT, () => {
//             console.log(`Server is running on port ${PORT}`);
//         });
//     })
//     .catch((error) => {
//         console.error('Error connecting to MongoDB:', error);
//     });


// Connect to MongoDB Atlas
connectDB().then(() => {
  // Seed data in development environment
  if (process.env.NODE_ENV === 'development') {
    seedData().catch(console.error);
  }
}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
  });
}).catch((err) => {
  console.log(err);
});