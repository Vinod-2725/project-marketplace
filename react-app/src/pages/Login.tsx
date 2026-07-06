import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/home");
    }
  }, [navigate]);

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        alert("Enter email and password.");
        return;
      }

      setLoading(true);

      const response = await loginUser({
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      navigate("/home");
    } catch (error: any) {
      alert(
        error.response?.data?.message ||
          "Invalid email or password."
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
            🚀 Project Marketplace
          </h1>

          <p className="mt-3 text-gray-500">
            Welcome back! Login to continue.
          </p>

        </div>

        <div className="mt-8">

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
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition duration-300"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </div>

        <p className="mt-8 text-center text-gray-600">

          Don't have an account?

          <Link
            to="/signup"
            className="text-blue-600 font-semibold ml-2 hover:underline"
          >
            Sign Up
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;