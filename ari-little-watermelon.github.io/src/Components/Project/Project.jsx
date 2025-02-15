import React from "react";
import GitHub from '../../assets/github-icon.png';
import './Project.css';

const Project = ({data}) => {
    return (
        <div className="project-container">
            <div className="project-image">
                <img src={data.image} alt={data.title}/>
            </div>
            <div className="title-container">
                <div className="name-github">
                    <a href={data.github} target="_blank"><div className="github-icon-container"><img src={GitHub} alt="GitHub" className="github-icon" /></div></a>
                    <a href={data.github} target="_blank" className="title-link"><h2 className="project-title">{data.title}</h2></a>
                </div>
                <div className="summary-container">
                    <h2 className="project-summary">{data.summary}</h2>
                </div>
            </div>
            <div className="description-skills">
                <div className="project-description"><p>{data.description}</p></div>
                <div className="skills-wrapper">
                    {
                        data.skills.map(skill => (
                            <div className="skill-container">
                                <button className="skill-item">{skill}</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Project;