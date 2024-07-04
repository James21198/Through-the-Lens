import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

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
  height : '100px',
};
const linkStyle = {
  color: '#fff',
  textDecoration : 'none',
};

const linkStyle2 = {
  color: '#000',
  backgroundColor: '#fff',
};

const primaryBtn = {
  backgroundColor: '#fff',
  color: '#000',
};

const secondaryBtn = {
  backgroundColor: '#000',
  color: '#fff',
  border: '1px solid #fff',
  
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
