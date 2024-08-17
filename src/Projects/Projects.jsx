import React from 'react';
import projects from '../data/projects.json';
import styles from './Project.module.css'
import  ProjectCard from './Projectcard';
const Projects = () => {
    return <section className={styles.container}id="projects">
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.content}>
            {
                projects.map((projects,id)=>{
                    return (
                        <ProjectCard key={id} projects={projects}/>
                    )
                })
            }
        </div>
    </section>
};

export default Projects;