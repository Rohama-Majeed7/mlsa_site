import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login:", { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#010E1B] px-4 sm:px-6 lg:px-8">
      <motion.form
        onSubmit={handleLogin}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#021529] p-8 rounded-2xl shadow-xl sm:shadow-2xl w-full max-w-md"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-6 text-center text-[#55B4F3]"
        >
          Login
        </motion.h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-[#010E1B] text-[#E1EFFD] border border-[#55B4F3]/40 focus:border-[#55B4F3] focus:ring focus:ring-[#55B4F3]/20 outline-none transition"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-[#010E1B] text-[#E1EFFD] border border-[#55B4F3]/40 focus:border-[#55B4F3] focus:ring focus:ring-[#55B4F3]/20 outline-none transition"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full py-3 bg-[#55B4F3] text-[#010E1B] font-semibold rounded-lg shadow-lg hover:shadow-2xl transition"
        >
          Login
        </motion.button>

        {/* Signup Link */}
        <div className="mt-4 text-center text-[#E1EFFD]/80">
          Don&apos;t have an account?{" "}
          <Link
            to="/signup"
            className="text-[#55B4F3] font-semibold hover:underline"
          >
            Signup
          </Link>
        </div>
      </motion.form>
    </div>
  );
}
