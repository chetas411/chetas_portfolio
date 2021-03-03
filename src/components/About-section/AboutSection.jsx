import React from 'react'
import './AboutSection.css'
const AboutSection = () => {
    return (
        <ul id="about">
            <li>
                <a href="redirect">
                    <h2># Academics</h2>
                    <p>Pursuing a 4 year B.Tech course in Electronics and Communications from <strong>Jamia Millia Islamia, New Delhi</strong>.</p>
                </a>
            </li>
            <li>
                <a href="redirect">
                    <h2># Interests</h2>
                    <ul id="card-list">
                        <li>Problem Solving</li>
                        <li>Competitive Programming</li>
                        <li>Software Develpoment</li>
                        <li>Open Source</li>
                        <li>Music</li>
                    </ul>
                </a>
            </li>
            <li>
                <a href="redirect">
                    <h2># Achievments</h2>
                    <ul id="card-list">
                        <li>Achieved a highest rating of <strong>4 star</strong> on <strong>Codechef</strong>. </li>
                        <li>Successfully completed <strong>hacktoberfest 2020 challenge</strong> , making 11 merged PR's</li>
                    </ul>
                </a>    
            </li>
        </ul>
    )
}

export default AboutSection
