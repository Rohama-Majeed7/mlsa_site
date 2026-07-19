import { motion } from "framer-motion";
import { getEvents } from "../api/events";
import React from "react";
import { Link } from "react-router-dom";
export default function Events() {
  const [events, setEvents] = React.useState([]);

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

  return (
    <div className="min-h-screen bg-[#010E1B] text-[#E1EFFD] sm:px-6 px-4 py-18">
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
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />

            {/* Card Content */}
            <div className="p-3 flex flex-col justify-between ">
              <h2 className="text-xl font-semibold text-[#55B4F3] mb-2">
                {event.title}
              </h2>
              <p className="text-[#E1EFFD]/80 text-sm leading-relaxed">
                {event.description?.length > 200
                  ? event.description?.slice(0, 200) + "..."
                  : event.description}
              </p>
              <Link
                to={`/events/${event._id || event.id}`}
                className="text-[#55B4F3] hover:underline mt-3"
              >
                View event details
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
