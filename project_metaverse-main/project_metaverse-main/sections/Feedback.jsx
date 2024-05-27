'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.9] lg:max-w-[100%] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
            Contact Me
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            at shashwatshrivastava04@gmail.com
          </p>
          <p className="mt-[20px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            OR
          </p>
        </div>
        
        <form action="https://formspree.io/f/moqgzrev" method="POST" className="mt-[30px] flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-white mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="p-2 rounded-[8px] border-[1px] border-[#6A6A6A] bg-transparent text-white"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="contact" className="text-white mb-2">Your Contact No.</label>
            <input
              type="text"
              id="contact"
              name="contact"
              className="p-2 rounded-[8px] border-[1px] border-[#6A6A6A] bg-transparent text-white"
              required
            />
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="email" className="text-white mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-2 rounded-[8px] border-[1px] border-[#6A6A6A] bg-transparent text-white"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-white mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              className="p-2 rounded-[8px] border-[1px] border-[#6A6A6A] bg-transparent text-white"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 p-2 rounded-[8px] bg-[#6A6A6A] text-white hover:bg-[#555555]"
          >
            Send
          </button>
        </form>
      </motion.div>

    </motion.div>
  </section>
);

export default Feedback;
