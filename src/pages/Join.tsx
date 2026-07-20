import { motion } from "framer-motion";
import { Users, Calendar, BookOpen, Trophy } from "lucide-react";

export default function Join() {
  return (
    <div className="min-h-screen bg-[#010E1B] px-4 py-20 text-[#E1EFFD] sm:mt-[30px] sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">

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
      <div className="mx-auto mb-16 grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">

        <div className="flex h-full min-h-[260px] w-full flex-col rounded-2xl border border-[#55B4F3]/20 bg-[#021529] p-8 text-left">
          <Users className="text-[#55B4F3] w-10 h-10 mb-5" />
          <h3 className="text-xl font-semibold mb-3">Join the Community</h3>
          <p className="text-[#E1EFFD]/80 leading-relaxed mt-auto">
            Become part of a passionate student tech community at UET Taxila.
          </p>
        </div>

        <div className="flex h-full min-h-[260px] w-full flex-col rounded-2xl border border-[#55B4F3]/20 bg-[#021529] p-8 text-left">
          <Calendar className="text-[#55B4F3] w-10 h-10 mb-5" />
          <h3 className="text-xl font-semibold mb-3">Attend Events</h3>
          <p className="text-[#E1EFFD]/80 leading-relaxed mt-auto">
            Participate in workshops, hackathons, and sessions.
          </p>
        </div>

        <div className="flex h-full min-h-[260px] w-full flex-col rounded-2xl border border-[#55B4F3]/20 bg-[#021529] p-8 text-left">
          <BookOpen className="text-[#55B4F3] w-10 h-10 mb-5" />
          <h3 className="text-xl font-semibold mb-3">Build Skills</h3>
          <p className="text-[#E1EFFD]/80 leading-relaxed mt-auto">
            Learn Azure, AI, Web Development, and more.
          </p>
        </div>

        <div className="flex h-full min-h-[260px] w-full flex-col rounded-2xl border border-[#55B4F3]/20 bg-[#021529] p-8 text-left">
          <Trophy className="text-[#55B4F3] w-10 h-10 mb-5" />
          <h3 className="text-xl font-semibold mb-3">Grow & Lead</h3>
          <p className="text-[#E1EFFD]/80 leading-relaxed mt-auto">
            Get opportunities to become ambassador or core team member.
          </p>
        </div>

      </div>

      {/* MAIN CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-10 text-center"
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

    </div>
  );
}