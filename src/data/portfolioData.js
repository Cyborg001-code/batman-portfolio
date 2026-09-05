export const portfolioData = {
  profile: {
    name: "Ankush Sanjay Gangurde",
    title: "System Administrator & Cloud Infrastructure Specialist",
    tagline: "Hands-on engineering across Windows/Linux enterprise systems, Active Directory / Entra ID, and automated AWS cloud architectures.",
    location: "Nashik, India",
    availability: "Open to Systems, Cloud & Infrastructure Roles",
    phone: "+91 9637475479",
    bio: [
      "System Administrator with hands-on experience supporting multi-OS enterprise environments (Windows and Linux), Active Directory / Entra ID administration, and core enterprise networking (DNS, DHCP, VPN, TCP/IP).",
      "Complements daily IT operations with applied AWS cloud infrastructure projects covering EC2, IAM, S3, VPC, and CloudWatch, along with Terraform-based Infrastructure as Code (IaC), Docker, and Kubernetes containerization.",
      "Proven track record of maintaining 99% uptime and zero-incident identity/access administration across 100+ production user accounts."
    ],
    avatarPlaceholder: "AG",
    // Put your photo in public/profile.png or keep null for stylized interactive initials
    avatarImage: null, 
    stats: [
      { label: "Systems Uptime", value: "99%", caption: "Production environments" },
      { label: "Accounts Managed", value: "100+", caption: "Zero-incident access" },
      { label: "Provisioning Speed", value: "+70%", caption: "Via Terraform IaC" },
      { label: "Core Domains", value: "Multi-Cloud", caption: "SysAdmin & AWS" }
    ],
    social: {
      github: "https://github.com/Cyborg001-code",
      linkedin: "https://linkedin.com/in/ankush-gangurde",
      email: "ankushgangurde.it@gmail.com"
    }
  },

  skills: [
    {
      category: "Systems & OS Administration",
      items: [
        "Linux (Ubuntu)",
        "Windows 10 / 11",
        "Windows Server Concepts",
        "Hardware Troubleshooting",
        "Peripheral Diagnostic Systems"
      ]
    },
    {
      category: "Identity & Access (IAM)",
      items: [
        "Active Directory (AD)",
        "Azure Active Directory (Entra ID)",
        "Role-Based Access Control (RBAC)",
        "Zero-Incident User Provisioning",
        "Privilege Escalation Governance"
      ]
    },
    {
      category: "Cloud Infrastructure (AWS)",
      items: [
        "AWS EC2",
        "Amazon S3",
        "Virtual Private Cloud (VPC)",
        "AWS IAM Least-Privilege",
        "CloudWatch",
        "Application Load Balancers (ALB)",
        "Amazon ECR & EKS"
      ]
    },
    {
      category: "Networking & Connectivity",
      items: [
        "DNS & DHCP Architecture",
        "Enterprise VPN Tunnels",
        "TCP/IP Diagnostic Suites",
        "LAN / WAN Routing",
        "CCNA Network Topologies"
      ]
    },
    {
      category: "Automation, IaC & DevOps",
      items: [
        "Terraform (HCL)",
        "Docker Containerization",
        "Kubernetes (K8s)",
        "Python Scripting",
        "Bash Automation",
        "GitHub Actions CI/CD",
        "Trivy Vulnerability Auditing"
      ]
    },
    {
      category: "Enterprise Suite & Observability",
      items: [
        "Microsoft 365 Administration",
        "Exchange Online",
        "SharePoint Admin Center",
        "Microsoft Intune MDM",
        "Prometheus & Grafana Telemetry"
      ]
    }
  ],

  experience: [
    {
      period: "Sep 2023 — Present",
      role: "Technical Support Executive (IT Operations & Systems Support)",
      company: "Care IO Infotech Pvt. Ltd.",
      location: "Nashik, India",
      highlights: [
        "Administered and supported dual-tier Windows and Linux systems for 100+ end users, systematically resolving hardware, software, and network connectivity while maintaining 99% operational uptime.",
        "Governed Active Directory and Entra ID (Azure AD) identity directory services, enforcing granular RBAC and credential resets with a flawless zero-security-incident record.",
        "Maintained enterprise-scale networking (LAN/WAN, DNS, DHCP, VPN, TCP/IP); reduced Mean Time to Resolution (MTTR) by authoring standardized escalation runbooks.",
        "Provisioned and managed end-to-end user lifecycles across Microsoft 365 enterprise endpoints (Exchange Online, SharePoint, and Microsoft Intune)."
      ]
    }
  ],

  projects: [
    {
      id: "proj-terraform-aws",
      title: "AWS Infrastructure Automation with Terraform & Containers",
      subtitle: "Automated Cloud Provisioning & DevSecOps Pipeline",
      year: "2024",
      description: "Architected modular Terraform configurations to provision secure VPCs, AWS EKS clusters, IAM policies, and ECR repositories, reducing environment provisioning latency by 70%. Integrated GitHub Actions with automated Trivy vulnerability scanning, automated Python log monitoring, and real-time observability dashboards with Prometheus and Grafana.",
      tags: ["Terraform", "AWS EKS", "Docker", "GitHub Actions", "Python", "Trivy", "Prometheus", "Grafana"],
      status: "Verified Architecture",
      github: "https://github.com/Cyborg001-code",
      demo: "https://github.com/Cyborg001-code"
    },
    {
      id: "proj-ha-aws",
      title: "Highly Available AWS Infrastructure Deployment",
      subtitle: "Multi-AZ Fault Tolerant Cloud Architecture",
      year: "2024",
      description: "Deployed resilient multi-Availability Zone AWS infrastructure incorporating EC2 Auto Scaling groups and Application Load Balancers for elastic traffic distribution. Designed encrypted multi-AZ storage with automated snapshot lifecycles and recovery failovers. Enforced strict IAM least-privilege policies with CloudWatch alarm automation.",
      tags: ["AWS EC2 Auto Scaling", "ALB", "AWS VPC", "AWS IAM", "KMS Encryption", "CloudWatch", "Multi-AZ"],
      status: "Production Architecture",
      github: "https://github.com/Cyborg001-code",
      demo: "https://github.com/Cyborg001-code"
    }
  ],

  education: [
    {
      degree: "M.Sc. in Computer Science",
      institution: "Savitribai Phule Pune University",
      year: "2024",
      details: "Advanced operating systems, network protocols, cloud computing concepts, and distributed systems."
    },
    {
      degree: "B.Sc. in Computer Science",
      institution: "Savitribai Phule Pune University",
      year: "2022",
      details: "Core computer science fundamentals, data structures, algorithm analysis, and software engineering."
    }
  ],

  certifications: [
    {
      title: "Cisco Certified Network Associate (CCNA 200-301)",
      issuer: "Cisco",
      year: "2023",
      status: "Certified"
    },
    {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services (AWS)",
      year: "2024",
      status: "In Progress"
    }
  ]
};