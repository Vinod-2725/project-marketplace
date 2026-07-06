import { useState } from "react";
import Navbar from "../components/Navbar";
import { createProject } from "../api/projectApi";
import { PlusCircle } from "lucide-react";

function CreateProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");
  const [positions, setPositions] = useState("");

  const handleCreateProject = async () => {
    try {
      if (!title || !description || !skills || !positions) {
        alert("Please fill all fields.");
        return;
      }

      const project = {
        title,
        description,
        skills,
        positions: Number(positions),
      };

      await createProject(project);

      alert("Project created successfully!");

      setTitle("");
      setDescription("");
      setSkills("");
      setPositions("");
    } catch (error) {
      console.log(error);
      alert("Failed to create project.");
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50 py-10 px-5">
        <div className="max-w-3xl mx-auto">

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-800">
              Create New Project
            </h1>

            <p className="text-slate-500 mt-2">
              Post your research or development project and start finding
              talented collaborators.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-card p-8">

            {/* Project Title */}

            <div className="mb-6">
              <label className="block font-semibold mb-2">
                Project Title
              </label>

              <input
                type="text"
                placeholder="AI Powered Attendance System"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Description */}

            <div className="mb-6">
              <label className="block font-semibold mb-2">
                Project Description
              </label>

              <textarea
                placeholder="Describe your project..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={6}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Skills */}

            <div className="mb-6">
              <label className="block font-semibold mb-2">
                Required Skills
              </label>

              <input
                type="text"
                placeholder="React, Node.js, MongoDB"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Positions */}

            <div className="mb-8">
              <label className="block font-semibold mb-2">
                Open Positions
              </label>

              <input
                type="number"
                placeholder="3"
                value={positions}
                onChange={(e) => setPositions(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <button
              onClick={handleCreateProject}
              className="w-full flex justify-center items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300"
            >
              <PlusCircle size={20} />
              Create Project
            </button>

          </div>
        </div>
      </div>
    </>
  );
}

export default CreateProject;