import { NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css'


const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li> 
                        <NavLink 
                            to='/'
                            className={({ isActive }) => (isActive ? classes.active : undefined)}
                            end //we can also set it to true or false, OR can write just end.
//if we use end then it will set the classname to be active only if the route address exactely meet 
//the route inside ' to '.
                        >
                            Home
                        </NavLink>
                    </li> 
                    <li> 
                        <NavLink 
                            to='/products'
                            className={({ isActive }) => (isActive ? classes.active : undefined)}
                        >
                            Products
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;

//Note : the Link component, provided by react-router-dom does render a regular anchor element.

//Note : Link & NavLink two components provided by React router dom, both are slightly different.
// in Link there is no Built-in Styling or State Management, whereas
// in NavLink adds special classes or styling to a route which is currently being visited.

// Navlink fn autometically receives an object, from which we can destructure the isActive property.

// Current URL: /
// Link is active ✅
// Current URL: /about
// Link is not active ❌ (because /about does not exactly match /)