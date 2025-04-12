import { useEffect, useRef } from 'react';
import styles from './Home.module.css';
import bg from '../../assets/bg11.jpg';
import rib1 from '../../assets/ribb_11.png';
import rib2 from '../../assets/ribb2.png';
import border from '../../assets/clubb.png';
import zero1 from '../../assets/zero1coded.png';
import esports from '../../assets/esports.png';
import foss from '../../assets/foss.png';
import antrix from '../../assets/antrix.png';
import finance from '../../assets/finance.png';
import aranyam from '../../assets/aranyam.png';
import design from '../../assets/design.png';
import photo from '../../assets/photo.png';
import video from '../../assets/video.png';
import ripa from '../../assets/ripa.png';
import dance from '../../assets/dance.png';
import fashion from '../../assets/fashion.png';
import art from '../../assets/art.png';
import lit from '../../assets/lit.png';
import music from '../../assets/music.png';
import btnbg from '../../assets/btnbg2.png';
import c0img1 from '../../assets/c0img1.png';
import c0img2 from '../../assets/c0img2.png';
import ParaClub from '../paraClub/paraclub';
import gameimg2 from '../../assets/gameimg2.png'
import gameimg1 from '../../assets/esportsimg1.png'
import roboimg2 from '../../assets/roboimg2.png'
import antriximg2 from '../../assets/antriximg2.png'
import antriximg1 from '../../assets/antriximg1.png'
import photoimg2 from '../../assets/photoimg2.png'
import photoimg1 from '../../assets/photoimg1.png'
import videoimg2 from '../../assets/videoimg2.png'
import ripaimg2 from '../../assets/ripaimg2.png'
import ripaimg1 from '../../assets/ripaimg1.png'
import litimg2 from '../../assets/litimg1.png'
import litimg1 from '../../assets/litimg2.png'
import protoimg2 from '../../assets/protoimg2.png'
import protoimg1 from '../../assets/protoimg1.png'
import danceimg2 from '../../assets/danceimg2.png'
import danceimg1 from '../../assets/danceimg1.png'
import artimg2 from '../../assets/artimg2.png'
import artimg1 from '../../assets/artimg1.png'
import designimg1 from '../../assets/designimg1.png'
import cultureimg1 from '../../assets/cultureimg1.png'
import { Link } from 'react-router-dom';

