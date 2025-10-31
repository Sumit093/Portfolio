import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'GreenRoots',
      description:
        'GreenRoots is an eco-awareness web platform that allows schools and students to digitally track the growth of plants. It promotes sustainability, accountability, and environmental learning through yearly progress tracking, gamification, and analytics.',
      technologies: [ 'Java', 'Spring Boot','React', 'SQL'],
      image: 'https://blog.bentley.com/wp-content/uploads/turning-new-leaf-climate-change-adobestock_174181177.jpg',
      github: 'https://github.com/Sumit093/GreenRoots',
      demo: '#',
      
    },
    {
      title: 'PayBank',
      description:
        'PayBank is a full-stack Digital Banking Platform built with Spring Boot and React (Vite).It provides secure authentication, account management, transaction tracking, and a modern responsive UI — delivering a smooth banking experience.',
      technologies: [ 'Spring Boot', 'React', 'JWT', 'SQL'],
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Sumit093/PayBank',
      demo: '#',
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and passion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 space-x-4">
                  <a
                    href={project.github}
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="View GitHub"
                  >
                    <Github className="w-5 h-5 text-gray-900" />
                  </a>
                  <a
                    href={project.demo}
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="View Demo"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-900" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
