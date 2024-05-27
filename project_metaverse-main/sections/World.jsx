'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { experienceFeatures } from '../constants';
import { staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components';
import ExperienceCard from '../components/ExperienceCard';

const World = () => {
  const [active, setActive] = useState('exp-1');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Experiences" textStyles="text-center" />
        <TitleText
          title={<>Here Is My Current Industrial <br className="md:block hidden" />Experience</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {experienceFeatures.map((world, index) => (
            <ExperienceCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default World;
