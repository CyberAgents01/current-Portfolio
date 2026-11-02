export const profile = {
  name: "Ankush Patil",
  title: "Linux & Network Engineer",
  subtitle: "IT Infrastructure | Networking | Security",
  tagline: "Passionate about Linux, Networking, Server Administration and Infrastructure Security.",
  location: "Bengaluru, India",
  email: "ankush15102003@gmail.com",
  phone: "+91 93167 42856",
  github: "https://github.com/CyberAgents01",
  linkedin: "https://www.linkedin.com/in/ankush-patil-a12b07299",
  summary:
    "B.Tech Computer Science and Engineering graduate with a foundation in IT infrastructure, Linux administration and networking. Currently pursuing CDAC PGCP-ITISS, with practical project work in Linux server setup, network services, server hardening and automated website deployment.",
  about:
    "I enjoy understanding how systems communicate, how services are configured, and how infrastructure can be made more reliable and secure. My hands-on learning has included Linux server administration, network configuration, Windows Server fundamentals, security tasks and deployment automation.",
  education: [
    {
      title: "CDAC PGCP-ITISS",
      detail: "Post Graduate Certificate Programme in IT Infrastructure, Systems and Security",
      place: "C-DAC, Bengaluru",
      period: "Pursuing · 6-month programme"
    },
    {
      title: "B.Tech — Computer Science & Engineering",
      detail: "Specialization: Cyber Security & Forensics",
      place: "Sandip University, Nashik",
      period: "2026 · CGPA 8.85 / 10"
    }
  ],
  languages: ["English", "Hindi", "Marathi", "Gujarati"],
  strengths: ["Problem-solving", "Analytical thinking", "Teamwork", "Documentation", "Eager to learn"]
};

export const skillGroups = [
  { title: "Linux Administration", icon: "terminal", items: ["CentOS Stream", "RHEL family", "Ubuntu", "Kali Linux", "Users & groups", "File permissions", "systemd", "journalctl", "Troubleshooting"] },
  { title: "Windows Server", icon: "server", items: ["Active Directory basics", "User & group management", "FSRM basics", "Client lab setup", "DNS", "DHCP", "DFS", "WDS", "Backup & recovery"] },
  { title: "Networking", icon: "network", items: ["TCP/IP", "IP addressing", "Subnetting", "Static routing", "RIP", "OSPF", "VLAN", "Routing & switching", "SSH"] },
  { title: "Network Services", icon: "globe", items: ["Kea DHCP", "BIND DNS", "Apache HTTPD", "Samba", "NFS", "firewalld", "nmcli", "nslookup", "dig", "curl"] },
  { title: "DevOps & Virtualization", icon: "workflow", items: ["Git", "GitHub", "Jenkins CI/CD", "Docker", "Ansible playbooks", "Kubernetes (learning)", "Oracle VirtualBox"] },
  { title: "Programming & Scripting", icon: "code", items: ["Python", "SQL", "Bash"] },
  { title: "Cloud", icon: "cloud", items: ["AWS"] }
];

export const projects = [
  {
    slug: "linux-server-hardening",
    number: "01",
    title: "Linux Server Setup & Hardening",
    category: "IT Infrastructure",
    summary: "A central CentOS Stream 10 server providing network addressing, name resolution, web hosting and secure file sharing across a private lab network.",
    stack: ["CentOS Stream 10", "Kea DHCP", "BIND DNS", "Apache", "Samba", "firewalld", "nmcli"],
    highlights: [
      "Configured a fixed server IP using nmcli.",
      "Configured Kea DHCPv4 and verified client leases.",
      "Created and validated a BIND DNS master zone.",
      "Hosted an internal Apache website reachable by domain name.",
      "Configured authenticated Samba sharing with controlled permissions.",
      "Applied firewall rules and service hardening."
    ],
    result: "Clients on the private network received IP configuration, resolved the internal website by name and accessed a secured file share.",
    github: ""
  },
  {
    slug: "ci-cd-automation",
    number: "02",
    title: "Automatic Website Deployment",
    category: "DevOps & Automation",
    summary: "A two-VM deployment workflow that automatically publishes website updates from GitHub to an Apache server using Jenkins and Ansible.",
    stack: ["Jenkins", "Ansible", "GitHub", "Apache", "SSH", "Linux"],
    highlights: [
      "Connected Jenkins to a GitHub repository.",
      "Configured source-control polling to detect commits.",
      "Created an Ansible playbook to deploy website files.",
      "Configured passwordless SSH between Linux VMs.",
      "Managed the Apache service through automation."
    ],
    result: "A GitHub change triggered the Jenkins workflow and Ansible deployed the updated website to the remote Apache server.",
    github: ""
  },
  {
    slug: "netcluster",
    number: "03",
    title: "NetCluster",
    category: "Python Project",
    summary: "A Python project that shares tasks between computers using socket programming and the RAI framework, as described in the supplied resume.",
    stack: ["Python", "Socket Programming", "RAI Framework"],
    highlights: [
      "Built frontend and backend components.",
      "Used socket programming for communication between computers.",
      "Explored task sharing in a distributed-computing context."
    ],
    result: "A learning project exploring communication and task distribution between computers.",
    github: ""
  }
];

export const certifications = [
  "Basic Ethical Hacking Course — EyeQDot.net",
  "Internship Completion Certificate — VAPT Trainee, EyeQDot.net",
  "Defensive Cyber Techniques Course — DROP Organization"
];
