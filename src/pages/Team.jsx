import { motion } from "framer-motion";

// Reuse the same coreTeam array or import from a separate file
const coreTeam = [
  { name: "Hamza Shaukat", role: "Lead", img: "https://via.placeholder.com/150" },
  { name: "Maryam", role: "Community Manager", img: "https://via.placeholder.com/150" },
  { name: "Azka", role: "Co-Lead", img: "https://via.placeholder.com/150" },
  { name: "Wajeeha", role: "Graphics Lead", img: "https://via.placeholder.com/150" },
  { name: "Nimra", role: "Content Lead", img: "https://via.placeholder.com/150" },
  { name: "Saleh", role: "Photography Lead", img: "https://via.placeholder.com/150" },
  { name: "Momina", role: "Videography Lead", img: "https://via.placeholder.com/150" },
  { name: "Sarah", role: "Marketing Lead", img: "https://via.placeholder.com/150" },

  { name: "Abdur Rafay", role: "Alpha Ambassador", img: "https://via.placeholder.com/150" },
  { name: "Ahmad Zafar", role: "Alpha Ambassador", img: "https://via.placeholder.com/150" },
  { name: "Zile Huma", role: "Alpha Ambassador", img: "https://via.placeholder.com/150" },
  { name: "Ayesha Naveed", role: "Alpha Ambassador", img: "https://via.placeholder.com/150" },
  { name: "Hifza Eman", role: "Alpha Ambassador", img: "https://via.placeholder.com/150" },
  { name: "Ali Usman", role: "Alpha Ambassador", img: "https://via.placeholder.com/150" },
  { name: "Yumna Chaudhry", role: "Alpha Ambassador", img: "https://via.placeholder.com/150" },
  { name: "Laiba", role: "Alpha Ambassador", img: "https://via.placeholder.com/150" },
  { name: "Maryam Sarfraz", role: "Alpha Ambassador", img: "https://via.placeholder.com/150" },

  { name: "Hamza Sajid", role: "Beta Ambassador", img: "https://via.placeholder.com/150" },
  { name: "Moazam", role: "Beta Ambassador", img: "https://via.placeholder.com/150" },
  { name: "M. Ahmad", role: "Beta Ambassador", img: "https://via.placeholder.com/150" },
  { name: "Hamza Iftikhar", role: "Beta Ambassador", img: "https://via.placeholder.com/150" },
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
