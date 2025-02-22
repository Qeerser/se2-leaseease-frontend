"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { register, requestOTP } from "@/store/authSlice";
const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("lessee");
  const [error, setError] = useState("");

  const dispatch = useAppDispatch();

  interface Errors {
    name?: string;
    surname?: string;
    dob?: string;
    email?: string;
    password?: string;
    general?: string;
  }
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here (e.g., API call)
    console.log({ name, surname, dob, email, password, accountType });
  };

  const handleRegister = async () => {
    const errors = validate();
    if (Object.values(errors).some((value) => value.trim() !== "")) {
      setErrors(errors);
      return;
    }
    try {
      await dispatch(
        register({
          user: {
            id: "0",
            role: accountType,
            name,
            email,
            address: "peace home",
          },
          password,
        })
      );
      await dispatch(requestOTP());
      router.push("/otp");
    } catch (error) {
      console.error("Registration failed:", error);
      setError("Registration failed");
    }
  };

  const validate = () => {
    const error: { [key: string]: string } = {};

    if (!email) error.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) error.email = "Email not valid";
    else error.email = "";

    if (!password) error.password = "Password is required";
    else if (password.length < 8)
      error.password =
        "Password is too short, Must be more than 8 characters";
    else if (!/[A-Z]/.test(password))
      error.password = "Password required at least one uppercase letter";
    else if (!/[0-9]/.test(password))
      error.password = "Password required digit";
    else error.password = "";

    if (!name) error.name = "Name is required";
    else error.name = "";

    if (!surname) error.surname = "Surname is required";
    else error.surname = "";

    if (!dob) error.dob = "Date of birth is required";
    else error.dob = "";

    return error;
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">
            Sign up account
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Enter your details to sign up your account
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 p-6">
            <div className="mb-4 flex space-x-5">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border rounded text-gray-700"
                  value={name}
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                {errors.name && (
                  <div className=" text-red-500">
                    <p>{errors.name}</p>
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="surname"
                  className="block text-gray-700"
                >
                  Surname
                </label>
                <input
                  type="text"
                  id="surname"
                  className="w-full p-2 border rounded text-gray-700"
                  value={surname}
                  placeholder="Surname"
                  onChange={(e) => setSurname(e.target.value)}
                  required
                />
                {errors.surname && (
                  <div className=" text-red-500">
                    <p>{errors.surname}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="dob"
                className="block text-gray-700"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                className="w-full p-2 border rounded text-gray-700"
                placeholder="Date of Birth"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
              {errors.dob && (
                <div className=" text-red-500">
                  <p>{errors.dob}</p>
                </div>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded text-gray-700"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && (
                <div className=" text-red-500">
                  <p>{errors.email}</p>
                </div>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border rounded text-gray-700"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errors.password && (
                <div className=" text-red-500">
                  <p>{errors.password}</p>
                </div>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">
                Choose your account type
              </label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-blue-500"
                    value="lessee"
                    checked={accountType === "lessee"}
                    onChange={() =>
                      setAccountType("lessee")
                    }
                  />
                  <span className="ml-2">
                    Lessee{" "}
                    <span className="text-gray-500">
                      (Want to rent the property)
                    </span>
                  </span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-blue-500"
                    value="lessor"
                    checked={accountType === "lessor"}
                    onChange={() =>
                      setAccountType("lessor")
                    }
                  />
                  <span className="ml-2">
                    Lessor{" "}
                    <span className="text-gray-500">
                      (Want to lease out the property)
                    </span>
                  </span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded"
              onClick={() => handleRegister()}
            >
              Sign up
            </button>

            <p className="text-center text-gray-600">
              Already have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => router.push("/login")}
              >
                Sign In
              </span>
            </p>
          </form>
          {error && (
            <div className="mb-4 text-black text-center text-2xl font-semibold bg-red-500 p-4 rounded-lg">
              <p>{error}</p>
            </div>
          )}
        </div>
        <div
          className="w-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url('bg-condo.jpg')" }}
        />
      </div>
    </div>
  );
};

export default SignUp;
