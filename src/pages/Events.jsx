import { motion } from "framer-motion";
import { img } from "framer-motion/m";

// Sample events with images
export const events = [
  {
    title: "Hacktoberfest-2024 (October-2024)",
    description:
      "MLSA-UETT organized Hacktoberfest 2024 to promote open-source contributions through Git/GitHub workshops and hands-on pull request sessions. Participants also received career guidance from a Microsoft expert, with certificates and swag awarded at the end.",
    img: "src/assets/events/hactobertfest.jpg",
    url: "https://web.uettaxila.edu.pk/SED/events64.asp",
  },
  {
    title: "OpenHouse and Job Fair, 2025",
    description:
      "The Open House and Job Fair 2025 showcased 35 innovative final-year projects in AI, cybersecurity, cloud computing, and more. Industry professionals connected with students, providing valuable feedback, internship opportunities, and career guidance.",
    img: "src/assets/events/openhouse.jpg",
    url: "https://web.uettaxila.edu.pk/SED/events67.asp",
  },
  {
    title: "HackXila2025 (May-2025)",
    description:
      "HackXila 2025 brought together students from multiple universities to compete in innovation-focused challenges including Hack Idea, Prompt Engineering, Quiz, and Speed Typing. The event celebrated creativity, collaboration, and technical excellence with exciting prizes.",
    img: "src/assets/events/hackxila.jpg",
    url: "https://web.uettaxila.edu.pk/SED/events66.asp",
  },
  {
    title: "Azure AI Challenge 3",
    description:
      "The Azure AI Skills Challenge encouraged students to strengthen their AI expertise through Microsoft Learn modules. Participants competed for exciting rewards including LinkedIn Premium, Xbox vouchers, badges, and trophies.",
    img: "src/assets/events/azure-challenge.jpg",
    url: "#",
  },
  {
    title: "Core Team Inductions",
    description:
      "Following a competitive interview process, MLSA UETT announced its Core Team for the 2023–2024 term. The induction recognized dedicated student ambassadors committed to leading technical events and community initiatives.",
    img: "src/assets/events/team-inductions.jpg",
    url: "#",
  },
  {
    title: "MLSA UETT Orientation",
    description:
      "The official orientation introduced students to the Microsoft Learn Student Ambassador program and its opportunities. Attendees learned about community activities, technical learning paths, and leadership opportunities at UET Taxila.",
    img: "src/assets/events/mlsa-orientation.jpg",
    url: "#",
  },
  {
    title: "Introduction to Quantum Computing",
    description:
      "This session introduced the fundamentals of quantum computing, covering qubits, quantum mechanics, and future applications. Students gained insights from Beta MLSA Nadeem Akhter on the next generation of computing technologies.",
    img: "src/assets/events/intro-cloud-computing.jpg",
    url: "#",
  },
  {
    title: "Introduction to Azure Fundamentals",
    description:
      "A beginner-friendly session covering cloud computing concepts, Azure services, and practical use cases. Participants gained a solid foundation for starting their journey in Microsoft Azure and cloud technologies.",
    img: "src/assets/events/azure-fund.jpg",
    url: "#",
  },
  {
    title: "LeadHer",
    description:
      "LeadHer empowered aspiring women in technology through inspiring talks, collaborative learning, and hands-on activities. The initiative encouraged participants to build technical skills, confidence, and leadership abilities.",
    img: "src/assets/events/leadher.jpg",
    url: "#",
  },
  {
    title: "Secure The Cloud",
    description:
      "This event explored essential cloud security concepts across Azure, AWS, and Google Cloud Platform. Live demonstrations highlighted best practices for securing data, applications, and cloud infrastructure.",
    img: "src/assets/events/secure-cloud.jpg",
    url: "#",
  },
  {
    title: "Azure and Its Uses",
    description:
      "An introductory session designed to familiarize students with Microsoft Azure and cloud computing fundamentals. Participants explored Azure services and learned how cloud technologies are transforming modern software development.",
    img: "src/assets/events/azure-uses.jpg",
    url: "#",
  },
  {
    title: "LeadHer with MLSA Gold",
    description:
      "Featuring MLSA Gold Neha Hafeez, this event inspired students to explore Microsoft's ecosystem through expert-led sessions. Participants gained practical insights into Microsoft technologies and career development opportunities.",
    img: "src/assets/events/leadherd.jpg",
    url: "#",
  },
  {
    title: "Machine Learning with Microsoft Employee",
    description:
      "MLSA UETT hosted an engaging machine learning session led by Omar Barakat, ML Engineer at Microsoft. Students learned fundamental ML concepts, industry applications, and practical insights from an experienced professional.",
    img: "src/assets/events/ml.jpg",
    url: "#",
  },
  {
    title: "Unlocking Opportunities Abroad",
    description:
      "This inspiring event featured Dr. Zafar Shahid, former Technical Lead at Meta and Nvidia, who shared valuable career insights. Students explored opportunities in higher education, entrepreneurship, and global technology careers.",
    img: "src/assets/events/opprt.jpg",
    url: "#",
  },
  {
    title: "HactoberFest 23",
    description:
      "HacktoberFest 2023 introduced students to the world of open-source development through expert-led sessions and community engagement. Participants learned how to collaborate effectively and contribute to global open-source projects.",
    img: "src/assets/events/hactpbert.png",
    url: "https://web.uettaxila.edu.pk/SED/events42.asp",
  },
  {
    title: "Azure Fundamentals Challenge",
    description:
      "Students were encouraged to complete Microsoft Azure Fundamentals learning modules and test their cloud knowledge. Successful participants had the opportunity to earn LinkedIn Premium subscriptions and exciting prizes.",
    img: "src/assets/events/challenge.jpg",
    url: "#",
  },
];

export default function Events() {
  return (
    <div className="min-h-screen bg-[#010E1B] text-[#E1EFFD] sm:px-6 px-4 py-16">
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
            className="bg-[#021529] rounded-xl shadow-lg overflow-hidden relative border border-[#55B4F3]/20 transition cursor-pointer"
          >
            {/* Image */}
            <img
              src={event.img}
              alt={event.title}
              className="w-full h-48 object-cover"
            />

            {/* Card Content */}
            <div className="p-3 flex flex-col justify-between ">
              <h2 className="text-xl font-semibold text-[#55B4F3] mb-2">
                {event.title}
              </h2>
              <p className="text-[#E1EFFD]/80 text-sm leading-relaxed">
                {event.description}
              </p>
              <a href={event.url} className="text-[#55B4F3] hover:underline mt-3">Click for more details</a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
