import { useState } from 'react';
import styles from './SkillsStyles.module.css';
import python from '../../assets/python.svg';
import GameState from '../Snake/GameState';
import Modal from '../Snake/Modal';

import { RiJavascriptFill } from 'react-icons/ri';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { TbBrandDjango } from 'react-icons/tb';
import { SiExpress } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { SiMongodb } from 'react-icons/si';

function Skills() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <section id="skills" className={styles.container}>
        <h1 className='sectionTitle'>Technologies</h1>
        <div className={styles.skillsContainer}>
          <div className={styles.skill}>
            <RiJavascriptFill className={styles.javascript}/>
            <span className={styles.tooltip}>Javascript</span>
          </div>
          <div className={styles.skill}>
            <FaHtml5 className={styles.html}/>
            <span className={styles.tooltip}>HTML</span>
          </div>
          <div className={styles.skill}>
            <FaCss3Alt className={styles.css}/>
            <span className={styles.tooltip}>CSS</span>
          </div>
          <div className={styles.skill}>
            <FaReact className={styles.react}/>
            <span className={styles.tooltip}>React</span>
          </div>
          <div className={styles.skill}>
            <img src={python} alt="python icon" className={styles.python}/>
            <span className={styles.tooltip}>Python</span>
          </div>
          <div className={styles.skill}>
            <TbBrandDjango className={styles.django}/>
            <span className={styles.tooltip}>Django</span>
          </div>
          <div className={styles.skill}>
            <SiExpress className={styles.express}/>
            <span className={styles.tooltip}>Express</span>
          </div>
          <div className={styles.skill}>
            <FaNodeJs className={styles.node}/>
            <span className={styles.tooltip}>Node.js</span>
          </div>
          <div className={styles.skill}>
            <BiLogoPostgresql className={styles.postgresql}/>
            <span className={styles.tooltip}>PostgreSQL</span>
          </div>
          <div className={styles.skill}>
            <SiMongodb className={styles.mongodb}/>
            <span className={styles.tooltip}>MongoDB</span>
          </div>
        </div>
        {/* <button onClick={openModal} className={styles.openModal}>Open Modal</button>
        <Modal isOpen={isModalOpen} onClose={closeModal} >
          <GameState />
        </Modal> */}
    </section>
  )
}

export default Skills;