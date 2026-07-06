import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiHome, FiUser, FiFolderPlus, FiBriefcase, FiClipboard, FiLogOut } from "react-icons/fi";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const navLink = (path: string) =>
    location.pathname === path
      ? "text-blue-600 font-semibold"
      : "text-gray-600 hover:text-blue-600 transition";

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-8">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}

          <Link
            to="/home"
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white text-2xl shadow-lg">
              🚀
            </div>

            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Project Marketplace
              </h1>

              <p className="text-sm text-gray-500">
                IIT Hyderabad
              </p>
            </div>
          </Link>

          {/* Center Menu */}

          <div className="hidden lg:flex items-center gap-8">

            <Link
              to="/home"
              className={`${navLink("/home")} flex items-center gap-2`}
            >
              <FiHome />
              Home
            </Link>

            <Link
              to="/profile"
              className={`${navLink("/profile")} flex items-center gap-2`}
            >
              <FiUser />
              Profile
            </Link>

            <Link
              to="/create-project"
              className={`${navLink("/create-project")} flex items-center gap-2`}
            >
              <FiFolderPlus />
              Create
            </Link>

            <Link
              to="/my-projects"
              className={`${navLink("/my-projects")} flex items-center gap-2`}
            >
              <FiBriefcase />
              My Projects
            </Link>

            <Link
              to="/my-applications"
              className={`${navLink("/my-applications")} flex items-center gap-2`}
            >
              <FiClipboard />
              Applications
            </Link>

          </div>

          {/* Right Side */}

          <div className="flex items-center gap-5">

            <div className="hidden md:flex items-center gap-3">

              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                {user?.name?.charAt(0).toUpperCase() || "U"}
              </div>

              <div>

                <p className="font-semibold text-gray-800">
                  {user?.name || "User"}
                </p>

                <p className="text-xs text-gray-500 capitalize">
                  {user?.role || ""}
                </p>

              </div>

            </div>

            <button
              onClick={logout}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-xl transition shadow"
            >
              <FiLogOut />
              Logout
            </button>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;