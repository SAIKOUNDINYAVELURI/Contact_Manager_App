import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { loginUser } from "../services/authService";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      // eslint-disable-next-line no-unused-vars
      const data = await loginUser({ email, password });
      const currentUser = await fetchCurrentUser();
      setUser(currentUser);
      navigate("/"); // Redirect to Dashboard
    } catch (err) {
      setError(err.message || "Invalid credentials");
    }
  };

  const fetchCurrentUser = async () => {
    const { getCurrentUser } = await import("../services/authService");
    return await getCurrentUser();
  };

  return (
    <div className="flex h-screen items-center justify-center
                    bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <form className="bg-white/5 backdrop-blur-md rounded-2xl shadow-lg p-10 w-96">
        <h1 className="text-3xl font-semibold text-white mb-6 text-center">
          Contact Manager Login
        </h1>
        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
        <InputField label="Email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <InputField label="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <Button type="submit" onClick={handleLogin}>Login</Button>
        <p className="text-gray-400 text-sm mt-4 text-center">
          Don’t have an account? <Link to="/register" className="text-indigo-400 hover:text-indigo-300">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
