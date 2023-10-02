import React from 'react';
import Project from './Project';

const Projects = ({ projects }) => {
    return (
        <div className="projects">
            {projects.map((project, index) => (
                <Project key={index} project={project} />
            ))}
        </div>
    );
};

export default Projects;

