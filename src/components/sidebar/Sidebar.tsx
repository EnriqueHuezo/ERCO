import './sidebar.css';
import close from '../../assets/img/xmark-solid.svg';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface SidebarProps {
    status: boolean;
    callBackStatus: () => void;
}

type Props = {
    props: SidebarProps;

}

export const Sidebar: React.FC<Props> = ({ props }) => {
    const [open, setOpen] = useState(props.status);
    
    useEffect(() => {
        setOpen(props.status);
    }, [props.status]);

    const closeSidebar = () => {
        setOpen(!open);
        props.callBackStatus();
    }

    const openSidebar = open ? "open" : "";

    return (
        <div className={`sidebar-container ${openSidebar}`}>
            <div className="sidebar-logo" onClick={closeSidebar}>
                <img src={close} alt="close" />
            </div>

            <nav className="sidebar-items">
                <ul>
                    <Link to="/"><li onClick={closeSidebar}>INICIO</li></Link>
                    <Link to="/PMV" onClick={closeSidebar}><li>PMV</li></Link>
                    <Link to="/Plantillas" onClick={closeSidebar}><li>PLANTILLAS</li></Link>
                </ul>
            </nav>
        </div>
    )
}