import { motion } from "framer-motion";
import { Users, Calendar, BookOpen, Trophy } from "lucide-react";

export default function Join() {
  return (
    <div className="bg-[#010E1B] text-[#E1EFFD] sm:mt-[30px] min-h-screen px-6 sm:px-12 lg:px-24 py-24">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#55B4F3] mb-6">
          Join MLSA UET Taxila
        </h1>

        <p className="text-lg text-[#E1EFFD]/80 leading-relaxed">
          Interested in becoming part of MLSA UET Taxila? Fill out the form and start your journey with us.
        </p>
      </div>

      {/* Benefits / Steps */}
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-16">

        <div className="bg-[#021529] p-8 rounded-2xl ">
          <Users className="text-[#55B4F3] w-10 h-10 mb-5" />
          <h3 className="text-xl font-semibold mb-3">Join the Community</h3>
          <p className="text-[#E1EFFD]/80 leading-relaxed">
            Become part of a passionate student tech community at UET Taxila.
          </p>
        </div>

        <div className="bg-[#021529] p-8 rounded-2xl ">
          <Calendar className="text-[#55B4F3] w-10 h-10 mb-5" />
          <h3 className="text-xl font-semibold mb-3">Attend Events</h3>
          <p className="text-[#E1EFFD]/80 leading-relaxed">
            Participate in workshops, hackathons, and sessions.
          </p>
        </div>

        <div className="bg-[#021529] p-8 rounded-2xl ">
          <BookOpen className="text-[#55B4F3] w-10 h-10 mb-5" />
          <h3 className="text-xl font-semibold mb-3">Build Skills</h3>
          <p className="text-[#E1EFFD]/80 leading-relaxed">
            Learn Azure, AI, Web Development, and more.
          </p>
        </div>

        <div className="bg-[#021529] p-8 rounded-2xl">
          <Trophy className="text-[#55B4F3] w-10 h-10 mb-5" />
          <h3 className="text-xl font-semibold mb-3">Grow & Lead</h3>
          <p className="text-[#E1EFFD]/80 leading-relaxed">
            Get opportunities to become ambassador or core team member.
          </p>
        </div>

      </div>

      {/* MAIN CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mt-10"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-[#55B4F3] mb-6">
          Ready to Join?
        </h2>

        <a
          href="https://forms.gle/YOUR_FORM_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-[#55B4F3] text-[#010E1B] font-semibold rounded-full shadow-lg hover:scale-105 transition text-lg"
        >
          Fill the Form
        </a>

        <p className="mt-6 text-sm text-[#E1EFFD]/60">
          After submission, our team will contact you with next steps.
        </p>
      </motion.div>

    </div>
  );
}