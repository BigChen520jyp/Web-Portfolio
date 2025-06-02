import Image from "next/image";

export default function Home() {
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
            A very creative and goal-oriented software developer with strong ownership mindset and product intuition.
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
                I'm a passionate developer with expertise in modern web technologies. 
                I love creating solutions that are both technically sound and user-friendly.
              </p>
              <p className="text-lg text-foreground/80">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            <div className="bg-foreground/10 rounded-lg p-8 text-center">
              <div className="w-32 h-32 bg-foreground/20 rounded-full mx-auto mb-4"></div>
              <p className="text-sm text-foreground/60">Profile photo placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-foreground/5 rounded-lg p-6 hover:bg-foreground/10 transition-colors">
              <div className="h-48 bg-foreground/20 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Project Name</h3>
              <p className="text-foreground/70 mb-4">
                Brief description of your project and the technologies used.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded">React</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded">Node.js</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Demo</a>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Code</a>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-foreground/5 rounded-lg p-6 hover:bg-foreground/10 transition-colors">
              <div className="h-48 bg-foreground/20 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Another Project</h3>
              <p className="text-foreground/70 mb-4">
                Description of another project showcasing different skills.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded">Next.js</span>
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm rounded">TypeScript</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Demo</a>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Code</a>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-foreground/5 rounded-lg p-6 hover:bg-foreground/10 transition-colors">
              <div className="h-48 bg-foreground/20 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Third Project</h3>
              <p className="text-foreground/70 mb-4">
                Yet another project demonstrating your range of abilities.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-sm rounded">Python</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded">API</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Demo</a>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Code</a>
              </div>
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
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded">React</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded">Next.js</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded">TypeScript</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded">Tailwind CSS</span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded">Node.js</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded">Python</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded">PostgreSQL</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded">MongoDB</span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded">Git</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded">Docker</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded">AWS</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded">Vercel</span>
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
              href="mailto:your.email@example.com" 
              className="bg-foreground text-background px-8 py-3 rounded-lg hover:bg-foreground/90 transition-colors"
            >
              Email Me
            </a>
            <a 
              href="https://linkedin.com/in/yourprofile" 
              className="border border-foreground px-8 py-3 rounded-lg hover:bg-foreground hover:text-background transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/yourusername" 
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
          <p className="text-foreground/60">© 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
