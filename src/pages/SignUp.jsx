import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup:", form);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#010E1B] px-4 sm:px-6 lg:px-8">
      <motion.form
        onSubmit={handleSignup}
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
          Signup
        </motion.h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-lg bg-[#010E1B] text-[#E1EFFD] border border-[#55B4F3]/40 focus:border-[#55B4F3] focus:ring focus:ring-[#55B4F3]/20 outline-none transition"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-lg bg-[#010E1B] text-[#E1EFFD] border border-[#55B4F3]/40 focus:border-[#55B4F3] focus:ring focus:ring-[#55B4F3]/20 outline-none transition"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-lg bg-[#010E1B] text-[#E1EFFD] border border-[#55B4F3]/40 focus:border-[#55B4F3] focus:ring focus:ring-[#55B4F3]/20 outline-none transition"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full py-3 bg-[#55B4F3] text-[#010E1B] font-semibold rounded-lg shadow-lg hover:shadow-2xl transition"
        >
          Signup
        </motion.button>

        {/* Login Link */}
        <div className="mt-4 text-center text-[#E1EFFD]/80">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#55B4F3] font-semibold hover:underline"
          >
            Login
          </Link>
        </div>
      </motion.form>
    </div>
  );
}
