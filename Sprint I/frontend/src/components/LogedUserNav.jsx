import React, { useContext } from 'react';
import OpenToggleContext from '../context/OpenToggleContext';
import '../styles/logedUserNav.css';
import '../styles/customProperties.css';

const LogedUserNav = ({ handleSessionClose }) => {
  const { openNav } = useContext(OpenToggleContext);
  const userLog = localStorage.getItem('usuario');
  
  let userLogAvatar;

  if (userLog !== null) {
    userLogAvatar = localStorage.getItem('usuario').split(' ');
  }
  
  return (
    <div className={openNav ? 'user menuItem' : 'userTablet close'}>
      { userLog &&
        <div className='userContainer'>
          <li className='avatar'>
            {userLogAvatar.map((item) => item.charAt(0))}
          </li>
          <div className='usernameComponent'>
            <p>Hola,</p>
            <p className='username'>{userLog}</p>
          </div>
        </div>
      }
      <p className={`logout ${openNav ? 'open' : 'close'}`}>
        ¿Deseas &nbsp;<li onClick={handleSessionClose}>cerrar sesión</li>?
      </p>
    </div>
  );
};

export default LogedUserNav;
