import { motion } from "framer-motion";
import { Lightbulb, Users, Trophy } from "lucide-react";
// import { useNavigate } from "react-router-dom";
import aboutImg from "../assets/about-section/about-us.jpeg";
import advisorImg from "../assets/about-section/advisor.jpeg";
export default function About() {
  // const navigate = useNavigate();
  return (
    <div className="bg-[#010E1B] text-[#E1EFFD] flex flex-col items-center">

      {/* ABOUT SECTION */}
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 pt-22 sm:px-6 sm:pt-40 lg:px-10 md:flex-row">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex h-full justify-center"
        >
          <img
            src={aboutImg}
            alt="MLSA UETT"
            className="w-full rounded-3xl shadow-2xl border border-[#55B4F3]/20"
          />
        </motion.div>

        {/* Text */}
        <div className="flex w-full flex-col justify-between pb-2 text-center md:w-1/2 md:text-left">

          <h1 className="text-xl sm:text-2xl md:text-5xl font-bold text-[#55B4F3] ">
            About Us
          </h1>

          <p className="text-justify text-[#E1EFFD]/80 text-base sm:text-lg md:text-base leading-[1.5]  mb-5">
            Welcome to the MLSA UETT, where passion for technology meets a commitment to personal and collective growth.
            We are a community of students dedicated to exploring the vast potential of Microsoft technologies, empowering
            ourselves and others to make a meaningful impact on the world. Our purpose is to build a collaborative
            environment at UET Taxila where Microsoft-selected ambassadors work together to serve and uplift the local
            community.
          </p>

          <button onClick={() => window.location.href = "/contact"} className="px-8 w-fit py-3 bg-[#55B4F3] cursor-pointer text-[#010E1B] font-semibold rounded-full shadow-lg hover:scale-105 transition">
            Join Our Community
          </button>
        </div>
      </section>

      {/* ADVISOR SECTION */}
      <section className="mx-auto flex w-full max-w-7xl justify-center px-4 py-20 sm:px-6 lg:px-10">

        <div className="flex w-full flex-col items-center gap-12 rounded-xl border border-[#55B4F3]/20 bg-gradient-to-r from-[#021529] to-[#031B33] p-10 shadow-2xl md:flex-row md:p-14">

          <img
            src={advisorImg}
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
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 md:py-10 sm:px-6 lg:px-10">

        <div className="text-center flex flex-col md:gap-10 gap-5">

          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#55B4F3]">
              Our Vision
            </h2>

            <p className="text-[#E1EFFD]/80 text-base md:text-xl">
              Our vision is to build a collaborative presence in UET Taxila where ambassadors work together
              for community betterment and collective success.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#55B4F3]">
              Our Mission
            </h2>

            <p className="text-[#E1EFFD]/80 text-base md:text-xl">
              We aim to provide students opportunities to learn, grow, and achieve goals through resources, mentorship, and collaboration.
            </p>
          </div>
        </div>

       {/* CARDS */}
        <div className="my-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">

          {/* Card */}
          <div className=" h-full min-h-[200px] w-full flex-col rounded-xl bg-[#021529] p-6 text-center shadow-lg transition hover:scale-105">
            <Lightbulb className="w-12 h-12 mx-auto text-[#55B4F3] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Opportunity to Learn</h3>
            <p className="mt-auto text-sm text-[#E1EFFD]/80">
              Workshops, mentorship, and continuous learning.
            </p>
          </div>

          <div className="h-full min-h-[200px] w-full flex-col rounded-2xl bg-[#021529] p-6 text-center shadow-lg transition hover:scale-105">
            <Users className="w-12 h-12 mx-auto text-[#55B4F3] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Inclusive Community</h3>
            <p className="mt-auto text-sm text-[#E1EFFD]/80">
              Collaboration and inclusivity for shared success.
            </p>
          </div>

          <div className="h-full min-h-[200px] w-full flex-col rounded-2xl bg-[#021529] p-6 text-center shadow-lg transition hover:scale-105">
            <Trophy className="w-12 h-12 mx-auto text-[#55B4F3] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Commitment to Produce</h3>
            <p className="mt-auto text-sm text-[#E1EFFD]/80">
              Building impactful tech projects and contributions.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}
