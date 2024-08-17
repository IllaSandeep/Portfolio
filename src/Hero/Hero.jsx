import React from 'react';
import { getImageUrl } from '../utils';
import styles from "./Hero.module.css"
const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
        <h1 className={styles.title}>Hi , Im Sandeep</h1>
            <p className={styles.description}>I'm Game Developer (Unity Engine  and Unreal Engine ) and Mobile App Developer
            (Google Flutter)</p>
            <a href="mailto:sandeepilla03@gmail.com" className={styles.contactBtn}>Contact</a>
        </div>
        <img src={getImageUrl("My/heroimg.png")} className={styles.HeroImg} alt="" />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
};

export default Hero;