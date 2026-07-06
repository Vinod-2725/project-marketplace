import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getMyApplications } from "../api/applicationApi";
import { Briefcase, CalendarDays, Users } from "lucide-react";

function MyApplications() {
  const [applications, setApplications] = useState<any[]>([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await getMyApplications();
      setApplications(response.data);
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
              My Applications
            </h1>

            <p className="text-slate-500 mt-2">
              Track every project you've applied to.
            </p>

          </div>

          {applications.length === 0 ? (

            <div className="bg-white rounded-2xl shadow-card p-12 text-center">

              <Briefcase
                size={70}
                className="mx-auto text-blue-500 mb-4"
              />

              <h2 className="text-2xl font-semibold">
                No Applications Yet
              </h2>

              <p className="text-gray-500 mt-2">
                Explore projects and start applying.
              </p>

            </div>

          ) : (

            <div className="grid lg:grid-cols-2 gap-8">

              {applications.map((application) => (

                <div
                  key={application._id}
                  className="bg-white rounded-2xl shadow-card p-7 hover:-translate-y-2 transition duration-300"
                >

                  <h2 className="text-2xl font-bold mb-4">
                    {application.projectId.title}
                  </h2>

                  <p className="text-gray-600 mb-5">
                    {application.projectId.description}
                  </p>

                  <div className="space-y-3 text-gray-700">

                    <p>

                      <strong>Skills:</strong>{" "}
                      {application.projectId.skills}

                    </p>

                    <p className="flex items-center gap-2">

                      <Users size={17} />

                      {application.projectId.positions} Positions

                    </p>

                    <p className="flex items-center gap-2">

                      <CalendarDays size={17} />

                      Applied on{" "}
                      {new Date(
                        application.createdAt
                      ).toLocaleDateString()}

                    </p>

                  </div>

                  <div className="mt-6">

                    <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">

                      Pending

                    </span>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>
    </>
  );
}

export default MyApplications;