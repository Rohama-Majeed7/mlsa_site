import { motion } from "framer-motion";

// Reuse the same coreTeam array or import from a separate file
export const coreTeam = [
  { name: "Hamza Shaukat", role: "Lead", img: "src/assets/team/hamza.jpg" },
  { name: "Maryam", role: "Community Manager", img: "src/assets/team/mariyam.jpg" },
  { name: "Azka", role: "Co-Lead", img: "src/assets/team/azka.jpg" },
  { name: "Wajeeha", role: "Graphics Lead", img: "src/assets/team/wajeeha.jpg" },
  { name: "Nimra", role: "Content Lead", img: "src/assets/team/nimra.jpg" },
  { name: "Saleh", role: "Photography Lead", img: "src/assets/team/saleh.jpg" },
  { name: "Momina", role: "Videography Lead", img: "src/assets/team/monima.jpg" },
  { name: "Sarah", role: "Marketing Lead", img: "src/assets/team/sarah.jpg" },

  { name: "Abdur Rafay", role: "Alpha Ambassador", img: "src/assets/team/abdul rafay.jpg" },
  { name: "Ahmad Zafar", role: "Alpha Ambassador", img: "src/assets/team/ahmed-zafar.jpg" },
  { name: "Zile Huma", role: "Alpha Ambassador", img: "src/assets/team/huma.jpg" },
  { name: "Ayesha Naveed", role: "Alpha Ambassador", img: "src/assets/team/ayesha.jpg" },
  { name: "Hifza Eman", role: "Alpha Ambassador", img: "src/assets/team/ifza.jpg" },
  { name: "Ali Usman", role: "Alpha Ambassador", img: "src/assets/team/ali usman.jpg" },
  { name: "Yumna Chaudhry", role: "Alpha Ambassador", img: "src/assets/team/umna.jpg" },
  { name: "Laiba", role: "Alpha Ambassador", img: "src/assets/team/laiba.jpg" },
  { name: "Maryam Sarfraz", role: "Alpha Ambassador", img: "src/assets/team/maryam sarfraz.jpg" },

  { name: "Hamza Sajid", role: "Beta Ambassador", img: "src/assets/team/hamza sajid.jpg" },
  { name: "Moazam", role: "Beta Ambassador", img: "src/assets/team/moazam.jpg" },
  { name: "M. Ahmad", role: "Beta Ambassador", img: "src/assets/team/ahmed.jpg" },
  { name: "Hamza Iftikhar", role: "Beta Ambassador", img: "src/assets/team/hamza ifthikar.jpg" },
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
