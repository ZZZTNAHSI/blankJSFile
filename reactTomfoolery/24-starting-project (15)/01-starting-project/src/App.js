import Counter from './components/Counter';
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './store/auth';


function App() {
    const dispatch = useDispatch();
  
    function handleLogIn() {
      dispatch(authActions.login());
    }
    function handleLogOut() {
      dispatch(authActions.logout());
    }
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  
  return (
    <>
      <Header />
      {!isAuthenticated ? <Auth />: <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
