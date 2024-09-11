import styles from '../components/Projects/ProjectsStyles.module.css';

function ProjectCard({ src, github, demo, name, description, skills }) {

    return (
        // <a href={ link } target="_blank">
        //     <img className="hover" src={ src } alt={ `${name} logo` } />
        //     <h3>{ name }</h3>
        //     <p>{ description }</p>
        // </a>
        <div className={styles.project}>
            <img src={src} alt={`${name} logo`} />
            <div className={styles.projectInfo}>
                <h3>{name}</h3>
                <p>{description}</p>
                <div className={styles.skillsContainer}>
                    {skills.map((skill, index) => (
                        <div key={index} className={styles.skillTag}>{skill}</div>
                    ))}
                </div>
                <div className={styles.links}>
                    <a href={github} target='_blank'><p>Github</p></a>
                    <a href={demo} target='_blank'><p>Live Demo</p></a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;