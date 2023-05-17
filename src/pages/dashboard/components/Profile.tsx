/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from 'react';
import './profile.css';
import { AuthContext } from '../../../App';
import { getUserProfile, updateUserProfile } from '../actions';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

  const goto = useNavigate();

  const { user, getLoggedInUser } = React.useContext(AuthContext);

  const [fullName, setFullName] = useState(user?.displayName ?? '');
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber ?? '');
  const [email, setEmail] = React.useState(user?.email ?? '');

  const formRef = React.useRef<HTMLFormElement | null>(null);

  React.useEffect(() => {
    const setup = async () => {
      if (!user && getLoggedInUser) {
        const currentUser = await getLoggedInUser();
        setEmail(currentUser?.email ?? '');
        if (currentUser) {
          const [userProfile, err] = await getUserProfile(currentUser.uid);
          if (err) goto('/auth');
          if (userProfile) {
            console.log('userProfile', userProfile);
            setFullName(userProfile.fullName);
            setPhoneNumber(userProfile?.phoneNumber);
          }
        } else {
          goto('/auth');
        }
      }
    };

    setup();
  }, []);

  const updateProfile = async (e: React.FormEvent, fullName: string, phoneNumber: string) => {
    e.preventDefault();
    const [result, error] = await updateUserProfile(fullName, phoneNumber);
    if (error) {
      alert('oops, something happened');
      console.log(error);
      return;
    }
    if (result) {
      setFullName(fullName);
      setPhoneNumber(phoneNumber);
      alert('profile updated successfully!');
    }

  };

  return (
    <div className="container light-style flex-grow-1">
      <div className="card overflow-hidden">
        <div className="row no-gutters row-bordered row-border-light">

          <div className="col-md-9">
            <form ref={formRef} className="tab-pane fade active show" id="account-general" onSubmit={e => updateProfile(e, fullName, phoneNumber)}>

              <div className="card-body">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control mb-1" value={fullName} onChange={e => setFullName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input type="text" className="form-control" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">E-mail</label>
                  <input type="text" value={email} disabled className="form-control mb-1" />
                  <div className="alert alert-warning mt-3">
                    Your email is not confirmed. Please check your inbox.<br />
                    <a href="javascript:void(0)">Resend confirmation</a>
                  </div>
                </div>

              </div>

            </form>
          </div>
        </div>
      </div>

      <div className="text-right mt-3">
        <button type="button" onClick={(e) => {
          e.preventDefault();
          updateProfile(e, fullName, phoneNumber);
        }} className="btn btn-primary">Save changes</button>&nbsp;
        <button type="button" className="btn btn-default">Cancel</button>
      </div>
    </div>
  );
};

export default Profile;