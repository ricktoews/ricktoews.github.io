import React from 'react';

const Project = ({ project }) => {
    return (
        <div className="project">
            <h3>{project.title}</h3>
            <p className="description">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
};

export default Project;

