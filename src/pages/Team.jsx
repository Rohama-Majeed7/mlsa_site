import { motion } from "framer-motion";

// Reuse the same coreTeam array or import from a separate file
const coreTeam = [
  { name: "Ali Khan", role: "President", img: "https://via.placeholder.com/150" },
  { name: "Sara Malik", role: "Tech Lead", img: "https://via.placeholder.com/150" },
  { name: "Hassan Ahmed", role: "Community Lead", img: "https://via.placeholder.com/150" },
  { name: "Ayesha Khan", role: "Marketing Lead", img: "https://via.placeholder.com/150" },
  { name: "Omar Farooq", role: "Event Lead", img: "https://via.placeholder.com/150" },
  // Add more members here
];

export default function Team() {
  return (
    <div className="bg-[#010E1B] min-h-screen text-[#E1EFFD] px-6 sm:px-12 lg:px-24 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-[#55B4F3] md:mb-12 mt-10"
      >
        Our Team Members
      </motion.h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {coreTeam.map((member, idx) => (
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
    </div>
  );
}
