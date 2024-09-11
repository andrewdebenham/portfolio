import React, { useEffect } from 'react';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img-2.png';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
// import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';
import { useHackerEffect } from '../../common/UseHackerEffect';

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    const triggerHackerEffect = useHackerEffect('h1');

    useEffect(() => {
        triggerHackerEffect();
    }, [theme, triggerHackerEffect]);

    return (
        <section id="hero" className={styles.container}>
            <input type="checkbox" className={styles.colorMode} onClick={toggleTheme}/>
            <img
                className={styles.hero}
                src={heroImg}
                alt="Profile picture of Andrew Debenham"
            />
            <div className={styles.info}>
                <p className={styles.pink}>Hi, my name is</p>
                <h1 data-value="Andrew Debenham">Andrew Debenham</h1>
                <h2 className={styles.title}>Software Engineer</h2>
                <p className={styles.description}>
                    I have an eye for detail and a knack for problem solving.
                </p>
                <p className={styles.description}>
                    I'm looking to kickstart my career in software and collaborate closely with an experienced team to develop high quality, maintainable software.
                </p>
                <span>
                    <a href="{CV}" download>
                        <button className="hover">
                            My Resume
                        </button>
                    </a>
                    <a href="https://github.com/andrewdebenham" target="_blank">
                        <img src={githubIcon} alt="Github Icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/andrew-debenham-93a3331bb/" target="_blank">
                        <img src={linkedinIcon} alt="Linkedin Icon" />
                    </a>
                </span>
            </div>
        </section>
    )
}

export default Hero;