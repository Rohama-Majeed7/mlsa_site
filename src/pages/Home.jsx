import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { getEvents } from "../api/events";
import { getTeamMembers } from "../api/team";
import React from "react";

const offers = [
  "MLSA Swags",
  "LinkedIn Premium",
  "Certificates",
  "Xbox Gamepass",
];
export default function Home() {
  const navigate = useNavigate();
  const [events, setEvents] = React.useState([]);
  const [teamMembers, setTeamMembers] = React.useState([]);

  React.useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getEvents();
        setEvents(response);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  React.useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await getTeamMembers();
        setTeamMembers(response);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <div className="bg-[#010E1B] text-[#E1EFFD]">
      {/* Hero Section */}
      <section className="mt-8 flex min-h-screen flex-col items-center justify-center px-4 text-center sm:mt-0 sm:px-6 lg:px-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold text-[#55B4F3] mb-4"
        >
          Microsoft Learn Student Ambassador
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-2xl sm:text-3xl mb-6"
        >
          UET Taxila
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-xl text-center mb-6"
        >
          MLSA UETT is a student community at UET Taxila focused on exploring
          Microsoft technologies and promoting personal and collective growth.
          It brings together Microsoft-selected ambassadors to collaborate on
          impactful initiatives for the local community. Through teamwork,
          members achieve more together than they could individually, unlocking
          greater opportunities and innovation.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#55B4F3] cursor-pointer text-[#010E1B] px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
          onClick={() => navigate("contact")}
        >
          Join Us
        </motion.button>
      </section>
      {/* What We Offer */}
      <section className="bg-[#010E1B] px-4 py-10 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto w-full max-w-7xl text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#55B4F3] mb-14">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {offers.map((offer, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative  h-full min-h-[110px] w-full items-center gap-4 overflow-hidden rounded-xl bg-[#021529] p-4 text-left shadow-lg transition hover:shadow-2xl"
              >
                {/* Floating icon effect */}
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    delay: idx * 0.2,
                  }}
                >
                  <CheckCircle className="text-[#55B4F3] w-10 h-10" />
                </motion.div>

                {/* Offer text with subtle gradient */}
                <span className="text-white text-lg sm:text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#55B4F3] to-[#E1EFFD]">
                  {offer}
                </span>

                {/* Background glow */}
                <motion.div
                  className="absolute -z-10 w-40 h-40 bg-[#55B4F3]/20 rounded-full top-[-10%] right-[-10%] blur-3xl"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    delay: idx * 0.5,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      {/* Latest Events */}
      <section className="bg-[#010E1B] px-4 py-10 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto w-full max-w-7xl text-center"
        >
          <h2 className="text-4xl font-bold text-[#55B4F3] mb-12">
            Latest Events
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {events.reverse().slice(0, 3).map((event, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="flex h-full min-h-[330px] w-full cursor-pointer flex-col overflow-hidden rounded-2xl bg-[#021529] shadow-lg transition hover:shadow-2xl"
              >
                {/* Image */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-48 w-full object-cover"
                />

                {/* Content */}
                <div className="flex flex-grow flex-col p-5 text-left">
                  <h3 className="text-xl font-semibold mb-2 text-[#55B4F3]">
                    {event.title}
                  </h3>

                  <p className="text-[#E1EFFD]/80 text-sm flex-grow">
                    {event.description.length > 100
                      ? event.description.slice(0, 100) + "..."
                      : event.description}
                  </p>

                  {/* Button */}
                  <button
                    onClick={() => navigate("/events")}
                    className="mt-4 text-sm cursor-pointer font-medium text-[#55B4F3] hover:underline"
                  >
                    Learn More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/events")}
            className="mt-12 cursor-pointer px-6 py-3 bg-[#55B4F3] text-[#010E1B] font-semibold rounded-lg shadow-lg hover:shadow-2xl transition"
          >
            View All Events
          </motion.button>
        </motion.div>
      </section>
      {/* Core Team (only 3 members) */}
      <section className="bg-[#010E1B] px-4 py-10 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto w-full max-w-7xl text-center"
        >
          <h2 className="text-4xl font-bold text-[#55B4F3] mb-10">Core Team</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {teamMembers.reverse().slice(0, 3).map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="flex h-full min-h-[330px] w-full flex-col items-center rounded-2xl bg-[#021529] p-6 text-center shadow-lg transition hover:shadow-2xl"
              >
                <img
                  src={member.image }
                  alt={member.name}
                  className="mb-4 aspect-square w-full max-w-[220px] rounded-2xl border-4 border-[#55B4F3] object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-[#E1EFFD]/80">{member.designation}</p>
              </motion.div>
            ))}
          </div>

          {/* View All Team Members Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/team")}
            className="mt-10 cursor-pointer px-6 py-3 bg-[#55B4F3] text-[#010E1B] font-semibold rounded-lg shadow-lg hover:shadow-2xl transition"
          >
            View All Team Members
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
