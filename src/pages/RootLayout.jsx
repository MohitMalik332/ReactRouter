import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';



const RootLayout = () => {


//Outlet is like a marker, it marks where the Child Routes should be rendered to.
    
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>

        </>
    )
}

export default RootLayout;