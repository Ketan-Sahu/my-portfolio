// import React from 'react';

export default function Skills() {
  const skills = {
    "Languages": ["Java", "JavaScript", "HTML5", "CSS3"],
    "Frameworks & Libraries": ["Spring Boot", "React.js", "Node.js"],
    "Databases": ["MySQL", "MongoDB"],
    "Tools & Platforms": ["Git", "GitHub", "VS Code", "Postman"],
  };

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Skills</h2>
      <div className="container mx-auto px-6">        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div 
              key={category} 
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-4">{category}</h3>
              <ul className="space-y-2">
                {items.map(skill => (
                  <li key={skill} className="text-gray-700 font-medium bg-gray-100 rounded-full py-2 px-4 inline-block">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



