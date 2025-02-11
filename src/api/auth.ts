import { apiClient } from "./axios";
// import Cookies from "js-cookie";

export const login = async (email: string, password: string) => {
  try {
    const response = await apiClient.post("api/v1/auth/login", {
      email,
      password,
    });

    // console.log("Login Response:", response.data);

    if (response.data && response.data.token) {
      const token = response.data.token;
      localStorage.setItem("token", token);
      return token;
    } else {
      console.error("Token not found in response");
      return null;
    }
  } catch (error: any) {
    console.error("Login failed:", error.response?.data || error.message);
    return null;
  }
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
