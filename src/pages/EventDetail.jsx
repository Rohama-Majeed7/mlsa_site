import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CalendarDays, Link as LinkIcon, MapPin } from "lucide-react";
import { getEventById } from "../api/events";

export default function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    let isMounted = true;

    const fetchEvent = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await getEventById(id);
        if (isMounted) {
          setEvent(response);
        }
      } catch (fetchError) {
        if (isMounted) {
          setError("We could not load this event right now.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchEvent();

    return () => {
      isMounted = false;
    };
  }, [id]);

  const imageUrl = event?.image || event?.img;
  const eventDate = event?.date || event?.eventDate || event?.startDate;
  const eventLocation = event?.location || event?.venue || event?.place;
  const eventLink = event?.url || event?.link;

  return (
    <div className="min-h-screen bg-[#010E1B] px-4 py-16 text-[#E1EFFD] sm:px-6">
      <div className="mx-auto max-w-5xl">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#55B4F3] hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        {loading ? (
          <div className="rounded-3xl border border-[#55B4F3]/20 bg-[#021529] p-8 text-center text-[#E1EFFD]/80">
            Loading event details...
          </div>
        ) : error ? (
          <div className="rounded-3xl border border-red-400/30 bg-red-500/10 p-8 text-center text-red-100">
            <p className="font-semibold">{error}</p>
            <Link
              to="/events"
              className="mt-4 inline-block text-sm font-medium text-[#55B4F3] hover:underline"
            >
              Return to events
            </Link>
          </div>
        ) : event ? (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-3xl border border-[#55B4F3]/20 bg-[#021529] shadow-2xl"
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={event.title || "Event image"}
                className="h-72 w-full object-cover sm:h-96"
              />
            ) : null}

            <div className="space-y-6 p-6 sm:p-10">
              <div>
                <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-[#55B4F3]/80">
                  Event Details
                </p>
                <h1 className="text-3xl font-bold text-white sm:text-5xl">
                  {event.title}
                </h1>
              </div>

              <p className="max-w-3xl text-base leading-7 text-[#E1EFFD]/80 sm:text-lg">
                {event.description}
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                {eventDate ? (
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-2 flex items-center gap-2 text-[#55B4F3]">
                      <CalendarDays className="h-4 w-4" />
                      <span className="text-sm font-semibold">Date</span>
                    </div>
                    <p className="text-sm text-[#E1EFFD]/80">{eventDate}</p>
                  </div>
                ) : null}

                {eventLocation ? (
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-2 flex items-center gap-2 text-[#55B4F3]">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm font-semibold">Location</span>
                    </div>
                    <p className="text-sm text-[#E1EFFD]/80">{eventLocation}</p>
                  </div>
                ) : null}

                {eventLink ? (
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-2 flex items-center gap-2 text-[#55B4F3]">
                      <LinkIcon className="h-4 w-4" />
                      <span className="text-sm font-semibold">More info</span>
                    </div>
                    <a
                      href={eventLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-[#E1EFFD]/80 hover:text-white hover:underline"
                    >
                      Open event link
                    </a>
                  </div>
                ) : null}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/events"
                  className="rounded-full bg-[#55B4F3] px-5 py-3 text-sm font-semibold text-[#010E1B] transition hover:shadow-lg"
                >
                  Back to all events
                </Link>
                {eventLink ? (
                  <a
                    href={eventLink}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-[#55B4F3]/40 px-5 py-3 text-sm font-semibold text-[#55B4F3] transition hover:bg-[#55B4F3]/10"
                  >
                    Visit event page
                  </a>
                ) : null}
              </div>
            </div>
          </motion.article>
        ) : (
          <div className="rounded-3xl border border-[#55B4F3]/20 bg-[#021529] p-8 text-center text-[#E1EFFD]/80">
            Event not found.
          </div>
        )}
      </div>
    </div>
  );
}