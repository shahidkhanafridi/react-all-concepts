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
        </ul>
      </nav>
      
      <Outlet />
    </>
  )
};

export default Layout;