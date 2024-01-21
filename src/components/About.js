import React, { useContext } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { ThemeContext } from "../context";

const About = () => {
  const theme = useContext(ThemeContext); // Use ThemeContext
  const darkMode = theme.state.darkMode;
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-[#406aff]">About me.</h2>
            <h3 className={`text-${darkMode ? "white" : "black"} h3 mb-4`}>
              I'm a React Developer with over 2 years of experience.
            </h3>
            <p className={`text-${darkMode ? "white" : "black"} mb-6`}>
              As a Front-End Developer, I possess an impressive arsenal of
              skills in HTML, CSS, JavaScript, React, Tailwind-css . I excel in
              designing and maintaining responsive websites that offer a smooth
              user experience. With a foundation in development and desigining
              as a front end developer and UX/UI designer, I bring a unique
              blend of technical skills and designing in creating visually
              appealing and responsive websites.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={2} duration={3} /> : null}
                </div>
                <div
                  className={`text-${
                    darkMode ? "white" : "black"
                  } font-primary text-sm tracking-[2px]`}
                >
                  Years of Coding
                  <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={8} duration={3} /> : null}
                </div>
                <div
                  className={`text-${
                    darkMode ? "white" : "black"
                  } font-primary text-sm tracking-[2px]`}
                >
                  Projects
                  <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div
                  className={`text-${
                    darkMode ? "white" : "black"
                  } font-primary text-sm tracking-[2px]`}
                >
                  Companies
                  <br />
                  Interned
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <motion.button
                className="btn btn-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Contact me
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
