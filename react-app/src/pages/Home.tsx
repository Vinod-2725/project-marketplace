import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import { getProjects } from "../api/projectApi";

function Home() {
  const [projects, setProjects] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await getProjects();
      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="max-w-7xl mx-auto px-8 py-8">

        {/* Hero Section */}

        <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white p-12 shadow-xl">

          <h1 className="text-5xl font-bold mb-5">
            Discover Amazing Projects
          </h1>

          <p className="text-xl opacity-90 max-w-3xl">
            Connect with IIT Hyderabad professors, collaborate with talented
            students, build impactful projects and strengthen your resume.
          </p>

        </div>

        {/* Statistics */}

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white rounded-2xl shadow-card p-8 text-center">
            <h1 className="text-4xl font-bold text-blue-600">
              {projects.length}
            </h1>

            <p className="text-gray-500 mt-2">
              Active Projects
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-card p-8 text-center">
            <h1 className="text-4xl font-bold text-green-600">
              20+
            </h1>

            <p className="text-gray-500 mt-2">
              Professors
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-card p-8 text-center">
            <h1 className="text-4xl font-bold text-purple-600">
              300+
            </h1>

            <p className="text-gray-500 mt-2">
              Students
            </p>
          </div>

        </div>

        {/* Search */}

        <div className="mt-12">

          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-5 rounded-2xl border border-gray-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* Heading */}

        <div className="mt-12 mb-8">

          <h2 className="text-3xl font-bold text-slate-800">
            Featured Projects
          </h2>

          <p className="text-gray-500 mt-2">
            Browse exciting opportunities posted by professors.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-8">

          {projects
            .filter((project) =>
              project.title
                .toLowerCase()
                .includes(search.toLowerCase())
            )
            .map((project) => (
              <ProjectCard
                key={project._id}
                id={project._id}
                title={project.title}
                skills={project.skills}
              />
            ))}

        </div>

      </div>
    </div>
  );
}

export default Home;