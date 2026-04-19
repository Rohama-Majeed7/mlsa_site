import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

// Core Team Sample Data
const coreTeam = [
  { name: "Ali Khan", role: "President", img: "https://via.placeholder.com/150" },
  { name: "Sara Malik", role: "Tech Lead", img: "https://via.placeholder.com/150" },
  { name: "Hassan Ahmed", role: "Community Lead", img: "https://via.placeholder.com/150" },
  { name: "Ayesha Khan", role: "Marketing Lead", img: "https://via.placeholder.com/150" },
  { name: "Omar Farooq", role: "Event Lead", img: "https://via.placeholder.com/150" },
];
 const offers = [
    "MLSA Swags",
    "LinkedIn Premium",
    "Certificates",
    "Xbox Gamepass",
  ];
export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#010E1B] text-[#E1EFFD]">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 sm:px-12 lg:px-24 bg-gradient-to-r from-[#021529] to-[#010E1B]">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold text-[#55B4F3] mb-4"
        >
          Microsoft Learn Student Ambassador
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-2xl sm:text-3xl mb-6"
        >
          UET Taxila
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-xl text-center mb-6"
        >
          Building a more connected and collaborative tech community. Bridging the gap between technology and society.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#55B4F3] text-[#010E1B] px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
        >
          Explore Events
        </motion.button>
      </section>

    
      {/* What We Offer */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-[#010E1B]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[#55B4F3] mb-14">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {offers.map((offer, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-4 p-6 bg-[#021529] rounded-2xl shadow-lg hover:shadow-2xl transition relative overflow-hidden"
            >
              {/* Floating icon effect */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: idx * 0.2 }}
              >
                <CheckCircle className="text-[#55B4F3] w-10 h-10" />
              </motion.div>

              {/* Offer text with subtle gradient */}
              <span className="text-white text-lg sm:text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#55B4F3] to-[#E1EFFD]">
                {offer}
              </span>

              {/* Background glow */}
              <motion.div
                className="absolute -z-10 w-40 h-40 bg-[#55B4F3]/20 rounded-full top-[-10%] right-[-10%] blur-3xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 4, delay: idx * 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>

      {/* Core Team (only 3 members) */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-[#010E1B]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-[#55B4F3] mb-10">Core Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {coreTeam.slice(0, 3).map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-[#021529] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col items-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-[#55B4F3]"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-[#E1EFFD]/80">{member.role}</p>
              </motion.div>
            ))}
          </div>

          {/* View All Team Members Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/team")}
            className="mt-10 px-6 py-3 bg-[#55B4F3] text-[#010E1B] font-semibold rounded-lg shadow-lg hover:shadow-2xl transition"
          >
            View All Team Members
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
