export const labs = [
  {
    id: 1,
    slug: "nmap-network-enumeration",
    title: "Nmap Network Enumeration",
    category: "Networking",
    difficulty: "Easy",
    platform: "Local Lab",
    image: "",
    objective:
      "Map the target network, discover live hosts, and enumerate open services in a controlled environment.",
    environment:
      "A virtualized local lab network with multiple hosts and service endpoints for active scanning.",
    tools: ["Nmap", "Wireshark"],
    methodology: [
      "Perform host discovery to identify live systems.",
      "Run service and version enumeration against discovered hosts.",
      "Capture network traffic with Wireshark for protocol analysis.",
    ],
    findings: [
      "Multiple hosts were discovered on the subnet.",
      "Several services were exposed with outdated version information.",
      "Network traffic confirmed open service responses and protocol details.",
    ],
    mitigation: [
      "Restrict unnecessary ports at the firewall.",
      "Update exposed services to supported versions.",
      "Harden network devices to reduce service footprint.",
    ],
    learning: [
      "Improved network enumeration workflows.",
      "Deepened understanding of service version discovery.",
      "Gained confidence in using Wireshark for protocol analysis.",
    ],
    learned: ["Host Discovery", "Service Enumeration", "Version Detection"],
    status: "Completed",
    featured: true,
  },
  {
    id: 2,
    slug: "dvwa-sql-injection",
    title: "DVWA SQL Injection",
    category: "Web Security",
    difficulty: "Medium",
    platform: "DVWA",
    image: "",
    objective:
      "Exploit SQL injection vulnerabilities in DVWA to extract sensitive data and demonstrate the impact of insecure input handling.",
    environment:
      "DVWA running on a PHP/MySQL stack within a contained lab VM designed for web security testing.",
    tools: ["Burp Suite", "SQLMap"],
    methodology: [
      "Identify injection points through request interception.",
      "Attempt manual payloads and confirm SQL response behavior.",
      "Use SQLMap to automate exploitation and data extraction.",
    ],
    findings: [
      "User input was concatenated into SQL queries without sanitization.",
      "Database schema and user records were retrievable via injection.",
      "Authentication bypass and data exposure were possible under some configurations.",
    ],
    mitigation: [
      "Use parameterized queries or prepared statements.",
      "Validate and sanitize all user-supplied input.",
      "Limit database user privileges to prevent full data access.",
    ],
    learning: [
      "Improved React component architecture.",
      "Learned secure Firebase authentication.",
      "Understood API integration best practices.",
      "Gained experience building scalable frontend applications.",
    ],
    learned: ["SQL Injection", "Request Interception", "Database Enumeration"],
    status: "Completed",
    featured: true,
  },
  {
    id: 3,
    slug: "drupal-enumeration",
    title: "Drupal Enumeration",
    category: "Web Security",
    difficulty: "Medium",
    platform: "DC-1",
    image: "",
    objective:
      "Enumerate a Drupal target to identify plugins, version information, and potential attack paths for follow-up exploitation.",
    environment:
      "A dedicated Drupal instance with multiple modules enabled, hosted within a lab network for security analysis.",
    tools: ["Nmap", "Searchsploit"],
    methodology: [
      "Fingerprint the Drupal version and installed modules.",
      "Search for known exploits matching identified modules.",
      "Correlate enumeration results with potential attack vectors.",
    ],
    findings: [
      "Drupal version metadata was exposed via HTTP headers.",
      "Several modules were identified as potentially vulnerable.",
      "Known exploit paths were mapped for follow-up testing.",
    ],
    mitigation: [
      "Remove unnecessary modules from the deployment.",
      "Keep Drupal core and plugins updated.",
      "Harden access controls for administrative endpoints.",
    ],
    learning: [
      "Drupal fingerprinting and module enumeration.",
      "Exploit research using Searchsploit.",
      "Service enumeration in a web application context.",
    ],
    learned: [
      "Drupal Fingerprinting",
      "Exploit Research",
      "Service Enumeration",
    ],
    status: "Completed",
    featured: true,
  },
];
