import { Link } from "react-router-dom";
import { useState } from 'react';
import logo from '../../assets/img/logo.png';
import menu from '../../assets/img/bars-solid.svg';
import './topbar.css';
import { Sidebar } from "../sidebar/Sidebar";

export const TopBar = () => {
    const [scroll, setScroll] = useState(0)
    const [open, setOpen] = useState(false);

    const onHandleClick = () => {
        setOpen(!open);
    }

    window.addEventListener('scroll', () => {
        setScroll(window.scrollY)
    })

    const opacity = scroll > 1 ? "opacity" : "";

    return (
        <>
            <Sidebar props={{status: open, callBackStatus: onHandleClick}}/>
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

                    <div className="menu-hamburguesa" onClick={onHandleClick}>
                        <img src={menu} alt="menu-hamburguer" />
                    </div>
                </nav>
            </div>
        </div>
        </>
    )
}