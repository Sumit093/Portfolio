import { Code2, Server, Wrench, BookOpen } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: Code2,
      skills: [
        { name: 'HTML', proficiency: 'Intermediate' },
        { name: 'CSS', proficiency: 'Intermediate' },
        { name: 'JavaScript', proficiency: 'Intermediate' },
        { name: 'React', proficiency: 'Intermediate' },
        { name: 'Tailwind CSS', proficiency: 'Intermediate' },
      ],
    },
    {
      category: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Java', proficiency: 'Intermediate' },
        { name: 'Spring Boot', proficiency: 'Intermediate' },
        { name: 'REST APIs', proficiency: 'Intermediate' },
        { name: 'MySQL', proficiency: 'Intermediate' },
      ],
    },
    {
      category: 'Tools & Technologies',
      icon: Wrench,
      skills: [
        { name: 'Git', proficiency: 'Intermediate' },
        { name: 'Postman', proficiency: 'Intermediate' },
        { name: 'Docker', proficiency: 'Intermediate' },
        { name: 'Maven', proficiency: 'Intermediate' },
        { name: 'VS Code', proficiency: 'Intermediate' },
        { name: 'IntelliJ IDEA', proficiency: 'Intermediate' },
      ],
    },
    {
      category: 'Core Concepts',
      icon: BookOpen,
      skills: [
        { name: 'Data Structures and Algorithms', proficiency: 'Intermediate' },
        { name: 'OOP', proficiency: 'Intermediate' },
        { name: 'Problem Solving', proficiency: 'Intermediate' },
      ],
    },
  ];

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'Well-versed':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'Hands-on':
        return 'bg-orange-100 text-orange-700 border-orange-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center justify-center mb-6">
                <category.icon className="w-6 h-6 text-blue-500 mr-2" />
                <h3 className="text-2xl font-bold text-gray-900 text-center">
                  {category.category}
                </h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg hover:from-blue-50 hover:to-cyan-50 transition-all duration-300"
                  >
                    <span className="text-gray-800 font-medium">
                      {skill.name}
                    </span>
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full border ${getProficiencyColor(
                        skill.proficiency
                      )}`}
                    >
                      {skill.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
