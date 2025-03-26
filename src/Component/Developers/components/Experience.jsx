import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(0, 0, 0, 0.7)",
        color: "#00f0ff",
        border: "1px solid rgba(0, 240, 255, 0.3)",
        borderRadius: "8px",
      }}
      contentArrowStyle={{ 
        borderRight: "7px solid rgba(0, 240, 255, 0.5)" 
      }}
      date={experience.date}
      dateClassName="text-[#80e0ff]"
      iconStyle={{
        background: "#0a0a0a",
        border: "1px solid rgba(0, 240, 255, 0.5)",
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
            style={{ filter: "drop-shadow(0 0 4px rgba(0, 240, 255, 0.7))" }}
          />
        </div>
      }
    >
      <div>
        <h3 className='text-[22px] font-bold text-[#00f0ff]'>{experience.title}</h3>
        <p className='text-[#80e0ff] text-[18px] font-medium' style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-4 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-[#e0f7ff] text-[16px] pl-1 tracking-normal leading-relaxed'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="px-4">
      <div className="text-center mb-16">
        <p className={`${styles.sectionSubText} text-[#80e0ff]`}>
          Outstanding Leadership
        </p>
        <h2 className={`${styles.sectionHeadText} text-[#00f0ff]`}>
          Coordinators
        </h2>
        <div className="w-20 h-1 bg-[#00f0ff] mx-auto mt-4 opacity-70"></div>
      </div>

      <div className='flex flex-col'>
        <VerticalTimeline lineColor="rgba(0, 240, 255, 0.2)">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");