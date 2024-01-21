import React, { useContext } from "react";
import Image from "../assets/me.png";
// import { FaGithub, FaYoutube, FaDribble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { ThemeContext } from "../context";

const Banner = () => {
  const theme = useContext(ThemeContext); // Use ThemeContext
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      className="min-h-[85vh] lg:min-h-[75vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-8">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className={`text-${
                darkMode ? "white" : "black"
              } text-[55px] font-bold leading-[0.8] lg:text-[70px] `}
            >
              ADARSH<span> PRAKASH</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className={`text-${darkMode ? "white" : "black"} mr-4`}>
                I am a
              </span>
              <TypeAnimation
                sequence={[
                  "React Developer",
                  2000,
                  "UX/UI Designer",
                  2000,
                  "Photographer",
                  2000,
                ]}
                speed={50}
                className={`text-${darkMode ? "black" : "#406aff"}`}
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className={`text-${
                darkMode ? "white" : "black"
              } text-base mb-8 max-w-lg mx-auto lg:mx-0`}
            >
              Hi, I'm Adarsh Prakash. A Front-end, React Developer, a UX/UI
              designer and a professional photographer based in Kolkata, India.{" "}
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex gap-x-6 max-w-max items-center mb-12 mx-auto lg:mx-0"
            >
              <motion.button
                className="btn btn-lg"
                onClick={handleClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Contact me
              </motion.button>
              <a
                href="https://drive.google.com/file/d/1ToWAsVQohGQn1_4da_33_8DgWrzVTGpD/view?usp=drive_link"
                className={`text-${
                  darkMode ? "white" : "black"
                } text-gradiant btn-link hover:scale-110`}
              >
                Download Resume
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 mx-auto max-w-max lg:mx-0 "
            >
               <a href='https://www.linkedin.com/in/adarsh-prakash-b378a3157/' className="hover:scale-125" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-linkedin"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg> 
              </a>
  
              <a href='https://github.com/adarsh072k/' className="hover:scale-125" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[800px] "
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
