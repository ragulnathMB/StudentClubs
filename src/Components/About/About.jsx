import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.profileCard}>
        <div className={styles.headerSection}>
          <h1 className={styles.title}>About Me</h1>
          <div className={styles.underline}></div>
        </div>
        
        <div className={styles.profileSection}>
          <div className={styles.avatarContainer}>
            <div className={styles.avatar}>
              <span>RM</span>
            </div>
          </div>
          
          <div className={styles.infoContainer}>
            <h2 className={styles.name}>Ragulnath M B</h2>
            <p className={styles.department}>Computer Science Engineering</p>
            <p className={styles.year}>2nd Year</p>
            
            
          </div>
        </div>
        
        <div className={styles.bioSection}>
          <h3 className={styles.bioTitle}>About</h3>
          <p className={styles.bioText}>
            Hello! I'm Ragulnath M B, a second-year Computer Science Engineering student passionate about technology and innovation. 
            I enjoy participating in various technical clubs and events on campus, which has helped me develop both my technical skills 
            and soft skills.
          </p>
          <p className={styles.bioText}>
            My interests include web development, artificial intelligence, and solving complex coding challenges. 
            I'm always eager to learn new technologies and contribute to meaningful projects.
          </p>
        </div>
        
        <div className={styles.interestsSection}>
          <h3 className={styles.interestsTitle}>Interests</h3>
          <div className={styles.interestTags}>
            <span className={styles.interestTag}>Web Development</span>
            <span className={styles.interestTag}>Artificial Intelligence</span>
            <span className={styles.interestTag}>Competitive Programming</span>
            <span className={styles.interestTag}>Open Source</span>
            <span className={styles.interestTag}>UI/UX Design</span>
          </div>
        </div>
      </div>
      
      <div className={styles.developerNote}>
        <p>Developed by Ragulnath M B, CSE 2nd year</p>
      </div>
    </div>
  );
};

export default About;