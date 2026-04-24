import { motion } from "framer-motion";
import { Lightbulb, Users, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
   <div className="bg-[#010E1B] text-[#E1EFFD] flex flex-col items-center">

  {/* ABOUT SECTION */}
  <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 pt-40 px-6 md:px-10">

    {/* Image */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full md:w-1/2 flex h-full justify-center"
    >
      <img
        src="src/assets/about-section/about-us.jpeg"
        alt="MLSA UETT"
        className="w-full rounded-3xl shadow-2xl border border-[#55B4F3]/20"
      />
    </motion.div>

    {/* Text */}
    <div className="w-full md:w-1/2 text-center md:text-left">

      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#55B4F3] mb-2">
        About Us
      </h1>

      <p className="text-justify text-[#E1EFFD]/80 text-base sm:text-lg md:text-xl leading-[1.5]  mb-5">
        Welcome to the MLSA UETT, where passion for technology meets a commitment to personal and collective growth.
        We are a community of students dedicated to exploring the vast potential of Microsoft technologies, empowering
        ourselves and others to make a meaningful impact on the world. Our purpose is to build a collaborative
        environment at UET Taxila where Microsoft-selected ambassadors work together to serve and uplift the local
        community.
      </p>

      <button onClick={() => window.location.href = "/join"} className="px-8 py-3 bg-[#55B4F3] cursor-pointer text-[#010E1B] font-semibold rounded-full shadow-lg hover:scale-105 transition">
        Join Our Community
      </button>
    </div>
  </section>

  {/* ADVISOR SECTION */}
  <section className="w-full max-w-6xl mx-auto py-20 px-6 md:px-10 flex justify-center">

    <div className="w-full bg-gradient-to-r from-[#021529] to-[#031B33] rounded-[2px] shadow-2xl p-10 md:p-14 flex flex-col md:flex-row items-center gap-12 border border-[#55B4F3]/20">

      <img
        src="src/assets/about-section/advisor.jpeg"
        alt="Advisor"
        className="w-40 h-40 md:w-70 rounded-[5px] md:h-70 object-cover border-2 hover:p-2 transition-all border-[#55B4F3] shadow-lg"
      />

      <div className="text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#55B4F3] mb-4">
          Our Esteemed Advisor
        </h2>

        <h3 className="text-xl md:text-2xl font-semibold mb-4">
          Dr. Kanwal Yousuf
        </h3>

        <p className="text-[#E1EFFD]/80 text-base md:text-lg leading-relaxed">
          MLSA-UET Taxila is proudly advised by Dr. Kanwal Yousaf, Lecturer at the Department of Software Engineering,
          UET Taxila. She focuses on AI, innovation, and bridging academia with industry to empower students.
        </p>
      </div>

    </div>
  </section>

  {/* VISION & MISSION */}
  <section className="w-full max-w-6xl mx-auto md:py-15 px-6 md:px-10 bg-gradient-to-b from-[#010E1B] to-[#021529] rounded-3xl">

    <div className="text-center space-y-6 mb-12">

      <h2 className="text-3xl md:text-4xl font-bold text-[#55B4F3]">
        Our Vision
      </h2>

      <p className="text-[#E1EFFD]/80 text-base md:text-xl">
        Our vision is to build a collaborative presence in UET Taxila where ambassadors work together
        for community betterment and collective success.
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-[#55B4F3]">
        Our Mission
      </h2>

      <p className="text-[#E1EFFD]/80 text-base md:text-xl">
        We aim to provide students opportunities to learn, grow, and achieve goals through resources, mentorship, and collaboration.
      </p>
    </div>

    {/* CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

      {/* Card */}
      <div className="p-6 bg-[#021529] rounded-2xl text-center shadow-lg hover:scale-105 transition">
        <Lightbulb className="w-12 h-12 mx-auto text-[#55B4F3] mb-4" />
        <h3 className="text-xl font-semibold mb-2">Opportunity to Learn</h3>
        <p className="text-[#E1EFFD]/80 text-sm">
          Workshops, mentorship, and continuous learning.
        </p>
      </div>

      <div className="p-6 bg-[#021529] rounded-2xl text-center shadow-lg hover:scale-105 transition">
        <Users className="w-12 h-12 mx-auto text-[#55B4F3] mb-4" />
        <h3 className="text-xl font-semibold mb-2">Inclusive Community</h3>
        <p className="text-[#E1EFFD]/80 text-sm">
          Collaboration and inclusivity for shared success.
        </p>
      </div>

      <div className="p-6 bg-[#021529] rounded-2xl text-center shadow-lg hover:scale-105 transition">
        <Trophy className="w-12 h-12 mx-auto text-[#55B4F3] mb-4" />
        <h3 className="text-xl font-semibold mb-2">Commitment to Produce</h3>
        <p className="text-[#E1EFFD]/80 text-sm">
          Building impactful tech projects and contributions.
        </p>
      </div>

    </div>

  </section>

</div>
  );
}
