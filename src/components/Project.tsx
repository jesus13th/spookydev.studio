import React from 'react';
import './css/project.css';

interface IProject {
    title:string;
    url:string;
    description:string;
    images:string[];
}

const Project: React.FC<IProject> = ({title, url, description, images}) => {
    return (
        <div className="project">
            <a href={url}>
                <div className="project-content">
                    <h2>{title}</h2>
                    <img src={process.env.PUBLIC_URL + images[0]} alt="" />
                    <p>{description}</p>
                    <button>Leer mas...</button>
                </div>
            </a>
        </div>
    )
}
export default Project;