import React, { useEffect, useRef } from 'react';
import styles from '../Home/Home.module.css';
import btnbg from '../../assets/btnbg2.png';
import paraclubborderup from '../../assets/paraclubup1.jpg';
import paraclubborderdown from '../../assets/paraclubup.jpg';

const ParaClub = ({ club, leftImage, rightImage, index }) => {
  const paraclubRef = useRef(null);
  const borderUpRef = useRef(null);
  const borderDownRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      // Check if paraclub section is in viewport
      if (paraclubRef.current) {
        const rect = paraclubRef.current.getBoundingClientRect();
        const isInView = (
          rect.top <= window.innerHeight && 
          rect.bottom >= 0
        );
        
        if (isInView) {
          paraclubRef.current.classList.add(styles.inView);
          
          // Calculate how far into the viewport the element is
          const viewportPercentage = 1 - (rect.top / window.innerHeight);
          const clampedPercentage = Math.max(0, Math.min(1, viewportPercentage));
          
          // Apply transformations based on scroll position
          if (borderUpRef.current) {
            const moveX = (1 - clampedPercentage) * 100; // Start at 100% right, move to center
            borderUpRef.current.style.transform = `translateX(${moveX}%)`;
            borderUpRef.current.style.opacity = clampedPercentage;
          }
          
          if (borderDownRef.current) {
            const moveX = (1 - clampedPercentage) * -100; // Start at 100% left, move to center
            borderDownRef.current.style.transform = `translateX(${moveX}%)`;
            borderDownRef.current.style.opacity = clampedPercentage;
          }
          
          // Move the images based on scroll position
          if (leftImageRef.current) {
            const moveX = (1 - clampedPercentage) * -50; // Move from left to right
            leftImageRef.current.style.transform = `translateX(${moveX}px)`;
          }
          
          if (rightImageRef.current) {
            const moveX = (1 - clampedPercentage) * 50; // Move from right to left
            rightImageRef.current.style.transform = `translateX(${moveX}px)`;
          }
        } else {
          paraclubRef.current.classList.remove(styles.inView);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount to set initial positions
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.paraclub} ref={paraclubRef} style={{ marginBottom: '100px' }}>
      <img 
        src={paraclubborderup} 
        className={styles.paraclubBorderUp} 
        ref={borderUpRef}
        alt="Upper border"
      />
      <div className={styles.paraclubcont} style={{ backgroundImage: `url(${btnbg})` }}>
        <img src={leftImage} ref={leftImageRef} alt="Club image left" className={styles.paraclubSideImage} />
        <div className={styles.clubItem}>
          <div className={styles.imageContainer}>
            <img src={club.url} style={{position:'relative',left:'-50px'}} className={styles.clubImage} />
        
          </div>
          <div className={styles.clubInfo}>
            <p className={styles.clubTitle}>{club.title}</p>
            <p className={styles.clubDescription}>{club.description}</p>
          </div>
          <div className={styles.cibtn} style={{ backgroundImage: `url(${btnbg})` }}>
            <p>Explore {club.title}</p>
          </div>
        </div>
        <img src={rightImage} ref={rightImageRef} alt="Club image right" className={styles.paraclubSideImage} />
      </div>
      <img 
        src={paraclubborderdown} 
        className={styles.paraclubBorderDown} 
        ref={borderDownRef}
        alt="Lower border"
      />
    </div>
  );
};

export default ParaClub;