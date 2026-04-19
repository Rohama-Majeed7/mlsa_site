import { motion } from "framer-motion";

// Sample events with images
const events = [
  {
    title: "Introduction to Azure Fundamentals",
    description: "Discover Azure fundamentals with our Beta Ambassador. Join us for an enlightening session on the essentials of Azure.",
    img: "/images/azure-fundamentals.jpg"
  },
  {
    title: "Azure and its uses",
    description: "Diving into the world of Cloud with Microsoft Azure. Newly selected ambassador Laiba Maryam initiates her journey with MLSA-UETT.",
    img: "/images/azure-cloud.jpg"
  },
  {
    title: "LeadHers",
    description: "Forget the stereotypes, it's time to Rewrite The Code! LeadHers is where tech-savvy women unite to learn, collaborate, and conquer the digital frontier.",
    img: "/images/leadhers.jpg"
  },
  {
    title: "Secure The Cloud",
    description: "Safety, assurance and surveillance: Be part of discovering cloud safety approaches and hands-on demos with GCP, Azure, and AWS.",
    img: "/images/secure-cloud.jpg"
  },
  {
    title: "Unlocking Opportunities Abroad",
    description: "Join a transformative journey with MLSA Ambassador Wajeeha Usman and Dr. Zafar Shahid on innovation, education, and entrepreneurship.",
    img: "/images/opportunities-abroad.jpg"
  }
];

export default function Events() {
  return (
    <div className="min-h-screen bg-[#010E1B] text-[#E1EFFD] px-6 py-16">
      
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl md:mt-12 font-bold text-[#55B4F3] mb-4 text-center"
      >
        Events
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-center text-[#E1EFFD]/80 max-w-2xl mx-auto mb-12"
      >
        Explore the dynamic range of events hosted by MLSA-UETT
      </motion.p>

      {/* Event Cards Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {events.map((event, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-[#021529] rounded-xl shadow-lg overflow-hidden border border-[#55B4F3]/20 transition cursor-pointer"
          >
            {/* Image */}
            <img
              src={event.img}
              alt={event.title}
              className="w-full h-48 object-cover"
            />

            {/* Card Content */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-[#55B4F3] mb-2">{event.title}</h2>
              <p className="text-[#E1EFFD]/80 text-sm leading-relaxed">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
