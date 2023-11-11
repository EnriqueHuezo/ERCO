import { Link } from "react-router-dom";
import { useState } from 'react';
import logo from '../../assets/img/logo.png';
import './topbar.css';

export const TopBar = () => {
    const [scroll, setScroll] = useState(0)

    window.addEventListener('scroll', () => {
        setScroll(window.scrollY)
    })

    const opacity = scroll > 1 ? "opacity" : "";

    return (
        <div className={`topbar-container ${opacity}`}>
            <div className="topbar-content">
                <div className="topbar-logo">
                    <img src={logo} alt="topbar-logo"/>
                </div>

                <nav className="topbar-items">
                    <ul>
                        <li><Link to={'/'}>INICIO</Link></li>
                        <li><Link to={'/PMV'}>PMV</Link></li>
                        <li><Link to={'/Plantillas'}>PLANTILLAS</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}