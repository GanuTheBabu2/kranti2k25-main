import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="bg-black bg-opacity-80 p-6 rounded-2xl w-[300px] relative border border-[#00f0ff] hover:border-opacity-100 border-opacity-40 transition-all duration-300"
    >
      {/* Circular Image Container */}
      <div className="flex justify-center items-center mb-5">
        <div className="w-[100px] h-[100px] rounded-full overflow-hidden flex justify-center items-center border-2 border-[#00f0ff] hover:shadow-[0_0_15px_rgba(0,240,255,0.7)] transition-all duration-300">
          <img 
            src={image} 
            alt="developer_image" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
          />
        </div>
      </div>

      {/* Developer Details */}
      <div className="text-center">
        <h3 className="text-[#00f0ff] font-bold text-[20px] mb-2">
          {name}
        </h3>
        <p className="text-[#b3f0ff] text-[14px] leading-relaxed mb-4">
          {description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-2">
        {tags.map((tag) => (
          <span
            key={`${name}-${tag.name}`}
            className={`text-[12px] px-2 py-1 rounded-full ${
              tag.color === "blue" ? "bg-blue-900/30 text-blue-300" :
              tag.color === "pink" ? "bg-pink-900/30 text-pink-300" :
              "bg-white/10 text-white"
            }`}
          >
            #{tag.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Works = () => {
  // Calculate how many items to show for exactly two rows
  const itemsPerRow = Math.ceil(projects.length / 2);
  const visibleProjects = projects.slice(0, itemsPerRow * 2);

  return (
    <div className="px-4">
      <motion.div 
        variants={textVariant()}
        className="text-center mb-12"
      >
        <p className={`${styles.sectionSubText} text-[#fa2ec0] mb-2`}>
          Kranti 2k25
        </p>
        <h2 className={`${styles.sectionHeadText} text-[#00f0ff] mb-4`}>
          Developers
        </h2>
        <div className="w-20 h-1 bg-[#00f0ff] mx-auto opacity-50"></div>
      </motion.div>

      <div className="flex flex-col items-center gap-8">
        {/* First Row */}
        <div className="flex flex-wrap justify-center gap-6">
          {visibleProjects.slice(0, itemsPerRow).map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
        
        {/* Second Row */}
        <div className="flex flex-wrap justify-center gap-6">
          {visibleProjects.slice(itemsPerRow).map((project, index) => (
            <ProjectCard key={`project-${index+itemsPerRow}`} index={index+itemsPerRow} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "");