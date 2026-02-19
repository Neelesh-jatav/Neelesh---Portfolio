const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const Project = require('./models/Project');
const seedProjects = require('./seedData');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/media', express.static(path.join(__dirname, '..', 'media')));

// Database Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Routes
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/projects', async (req, res) => {
  const project = new Project({
    title: req.body.title,
    eyebrow: req.body.eyebrow,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    videoUrl: req.body.videoUrl,
    badgeUrl: req.body.badgeUrl,
    cta: req.body.cta,
    projectUrl: req.body.projectUrl,
    tags: req.body.tags
  });

  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Seed Route (for demo purposes)
app.get('/api/seed', async (req, res) => {
  try {
    if (req.query.force === 'true') {
      await Project.deleteMany({});
      console.log('Database cleared via seed route');
    }

    const count = await Project.countDocuments();
    if (count === 0) {
      await Project.insertMany(seedProjects);
      res.json({ message: "Seeded successfully" });
    } else {
      res.json({ message: "Database already has data" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 
