import { Outlet } from 'react-router-dom'
import { TopBar } from '../components/topbar/TopBar'

export const Layout = () => {
    return (
        <div>
            <TopBar />
            <Outlet />
        </div>
    )
}