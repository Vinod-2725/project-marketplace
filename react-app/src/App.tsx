import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import CreateProject from "./pages/CreateProject";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import MyProjects from "./pages/MyProjects";
import Applicants from "./pages/Applicants";
import MyApplications from "./pages/MyApplications";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
                path="/applicants/:id"
                element={
                <ProtectedRoute>
                <Applicants />
                </ProtectedRoute>
              }
        />
           <Route
            path="/my-applications"
            element={
           <ProtectedRoute>
              <MyApplications />
             </ProtectedRoute>
            }
            />

        {/* Protected Routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/create-project"
          element={
            <ProtectedRoute>
              <CreateProject />
            </ProtectedRoute>
          }
        />

        <Route
         path="/my-projects"
         element={
         <ProtectedRoute>
         <MyProjects />
          </ProtectedRoute>
         }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// function App() {
//   return (
//     <div className="bg-red-500 h-screen flex items-center justify-center">
//       <h1 className="text-white text-6xl font-bold">
//         Tailwind Works
//       </h1>
//     </div>
//   );
// }

// export default App;