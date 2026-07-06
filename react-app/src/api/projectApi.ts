// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

// export const getProjects = () => API.get("/projects");

// export const createProject = (project: any) => {
//   const token = localStorage.getItem("token");

//   return API.post("/projects", project, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };

import axios from "axios";

const API = axios.create({
  baseURL: "https://project-marketplace-backend-d3dt.onrender.com",
});

// Automatically attach JWT to every request
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export const getProjects = () => API.get("/projects");

export const createProject = (project: any) =>
  API.post("/projects", project);

export const getMyProjects = () =>
  API.get("/my-projects");