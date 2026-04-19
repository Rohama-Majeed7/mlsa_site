import { motion } from "framer-motion";
import { Lightbulb, Users, Trophy } from "lucide-react";

export default function About() {
  return (
    <div className="bg-[#010E1B] text-[#E1EFFD] px-6 py-16 flex flex-col items-center">

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl  md:mt-12 font-bold text-[#55B4F3] mb-6 text-center"
      >
        About Us
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-3xl text-center text-[#E1EFFD]/80 text-base sm:text-lg md:text-xl leading-relaxed mb-8"
      >
        We are the Microsoft Learn Student Ambassadors at UET Taxila. Our mission is to empower students with technology, foster collaboration, and create impactful solutions for society. We organize workshops, events, and mentoring sessions to bridge the gap between learning and real-world application.
      </motion.p>

      {/* Call-to-Action */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
        className="mb-12 px-6 sm:px-10 py-3 bg-[#55B4F3] text-[#010E1B] font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition"
      >
        Join Our Community
      </motion.button>

      {/* Vision & Mission */}
      <section className="w-full max-w-6xl bg-gradient-to-b from-[#010E1B] bg-[#021529] via-[#010E1B]/90 to-[#021529] rounded-3xl py-12 sm:py-16 px-4 sm:px-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#55B4F3] mb-6">Our Vision</h2>
          <p className="text-base sm:text-lg md:text-xl text-[#E1EFFD]/80 mb-8 px-2 sm:px-0">
            Our vision at MLSA is to create a collaborative presence in UET Taxila, fostering teamwork among Ambassadors selected directly from Microsoft. Together, we strive for the betterment of the local community, enabling ambassadors to achieve more collectively than they could individually.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#55B4F3] mb-6">Our Mission</h2>
          <p className="text-base sm:text-lg md:text-xl text-[#E1EFFD]/80 px-2 sm:px-0">
            We believe that everyone should have the opportunity to learn and grow, and we are dedicated to providing our members with the resources and support they need to achieve their goals.
          </p>
        </motion.div>

        {/* Values / Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center text-center p-6 bg-[#021529] rounded-2xl shadow-lg hover:shadow-2xl transition"
          >
            <Lightbulb className="text-[#55B4F3] w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Opportunity to Learn</h3>
            <p className="text-[#E1EFFD]/80 text-sm sm:text-base">
              Resources, workshops, and mentorship to help ambassadors learn and grow continuously.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center text-center p-6 bg-[#021529] rounded-2xl shadow-lg hover:shadow-2xl transition"
          >
            <Users className="text-[#55B4F3] w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Inclusive Community</h3>
            <p className="text-[#E1EFFD]/80 text-sm sm:text-base">
              Fostering collaboration and inclusivity to achieve more collectively than individually.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center text-center p-6 bg-[#021529] rounded-2xl shadow-lg hover:shadow-2xl transition"
          >
            <Trophy className="text-[#55B4F3] w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Commitment to Produce</h3>
            <p className="text-[#E1EFFD]/80 text-sm sm:text-base">
              Encouraging ambassadors to create impactful projects and contribute meaningfully to the tech community.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
