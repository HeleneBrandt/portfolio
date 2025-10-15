import React from 'react';

function Projects() {
    const projects = [
        {
            title: 'Study Buddy App',
            description: 'Mobilapp i React Native og Firebase for studenter som organiserer studier og samarbeid.',
            tools: 'React Native, Firebase, JavaScript, Figma',
        },
        {
            title: 'IoT Weather Station',
            description: 'Værstasjon med Raspberry Pi og Arduino, visualisert via lokal webserver.',
            tools: 'Raspberry Pi, Arduino, HTML/CSS/JS',
        },
        {
            title: 'Weather App',
            description: 'Webapp som henter og viser værdata med Spring Boot og JavaScript.',
            tools: 'Java, Spring Boot, REST API, HTML, CSS, JavaScript',
        },
    ];

    return (
        <section id="projects">
            <h2>Prosjekter</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p><strong>Verktøy:</strong> {project.tools}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
