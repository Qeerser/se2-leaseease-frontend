// import { apiClient } from "./axios";

// //  Define Backend Response Type
// interface ApiResponse<T> {
//   status_code: number;
//   message: string;
//   data?: T;
// }

// // //  Login (Only Returns Success/Failure message)
// // export const login = async (
// //   email: string,
// //   password: string
// // ): Promise<string | null> => {
// //   try {
// //     const response = await apiClient.post<ApiResponse<null>>(
// //       "api/v1/auth/login",
// //       {
// //         email,
// //         password,
// //       }
// //     );

// //     return response.data.message; // Return success message from backend
// //   } catch (error: any) {
// //     console.error(
// //       "Login failed:",
// //       error.response?.data?.message || error.message
// //     );
// //     return null;
// //   }
// // };

// //  Register (Same as Before)
// // export const register = async (
// //   name: string,
// //   address: string,
// //   email: string,
// //   password: string,
// //   usertype: string
// // ): Promise<string | null> => {
// //   try {
// //     const response = await apiClient.post<ApiResponse<null>>(
// //       "api/v1/auth/register",
// //       {
// //         name,
// //         address,
// //         email,
// //         password,
// //         usertype,
// //       }
// //     );

// //     return response.data.message; // Return success message from backend
// //   } catch (error: any) {
// //     console.error(
// //       "Registration failed:",
// //       error.response?.data?.message || error.message
// //     );
// //     return null;
// //   }
// // };

// //  Logout (If Needed)
// // export const logout = async () => {
// //   await apiClient.post("/api/v1/auth/logout");
// // };
