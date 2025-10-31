export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate Java Full Stack Developer driven by curiosity and a desire to build meaningful digital solutions. As a fresher, I bring strong fundamentals in Java, Spring Boot, and modern web technologies like React and REST APIs, with a problem-solving mindset and eagerness to learn.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
             My journey into development began with a fascination for how technology shapes everyday life, and it has grown into a mission to create seamless, scalable, and user-friendly applications. I love exploring innovative tools, experimenting with new ideas, and continuously improving my craft.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, I enjoy brainstorming new project ideas, contributing to collaborative tech communities, and learning about the latest trends in software development.
            </p>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={'./src/assets/profile.jpeg'}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
