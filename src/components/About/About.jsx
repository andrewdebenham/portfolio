import styles from './AboutStyles.module.css';

function About() {
  return (
    <section id="about" className={styles.container}>
        <h1 className='sectionTitle'>About Me</h1>
        <p>Hi, I'm Andy. I'm an aspiring Full Stack Software Engineer. Having recently completed a 12-week immersive Software Engineering Bootcamp, I am eager to begin my career as a developer.</p>
        <p>I would describe myself as detail oriented, with a love for problem solving and a genuine aptitude for technical activities, which has lead me to a new-found passion for programming.</p>
        <p>With a solid foundation in front and back-end technologies, I am committed to continuously learning and growing in this field, leveraging my skills to develop innovative and efficient technology.</p>
    </section>
  )
}

export default About;