import React from 'react';

function Skills() {
    const skills = [
        'Java', 'Kotlin', 'Python', 'C#', 'Spring Boot', 'Flask', 'React', 'React Native',
        'HTML/CSS', 'JavaScript', 'SQL', 'Firebase', 'UI/UX Design', 'Agile/Scrum', 'Testing'
    ];

    return (
        <section id="skills">
            <h2>Kompetanse</h2>
            <ul className="skills-list">
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    );
}

export default Skills;
