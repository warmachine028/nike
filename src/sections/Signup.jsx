/** @format */
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
import './Signup.scss';
const Signup = () => {
  return (
    <div id="🔥Signup">
      <Menu />
      <section id="🔥Signup__X">
        <div id="🔥Signup__X__X">
          <div id="🔥Signup__X__X__X">
            <div id="🔥Signup__X__X__X__X">
              <h1 id="🔥Signup__X__X__X__X__H1">Create an account</h1>
              <form id="🔥Signup__X__X__X__X__Form" action="#">
                <div id="🔥Signup__X__X__X__X__Form__X">
                  <label id="🔥Signup__X__X__X__X__Form__X__Label" htmlFor="email">
                    Your email
                  </label>
                  <input
                    id="🔥Signup__X__X__X__X__Form__X__Input"
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div id="🔥Signup__X__X__X__X__Form__X">
                  <label id="🔥Signup__X__X__X__X__Form__X__Label" htmlFor="password">
                    Password
                  </label>
                  <input
                    id="🔥Signup__X__X__X__X__Form__X__Input"
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    required=""
                  />
                </div>
                <div id="🔥Signup__X__X__X__X__Form__X">
                  <label id="🔥Signup__X__X__X__X__Form__X__Label" htmlFor="confirm-password">
                    Confirm password
                  </label>
                  <input
                    id="🔥Signup__X__X__X__X__Form__X__Input"
                    type="confirm-password"
                    name="confirm-password"
                    placeholder="••••••••"
                    required=""
                  />
                </div>
                <div id="🔥Signup__X__X__X__X__Form__X2">
                  <div id="🔥Signup__X__X__X__X__Form__X2__X">
                    <input
                      id="🔥Signup__X__X__X__X__Form__X2__Terms"
                      aria-describedby="terms"
                      type="checkbox"
                      required=""
                    />
                  </div>
                  <div id="🔥Signup__X__X__X__X__Form__X2__X2">
                    <label id="🔥Signup__X__X__X__X__Form__X2__X2__Label" htmlFor="terms">
                      I accept the
                      <a id="🔥Signup__X__X__X__X__Form__X2__X2__Label__A" href="#">
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <Button fullWidth={true}>Create an account</Button>
                <p id="🔥Signup__X__X__X__X__Form__P">
                  Already have an account?
                  <Link to="/login">&nbsp;Login here</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
