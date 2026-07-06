import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../api/authApi";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    try {
      if (!name || !email || !password) {
        alert("Please fill all fields.");
        return;
      }

      setLoading(true);

      const response = await signupUser({
        name,
        email,
        password,
      });

      alert(response.data.message);

      navigate("/");

    } catch (error: any) {
      alert(
        error.response?.data?.message ||
          "Signup failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-sky-600 to-cyan-400 flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">

        <div className="text-center">

          <h1 className="text-4xl font-bold text-blue-700">
            🚀 Join Marketplace
          </h1>

          <p className="mt-3 text-gray-500">
            Create your IIT Hyderabad account
          </p>

        </div>

        <div className="mt-8">

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border p-4 mb-5 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="email"
            placeholder="IIT Hyderabad Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border p-4 mb-5 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border p-4 mb-6 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <button
            onClick={handleSignup}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition duration-300"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

        </div>

        <p className="mt-8 text-center text-gray-600">

          Already have an account?

          <Link
            to="/"
            className="text-blue-600 font-semibold ml-2 hover:underline"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Signup;