/** @format */
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
import './Signin.scss';
const Signin = () => {
  return (
    <div id="🔥Signin">
      <Menu />
      <section id="🔥Signin__X">
        <div id="🔥Signin__X__X">
          <div id="🔥Signin__X__X__X">
            <div id="🔥Signin__X__X__X__X">
              <h1 id="🔥Signin__X__X__X__X__H1">Sign in to your account</h1>
              <form id="🔥Signin__X__X__X__X__Form" action="#">
                <div id="🔥Signin__X__X__X__X__Form__X">
                  <label id="🔥Signin__X__X__X__X__Form__X__Label" htmlFor="email">
                    Your email
                  </label>
                  <input
                    id="🔥Signin__X__X__X__X__Form__X__Input"
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div id="🔥Signin__X__X__X__X__Form__X">
                  <label id="🔥Signin__X__X__X__X__Form__X__Label" htmlFor="password">
                    Password
                  </label>
                  <input
                    id="🔥Signin__X__X__X__X__Form__X2__Input"
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    required=""
                  />
                </div>
                <div id="🔥Signin__X__X__X__X__Form__X2">
                  <div id="🔥Signin__X__X__X__X__Form__X2__X">
                    <div id="🔥Signin__X__X__X__X__Form__X2__X__X">
                      <input
                        id="🔥Signin__X__X__X__X__Form__X2__X__X__Remember"
                        aria-describedby="remember"
                        type="checkbox"
                        required=""
                      />
                    </div>
                    <div id="🔥Signin__X__X__X__X__Form__X2__X__X2">
                      <label id="🔥Signin__X__X__X__X__Form__X2__X__X2__Label" htmlFor="remember">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a id="🔥Signin__X__X__X__X__Form__X2__A" href="#">
                    Forgot password?
                  </a>
                </div>
                <Button fullWidth={true}>Sign in</Button>
                <p id="🔥Signin__X__X__X__X__Form__P">
                  Don&apos;t have an account?
                  <Link to="/register">&nbsp;Create now</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signin;
