// frontend/src/components/UserComponent.js
import React from 'react';
import { useDispatch } from 'react-redux';

const UserComponent = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Dispatch login action
    dispatch({ type: 'LOGIN', payload: userData });
  };

  const handleLogout = () => {
    // Dispatch logout action
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div>
      {/* Component JSX */}
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserComponent;
