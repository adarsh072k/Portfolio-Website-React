import React, { useContext } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { ThemeContext } from "../context";

const Contact = () => {
  const theme = useContext(ThemeContext); // Use ThemeContext
  const darkMode = theme.state.darkMode;

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-[#406aff] font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2
                className={`text-${
                  darkMode ? "white" : "black"
                }text-[45px] lg:text-[90px] leading-none mb-12`}
              >
                Hire me!
              </h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            action="mailto:adarshnobilian@gmail.com"
            className={`border-${
              darkMode ? "white" : "black"
            } flex-1 border  rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start`}
          >
            <input
              className={`placeholder-${darkMode ? "white" : "black"} text-${
                darkMode ? "white" : "black"
              } bg-transparent border-b py-3 outline-none w-full  focus:border-black transition-all`}
              type="text"
              placeholder="Your name"
            />

            <input
              className={`placeholder-${darkMode ? "white" : "black"} text-${
                darkMode ? "white" : "black"
              } bg-transparent border-b py-3 outline-none w-full focus:border-black transition-all`}
              type="text"
              placeholder="Your email"
            />

            <textarea
              className={`placeholder-${darkMode ? "white" : "black"} text-${
                darkMode ? "white" : "black"
              } bg-transparent border-b py-12 outline-none w-full focus:border-black transition-all resize-none mb-12`}
              placeholder="Your message"
            ></textarea>

            <motion.button
              className="btn btn-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Send message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
