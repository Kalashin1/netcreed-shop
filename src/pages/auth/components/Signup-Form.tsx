import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../actions';

const SignupForm = () => {

  const goto = useNavigate();

  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);
  const [name, setName] = React.useState('');
  const [showPassword, toggleShowPassword] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [passwordError, updatePasswordError] = React.useState(false);

  const createAccount = async (e: React.FormEvent, name: string, email: string, password: string) => {
    e.preventDefault();
    setEmailError(false);
    updatePasswordError(false);
    const [user, error] = await signup({
      email,
      fullName: name,
      password
    });

    if (error) {
      if (error.includes('email-already-in-use')) setEmailError(true);
      if (error.includes('weak-password')) updatePasswordError(true);
    }

    if (user) {
      console.log(user);
      localStorage.setItem('userId', user.uid);
      goto('/dashboard');
    }
  };

  return (
    <div
      className="tab-pane fade show active"
      id="register-2"
      role="tabpanel"
      aria-labelledby="register-tab-2"
    >
      <form onSubmit={e => createAccount(e, name, email, password)}>
        <div className="form-group">
          <label htmlFor="register-email-2">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={v => setName(v.target.value)}
            id="register-email-2"
            name="register-email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="register-email-2">
            Your email address *
          </label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={v => setEmail(v.target.value)}
            id="register-email-2"
            name="register-email"
            required
          />
          {(emailError ? (<small className='text-danger'>Email is taken</small>): (<></>))}
        </div>
        {/* <!-- End .form-group --> */}

        <div className="form-group">
          <label htmlFor="register-password-2">Password *</label>
          {showPassword ? (
            <input
              type="text"
              className="form-control"
              id="register-password-2"
              value={password}
              onChange={v => setPassword(v.target.value)}
              name="register-password"
              required
            />
          ) : (
            <input
              type="password"
              className="form-control"
              id="register-password-2"
              value={password}
              onChange={v => setPassword(v.target.value)}
              name="register-password"
              required
            />
          )}
          {( passwordError ? (<small className='text-danger'>weak password, less than 8 characters</small>): (<></>))}
          <small>{showPassword ? (
            <div style={{ cursor: 'pointer'}} onClick={() => toggleShowPassword(false)}>Hide Password</div>) :
            (<div style={{ cursor: 'pointer'}} onClick={() => toggleShowPassword(true)}>Show Password</div>)}</small>
        </div>
        {/* <!-- End .form-group --> */}

        <div className="form-footer">
          <button type="submit" className="btn btn-outline-primary-2">
            <span>SIGN UP</span>
            <i className="icon-long-arrow-right"></i>
          </button>

          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              checked
              className="custom-control-input"
              id="register-policy-2"
              required
            />
            <label
              className="custom-control-label"
              htmlFor="register-policy-2"
            >
              I agree to the <a href="#">privacy policy</a> *
            </label>
          </div>
          {/* <!-- End .custom-checkbox --> */}
        </div>
        {/* <!-- End .form-footer --> */}
      </form>
      <div className="form-choice">
        <p className="text-center">or sign in with</p>
        <div className="row">
          <div className="col-sm-6">
            <a href="#" className="btn btn-login btn-g">
              <i className="icon-google"></i>
              Login With Google
            </a>
          </div>
          {/* <!-- End .col-6 --> */}
          <div className="col-sm-6">
            <a href="#" className="btn btn-login  btn-f">
              <i className="icon-facebook-f"></i>
              Login With Facebook
            </a>
          </div>
          {/* <!-- End .col-6 --> */}
        </div>
        {/* <!-- End .row --> */}
      </div>
      {/* <!-- End .form-choice --> */}
    </div>
  );
};

export default SignupForm;