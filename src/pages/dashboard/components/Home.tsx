import React from 'react';
import { AuthContext } from '../../../App';
import Profile from './Profile';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase-settings';


const Home: React.FC = () => {
  const { user, getLoggedInUser } = React.useContext(AuthContext);
  const goto = useNavigate();

  React.useEffect(() => {
    if (!user && getLoggedInUser) {
      getLoggedInUser();
    }
  }, []);

  const logout = () => {
    signOut(auth).then(() => {
      goto('/auth');
    });
  };


  const auth = getAuth();

  return (
    <div
      className="tab-pane fade show active"
      id="tab-dashboard"
      role="tabpanel"
      aria-labelledby="tab-dashboard-link"
    >
      <p>
        Hello{' '}
        <span className="font-weight-normal text-dark">{user ? user?.displayName?.slice(0, user.displayName?.indexOf(' ')) : ''}</span>{' '}
        (not{' '}
        <span className="font-weight-normal text-dark">{user ? user?.displayName?.slice(0, user.displayName?.indexOf(' ')) : ''}</span>?{' '}
        <span onClick={logout} style={{ cursor: 'pointer', color: 'lightblue'}}>Log out</span>)
        <br />
        From your account dashboard you can view your{' '}
      </p>
      <Profile />
    </div>
  );
};

export default Home;