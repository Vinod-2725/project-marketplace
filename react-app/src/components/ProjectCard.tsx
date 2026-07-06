import { applyToProject } from "../api/applicationApi";

type Props = {
  id: string;
  title: string;
  skills: string;
};

function ProjectCard({ id, title, skills }: Props) {

  const handleApply = async () => {
    try {
      await applyToProject(id);
      alert("Application submitted successfully!");
    } catch (error: any) {
      alert(
        error.response?.data?.message ||
        "Failed to apply."
      );
    }
  };

  return (

    <div className="bg-white rounded-3xl shadow-card p-8 hover:shadow-2xl transition duration-300">

      <div className="flex justify-between items-start">

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            {title}
          </h2>

          <p className="text-gray-500 mt-2">
            Looking for passionate students interested in this project.
          </p>

        </div>

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
          Open
        </span>

      </div>

      <div className="mt-6">

        <h4 className="font-semibold mb-3 text-gray-700">
          Required Skills
        </h4>

        <div className="flex flex-wrap gap-3">

          {skills.split(",").map((skill, index) => (

            <span
              key={index}
              className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full"
            >
              {skill.trim()}
            </span>

          ))}

        </div>

      </div>

      <button
        onClick={handleApply}
        className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
      >
        Apply Now
      </button>

    </div>

  );
}

export default ProjectCard;