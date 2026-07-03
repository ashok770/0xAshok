import securityDashboard from "../assets/projects/security-dashboard.jpg";
import safeout from "../assets/projects/safeout.jpg";
import mindstack from "../assets/projects/mindstack.jpg";
export const projects = [
  {
    id: 1,
    title: "Automated Security Assessment System",
    image: securityDashboard,
    category: "Cybersecurity",
    technologies: ["React", "Node.js", "MongoDB", "Nmap"],
    description:
      "A MERN-based dashboard for security assessment and vulnerability reporting.",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    id: 2,
    title: "SafeOut Crowd Monitoring",
    image: safeout,
    category: "Computer Vision",
    technologies: ["Python", "YOLOv5", "Flask"],
    description:
      "Real-time crowd monitoring system using YOLOv5 with alert generation.",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    id: 3,
    title: "MindStack",
    image: mindstack,
    category: "Productivity",
    technologies: ["React", "Firebase", "Gemini API"],
    description:
      "AI-powered context management system to help users resume interrupted work.",
    github: "#",
    demo: "#",
    featured: true,
  },
];
