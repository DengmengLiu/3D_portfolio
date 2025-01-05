import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionTitle}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} 
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I'm a skilled Unity developer with experience in creating 
        immersive 3D experiences and games. I specialize in C# 
        programming, game mechanics implementation, and optimizing 
        performance. My strong foundation in computer graphics and 
        physics enables me to develop engaging interactive experiences 
        while maintaining efficient resource management.
      </motion.p>
    </>
  )
}

export default About