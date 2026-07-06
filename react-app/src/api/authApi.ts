import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/auth",
});

export const loginUser = (user: any) =>
  API.post("/login", user);

export const signupUser = (user: any) =>
  API.post("/signup", user);