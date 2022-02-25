import React from 'react'
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
      delayChildren: 2,
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1]}}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20}}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Edon</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
          <p className="p-text">Software Engineer</p>
          <p className="p-text">Student</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1 , delayChildren: 0.5 }}
        className='app__header-img'
      >
        <motion.img
        whileInView={{ opacity: [0, 1]}}
        transition={{ duration: 1, ease: 'easeInOut', delay: 0.75}} 
        src={images.profile} alt="profile-bg" />

        <motion.img
          whileInView={{ scale: [0, 1]}}
          transition={{ duration: 1, ease: 'easeInOut'}}
          className="app__header-img"
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.flutter, images.react, images.api ].map((circle, index) => (
          <div className='circle-cmp app_flex' key={`circle-${index}`}>
            <img src={circle} alt="" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default AppWrap(Header, 'home');