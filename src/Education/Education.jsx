import React from 'react';
import edu from '../data/edu.json';
import styles from './Education.module.css';
import { getImageUrl } from '../utils';
const Education = () => {
    return <section className={styles.container} id="education">
        <h2 className={styles.title}>Education</h2>
        <div className={styles.content}>
        <img src={getImageUrl("My/eduImg.png")} alt="" className={styles.image}/>
        <div className={styles.eduContent}>
            {
                edu.map((edu,id)=>{
                    return <div className={styles.education}>
                        <h1>{edu.Stream}</h1>
                        <div className={styles.educationItems}>
                            <p>Organization - {edu.Organization}</p>
                            <p>Branch - {edu.Branch}</p>
                            <p>CGPA - {edu.CGPA}</p>
                        </div>
                    </div>
                })
            }
        </div>
        </div>
    </section>
};

export default Education;