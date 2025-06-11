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
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInitialMount, setIsInitialMount] = useState(true);

  useEffect(() => {
    if (isInitialMount) {
      // Force initial state
      setIsLoaded(false);
      setIsInitialMount(false);
      
      // Add longer delay for the animation
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 500);

      return () => clearTimeout(timer);
    }

    function handleClickOutside(event: MouseEvent) {
      if (projectsSectionRef.current && !projectsSectionRef.current.contains(event.target as Node)) {
        setExpandedProject(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isInitialMount]);

  const toggleProject = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <style jsx>{`
        @keyframes peekContent {
          0% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-25vh);
            animation-timing-function: cubic-bezier(0.2, 0.6, 0.3, 1);
          }
          60% {
            transform: translateY(-25vh);
            animation-timing-function: cubic-bezier(0.4, 0, 1, 0.5);
          }
          75% {
            transform: translateY(2vh);
          }
          85% {
            transform: translateY(-1vh);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes flyEmail {
          0% {
            transform: translate(0, 0) scale(1);
            color: currentColor;
          }
          30% {
            transform: translate(350px, -500px) scale(3.5);
            color: #ef4444;
          }
          60% {
            transform: translate(350px, -200px) scale(1.5);
            color: #ef4444;
          }
          100% {
            transform: translate(0, 0) scale(1);
            color: currentColor;
          }
        }

        @keyframes flyLinkedIn {
          0% {
            transform: translate(0, 0) scale(1);
            color: currentColor;
          }
          30% {
            transform: translate(250px, -150px) scale(3.5);
            color: #0077b5;
          }
          60% {
            transform: translate(200px, -150px) scale(1.5);
            color: #0077b5;
          }
          100% {
            transform: translate(0, 0) scale(1);
            color: currentColor;
          }
        }

        @keyframes flyGithub {
          0% {
            transform: translate(0, 0) scale(1);
            color: currentColor;
          }
          30% {
            transform: translate(350px, -50px) scale(3.5);
            color: #8b5cf6;
          }
          60% {
            transform: translate(350px, -30px) scale(1.5);
            color: #8b5cf6;
          }
          100% {
            transform: translate(0, 0) scale(1);
            color: currentColor;
          }
        }

        .content-wrapper {
          animation: peekContent 2.5s cubic-bezier(0.33, 1, 0.68, 1) 0.5s;
        }

        .highlight-email {
          animation: flyEmail 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .highlight-linkedin {
          animation: flyLinkedIn 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;
        }

        .highlight-github {
          animation: flyGithub 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
        }

        @keyframes revealContent {
          0% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-5vh);
          }
          100% {
            transform: translateY(0);
          }
        }

        .scroll-hint {
          animation: revealContent 2s ease-in-out 1s;
          animation-fill-mode: forwards;
        }

        .about-section {
          position: relative;
          z-index: 1;
        }

        .about-section::before {
          content: '';
          position: absolute;
          top: -50px;
          left: 0;
          right: 0;
          height: 50px;
          background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.05));
          pointer-events: none;
        }
      `}</style>

      {/* Fixed Left Side Panel */}
      <div id="contact-icons" className="fixed left-0 bottom-0 w-16 h-64 flex flex-col items-center justify-end space-y-4 p-4 z-50">
        <a 
          id="email-icon"
          href="mailto:justinkw02@gmail.com"
          className="text-foreground/70 hover:text-foreground transition-colors"
          aria-label="Email"
          style={{ transformOrigin: 'center' }}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </a>
        <a 
          id="linkedin-icon"
          href="https://www.linkedin.com/in/justin-chen2002/"
          className="text-foreground/70 hover:text-foreground transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          style={{ transformOrigin: 'center' }}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a 
          id="github-icon"
          href="https://github.com/BigChen520jyp"
          className="text-foreground/70 hover:text-foreground transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          style={{ transformOrigin: 'center' }}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-foreground/10 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold">Justin Chen</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-foreground/70 transition-colors">About</a>
              <a href="#projects" className="hover:text-foreground/70 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-foreground/70 transition-colors">Skills</a>
              <button 
                onClick={() => {
                  const emailIcon = document.getElementById('email-icon');
                  const linkedinIcon = document.getElementById('linkedin-icon');
                  const githubIcon = document.getElementById('github-icon');

                  // Remove and re-add classes to restart animations
                  emailIcon?.classList.remove('highlight-email');
                  linkedinIcon?.classList.remove('highlight-linkedin');
                  githubIcon?.classList.remove('highlight-github');

                  // Trigger reflow
                  void emailIcon?.offsetWidth;
                  void linkedinIcon?.offsetWidth;
                  void githubIcon?.offsetWidth;

                  // Add animation classes
                  emailIcon?.classList.add('highlight-email');
                  linkedinIcon?.classList.add('highlight-linkedin');
                  githubIcon?.classList.add('highlight-github');
                }}
                className="hover:text-foreground/70 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content Wrapper */}
      <div className="content-wrapper">
        {/* Hero Section */}
        <section className="min-h-[100vh] flex items-center justify-center pt-32 pb-32 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl sm:text-7xl font-bold mb-8">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Justin Chen</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-12 text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              A very creative and goal-oriented software engineer with strong ownership mindset and product intuition.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="#projects" 
                className="bg-foreground text-background px-10 py-4 rounded-lg hover:bg-foreground/90 transition-colors text-lg"
              >
                View My Work
              </a>
              <a 
                href="#about" 
                className="border border-foreground px-10 py-4 rounded-lg hover:bg-foreground hover:text-background transition-colors text-lg"
              >
                About Me
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
                  I'm a computer engineering graduate from the <a href="https://www.engineering.utoronto.ca/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">University of Toronto</a> with expertise in full-stack development and integrating Large Language Models. 
                  I bring stimulating energy and contagious creative problem solving to the people I work with; empowering others, and creating an environment that is both high-performing and fun. 
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

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-foreground/10">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-foreground/60">© 2025 Justin Chen. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
