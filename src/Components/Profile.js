import React, { useContext } from 'react';
import { LoginContext } from '../Contexts/LoginContext';

function Profile() {
  const { username, setShowProfile } = useContext(LoginContext);

  return (
    <>
      <h1>Profile</h1>

      {username ? (
        <h2>Username: {username} </h2>
      ) : (
        <h2>
          Sorry, no username was entered.<br></br> Try again please!
        </h2>
      )}

      <button onClick={() => setShowProfile(false)}>Go Home</button>
    </>
  );
}

export default Profile;
