const mongoose = require('mongoose');
const Project = require('./models/Project');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio')
  .then(async () => {
    console.log('Connected to MongoDB');
    
    // Clear data
    await Project.deleteMany({});
    console.log('Cleared all projects');
    
    // Use shared seed data
    const projects = require('./seedData');

    await Project.insertMany(projects);
    console.log('Seeded projects successfully (from seedData.js)');
    
    mongoose.connection.close();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
