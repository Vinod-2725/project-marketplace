import { useState } from "react";
import Navbar from "../components/Navbar";
import { User, Mail, Briefcase, FileText } from "lucide-react";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const [name, setName] = useState(user.name || "");
  const [email] = useState(user.email || "");
  const [role] = useState(user.role || "");

  const [skills, setSkills] = useState("");
  const [resume, setResume] = useState("");

  const handleSave = () => {
    console.log({
      name,
      email,
      role,
      skills,
      resume,
    });

    alert("Profile saved successfully! ");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50 py-10 px-5">

        <div className="max-w-4xl mx-auto">

          {/* Header */}

          <div className="bg-gradient-to-r from-blue-600 to-sky-500 rounded-3xl p-8 text-white shadow-lg">

            <div className="flex items-center gap-6">

              <div className="w-24 h-24 rounded-full bg-white text-blue-600 flex items-center justify-center text-4xl font-bold">

                {name ? name.charAt(0).toUpperCase() : "U"}

              </div>

              <div>

                <h1 className="text-4xl font-bold">
                  {name}
                </h1>

                <p className="text-blue-100 mt-2">
                  {role.toUpperCase()}
                </p>

              </div>

            </div>

          </div>

          {/* Profile Card */}

          <div className="bg-white rounded-2xl shadow-card mt-8 p-8">

            <h2 className="text-2xl font-bold mb-8">
              Personal Information
            </h2>

            {/* Name */}

            <div className="mb-6">

              <label className="flex items-center gap-2 font-semibold mb-2">

                <User size={18} />

                Full Name

              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

            </div>

            {/* Email */}

            <div className="mb-6">

              <label className="flex items-center gap-2 font-semibold mb-2">

                <Mail size={18} />

                Email

              </label>

              <input
                type="text"
                value={email}
                disabled
                className="w-full border rounded-xl px-4 py-3 bg-gray-100 text-gray-500"
              />

            </div>

            {/* Role */}

            <div className="mb-6">

              <label className="flex items-center gap-2 font-semibold mb-2">

                <Briefcase size={18} />

                Role

              </label>

              <input
                type="text"
                value={role}
                disabled
                className="w-full border rounded-xl px-4 py-3 bg-gray-100 text-gray-500"
              />

            </div>

            {/* Skills */}

            <div className="mb-6">

              <label className="font-semibold block mb-2">

                Skills

              </label>

              <input
                type="text"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                placeholder="React, Node.js, MongoDB"
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

            </div>

            {/* Resume */}

            <div className="mb-8">

              <label className="flex items-center gap-2 font-semibold mb-2">

                <FileText size={18} />

                Resume Link

              </label>

              <input
                type="text"
                value={resume}
                onChange={(e) => setResume(e.target.value)}
                placeholder="https://drive.google.com/..."
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

            </div>

            <button
              onClick={handleSave}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
            >
              Save Profile
            </button>

          </div>

        </div>

      </div>
    </>
  );
}

export default Profile;