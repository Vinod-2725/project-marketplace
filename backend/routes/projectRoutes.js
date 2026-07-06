const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const Project = require("../models/Project");

// Create Project
router.post("/projects", authMiddleware, async (req, res) => {
  console.log(req.user);
  try {
    const project = await Project.create({
  title: req.body.title,
  description: req.body.description,
  skills: req.body.skills,
  positions: req.body.positions,

  // Logged-in user's ID
  createdBy: req.user.id,
});

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Get All Projects
router.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find();

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Get My Projects
router.get("/my-projects", authMiddleware, async (req, res) => {
  try {
    const projects = await Project.find({
      createdBy: req.user.id,
    });

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Update Project
router.put("/projects/:id", authMiddleware, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    // Check ownership
    if (project.createdBy.toString() !== req.user.id) {
      return res.status(403).json({
        message: "You are not authorized to edit this project.",
      });
    }

    project.title = req.body.title;
    project.description = req.body.description;
    project.skills = req.body.skills;
    project.positions = req.body.positions;

    await project.save();

    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Delete Project
router.delete("/projects/:id", authMiddleware, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    // Check ownership
    if (project.createdBy.toString() !== req.user.id) {
      return res.status(403).json({
        message: "You are not authorized to delete this project.",
      });
    }

    await Project.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Project deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
module.exports = router;