// Sample clubs (your existing data)
const sampleClubs = [
  {
    "url": zero1,
    "border": border,
    "title": "Zero1Coded",
    "description": "Coding Club: A club for passionate programmers and developers.",
    "category": "Technical",
    "facultyIncharge": ["Dr. Kumaran P", "Dr. Karthik N"],
    "leftImage": c0img1,
    "rightImage": c0img2
  },
  {
    "url": design,
    "border": border,
    "title": "Design Club",
    "description": "Fostering creativity through graphic and UI/UX design.",
    "category": "Technical",
    "facultyIncharge": ["Dr. Vani V", "Dr. Revathi S"],
    "leftImage": designimg1,
    "rightImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqGLpfGhDbrVSiDeMsKm5mBwHcEHGqCMrevQ&s"
  },
  {
    "url": esports,
    "border": border,
    "title": "Esports Club",
    "description": "Gaming and competitive spirit with a tech twist.",
    "category": "Technical",
    "facultyIncharge": ["Dr. Narendran Rajagopalan"],
    "leftImage": gameimg1,
    "rightImage": gameimg2
  },
  {
    "url": foss,
    "border": border,
    "title": "FOSS Club",
    "description": "Promoting open-source software and collaboration.",
    "category": "Technical",
    "facultyIncharge": ["Dr. Narendran Rajagopalan"],
    "leftImage": c0img1,
    "rightImage": "https://cdn3d.iconscout.com/3d/premium/thumb/github-3d-icon-download-in-png-blend-fbx-gltf-file-formats--social-media-logos-logo-brand-golden-pack-icons-9791628.png"
  },
  {
    "url": "https://cmrtc.ac.in/wp-content/uploads/2022/05/logo.jpg",
    "border": border,
    "title": "Robotics Club",
    "description": "Creating and innovating in the field of robotics.",
    "category": "Technical",
    "facultyIncharge": ["Dr. M. V. A. Raju Bahubalendruni"],
    "leftImage":"https://iitk.ac.in/snt/blog/2013/07/31/robo-club-summer-2013.jpg",
    "rightImage": roboimg2
  },
  {
    "url": antrix,
    "border": border,
    "title": "ANTRiX Club",
    "description": "Astronomy and physics-based exploration club.",
    "category": "Technical",
    "facultyIncharge": ["Dr. Amrtha Bhide"],
    "leftImage": antriximg1,
    "rightImage":antriximg2
  },
  
  {
    "url": photo,
    "border": border,
    "title": "Photography Club",
    "description": "Capturing campus moments with creativity.",
    "category": "Cultural",
    "facultyIncharge": ["Dr. Ansuman Mahapatra", "Dr. Sunanda Ambulkar"],
    "leftImage": photoimg1,
    "rightImage": photoimg2
  },
  {
    "url": video,
    "border": border,
    "title": "Videography Club",
    "description": "Documenting events and crafting stories through film.",
    "category": "Cultural",
    "facultyIncharge": ["Dr. Ansuman Mahapatra"],
    "leftImage": c0img1,
    "rightImage": videoimg2
  },
  {
    "url": ripa,
    "border": border,
    "title": "Ragasvarupam Indian Performing Arts (RIPA) Club",
    "description": "Celebrating Indian classical and folk traditions.",
    "category": "Cultural",
    "facultyIncharge": ["Dr. A. Venkadesan"],
    "leftImage": ripaimg1,
    "rightImage": ripaimg2
  },
  {
    "url": dance,
    "border": border,
    "title": "Dance Club",
    "description": "A platform for dancers to express and perform.",
    "category": "Cultural",
    "facultyIncharge": ["Dr. Sanjay Bankapur", "Dr. Nidhi M"],
    "leftImage": danceimg1,
    "rightImage": danceimg2
  },
  {
    "url": music,
    "border": border,
    "title": "Music Club",
    "description": "A haven for music lovers and performers.",
    "category": "Cultural",
    "facultyIncharge": ["Dr. S. Babu"],
    "leftImage": protoimg1,
    "rightImage": protoimg2
  },
  {
    "url": art,
    "border": border,
    "title": "Arts and Crafts Club",
    "description": "Unleashing creativity through colors and materials.",
    "category": "Cultural",
    "facultyIncharge": ["Dr. Gautham A", "Dr. Lalrinpuia Tlau"],
    "leftImage": artimg1,
    "rightImage": artimg2
  },
  {
    "url": fashion,
    "border": border,
    "title": "Culturehood - Fashion Club",
    "description": "Fashion, expression, and creativity blended together.",
    "category": "Cultural",
    "facultyIncharge": ["Dr. Nidhi M"],
    "leftImage": cultureimg1,
    "rightImage": "https://media.istockphoto.com/id/1309392410/vector/fashion-show-concept-vector-illustration-hand-drawn-fashion-week-poster-with-models-on-a.jpg?s=612x612&w=0&k=20&c=egToobYTrjLdERxZyrJPAweBATACD8CgdZoVO0duWw0="
  },
  {
    "url": lit,
    "border": border,
    "title": "Literary Club",
    "description": "Where words weave imagination and debates spark minds.",
    "category": "Cultural",
    "facultyIncharge": ["Dr. Smrutisikta Mishra"],
    "leftImage": litimg2,
    "rightImage": litimg1
  },
  {
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj90x51cRRES-zPArjl-4IkKy1ngofwMu69g&s",
    "border": border,
    "title": "Year Book Club",
    "description": "Documenting memories and milestones of the year.",
    "category": "Cultural",
    "facultyIncharge": ["Dr. Thomas Joseph"],
    "leftImage": c0img1,
    "rightImage": c0img2
  },
  {
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyxNNME9bXowq_SlsnqA2DsiQwqNaiPJZybg&s",
    "border": border,
    "title": "Language Club",
    "description": "Promoting multilingualism and cultural exchange.",
    "category": "Cultural",
    "facultyIncharge": [
      "Dr. Ajay Kumar Mishra (Hindi)",
      "Dr. Aniruddha Kanhe (Hindi)",
      "Dr. Karpagaraj A (Tamil)",
      "Dr. Naveen Raj R (Tamil)",
      "Dr. Hemachander A (Telugu)",
      "Dr. Nidhi M (Malayalam)"
    ],
    "leftImage": c0img1,
    "rightImage": c0img2
  },
  {
    "url": aranyam,
    "border": border,
    "title": "Aranyam",
    "description": "Sustainable environment and eco-awareness initiatives.",
    "category": "Social",
    "facultyIncharge": ["Dr. Amrtha Bhide"],
    "leftImage": c0img1,
    "rightImage": c0img2
  },
  {
    "url": finance,
    "border": border,
    "title": "Finance Club",
    "description": "Exploring economics, finance, and investment literacy.",
    "category": "Social",
    "facultyIncharge": ["Dr. Thomas Joseph"],
    "leftImage": c0img1,
    "rightImage": c0img2
  },{
    "url": "https://5.imimg.com/data5/SELLER/Default/2021/7/ZY/EW/ML/132590308/bis-registration-consultancy-service.jpg",
    "border": border,
    "title": "BIS Standards Club",
    "description": "Focused on standards and industrial practices.",
    "category": "Technical",
    "facultyIncharge": ["Dr. J. Ronald Aseer"],
    "leftImage": c0img1,
    "rightImage": c0img2
  },
];

