import axios from "axios";

const API = axios.create({
  baseURL: "https://project-marketplace-backend-d3dt.onrender.com",
});

export const loginUser = (user: any) =>
  API.post("/login", user);

export const signupUser = (user: any) =>
  API.post("/signup", user);