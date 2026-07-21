import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Member");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await API.post("/auth/register", {
        name,
        email,
        password,
        role,
      });

      console.log("Registration Success:", response.data);

      alert("Registration Successful");

      navigate("/login");
    } catch (err) {
      console.log("Full Error:", err);
      console.log("Response:", err.response);
      console.log("Data:", err.response?.data);

      setError(
        err.response?.data?.message ||
          "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-blue-600">
          Create Account
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Register to manage your projects
        </p>

        {/* Error Message */}
        {error && (
          <p className="mt-4 text-center text-red-600">
            {error}
          </p>
        )}

        {/* Registration Form */}
        <form onSubmit={handleRegister} className="mt-6 space-y-4">

          {/* Full Name */}
          <div>
            <label className="block text-gray-700 mb-1">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-1">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-gray-700 mb-1">
              Role
            </label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="Member">Member</option>
              <option value="Manager">Manager</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>

        </form>

        {/* Login Link */}
        <p className="text-center mt-5 text-gray-600">
          Already have an account?

          <Link
            to="/login"
            className="text-blue-600 ml-1 font-semibold"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;