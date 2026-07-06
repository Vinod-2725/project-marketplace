import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getApplicants } from "../api/applicationApi";

function Applicants() {

  const { id } = useParams();

  const [applications, setApplications] = useState<any[]>([]);

  useEffect(() => {
    fetchApplicants();
  }, []);

  const fetchApplicants = async () => {
    try {
      const response = await getApplicants(id!);
      setApplications(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "20px auto",
      }}
    >
      <Navbar />

      <h1>Applicants</h1>

      {applications.map((application) => (

        <div
          key={application._id}
          style={{
            background: "white",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "10px"
          }}
        >
          <h3>{application.studentId.name}</h3>

          <p>{application.studentId.email}</p>

          <p>{application.studentId.role}</p>

        </div>

      ))}

    </div>
  );
}

export default Applicants;