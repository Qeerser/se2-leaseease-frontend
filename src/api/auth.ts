import { apiClient } from "./axios";
// import Cookies from "js-cookie";

export const login = async (email: string, password: string) => {
  const response = await apiClient.post("api/v1/auth/login", {
    email,
    password,
  });
  console.log("Login Response:", response);

  const token = response.data.token; // Ensure backend sends { token: "your_jwt_token" }

  if (token) {
    localStorage.setItem("token", token); // Store token in localStorage
  } else {
    console.error("Token not found in response");
  }
  return response;
};

export const register = async (
  id: number,
  name: string,
  address: string,
  email: string,
  password: string,
  role: string
) => {
  return await apiClient.post("api/v1/auth/register", {
    id,
    name,
    address,
    email,
    password,
    role,
  });
};

// export const logout = async () => {
//     await apiClient.post("/auth/logout");
//     // Cookies.remove("jwt"); // Clear client-side cookie (useful for non-httpOnly cookies)
// };
