"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section className="lg:py-3">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-black mb-4 max-w-2xl text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-inherit">
              Hello, I&apos;m{" "}
            </span>{" "}
            <br></br>
            <TypeAnimation
              sequence={[
                "Haotian Lin",
                1000,
                "a Software Engineer",
                1000,
                "a Full-stack Developer",
                1000,
                "an AI Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="inline-block whitespace-nowrap min-w-[22ch]"
            />
          </h1>
          <p className="text-black textl-lg lg:text-xl">
            An enthusiastic Software Engineer at Inspired Earth, specializing in <span className="font-bold">Software Engineering</span>,
            <span className="font-bold"> Full Stack Development</span>, and <span className="font-bold">AI application</span>.
          </p>
          <p className="text-black textl-lg lg:text-xl">Currently looking for SDE full time opportunities.</p>
          <div>
            <div className="inline-block">
              <ul style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 16 }}>
                <li className="hover:scale-110 transition-transform duration-150" style={{ marginRight: '10px' }}>
                  <SocialIcon url="https://github.com/HaotianEthanLin" style={{ height: 40, width: 40 }} />
                </li>
                <li className="hover:scale-110 transition-transform duration-150" style={{ marginRight: '10px' }}>
                  <SocialIcon url="https://www.linkedin.com/in/haotianlin/" style={{ height: 40, width: 40 }} />
                </li>
                <li className="hover:scale-110 transition-transform duration-150">
                  <SocialIcon url="https://leetcode.com/u/CriSY28/" style={{ height: 40, width: 40 }} />
                </li>
              </ul>
            </div>
            <a
              href="/files/Haotian_Lin_Resume.pdf"
              download="Haotian_Lin_Resume.pdf"
              className="mt-3 inline-block rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 p-[2px] text-white"
            >
              <span className="inline-flex items-center rounded-full bg-[#121212] px-5 py-2 leading-none transition-all duration-200 hover:scale-105 hover:bg-slate-800">
                Download my Resume
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="bg-gray lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
            <Image
              src="/images/haotian.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={350}
              height={350}
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;