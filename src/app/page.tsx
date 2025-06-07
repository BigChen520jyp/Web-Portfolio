'use client';
import { useState, useRef, useEffect } from 'react';
import Image from "next/image";

interface ProjectData {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  githubLink: string;
  demoLink?: string;
  screenshots: string[];
}

const projects: ProjectData[] = [
  {
    id: 1,
    title: "Project Name",
    shortDescription: "Brief description of your project and the technologies used.",
    fullDescription: `
      A more detailed description of your project. Explain:
      • What problem does it solve?
      • What are the key features?
      • What technical challenges did you overcome?
      • What did you learn?
    `,
    technologies: ["React", "Node.js"],
    githubLink: "https://github.com/yourusername/project1",
    demoLink: "https://demo.project1.com",
    screenshots: ["/project1-screenshot1.jpg", "/project1-screenshot2.jpg"]
  },
  {
    id: 2,
    title: "Another Project",
    shortDescription: "Description of another project showcasing different skills.",
    fullDescription: `
      Detailed description of your second project:
      • Key features and functionality
      • Technical implementation details
      • Challenges and solutions
      • Impact and results
    `,
    technologies: ["Next.js", "TypeScript"],
    githubLink: "https://github.com/yourusername/project2",
    demoLink: "https://demo.project2.com",
    screenshots: ["/project2-screenshot1.jpg", "/project2-screenshot2.jpg"]
  },
  {
    id: 3,
    title: "Third Project",
    shortDescription: "Yet another project demonstrating your range of abilities.",
    fullDescription: `
      In-depth overview of your third project:
      • Main objectives
      • Architecture decisions
      • Implementation approach
      • Lessons learned
    `,
    technologies: ["Python", "API"],
    githubLink: "https://github.com/yourusername/project3",
    demoLink: "https://demo.project3.com",
    screenshots: ["/project3-screenshot1.jpg", "/project3-screenshot2.jpg"]
  }
];

export default function Home() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const projectsSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (projectsSectionRef.current && !projectsSectionRef.current.contains(event.target as Node)) {
        setExpandedProject(null);
      }
    }

    // Add click event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleProject = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-foreground/10 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold">Justin Chen</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-foreground/70 transition-colors">About</a>
              <a href="#projects" className="hover:text-foreground/70 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-foreground/70 transition-colors">Skills</a>
              <a href="#contact" className="hover:text-foreground/70 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Justin Chen</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-foreground/70 max-w-3xl mx-auto">
            A very creative and goal-oriented software engineer with strong ownership mindset and product intuition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="bg-foreground text-background px-8 py-3 rounded-lg hover:bg-foreground/90 transition-colors"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="border border-foreground px-8 py-3 rounded-lg hover:bg-foreground hover:text-background transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6 text-foreground/80">
                I'm a computer engineering graduate from the University of Toronto with expertise in full-stack development and integrating Large Language Models. 
                I bring stimulating energy and contagious creative problem solving to the people I work with; empowering others, and creating an environment that is both high-performing and fun. 
              </p>
              <p className="text-lg text-foreground/80">
              When I'm not coding, I'm immersed in the world of art—whether that's painting or designing garments. I'm also a Bridgestone Star Chef–level home cook with a passion for Chinese and Italian cuisine. Outside the studio and kitchen, I stay active through tennis, snowboarding, hiking, and any excuse to be outdoors.  
              </p>
            </div>
            <div className="bg-foreground/10 rounded-lg p-8 text-center">
              <Image 
                src="/IMG_4778.JPG"
                alt="Justin Chen"
                width={400}
                height={400}
                className="rounded-full mx-auto mb-4 object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        className="py-20 px-4 sm:px-6 lg:px-8"
        ref={projectsSectionRef}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="relative">
                <div 
                  className="bg-foreground/5 rounded-lg p-6 hover:bg-foreground/10 transition-colors cursor-pointer"
                  onClick={() => toggleProject(project.id)}
                >
                  <div className="h-48 bg-foreground/20 rounded-lg mb-4">
                    {project.screenshots[0] && (
                      <Image
                        src={project.screenshots[0]}
                        alt={`${project.title} screenshot`}
                        width={800}
                        height={400}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 mb-4">
                    {project.shortDescription}
                  </p>
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Expanded Project Details */}
          <div 
            className={`
              overflow-hidden transition-all duration-500 ease-in-out
              ${expandedProject !== null ? 'max-h-[2000px] opacity-100 mt-8' : 'max-h-0 opacity-0 mt-0'}
            `}
          >
            <div 
              className={`
                bg-foreground/5 rounded-lg p-8 
                transform transition-all duration-500 ease-in-out
                ${expandedProject !== null ? 'translate-y-0' : '-translate-y-16'}
              `}
            >
              {expandedProject !== null && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">
                      {projects[expandedProject - 1].title}
                    </h3>
                    <div className="prose dark:prose-invert max-w-none">
                      {projects[expandedProject - 1].fullDescription.split('\n').map((paragraph, index) => (
                        <p key={index} className="mb-4 text-foreground/70">
                          {paragraph.trim()}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Screenshots</h4>
                    <div className="grid gap-4">
                      {projects[expandedProject - 1].screenshots.map((screenshot, index) => (
                        <div 
                          key={index} 
                          className="relative h-48 transform transition-all duration-500 ease-in-out"
                          style={{ 
                            transitionDelay: `${index * 100}ms`,
                            transform: expandedProject !== null ? 'translateY(0)' : 'translateY(20px)',
                            opacity: expandedProject !== null ? 1 : 0
                          }}
                        >
                          <Image
                            src={screenshot}
                            alt={`Project screenshot ${index + 1}`}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Resume</h2>
          <p className="text-lg mb-4 text-foreground/70">
            Take a look at my full resume to learn more about my experience and qualifications.
          </p>
          <div className="bg-background rounded-lg p-8 shadow-lg">
            <div className="relative mb-6 w-full max-w-3xl mx-auto">
              <Image
                src="/JustinChen_ResumeSoftwareSummer2025Toronto.jpg"
                alt="Justin Chen's Resume"
                width={1000}
                height={1294}
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                priority
              />
            </div>
            <a
              href="/JustinChen_ResumeSoftwareSummer2025Toronto.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-3 rounded-lg hover:bg-foreground/90 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
              View Full Resume
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded">Java</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded">C++</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded">Python</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded">C</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded">JavaScript</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded">TypeScript</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded">SQL</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded">HTML/CSS</span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded">React</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded">Spring Boot</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded">Express</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded">Junit</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded">Mockito</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded">Jest</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded">RTL</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded">Redux</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded">Axios</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded">PyTorch</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded">numPy</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded">LLM</span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded">AWS</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded">Docker</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded">Jenkins</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded">Git</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded">Postman</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded">RESTful APIs</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded">GitLab</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded">CI/CD</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded">Node.js</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded">MySQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl mb-8 text-foreground/70">
            I'm always interested in new opportunities and collaborations
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="mailto:justinkw02@gmail.com" 
              className="bg-foreground text-background px-8 py-3 rounded-lg hover:bg-foreground/90 transition-colors"
            >
              Email Me
            </a>
            <a 
              href="https://www.linkedin.com/in/justin-chen2002/" 
              className="border border-foreground px-8 py-3 rounded-lg hover:bg-foreground hover:text-background transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/BigChen520jyp" 
              className="border border-foreground px-8 py-3 rounded-lg hover:bg-foreground hover:text-background transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-foreground/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-foreground/60">© 2025 Justin Chen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
