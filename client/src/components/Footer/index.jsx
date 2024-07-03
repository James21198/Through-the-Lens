import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const footerStyle = {
    backgroundColor: '#white',
    color: '#black',
    fontFamily: "'Roboto', sans-serif",
    paddingTop: '20px',
    paddingBottom: '10px',
    marginTop: 'auto',
    textAlign: 'left',
    paddingLeft: '20px',
    paddingRight: '20px',
    borderTop: '1px solid #000', 
    minHeight: '250px', 

  };
  const logoStyle = {
    width: '250px',
    height: 'auto',
    marginBottom: '15px',
  };
  const navItemStyle = {
    margin: '5px 0',
    color: '#black',
    textDecoration: 'none',
    display: 'block',
  };
  const goBackButton = (
    <div className="text-center mb-5">
      <button className="btn btn-dark mb-3" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
  const pages = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Subscribe', link: '/subscribe' },
  ];
  const insights = [
    { name: 'Spotlight' },
    { name: 'Galleries', link: '/galleries' },
    { name: 'Trends', link: '/trends' },
  ];
  const socialLinks = [
    { name: 'Twitter', link: 'https://twitter.com/example' },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/example' },
    { name: 'Email', link: 'mailto:info@example.com' },
  ];
  return (
    <footer style={footerStyle}>
      {location.pathname !== '/' && goBackButton}
      <div className="row justify-content-between align-items-start">
        <div className="col-md-3">
          <a href="/"><img src="/logo/Throughthelens.png" alt="Logo" style={logoStyle} /></a>
        </div>
        <div className="col-md-9 text-right">
          <div className="row">
            <div className="col-md-4">
              <h5 style={{ color: '#black' }}>Insights</h5>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {insights.map((insight, index) => (
                  <li key={index}>
                    <a href={insight.link} style={navItemStyle}>{insight.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-4">
              <h5 style={{ color: '#black' }}>Pages</h5>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {pages.map((page, index) => (
                  <li key={index}>
                    <a href={page.link} style={navItemStyle}>{page.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-4">
              <h5 style={{ color: '#black' }}>Contact</h5>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.link} style={navItemStyle}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;