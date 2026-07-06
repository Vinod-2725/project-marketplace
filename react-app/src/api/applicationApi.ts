import axios from "axios";

const API = axios.create({
  baseURL: "https://project-marketplace-backend-d3dt.onrender.com/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export const applyToProject = (projectId: string) =>
  API.post(`/${projectId}`);

export const getMyApplications = () =>
  API.get("/my-applications");

export const getApplicants = (projectId: string) =>
  API.get(`/project/${projectId}`);