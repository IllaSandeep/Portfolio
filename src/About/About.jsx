import React from 'react';
import { getImageUrl } from '../utils';
import styles from './About.module.css';
const About = () => {
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("My/info.png")} alt="Me Sitting" className={styles.aboutImage} />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/gaming.png")} alt="cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Game Developer</h3>
                        <p>I'm Game Developer with experience 2 years on Unity and 1 year on Unreal Engines </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/Flutter.png")} alt="cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Flutter Developer</h3>
                        <p>I'm Flutter Developer with experience 2 years on Google Flutter </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Front End Developer</h3>
                        <p>I'm Front End developer with 3 years of Experience in building responsive and Optimized sites</p>
                    </div>
                </li>

            </ul>
        </div>
    </section>
};

export default About;