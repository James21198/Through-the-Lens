import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import { height, width } from '@fortawesome/free-brands-svg-icons/fa42Group';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

const headerStyle = {
  color: '#fff',
  backgroundColor: '#000',

};

const titleStyle = {
  color: '#fff',
};

const containerStyle = {
  height : 'auto',
  marginBottom: '0',
  '@media (min-width: 640px)': {
    height : '400px',
    marginBottom: '100rem',
  },
};
const linkStyle = {
  color: '#fff',
  textDecoration : 'none',
};

const linkStyle2 = {
  color: '#000',
  backgroundColor: '#fff',
  fontSize: '1rem', 
  padding: '0.5rem 1rem', 
  '@media (min-width: 640px)': {
    fontSize: '0.75rem',
    padding: '0.4rem 0.8rem',
  },
};

const primaryBtn = {
  backgroundColor: '#fff',
  color: '#000',
  fontSize: '1rem', 
  padding: '0.5rem 1rem',
  '@media (min-width: 640px)': {
    fontSize: '0.75rem',
    padding: '0.4rem 0.8rem',
  },
};

const secondaryBtn = {
  backgroundColor: '#000',
  color: '#fff',
  border: '1px solid #fff',
  fontSize: '1rem',
  padding: '0.5rem 1rem', 
  '@media (min-width: 640px)': {
    width: '10%',
  },
  
};


  return (

    <header style = {headerStyle} className="text-light py-3 flex-row align-center">
      <div style = {containerStyle} className="container flex-row justify-space-between-lg justify-center align-center">
        <div style = {titleStyle} >
          <Link style = {linkStyle} to="/">
            <h1 className="m-0">THROUGH THE LENS</h1>
          </Link>
          <p className="m-0">SEE THE WORLD THROUGH OUR LENS</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link style = {primaryBtn} className="btn btn-lg btn-info m-2" to="/imageEditor">
                Image Editor
              </Link>
              <Link style = {linkStyle2} className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button style = {secondaryBtn} className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link style = {primaryBtn} className="btn btn-lg btn-info m-2" to="/imageEditor">
                Image Editor
              </Link>
              <Link style = {primaryBtn} className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link style = {secondaryBtn} className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
