import { Outlet, Link } from "react-router-dom";
import styles from '../styles/layout.module.css';

const Layout = () => {
    
  return (
    <>
      <nav className={styles.topnavbar}>
        <ul className={styles.topnav}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/myform">My Form</Link>
          </li>
          <li>
            <Link to="/favoritecolor">Favorite Color</Link>
          </li>
          <li>
            <Link to="/car">Car</Link>
          </li>
          <li>
            <Link to="/timer">Timer</Link>
          </li>
          <li>
            <Link to="/timerrunonce">Timer Run Once</Link>
          </li>
          <li>
            <Link to="/timerrunonvariablechange">Timer Run on Variable Change</Link>
          </li>
          <li>
            <Link to="/timercleartimeout">Timer Clear timeout</Link>
          </li>
          <li>
            <Link to="/propdrillingcomponent">Prop Drilling Component</Link>
          </li>
        </ul>
      </nav>
      
      <div>
        <Outlet />
      </div>
    </>
  )
};

export default Layout;