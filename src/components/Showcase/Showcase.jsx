import React from 'react';
import Typical from 'react-typical';
import './Showcase.css';
import Imgpath from '../../images/profile.jpg';

const Showcase = () => {
    return (
        <div className="showcase">
            <div className="showcase-img">
                <img src={Imgpath} alt=""/>
            </div>
            <div className="showcase-text">
                <h1>Hi, I am Chetas Sharma</h1>
                <h2>
                    I{' '}
                    <Typical
                        loop={Infinity}
                        wrapper='b'
                        steps={
                            [
                                'am a Computer Science Enthusiast 👦🏼 .',
                                1000,
                                'am an open source contributor 😊.',
                                1000,
                                'build things for the web 💻.',
                                1000,
                                'play guitar too 🎸.',
                                1000

                            ]
                        }
                    />
                </h2>
            </div>
        </div>
    )
}

export default Showcase;
