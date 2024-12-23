import React from 'react';

// Data array Skills dengan persentase
const skills = [
    { name: "HTML", level: 80 },
    { name: "React", level: 75 },
    { name: "JavaScript", level: 65 },
    { name: "CSS", level: 70 },
    { name: "Node.js", level: 60 },
    { name: "TypeScript", level: 50 },
];

const Skills = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-pink-100">
            <section className="max-w-lg w-full p-6 bg-pink-200 rounded-lg shadow-lg border border-pink-700">
                <h2 className="text-3xl font-semibold text-center text-pink-700 mb-6">My Skills</h2>
                
                <ul className="space-y-4">
                    {skills.map((skill, index) => (
                        <li key={index} className="flex flex-col">
                            <div className="flex justify-between mb-2">
                                <span className="text-lg font-semibold text-pink-800">{skill.name}</span>
                                <span className="text-lg text-pink-800">{skill.level}%</span>
                            </div>
                            <div className="relative w-full h-4 bg-pink-300 rounded-full">
                                <div 
                                    className="absolute h-full bg-pink-700 rounded-full" 
                                    style={{ width: `${skill.level}%` }} 
                                ></div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Skills;
