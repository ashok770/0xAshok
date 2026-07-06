import securityDashboard from "../assets/projects/security-dashboard.jpg";
import safeout from "../assets/projects/safeout.jpg";
import mindstack from "../assets/projects/mindstack.jpg";

export const reports = [
  {
    id: 1,
    title: "Internal Penetration Test Report",
    category: "Security Assessment",
    date: "June 2026",
    description:
      "Comprehensive internal network penetration testing report with findings, risk ratings, and remediation recommendations.",
    cover: securityDashboard,
    pdfUrl: "#",
    downloadUrl: "#",
  },
  {
    id: 2,
    title: "Web Application Vulnerability Report",
    category: "Web Security",
    date: "May 2026",
    description:
      "Detailed web application vulnerability assessment report with OWASP findings and mitigation guidance.",
    cover: safeout,
    pdfUrl: "#",
    downloadUrl: "#",
  },
  {
    id: 3,
    title: "Cloud Infrastructure Risk Report",
    category: "Cloud Security",
    date: "April 2026",
    description:
      "Cloud infrastructure security report covering misconfiguration, access control, and compliance issues.",
    cover: mindstack,
    pdfUrl: "#",
    downloadUrl: "#",
  },
];
