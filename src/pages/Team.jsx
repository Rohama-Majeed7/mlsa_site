import { motion } from "framer-motion";

// Reuse the same coreTeam array or import from a separate file
export const coreTeam = [
  { name: "Mohtashim Niaz", role: "Lead", img: "src/assets/team/mohtashim.jpeg" },
  { name: "Muhammad Hasnain", role: "Community Manager", img: "src/assets/team/hasnain.jpeg" },
  { name: "Rafia Mushtaq", role: "Co-Lead", img: "src/assets/team/rafia.jpeg" },
  { name: "Burhan Abrar", role: "Ambassador Lead", img: "src/assets/team/burhan.jpeg" },
  { name: "Faizan Anwar", role: "Operational Lead", img: "src/assets/team/faizan.jpeg" },
  
];

export default function Team() {
  return (
    <div className="bg-[#010E1B] min-h-screen text-[#E1EFFD] px-6 sm:px-12 lg:px-24 py-15 sm:py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center pb-6 sm:pb-0 text-[#55B4F3] md:mb-12 sm:mt-10 mt-5"
      >
        Our Team Members
      </motion.h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {coreTeam.map((member, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-[#021529] cursor-pointer border border-[#55B4F3] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col items-center"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-50 h-50 rounded-2xl mb-4 object-cover border-2 border-[#55B4F3]"
            />
            <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
            <p className="text-[#E1EFFD]/80">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
