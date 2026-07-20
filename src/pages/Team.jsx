import { motion } from "framer-motion";
import React from "react";
import { getTeamMembers } from "../api/team";

export default function Team() {
  const [teamMembers, setTeamMembers] = React.useState([]);

  React.useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await getTeamMembers();
        console.log("Fetched team members:", response);
        setTeamMembers(response);
      } 
      catch (fetchError) {
        console.error("Error fetching team members:", fetchError);
      } 
      }
      
    fetchTeamMembers();
  }, []);


  return (
    <div className="min-h-screen bg-[#010E1B] px-4 py-20 text-[#E1EFFD] sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-5 pb-6 text-center text-4xl font-bold text-[#55B4F3] sm:mt-10 sm:pb-0 md:mb-12"
      >
        Our Team Members
      </motion.h1>

       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {teamMembers.reverse().map((member, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="flex h-full min-h-[330px] w-full cursor-pointer flex-col items-center rounded-2xl border border-[#55B4F3]/40 bg-[#021529] p-6 text-center shadow-lg transition hover:shadow-2xl"
          >
            <img
              src={member.image }
              alt={member.name}
              className="mb-4 aspect-square w-full max-w-[220px] rounded-2xl border-2 border-[#55B4F3] object-cover"
            />
            <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
            <p className="text-[#E1EFFD]/80">{member.designation}</p>
          </motion.div>
        ))}
      </div>
      </div>
    </div>
  );
}
