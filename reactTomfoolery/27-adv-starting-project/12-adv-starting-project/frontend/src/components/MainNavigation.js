import classes from './MainNavigation.module.css';
import { Outlet, NavLink, } from 'react-router-dom';

function MainNavigation() {
  // const navigation = useNavigation();

  return (<>
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={(props) => props.isActive ? classes.active : null}>Home</NavLink>
          </li>
          <li>
            <NavLink to="events" className={(props) => props.isActive ? classes.active : null}>Events</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      {/* {navigation.state === "loading" && <p>Loading...</p>} */}
      <Outlet />
    </main>
    </>
  );
}

export default MainNavigation;
