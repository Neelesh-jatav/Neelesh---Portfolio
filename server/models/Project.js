const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  eyebrow: String,
  description: String,
  imageUrl: String,
  videoUrl: String,
  images: [String],
  badgeUrl: String,
  cta: String,
  projectUrl: String,
  githubUrl: String,
  tags: [String],
});

module.exports = mongoose.model('Project', ProjectSchema);
