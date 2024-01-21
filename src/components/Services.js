import React, { useContext } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { ThemeContext } from "../context";

const services = [
  {
    name: "Development",
    description:
      "As a front end developer, i have worked on ReactJs, Tailwind-css, HTML, CSS, Javascript, apart from these i also have worked on Java, C++, and query language - SQL, and backend language PHP, and NodeJs (framework). I also have a good grasp on GIT.",
    link: "https://github.com/adarsh072k",
  },
  {
    name: "UI/UX Design",
    description:
      "As an UX/UI designer, i believe in delving deep in user researches and sprints to understand both user and client end points, thus a reusable, moder, and easy to use design is formed. For creating UI designs, i use - Figma.",
    link: "Learn more",
  },
  {
    name: "Photography",
    description:
      "As a freelance professional photographer, i have a keen eye on my subject to capture, which presents a story on its own. I expertise in travel and event photography, thus delivering quality photographs.",
    link: "https://www.instagram.com/adarshprakash7320",
  },
];

const Services = () => {
  const theme = useContext(ThemeContext); // Use ThemeContext
  const darkMode = theme.state.darkMode;
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat  mb-12 lg:mb-0"
          >
            <h2 className="h2 text-[#406aff] mb-6">What I Do?</h2>
            <h3
              className={`text-${
                darkMode ? "white" : "black"
              } h3 max-w-[455px] mb-16`}
            >
              I'm a Front-end Developer with over 2 years of experience.
            </h3>
            <motion.button
              className="btn btn-sm "
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              See my work
            </motion.button>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div className="max-w-[476px]">
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-black/20 h-[180px] mb-[38px] flex"
                    key={index}
                  >
                    <div>
                      <h4
                        className={`text-${
                          darkMode ? "white" : "black"
                        } text-[20px] tracking-wider font-primary font-semibold mb-6`}
                      >
                        {name}
                      </h4>
                      <p
                        className={`text-${
                          darkMode ? "white" : "black"
                        } font-secondary leading-tight`}
                      >
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href={link}
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
