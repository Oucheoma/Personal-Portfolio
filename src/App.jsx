import React, { useEffect, useState } from "react";

// Tailwind is assumed available by the canvas preview.
// This single-file React component renders a modern, dark, responsive portfolio site
// using ONLY information from the provided resume. Replace placeholders (HEADSHOT_URL, RESUME_URL, GITHUB_URL) as needed.
// Accessibility: semantic landmarks, skip link, alt text, ARIA labels, focus styles.
// SEO: meaningful headings, descriptive titles/description (set in your host framework's <head>).

export default function Portfolio() {
  // Dark mode toggle (persist to localStorage)
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const initial = stored || "dark";
    setTheme(initial);
  }, []);
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const nav = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#certs", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased selection:bg-indigo-400/30">
      {/* Skip link */}
      <a href="#home" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-indigo-600 text-white px-3 py-1 rounded">
        Skip to content
      </a>

      {/* Sticky header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="font-semibold tracking-tight">Ucheoma Okoma</div>
          <nav aria-label="Primary" className="hidden md:flex gap-6 text-sm">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="ucheoma-okoma--resume.pdf" // replace with actual PDF link
              className="hidden sm:inline-flex rounded-xl bg-indigo-600 hover:bg-indigo-500 px-3 py-1.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Download Resume
            </a>
  
          </div>
        </div>
      </header>

      {/* Hero / About */}
      <section id="home" className="mx-auto max-w-6xl px-4 py-16 grid grid-cols-1 md:grid-cols-[1.2fr_.8fr] gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Ucheoma Okoma
          </h1>
          <p className="mt-2 text-indigo-300 font-medium">Cybersecurity + Health Informatics</p>
          <p className="mt-4 text-neutral-300 max-w-prose">
            Passionate Information Security professional focused on AI privacy, threat management, and cloud/IoT security. Experienced across incident analysis, forensics, and secure solution design with a strong foundation in standards like NIST CSF, ISO 27001, and MITRE ATT&CK.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:ucheoma.okoma@cgu.edu"
              className="rounded-xl bg-indigo-600 hover:bg-indigo-500 px-4 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Let’s Work Together
            </a>
            <a
              href="https://www.linkedin.com/in/ucheoma-okoma"
              className="rounded-xl border border-neutral-700 hover:bg-neutral-800 px-4 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              LinkedIn
            </a>
            {/* <a
              href="GITHUB_URL" // optional
              className="rounded-xl border border-neutral-700 hover:bg-neutral-800 px-4 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              GitHub
            </a> */}
          </div>
          <div className="mt-4 text-sm text-neutral-400">
            Claremont, CA • 909-925-7235 • ucheoma.okoma@cgu.edu
          </div>
        </div>
        {/* <div className="flex justify-center md:justify-end">
          <div className="size-40 md:size-48 rounded-2xl bg-neutral-800 border border-neutral-700 overflow-hidden">
            <img
              src="/headshot.jpg"             // file lives at: public/headshot.jpg
              alt="Ucheoma Okoma headshot"
              className="h-full w-full object-cover block"
            />
          </div>
        </div> */}
      </section>


      {/* Projects / Portfolio */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="AI Privacy-Aware Chatbot"
            stack="Python, FastAPI, Tkinter, OpenRouter (Claude)"
            bullets={[
              "Local AI chatbot with sensitive-input redaction (file paths, hashes, emails, passwords) with ~85% redaction accuracy (lab).",
              "Anonymous logging (session IDs, timestamps, redacted data) accessible only to admins, boosting user trust/adoption ~75% (projected).",
              "Maintained 100% chatbot functionality while securing prompts pre-processing for compliance-ready workflows.",
            ]}
          />
          <ProjectCard
            title="TryHackMe – Personal Labs (Ongoing)"
            stack="Burp Suite, OWASP ZAP, Metasploit"
            bullets={[
              "Completed Junior Penetration Tester path (Top 7%); practiced exploitation of OWASP Top 10.",
              "Integrated OWASP ZAP into CI/CD for automated testing, reducing manual effort by ~40%.",
              "Built threat models using OWASP Risk Rating; achieved 100% flaw detection in lab tasks.",
            ]}
          />
          <ProjectCard
            title="IoT Security with AWS & Suricata"
            stack="AWS IoT Core, EC2, Suricata, Filebeat, Kibana"
            bullets={[
              "Designed & monitored an IoT network (MQTT) with streaming dashboards in Kibana.",
              "Deployed Suricata IDS with custom rules, reducing false positives by ~50% (lab).",
              "Configured Filebeat pipelines to support real-time monitoring & incident response.",
            ]}
          />
          <ProjectCard
            title="Digital Forensics Labs – CyberDefenders"
            stack="Volatility, FTK Imager"
            bullets={[
              "Completed 5+ investigations (PsExec abuse, poisoned creds, memory analysis, RATs).",
              "Recovered artifacts with 90%+ accuracy and improved efficiency by ~40% vs manual log review.",
            ]}
          />
          <ProjectCard
            title="Mobile App Security"
            stack="Android Emulator, Burp Suite, Wireshark"
            bullets={[
              "Simulated public Wi‑Fi attacks (HTTP interception, ARP spoofing, rogue APs, captive portals).",
              "Showed HTTPS + VPN reduced attack success rate by >80%; captive portals reached ~60% trick rate.",
              "Recommended layered defenses: HTTPS-only, VPN tunneling, strict permission controls.",
            ]}
          />
          <ProjectCard
            title="Threat Management & Threat Intelligence"
            stack="OpenIOC, STIX, SIEM"
            bullets={[
              "Built 20+ IOCs for ransomware campaigns (Nokoyawa, ALPHV) including hashes, IPs, domains, CVEs.",
              "Converted IOCs to STIX XML to improve sharing & coverage by ~70%; cut SIEM integration time by ~50%.",
            ]}
          />
        </div>
      </section>


      
      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold">Experience</h2>
        <div className="mt-6 grid gap-6">
          <ExperienceCard
            role="Computer Science Intern"
            company="INSPIRE UVic"
            location="Victoria, BC"
            dates="Sep 2023 – Dec 2023"
            bullets={[
              "Collaborated on a security enhancement project for the Capital Regional District.",
              "Designed and implemented an object detection and alarm system using YOLO v8 and OpenCV.",
              "Built a user-friendly interface with React, Node.js, and JavaScript; integrated MySQL for performance.",
            ]}
            tools={["YOLO v8", "OpenCV", "React", "Node.js", "MySQL", "JavaScript"]}
          />
          <ExperienceCard
            role="Medical Intern"
            company="Balm of Gilead Hospital"
            location="Enugu, Nigeria"
            dates="Feb 2022 – Aug 2022"
            bullets={[
              "Assisted in surgical procedures and ward rounds; supported care for 50+ patients daily.",
              "Maintained precise documentation, ensuring confidentiality and compliance standards.",
              "Delivered calm, solution-focused care in high-pressure scenarios.",
            ]}
            tools={["Documentation", "Clinical workflows", "Team collaboration"]}
          />
        </div>
      </section>


      {/* Education */}
      <section id="education" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold">Education</h2>
        <div className="mt-6 grid gap-4">
          <EduItem school="Claremont Graduate University – Claremont, CA" dates="Expected May 2027" degree="M.S. Information Systems & Technology (Cybersecurity & Health Informatics)" />
          <EduItem school="Seneca College – Ontario, Canada" dates="Aug 2025" degree="Postgraduate Certificate – Cybersecurity & Threat Management (President’s Honour List)" />
          <EduItem school="V.N. Karazin Kharkiv National University – Kharkiv, Ukraine" dates="Jul 2024" degree="Doctor of Medicine (MD)" />
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold">Skills</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <SkillGroup title="Cybersecurity Solutions" items={["IAM", "EDR", "SIEM", "DLP", "AppSec (OWASP Top 10)"]} />
          <SkillGroup title="Cloud & Infrastructure" items={["AWS (IoT, EC2, Cloud Security)", "Azure (basic)", "Docker"]} />
          <SkillGroup title="Systems & Networking" items={["Linux", "Windows Server", "IDS/IPS", "Firewalls", "VPN", "TCP/IP", "DNS"]} />
          <SkillGroup title="Tools" items={["Suricata", "ELK Stack", "Nmap", "Wireshark", "Metasploit", "Volatility", "FTK Imager", "Git"]} />
          <SkillGroup title="DevOps & Automation" items={["CI/CD pipelines", "Bash scripting", "Terraform (intro)"]} />
          <SkillGroup title="Programming" items={["Python", "SQL", "JavaScript", "Java", "PowerShell"]} />
          <SkillGroup title="Frameworks & Standards" items={["NIST CSF", "ISO/IEC 27001", "MITRE ATT&CK", "SAST/DAST"]} />
        </div>
      </section>

      {/* Certifications */}
      <section id="certs" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold">Certifications</h2>
        <ul className="mt-6 grid md:grid-cols-2 gap-3 list-disc list-inside text-neutral-300">
          <li>CompTIA Security+</li>
          <li>AWS Certified Cloud Practitioner</li>
          <li>AWS Academy Cloud Security Foundations</li>
          <li>TryHackMe Junior Penetration Tester</li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-2 text-neutral-300">I’m open to internships roles in cybersecurity and security engineering.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="mailto:ucheoma.okoma@cgu.edu" className="rounded-xl bg-indigo-600 hover:bg-indigo-500 px-4 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500">Email Me</a>
            <a href="https://www.linkedin.com/in/ucheoma-okoma" className="rounded-xl border border-neutral-700 hover:bg-neutral-800 px-4 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500">LinkedIn</a>
            
          </div>
        </div>
        <footer className="mt-8 text-xs text-neutral-500">© {new Date().getFullYear()} Ucheoma Okoma</footer>
      </section>
    </div>
  );
}