const ClubItem = ({ url, border, title, description }) => {
  return (
    <Link to={`/club/${encodeURIComponent(title)}`} key={title}>
    <div className={styles.clubItem}>
      <div className={styles.imageContainer}>
        <img src={url} className={styles.clubImage} />
        <img src={border} className={styles.rotatingBorder} />
      </div>
      <div className={styles.clubInfo}>
        <p className={styles.clubTitle}>{title}</p>
        <p className={styles.clubDescription}>{description}</p>
      </div>
    </div>
    </Link>
  );
};

const Home = () => {
  const leftRibbRef = useRef(null);
  const rightRibbRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Banner ribbons parallax
      if (leftRibbRef.current && rightRibbRef.current) {
        leftRibbRef.current.style.transform = `translateX(${-scrollY * 0.9}px)`;
        rightRibbRef.current.style.transform = `translateX(${scrollY * 0.9}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount to set initial positions
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get 16 clubs for feature sections
  const featuredClubs = sampleClubs.slice(0, 14);

  return (
    <div>
      <div
        className={styles.homeMain}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className={styles.textContent}>
          <div className={styles.text1}>
            <p>Student Clubs</p>
          </div>
          <div className={styles.text2}>
            <p>of</p>
          </div>
          <div className={styles.text3}>
            <p>NIT Puducherry</p>
          </div>
        </div>
        <div className={styles.ribbContainer}>
          <img src={rib1} className={styles.ribb} ref={leftRibbRef} />
          <img src={rib2} className={styles.ribb} ref={rightRibbRef} />
        </div>
      </div>

      

      {/* Regular Club Sections */}
      <div className={styles.textc}>
        <p>Technical Clubs</p>
      </div>
      <div className={styles.clubsSection}>
        {sampleClubs
          .filter(club => club.category === "Technical")
          .map((club, index) => (
            <ClubItem key={index} {...club} />
          ))}
      </div>

      <div className={styles.textc}>
        <p>Cultural Clubs</p>
      </div>
      <div className={styles.clubsSection}>
        {sampleClubs
          .filter(club => club.category === "Cultural")
          .map((club, index) => (
            <ClubItem key={index} {...club} />
          ))}
      </div>

      <div className={styles.textc}>
        <p>Social Clubs</p>
      </div>
      <div className={styles.clubsSection}>
        {sampleClubs
          .filter(club => club.category === "Social")
          .map((club, index) => (
            <ClubItem key={index} {...club} />
          ))}
      </div>
      {/* Featured Clubs with Parallax Effects */}
      <div className={styles.paraclubFeaturedSection}>
        <div className={styles.textc}>
          <p>Featured Clubs</p>
        </div>
        
        {featuredClubs.map((club, index) => (
          <Link to={`/club/${encodeURIComponent(club.title)}`} key={club.title}>
          <ParaClub 
            key={index}
            club={club}
            leftImage={club.leftImage}
            rightImage={club.rightImage}
            index={index}
          /></Link>
        ))}
      </div>
    </div>
  );
};

export default Home;