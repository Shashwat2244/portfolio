'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import {Shashwat_Shrivastava} from '../sections';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        I am a <span className="font-extrabold text-white">Software Developer</span> and competitive coding enthusiast who is into MERN Stack development. My skillset includes 
        {' '}
        <span className="font-extrabold text-white">
          Java, Front-End Development, MERN Stack, Python and MySQL.
        </span>{' '}
        With a solid foundation in HTML, CSS, and JavaScript, coupled with my keen back-end skills in MongoDB and Node.JS, I bring a dynamic and versatile skill set to the table.{' '}
        As a proactive learner, I am enthusiastic about collaborating with teams to craft exceptional applications, contributing to the ever-evolving landscape of technology.{' '}
        <br></br><br></br><a href="https://drive.google.com/file/d/1sQUS9ao4oVm-8RenTNpbP_lwDT2pz0vU/view?usp=sharing" Download="Shashwat_Shrivastava.pdf" target='blank'><button className='cvButton'>Download Resume (CV)</button></a>
        <a href="https://drive.google.com/file/d/1wg4hzPwd82z-mxYQiNsxlhNEnBO99Iaz/view?usp=drive_link" Download="Shashwat_Hackathons.pdf" target='blank'><button className='cvButton'>Competitions Participation</button></a>
      </motion.p>

    </motion.div>

    
    
  </section>
);



export default About;
