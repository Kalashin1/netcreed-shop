import React from 'react';
import { signIn } from '../actions';
import { useNavigate } from 'react-router-dom';

const SigninForm = () => {

  const navigate = useNavigate();

  const [email, setEmail] = React.useState('');
  const [emailError, updateEmailError] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [passwordError, updatePasswordError] = React.useState(false);
  const [showPassword, toggleShowPassword] = React.useState(false);


  const login = async (e: React.FormEvent, email: string, password: string) => {
    e.preventDefault();
    updateEmailError(false);
    updatePasswordError(false);
    const [user, error] = await signIn({ email, password });
    if (error) {
      if (error.includes('user-not-found')) updateEmailError(true);
      if (error.includes('auth/wrong-password')) updatePasswordError(true);
      console.log(error);
    } else if (user) {
      localStorage.setItem('userId', user?.uid);
      alert('login successful!');
      navigate('/dashboard');
    }
  };


  return (
    <div
      className="tab-pane fade"
      id="signin-2"
      role="tabpanel"
      aria-labelledby="signin-tab-2"
    >
      <form action="#" onSubmit={e => login(e, email, password)}>
        <div className="form-group">
          <label htmlFor="singin-email-2">
            Email address
          </label>
          <input
            type="text"
            value={email}
            onChange={v => setEmail(v.target.value)}
            className="form-control"
            id="singin-email-2"
            name="singin-email"
            required
          />
          {emailError ? (<small className='text-danger'>Incorrect Email</small>) : (<></>)}
        </div>
        {/* <!-- End .form-group --> */}

        <div className="form-group">
          <label htmlFor="singin-password-2">Password *</label>
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
          {(passwordError ? (<small className='text-danger'>Incorrect password</small>) : (<></>))}
          <small>{showPassword ? (
            <div style={{ cursor: 'pointer' }} onClick={() => toggleShowPassword(false)}>Hide Password</div>) :
            (<div style={{ cursor: 'pointer' }} onClick={() => toggleShowPassword(true)}>Show Password</div>)}</small>
        </div>
        {/* <!-- End .form-group --> */}

        <div className="form-footer">
          <button type="submit" className="btn btn-outline-primary-2">
            <span>LOG IN</span>
            <i className="icon-long-arrow-right"></i>
          </button>

          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="signin-remember-2"
            />
            <label
              className="custom-control-label"
              htmlFor="signin-remember-2"
            >
              Remember Me
            </label>
          </div>
          {/* <!-- End .custom-checkbox --> */}

          <a href="#" className="forgot-link">
            Forgot Your Password?
          </a>
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
            <a href="#" className="btn btn-login btn-f">
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

export default SigninForm;