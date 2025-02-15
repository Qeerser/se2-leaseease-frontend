import { apiClient } from "./axios";
// import Cookies from "js-cookie";

export const login = async (email: string, password: string) => {
  try {
    const response = await apiClient.post("api/v1/auth/login", {
      email,
      password,
    });
    if (response) {
      return response;
    } else {
      console.error("Token not found in response");
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Login failed:", error.response?.data || error.message);
    return null;
  }
};

export const register = async (
  name: string,
  address: string,
  email: string,
  password: string,
  usertype: string
) => {
  return await apiClient.post("api/v1/auth/register", {
    name,
    address,
    email,
    password,
    usertype,
  });
};

// export const logout = async () => {
//     await apiClient.post("/auth/logout");
//     // Cookies.remove("jwt"); // Clear client-side cookie (useful for non-httpOnly cookies)
// };
