import securityDashboard from "../assets/projects/security-dashboard.jpg";
import safeout from "../assets/projects/safeout.jpg";
import mindstack from "../assets/projects/mindstack.jpg";

export const projects = [
  {
    id: 1,
    slug: "automated-security-assessment",
    featured: true,
    title: "Automated Security Assessment System",
    category: "Cybersecurity",
    image: securityDashboard,
    shortDescription: "MERN dashboard for vulnerability assessment.",
    description:
      "A full-stack web application built to manage security assessments, vulnerability reports, and penetration testing documentation.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Nmap"],
    features: [
      "Automated vulnerability scanning",
      "Security assessment dashboard",
      "Penetration testing reports",
      "Role-based project management",
      "Responsive analytics views",
      "MongoDB-backed evidence archive",
    ],
    challenges: [
      "Ensuring accurate vulnerability classification under varying scan results.",
      "Designing a dashboard that balances detail and usability for security teams.",
      "Maintaining data integrity across simulated penetration test workflows.",
      "Syncing report generation with real-time scan updates.",
    ],
    learning: [
      "Improved React component architecture.",
      "Learned secure Firebase authentication.",
      "Understood API integration best practices.",
      "Gained experience building scalable frontend applications.",
    ],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    slug: "safeout-crowd-monitoring",
    featured: true,
    title: "SafeOut Crowd Monitoring",
    category: "Computer Vision",
    image: safeout,
    shortDescription: "Real-time crowd safety and alert monitoring.",
    description:
      "Real-time crowd monitoring system using YOLOv5 with alert generation.",
    technologies: ["Python", "YOLOv5", "Flask"],
    features: [
      "Real-time crowd detection",
      "AI-based safety alerts",
      "Live occupancy monitoring",
      "Event-based anomaly tracking",
      "Dashboard for authorities",
      "Fast response visualization",
    ],
    challenges: [
      "Balancing model accuracy with processing speed for live video feeds.",
      "Integrating alerting logic into a clean, real-time dashboard.",
      "Handling noisy input from crowded public environments.",
      "Ensuring deployment reliability across different camera setups.",
    ],
    learning: [
      "Improved React component architecture.",
      "Learned secure Firebase authentication.",
      "Understood API integration best practices.",
      "Gained experience building scalable frontend applications.",
    ],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    slug: "mindstack",
    featured: true,
    title: "MindStack",
    category: "Productivity",
    image: mindstack,
    shortDescription:
      "AI-powered context management system to help users resume interrupted work.",
    description:
      "AI-powered context management system to help users resume interrupted work.",
    technologies: ["React", "Firebase", "Gemini API"],
    features: [
      "AI-powered context summarization",
      "Task management dashboard",
      "Firebase Authentication",
      "Gemini API integration",
      "Responsive React interface",
      "Cloud Firestore database",
    ],
    challenges: [
      "Managing application state across multiple pages.",
      "Integrating Gemini API with Firebase securely.",
      "Designing an intuitive user experience.",
      "Handling asynchronous API responses efficiently.",
    ],
    learning: [
      "Improved React component architecture.",
      "Learned secure Firebase authentication.",
      "Understood API integration best practices.",
      "Gained experience building scalable frontend applications.",
    ],
    github: "https://github.com/ashok770/mindstack",
    demo: "#",
  },
];
