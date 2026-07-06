import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getMyProjects } from "../api/projectApi";
import { useNavigate } from "react-router-dom";
import { FolderKanban, Users, ArrowRight } from "lucide-react";

function MyProjects() {
  const [projects, setProjects] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await getMyProjects();
      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50 py-10 px-5">

        <div className="max-w-6xl mx-auto">

          <div className="mb-8">

            <h1 className="text-4xl font-bold text-slate-800">
              My Projects
            </h1>

            <p className="text-slate-500 mt-2">
              Manage every project you've created.
            </p>

          </div>

          {projects.length === 0 ? (

            <div className="bg-white rounded-2xl shadow-card p-12 text-center">

              <FolderKanban
                size={70}
                className="mx-auto text-blue-500 mb-4"
              />

              <h2 className="text-2xl font-semibold mb-2">
                No Projects Yet
              </h2>

              <p className="text-gray-500">
                Create your first research project.
              </p>

            </div>

          ) : (

            <div className="grid md:grid-cols-2 gap-8">

              {projects.map((project) => (

                <div
                  key={project._id}
                  className="bg-white rounded-2xl shadow-card p-7 hover:-translate-y-2 transition duration-300"
                >

                  <h2 className="text-2xl font-bold text-slate-800 mb-4">
                    {project.title}
                  </h2>

                  <div className="mb-6">

                    <span className="font-semibold">
                      Skills
                    </span>

                    <p className="text-gray-600 mt-2">
                      {project.skills}
                    </p>

                  </div>

                  <button
                    onClick={() =>
                      navigate(`/applicants/${project._id}`)
                    }
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold transition"
                  >
                    <Users size={18} />

                    View Applicants

                    <ArrowRight size={18} />

                  </button>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>
    </>
  );
}

export default MyProjects;