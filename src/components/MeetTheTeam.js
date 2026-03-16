import React, { useContext } from "react";
import teamData from "../data/teamData";
import { ModeContext } from "../context/ModeContext";
const MeetTheTeam = () => {
  const { mode } = useContext(ModeContext);

  return (
    <div className="pt-56 px-8 md:px-16 pb-32 bg-gradient-to-b from-gray-900 to-black">
      <section className="grid grid-cols-1 min-[900px]:grid-cols-2 min-[1470px]:grid-cols-3 gap-8">
        {teamData.map((member, index) => {
          return (
            <div key={index}
              className={`${mode === "dark" ? "shadow-[0px_0px_15px_0px_rgba(239,24,111,0.50)] " : "shadow-[0px_0px_15px_0px_rgba(112,233,201,0.75)] "} p-6 rounded-2xl 
              hover:shadow-[0_10px_25px_rgba(0,0,0,0.50)] transition-shadow duration-300 ease-in bg-white/10 backdrop-blur-xl`}
            >
              <div className="flex gap-6 max-[500px]:flex-col max-[500px]:gap-0 mb-6"
              >
                <section className="">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 border border-1 rounded-full object-cover mb-4"
                  />
                </section>
                <div className="pt-2 flex flex-col gap-2">
                  <h3 className="text-4xl font-semibold">{member.name}</h3>
                  <p className="text-xl">{member.role}</p>
                </div>
              </div>
              <p className="text-base">{member["Field of Expertise"]}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default MeetTheTeam;
