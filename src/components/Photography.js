import React, { useContext } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/rajasthan.JPG";
import Img2 from "../assets/jubin.JPG";
import Img3 from "../assets/taj.jpg";
import { ThemeContext } from "../context";

const Photography = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const imageSize = {
    width: "500px",
    height: "350px",
  };
  return (
    <section className="section" id="photo">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight text-[#406aff]">
                My Photography
                <br />
                Section.
              </h2>
              <p
                className={`text-${
                  darkMode ? "white" : "black"
                } max-w-sm mb-10`}
              >
                I'm a freelance pforessional photographer, I have covered live
                concerts of Jubin Nautiyal, Nikhita Gandhi, and Pankaj Udhas. My
                shots have also been exhibited across the country, including
                prestigious institutions like IIT-ISM.
              </p>
              <motion.button
                className="btn btn-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                View my portfolio
              </motion.button>
            </div>
            <div
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
              style={{ width: imageSize.width, height: imageSize.height }}
            >
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500 h-auto w-auto"
                style={imageSize}
                src={Img1}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                <span className="text-gradient">Travel</span>
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 ">
                <span className="text-3xl text-white">Rajasthan</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 "
          >
            <div
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
              style={{ width: imageSize.width, height: imageSize.height }}
            >
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                style={imageSize}
                src={Img2}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                <span className="text-gradient">Concert</span>
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 ">
                <span className="text-3xl text-white">Jubin Nautiyal</span>
              </div>
            </div>

            <div
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
              style={{ width: imageSize.width, height: imageSize.height }}
            >
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                style={imageSize}
                src={Img3}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                <span className="text-gradient">Travel</span>
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 ">
                <span className="text-3xl text-white">Agra</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Photography;
