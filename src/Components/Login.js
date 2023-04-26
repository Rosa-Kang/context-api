import React, { useContext } from 'react';
import { LoginContext } from '../Contexts/LoginContext';

function Login() {
  const { setUsername, setShowProfile } = useContext(LoginContext);

  return (
    <>
      <div class='inside-flex'>
        <input
          type='text'
          placeholder='Username'
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input type='text' placeholder='Password' />
      </div>
      <button
        onClick={() => {
          setShowProfile(true);
        }}
      >
        LOGIN
      </button>
    </>
  );
}
export default Login;
