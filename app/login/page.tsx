"use client";
import { useState } from "react";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { login } from "@/store/authSlice";
import { useRouter } from "next/navigation";



const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault(); // Prevent default form submission
};

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);
  const router = useRouter();

  const handleLogin = async () => {
    const resultAction = await dispatch(login({ email, password }));

    if (login.fulfilled.match(resultAction)) {
      router.push("/property"); // Redirect if login is successful
    }
  };

  // const handleLogin = async () => {
  //   try {
  //     const response = await login(email, password);
  //     // if (response?.data.token) {
  //     //  router.push("/property");
  //     // }
  //   } catch (error) {
  //     console.error("Registration failed:", error);
  //   }
  // };

  return (
    loading ? (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center">
          <svg
            className="animate-spin h-8 w-8 text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            ></path>
          </svg>
          <p className="mt-4 text-gray-700">Loading...</p>
        </div>
      </div>
    ):(<div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div
          className="w-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url('bg-condo.jpg')" }}
        />
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">
            Sign in
          </h2>
          <p className="text-gray-500 text-center mb-6">
            Enter your details to sign in to your account.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 p-6">
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full p-2 border rounded text-gray-700"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full p-2 border rounded text-gray-700"
                required
              />
            </div>

            <div
              className="text-right text-sm text-blue-500 cursor-pointer"
              onClick={() => router.push("/forgot_password")}
            >
              Forgot password?
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded"
              onClick={() => handleLogin()}
            >
              Sign in
            </button>

            <p className="text-center text-gray-600">
              Don’t have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => router.push("/signup")}
              >
                Sign Up
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>)
  );
}
