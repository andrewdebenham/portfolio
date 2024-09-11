import styles from './ProjectsStyles.module.css';
import wordle from '../../assets/wordle.png';
import pinhigh from '../../assets/pinhigh.png';
import bookclub from '../../assets/bookclub.png';
import cellarme from '../../assets/cellarme.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
    return (
        <section id="projects" className={styles.container}>
            <h1 className="sectionTitle">My Projects</h1>
            <div className={styles.projectsContainer}>
                <ProjectCard
                    src={wordle}
                    github='https://github.com/andrewdebenham/project1-wordle'
                    demo='https://andrewdebenham.github.io/project1-wordle/'
                    name='Wordle' 
                    description='A re-make of the classic New York Times game. Try it out for yourself with the live demo below!' 
                    skills={['HTML', 'CSS', 'Javascript']} 
                />
                <ProjectCard 
                    src={pinhigh} 
                    github='https://github.com/andrewdebenham/pinhigh'
                    demo='https://pinhigh-260b99ff6644.herokuapp.com/' 
                    name='PinHigh' 
                    description='A mock social networking platform for golfers to connect and share their scores.' 
                    skills={['HTML', 'CSS', 'Javascript', 'EJS', 'Bootstrap','Express', 'Node', 'MongoDB', 'Cloudinary']} 
                />
                <ProjectCard 
                    src={bookclub} 
                    github='https://github.com/seeshbyrne/bookclub-frontend'
                    demo='https://bookclub-frontend-lcf2.onrender.com/'
                    name='BookClub' 
                    description='The ultimate platform for book enthusiasts - search for your favourite books, leave a review and interact with other users.' 
                    skills={['React', 'HTML', 'CSS', 'TailwindCSS', 'Node', 'Express', 'MongoDB']} 
                />
                <ProjectCard 
                    src={cellarme} 
                    github='https://github.com/andrewdebenham/cellarme'
                    demo='https://cellarme-5e3b293d0088.herokuapp.com/' 
                    name='CellarMe' 
                    description='A wine enthusiasts best friend - virtually tack and manage your ageing wine collection with ease.' 
                    skills={['Python', 'HTML', 'CSS', 'HTMX', 'TailwindCSS', 'Django', 'PostgreSQL']} />
            </div>
        </section>
    )
}

export default Projects;