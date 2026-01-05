// Prosjekter
const projects = [
    {
        title: 'Study Buddy App',
        description: 'Mobilapp i React Native og Firebase for studenter.',
        tools: 'React,  JavaScript, Figma'
    },
    {
        title: 'IoT Weather Station',
        description: 'Værstasjon med Raspberry Pi og Arduino.',
        tools: 'Raspberry Pi, Arduino, HTML/CSS/JS'
    },
    {
        title: 'Weather App',
        description: 'Webapp som viser værdata med Spring Boot og JavaScript.',
        tools: 'Java, Spring Boot, HTML/CSS/JS'
    }
];

const projectsContainer = document.getElementById('projects-container');

projects.forEach(project => {
    const div = document.createElement('div');
    div.className = 'project-card';
    div.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <p><strong>Verktøy:</strong> ${project.tools}</p>
  `;
    projectsContainer.appendChild(div);
});

// Kompetanse
const skills = ['Java', 'Kotlin', 'Python', 'C#', 'Spring Boot', 'Flask', 'React', 'React Native', 'HTML', 'CSS', 'JavaScript', 'SQL', 
                'UI/UX Design', 'Agile/Scrum', 'Testing'];

const skillsList = document.getElementById('skills-list');
skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
});
