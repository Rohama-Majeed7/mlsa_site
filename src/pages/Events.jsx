import { motion } from "framer-motion";
import { getEvents } from "../api/events";
import React from "react";
import { Link } from "react-router-dom";
export default function Events() {
  const [events, setEvents] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getEvents();
        setEvents(response);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen bg-[#010E1B] px-4 py-20 text-[#E1EFFD] sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
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
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {isLoading
          ? Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="relative h-full min-h-[330px] w-full overflow-hidden rounded-xl border border-[#55B4F3]/20 bg-[#021529] shadow-lg"
              >
                <div className="w-full h-48 bg-[#0A2338] animate-pulse" />
                <div className="p-3 space-y-3">
                  <div className="h-6 w-3/4 rounded bg-[#0A2338] animate-pulse" />
                  <div className="h-4 w-full rounded bg-[#0A2338] animate-pulse" />
                  <div className="h-4 w-5/6 rounded bg-[#0A2338] animate-pulse" />
                  <div className="h-4 w-1/3 rounded bg-[#0A2338] animate-pulse" />
                </div>
              </div>
            ))
          : events.reverse().map((event, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="relative flex h-full min-h-[330px] w-full cursor-pointer flex-col overflow-hidden rounded-xl border border-[#55B4F3]/20 bg-[#021529] text-left shadow-lg transition"
              >
                {/* Image */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />

                {/* Card Content */}
                <div className="flex flex-grow flex-col p-4">
                  <h2 className="text-xl font-semibold text-[#55B4F3] mb-2">
                    {event.title}
                  </h2>
                  <p className="flex-grow text-sm leading-relaxed text-[#E1EFFD]/80">
                    {event.description?.length > 200
                      ? event.description?.slice(0, 200) + "..."
                      : event.description}
                  </p>
                  <Link
                    to={`/events/${event._id || event.id}`}
                    className="mt-3 text-[#55B4F3] hover:underline"
                  >
                    View event details
                  </Link>
                </div>
              </motion.div>
            ))}
      </motion.div>
      </div>
    </div>
  );
}
