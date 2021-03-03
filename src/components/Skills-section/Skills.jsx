import React from 'react';
import react from '../../images/react.png';
import express from '../../images/express.png';
import cplus from '../../images/c++.png';
import git from '../../images/git.png';
import css from '../../images/css.png';
import html from '../../images/html.png';
import node from '../../images/node.png';
import npm from '../../images/npm.png';
import js from '../../images/js.png';
import mongo from '../../images/mongo.png';
import './Skills.css'

const Skills = () => {
    return (
        <div id="skills-section">
            <h1>
                Skills
            </h1>
            <div id="skills">
                <div className="icon-card">
                    <img src={cplus} alt="cplusplus logo" />
                </div>
                <div className="icon-card">
                    <img src={js} alt="js logo" />
                </div>
                <div className="icon-card">
                    <img src={html} alt="html logo" />
                </div>
                <div className="icon-card">
                    <img src={css} alt="css logo" />
                </div>
                <div className="icon-card">
                    <img src={git} alt="git logo" />
                </div>
                <div className="icon-card">
                    <img src={react} alt="react logo" />
                </div>
                <div className="icon-card" style={{ paddingTop: "1.25rem" }}>
                    <img src={express} alt="express logo" />
                </div>
                <div className="icon-card">
                    <img src={node} alt="node logo" />
                </div>
                <div className="icon-card">
                    <img src={npm} alt="npm logo" />
                </div>
                <div className="icon-card">
                    <img src={mongo} alt="mongo logo" />
                </div>
            </div>
        </div>
    )
}

export default Skills;
