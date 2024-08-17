import React from 'react';
import { getImageUrl } from '../utils';
import styles from './Contact.module.css';
const Contact = () => {
    return <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel Free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="" />
                <a href="mailto:sandeepilla03@gmail.com">sandeepilla03@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="" />
                <a href="https://www.linkedin.com/in/sandeep-illa-a2bb2522a/">linkedin.com/SandeepIlla</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="" />
                <a href="https://github.com/IllaSandeep">github.com/IllaSandeep</a>
            </li>
        </ul>
    </footer>
};

export default Contact;