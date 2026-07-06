const express = require("express");
const Project = require("../models/Project");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const Application = require("../models/Application");

// Apply to a project
router.post("/:projectId", authMiddleware, async (req, res) => {
  try {

    // Check if already applied
    const existingApplication = await Application.findOne({
      projectId: req.params.projectId,
      studentId: req.user.id,
    });

    if (existingApplication) {
      return res.status(400).json({
        message: "You have already applied to this project.",
      });
    }

    const application = await Application.create({
      projectId: req.params.projectId,
      studentId: req.user.id,
    });

    res.status(201).json({
      message: "Application submitted successfully",
      application,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Get applicants for a project
router.get("/project/:projectId", authMiddleware, async (req, res) => {
  try {
    // Find the project
    const project = await Project.findById(req.params.projectId);

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    // Only the project creator can view applicants
    if (project.createdBy.toString() !== req.user.id) {
      return res.status(403).json({
        message: "You are not authorized to view applicants.",
      });
    }

    // Get all applications
    const applications = await Application.find({
      projectId: req.params.projectId,
    }).populate("studentId", "name email role");

    res.status(200).json(applications);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Get My Applications
router.get("/my-applications", authMiddleware, async (req, res) => {
  try {
    const applications = await Application.find({
      studentId: req.user.id,
    }).populate(
      "projectId",
      "title description skills positions"
    );

    res.status(200).json(applications);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;