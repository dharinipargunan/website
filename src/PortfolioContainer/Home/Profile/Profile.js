import React from 'react';
import Typical from 'react-typical';
import './Profile.css';
export default function Profile() {
    return (
        <div className ='profile-container'>
            <div className ='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                        <a href="https://www.facebook.com/dharini.dharini.393">
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href="#">
                            <i className='fa fa-google-plus-square'></i>
                        </a>
                        <a href="https://www.instagram.com/dharinipargunan/">
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href="https://www.linkedin.com/in/dharini-pargunan/">
                            <i className='fa fa-Linkedin'></i>
                        </a>
                        <a href="https://twitter.com/PargunanDharini">
                            <i className='fa fa-twitter'></i>
                        </a>
                        <a href="https://github.com/dharinipargunan">
                            <i className='fa fa-github'></i>
                        </a>
                        </div>
                    </div>
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello, I'M <span className='highlighted-text'>Dharini Pargunan</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            {" "}
                            <Typical
                            loop={Infinity}
                            steps = {[
                                "Machine Learning Engineer",
                                1000,
                                "Data Scientist",
                                1000,
                                "Data Analyst | Data Engineer",
                                1000,
                            ]}
                            />
                        </h1>
                        <span className='profile-role-tagline'>
                        Knack in getting insights out of Data and building Machine Learning Models 
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {""}
                            Hire me {" "}
                        </button>
                        <a href = "dharinip.pdf" download='Dharini Pargunan.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
            </div>
        </div>
    );
}