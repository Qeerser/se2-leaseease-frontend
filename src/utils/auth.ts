import {apiClient} from "./axios";
// import Cookies from "js-cookie";

export const login = async (email: string, password: string) => {
  return await apiClient.post("/auth/login", { email, password });
};

export const register = async (email: string, password: string) => {
  return await apiClient.post("/auth/register", { email, password });
};

// export const logout = async () => {
//     await apiClient.post("/auth/logout");
//     // Cookies.remove("jwt"); // Clear client-side cookie (useful for non-httpOnly cookies)
// };
  