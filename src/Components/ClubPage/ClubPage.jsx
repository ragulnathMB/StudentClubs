import { useParams } from 'react-router-dom'
import { useEffect, useRef } from 'react';
import { useState} from 'react';

import styles from './ClubDetails.module.css';
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
import BackIcon from '../../assets/back-icon.png';

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
function ClubDetails() {
    const { title } = useParams();
    const [activeTab, setActiveTab] = useState('about');
    
    // Find the club data
    const club = sampleClubs.find(c => c.title === decodeURIComponent(title));
    
    // Scroll to top when component mounts
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    if (!club) {
      return (
        <div className={styles.notFoundContainer}>
          <h2>Club not found</h2>
          <Link to="/" className={styles.backButton}>
            <img src={BackIcon} alt="Back" />
            <span>Back to Clubs</span>
          </Link>
        </div>
      );
    }
  
    // Example event data structure - in a real app, this would come from your database
    const clubEvents = [
      {
        id: 1,
        title: "Annual Showcase",
        description: "Our flagship event where members demonstrate their skills and projects developed throughout the year. This showcase highlights the best work from our community and serves as inspiration for new members.",
        date: "March 15, 2025",
        location: "Main Auditorium",
        image: club.leftImage,
        winners: [
          { name: "Team Phoenix", prize: "First Place", project: "AI-Powered Campus Navigation" },
          { name: "Digital Wizards", prize: "Second Place", project: "Blockchain Voting System" },
          { name: "Tech Titans", prize: "Third Place", project: "AR Campus Tour" }
        ]
      },
      {
        id: 2,
        title: "Workshop Series",
        description: "Monthly technical workshops designed to teach specific skills relevant to our club's focus. These hands-on sessions provide valuable learning opportunities for beginners and advanced practitioners alike.",
        date: "Every Last Saturday",
        location: "Tech Lab 204",
        image: club.rightImage,
        winners: []
      },
      {
        id: 3,
        title: "Hackathon 2025",
        description: "A 48-hour coding marathon where participants collaborate to solve real-world challenges. This event fosters innovation, teamwork, and practical application of technical skills under time constraints.",
        date: "May 20-22, 2025",
        location: "Innovation Hub",
        image: club.leftImage,
        winners: [
          { name: "Code Crusaders", prize: "Grand Prize", project: "Smart Waste Management" },
          { name: "Byte Brigade", prize: "Innovation Award", project: "Health Monitoring System" },
          { name: "Algorithm Aces", prize: "Technical Excellence", project: "Traffic Optimization AI" }
        ]
      }
    ];
  
    // Example members data
    const clubMembers = {
      leaders: [
        { name: "Aditya Sharma", role: "President", year: "Final Year", department: "Computer Science" },
        { name: "Priya Patel", role: "Vice President", year: "Third Year", department: "Electronics" }
      ],
      coordinators: [
        { name: "Rahul Desai", role: "Technical Coordinator", year: "Third Year", department: "Information Technology" },
        { name: "Sneha Gupta", role: "Events Coordinator", year: "Second Year", department: "Computer Science" },
        { name: "Vikram Singh", role: "PR Coordinator", year: "Third Year", department: "Electrical Engineering" }
      ],
      members: [
        "Ananya Kumar (Second Year)",
        "Rohit Verma (First Year)",
        "Kavya Nair (Final Year)",
        "Arjun Reddy (Second Year)",
        "Divya Sharma (First Year)",
        "Mohammed Ali (Third Year)",
        "Jessica Pinto (Second Year)",
        "Raj Malhotra (First Year)"
      ]
    };
  
    return (
      <div className={styles.clubDetailsContainer}>
        <div className={styles.heroSection} style={{ backgroundImage: `url(${bg})` }}>
          <div className={styles.overlay}></div>
          <div className={styles.clubBadge}>
            <img src={club.url} alt={club.title} className={styles.clubLogo} />
            <img src={club.border} alt="border" className={styles.clubBorder} />
          </div>
          <h1 className={styles.clubTitle}>{club.title}</h1>
          <p className={styles.clubCategory}>{club.category} Club</p>
          
          <Link to="/" className={styles.backButton}>
            <img src={BackIcon} alt="Back" />
            <span>Back to Clubs</span>
          </Link>
        </div>
  
        <div className={styles.tabsContainer}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'about' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'members' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('members')}
          >
            Members
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'events' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('events')}
          >
            Events
          </button>
        </div>
  
        <div className={styles.contentContainer}>
          {activeTab === 'about' && (
            <div className={styles.aboutSection}>
              <div className={styles.sectionTitle}>About {club.title}</div>
              <div className={styles.clubDescription}>
                <p>{club.description}</p>
                <p>
                  {club.title} is one of the premier clubs at our institution, fostering a community of passionate individuals 
                  dedicated to excellence and innovation in {club.category.toLowerCase()} pursuits. Established with a vision to 
                  provide students with a platform to explore and enhance their skills, our club has grown significantly over the years.
                </p>
                <p>
                  We organize various workshops, competitions, and collaborative projects that not only help members develop technical 
                  proficiency but also soft skills such as teamwork, leadership, and problem-solving. Our club serves as a bridge 
                  between academic learning and practical application, preparing students for real-world challenges.
                </p>
                <p>
                  Whether you're a beginner looking to learn or an expert wanting to share your knowledge, {club.title} welcomes 
                  everyone with open arms. Join us in our journey of discovery, learning, and growth!
                </p>
              </div>
  
              <div className={styles.gallerySection}>
                <div className={styles.galleryImages}>
                  <img src={club.leftImage} alt={`${club.title} activity`} />
                  <img src={club.rightImage} alt={`${club.title} event`} />
                </div>
              </div>
  
              <div className={styles.facultySection}>
                <div className={styles.sectionTitle}>Faculty In-Charge</div>
                <div className={styles.facultyList}>
                  {club.facultyIncharge.map((faculty, index) => (
                    <div key={index} className={styles.facultyCard}>
                      <div className={styles.facultyAvatar}>
                        {faculty.charAt(0)}
                      </div>
                      <div className={styles.facultyName}>{faculty}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
  
          {activeTab === 'members' && (
            <div className={styles.membersSection}>
              <div className={styles.sectionTitle}>Club Leadership</div>
              <div className={styles.leadershipCards}>
                {clubMembers.leaders.map((leader, index) => (
                  <div key={index} className={styles.leaderCard}>
                    <div className={styles.memberAvatar}>{leader.name.charAt(0)}</div>
                    <div className={styles.memberInfo}>
                      <h3>{leader.name}</h3>
                      <p className={styles.memberRole}>{leader.role}</p>
                      <p>{leader.year} • {leader.department}</p>
                    </div>
                  </div>
                ))}
              </div>
  
              <div className={styles.sectionTitle}>Coordinators</div>
              <div className={styles.coordinatorsGrid}>
                {clubMembers.coordinators.map((coord, index) => (
                  <div key={index} className={styles.coordinatorCard}>
                    <div className={styles.memberAvatar}>{coord.name.charAt(0)}</div>
                    <div className={styles.memberInfo}>
                      <h3>{coord.name}</h3>
                      <p className={styles.memberRole}>{coord.role}</p>
                      <p>{coord.year} • {coord.department}</p>
                    </div>
                  </div>
                ))}
              </div>
  
              <div className={styles.sectionTitle}>Members</div>
              <div className={styles.membersList}>
                {clubMembers.members.map((member, index) => (
                  <div key={index} className={styles.memberItem}>
                    <span className={styles.memberDot}></span>
                    <span>{member}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
  
          {activeTab === 'events' && (
            <div className={styles.eventsSection}>
              <div className={styles.sectionTitle}>Upcoming & Past Events</div>
              
              <div className={styles.eventsList}>
                {clubEvents.map(event => (
                  <div key={event.id} className={styles.eventCard}>
                    <div className={styles.eventImageContainer}>
                      <img src={event.image} alt={event.title} className={styles.eventImage} />
                    </div>
                    <div className={styles.eventContent}>
                      <h3 className={styles.eventTitle}>{event.title}</h3>
                      <div className={styles.eventMeta}>
                        <span className={styles.eventDate}>{event.date}</span>
                        <span className={styles.eventLocation}>{event.location}</span>
                      </div>
                      <p className={styles.eventDescription}>{event.description}</p>
                      
                      {event.winners && event.winners.length > 0 && (
                        <div className={styles.winnersSection}>
                          <h4 className={styles.winnersTitle}>Winners</h4>
                          <div className={styles.winnersList}>
                            {event.winners.map((winner, idx) => (
                              <div key={idx} className={styles.winnerItem}>
                                <div className={styles.winnerRank}>
                                  {winner.prize}
                                </div>
                                <div className={styles.winnerDetails}>
                                  <span className={styles.winnerName}>{winner.name}</span>
                                  <span className={styles.winnerProject}>{winner.project}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  

export default ClubDetails
