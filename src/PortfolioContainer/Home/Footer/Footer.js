
import logo from '../../../Assets/Home/shape-bg.png';
import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-parent'>
                <img 
                    src={logo} 
                    alt="no internet connection"
                />
            </div>
        </div>
    );
}