import classes from './Auth.module.css';
import { authActions } from '../store/auth';
import { useDispatch, useSelector} from 'react-redux';

const Auth = () => {
  const dispatch = useDispatch();
  const longinHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={(e) =>longinHandler(e)}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
