import { motion } from "framer-motion";
import { img } from "framer-motion/m";

// Sample events with images
export const events = [
  {
    title: "Hacktoberfest-2024 (October-2024)",
    description:"MLSA-UETT organized Hacktoberfest 2024, featuring a series of sessions focused on open-source contributions, Git/GitHub skills, and making impactful pull requests. Students also learned about engaging with the MLSA community and received career guidance from a Microsoft expert on emerging technologies. The event concluded with certificates and swag distributed to participants and volunteers.",
    img: "src/assets/events/hactobertfest.jpg"
  },
  {
    title: "OpenHouse and Job Fair, 2025",
    description:"The Open House and Job Fair 2025 at UET Taxila, organized with MLSA and GDSC, provided a platform for final-year students to showcase 35 innovative projects across domains like AI, cybersecurity, and cloud computing. Industry professionals interacted with students, offering feedback and career opportunities including internships and jobs. The event strengthened academia-industry collaboration and highlighted the department’s commitment to student growth and professional development.",
    img: "src/assets/events/openhouse.jpg"
  },
  {
    title: "HackXila2025 (May-2025)",
    description:"HackXila 2025 was a student-led hackathon by MLSA UETT and GDSC that brought together participants from multiple universities to compete in innovation-driven challenges like Hack Idea, Prompt Engineering, Quiz, and Speed Typing. The event showcased creativity, teamwork, and technical skills, with expert judges evaluating projects and PKR 34,000 awarded in prizes. It served as a major platform for collaboration, talent recognition, and student empowerment in tech.",
    img: "src/assets/events/hackxila.jpg"
  },
  {
    title: "Azure AI Challenge 3",
    description:
      "Elevate your AI skills with the MLSA-UETT Azure AI Skills Challenge. Complete modules to win LinkedIn Premium, Xbox vouchers, and earn trophies and badges.",
    img: "src/assets/events/azure-challenge.jpg"
  },
  {
    title: "Core Team Inductions",
    description:
      "After extensive interviews across campus, MLSA UETT proudly announces the Core Team for 2023–2024, recognizing outstanding student ambassadors.",
    img: "src/assets/events/team-inductions.jpg"
  },
  {
    title: "MLSA UETT Orientation",
    description:
      "The official orientation held on 1st March 2023 at the Software Engineering Department, UET Taxila, introducing students to the Microsoft Learn Student Ambassador program.",
    img: "src/assets/events/mlsa-orientation.jpg"
  },
  {
    title: "Introduction to Quantum Computing",
    description:
      "Dive into Quantum Computing with Beta MLSA Nadeem Akhter from Kardan University, Afghanistan. Learn core concepts and future applications.",
    img: "src/assets/events/intro-cloud-computing.jpg"
  },

  {
    title: "Introduction to Azure Fundamentals",
    description:
      "Learn the basics of Azure including cloud computing concepts, core Azure services, and real-world applications with expert ambassadors.",
    img: "src/assets/events/azure-fund.jpg"
  },
  {
    title: "LeadHer",
    description:
      "Rewrite the code with LeadHers — empowering women in tech to learn, collaborate, and lead the digital revolution through hands-on sessions.",
    img: "src/assets/events/leadher.jpg"
  },
  {
    title: "Secure The Cloud",
    description:
      "Explore cloud security practices across Azure, AWS, and GCP with live demos focused on data protection, safety, and surveillance systems.",
    img: "src/assets/events/secure-cloud.jpg"
  },
  {
    title: "Azure and Its Uses",
    description:
      "A beginner-friendly session introducing Microsoft Azure and cloud computing, hosted by MLSA ambassadors to guide students into cloud technologies.",
    img: "src/assets/events/azure-uses.jpg"
  }, {
    title: "LeadHer with MLSA Gold",
    description: "Unleash the Power Within: Mastering the Microsoft Platform with LeadHers! Hosting MLSA Gold, Neha Hafeez. Get hands-on with expert-led sessions that'll unlock the full potential of the Microsoft Platform and boost your career.",
    img: "src/assets/events/leadherd.jpg",
  },
  {
    title: "Machine Learning with Microsoft Employee",
    description: "MLSU-UETT successfully conducted an immersive session on August 5th, 2023, titled 'IML 1.1: Introduction to Machine Learning, with Mr. Omar Barakat, ML Engineer at Microsoft, Cairo, Egypt.",
    img: "src/assets/events/ml.jpg",
  },
  {
    title: "Unlocking Opportunities Abroad",
    description: "Join us on a transformative journey where innovation, education, and entrepreneurship converge in an enlightening event hosted by our MLSA Ambassador, Wajeeha Usman. We'll be hosting Dr. Zafar Shahid, a renowned industry and academia expert who has previously served as the Technical Lead at Meta and Nvidia.",
    img: "src/assets/events/opprt.jpg",
  },
  {
    title: "HactoberFest 23",
    description: "Conducted on October 25th, 2023 MLSA-UETT's vibrant session on open-source contributions featuring speakers Kiran Amin Panjwani and Arsalan Khattak. Empowering students to connect, collaborate, and contribute to the global open-source community",
    img: "src/assets/events/hactpbert.png",
  },
  {
    title: "Azure Fundamentals Challenge",
    description: "Complete the Azure Fundamentals Challenge by October 21, and win Linkedin premium and exciting awards.",
    img: "src/assets/events/challenge.jpg",
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
