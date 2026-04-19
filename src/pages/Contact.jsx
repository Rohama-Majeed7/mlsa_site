import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#010E1B] text-[#E1EFFD] px-6 py-16 flex flex-col">

      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-[#55B4F3] md:mt-12 mb-4">
          Get in Touch
        </h1>
        <p className="text-lg sm:text-xl mb-2">
          Have something to share with us? Or looking for a potential collaboration?
        </p>
        <p className="text-lg sm:text-xl">
          Get in touch with the minds behind MLSA-UET.
        </p>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="flex flex-col-reverse md:flex-row items-start md:items-stretch justify-center gap-12 md:gap-20 max-w-6xl mx-auto w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {/* Contact Form */}
        <motion.form
          className="flex-1 bg-[#021529] p-8 rounded-2xl shadow-lg w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#55B4F3] mb-6 text-center md:text-left">
            Send a Message
          </h2>
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-3 mb-4 rounded-lg bg-[#010E1B] text-[#E1EFFD] border border-[#55B4F3]/40 focus:border-[#55B4F3] focus:ring focus:ring-[#55B4F3]/20 outline-none transition text-lg"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 rounded-lg bg-[#010E1B] text-[#E1EFFD] border border-[#55B4F3]/40 focus:border-[#55B4F3] focus:ring focus:ring-[#55B4F3]/20 outline-none transition text-lg"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 mb-4 rounded-lg bg-[#010E1B] text-[#E1EFFD] border border-[#55B4F3]/40 focus:border-[#55B4F3] focus:ring focus:ring-[#55B4F3]/20 outline-none transition h-40 resize-none text-lg"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 bg-[#55B4F3] text-[#010E1B] font-semibold rounded-lg shadow-lg hover:shadow-2xl transition text-lg"
          >
            Send
          </motion.button>
        </motion.form>

        {/* Contact Info Cards */}
        <motion.div className="flex-1 flex flex-col gap-6 w-full mb-6 md:mb-0">
          {/* Email */}
          <motion.div
            className="flex items-center gap-4 p-6 rounded-2xl border border-[#55B4F3]/40 hover:bg-[#021529] transition cursor-pointer shadow-md hover:shadow-xl"
            whileHover={{ scale: 1.03 }}
          >
            <Mail className="text-[#55B4F3] w-8 h-8" />
            <div>
              <h3 className="font-bold text-xl sm:text-2xl">Email</h3>
              <p className="text-lg sm:text-xl">mlsauettaxila@gmail.com</p>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            className="flex items-center gap-4 p-6 rounded-2xl border border-[#55B4F3]/40 hover:bg-[#021529] transition cursor-pointer shadow-md hover:shadow-xl"
            whileHover={{ scale: 1.03 }}
          >
            <Phone className="text-[#55B4F3] w-8 h-8" />
            <div>
              <h3 className="font-bold text-xl sm:text-2xl">Phone</h3>
              <p className="text-lg sm:text-xl">+92 304 4197010</p>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            className="flex items-center gap-4 p-6 rounded-2xl border border-[#55B4F3]/40 hover:bg-[#021529] transition cursor-pointer shadow-md hover:shadow-xl"
            whileHover={{ scale: 1.03 }}
          >
            <MapPin className="text-[#55B4F3] w-8 h-8" />
            <div>
              <h3 className="font-bold text-xl sm:text-2xl">Location</h3>
              <p className="text-lg sm:text-xl">UET Taxila</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