function ExperienceCard({ role, company, location, dates, bullets, tools }) {
  return (
    <article className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
        <h3 className="text-lg font-semibold">{role} • <span className="text-neutral-300">{company}</span></h3>
        <div className="text-sm text-neutral-400">{location} • {dates}</div>
      </header>
      <ul className="mt-3 space-y-2 list-disc list-inside text-neutral-300">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      {tools?.length ? (
        <div className="mt-3 text-xs text-neutral-400">
          <span className="font-semibold text-neutral-300">Tools:</span> {tools.join(", ")}
        </div>
      ) : null}
    </article>
  );
}

function ProjectCard({ title, stack, bullets }) {
  return (
    <article className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="text-sm text-neutral-400 mt-0.5">{stack}</div>
      <ul className="mt-3 space-y-2 list-disc list-inside text-neutral-300">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </article>
  );
}

function EduItem({ school, dates, degree }) {
  return (
    <article className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
        <h3 className="text-base font-semibold">{school}</h3>
        <div className="text-sm text-neutral-400">{dates}</div>
      </div>
      <p className="text-neutral-300 mt-1">{degree}</p>
    </article>
  );
}

function SkillGroup({ title, items }) {
  return (
    <section>
      <h3 className="font-semibold text-neutral-200">{title}</h3>
      <ul className="mt-2 flex flex-wrap gap-2">
        {items.map((s, i) => (
          <li key={i} className="px-2.5 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-xs text-neutral-200">{s}</li>
        ))}
      </ul>
    </section>
  );
}
