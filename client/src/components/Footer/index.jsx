import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const footerStyle = {
    backgroundColor: '#fafafa',
    color: '#333',
    fontFamily: 'Roboto, sans-serif',
    padding: '50px',
    marginTop: '70px',
    textAlign: 'left',
    borderTop: '1px solid #eaeaea',
    boxShadow: '0 -1px 5px rgba(0,0,0,0.1)',
  };
  
  const logoStyle = {
    maxWidth: '180px',
    height: 'auto',
    marginBottom: '15px',
  };

  const navItemStyle = {
    margin: '5px 0',
    color: '#333',
    textDecoration: 'none',
    display: 'block',
    lineHeight: '2',
    transition: 'color 0.2s ease-in-out',
  };

  const goBackButton = (
    <div className="text-center mb-5">
      <button className="btn btn-dark mb-3" style={{ width: '200px', color: '#fff' }} onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );

  const pages = [
    { name: 'Home', link: '/' },
    { name: 'About' },
    { name: 'Subscribe' },
  ];

  const insights = [
    { name: 'Spotlight' },
    { name: 'Galleries', link: '/imageEditor' },
    { name: 'Trends' },
  ];

  const socialLinks = [
    { name: 'Twitter', link: 'https://twitter.com/example', icon: faTwitter },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/example', icon: faLinkedin },
    { name: 'Email', link: 'mailto:info@example.com', icon: faEnvelope },
  ];

  // Example recent posts
  const recentPosts = [
    { title: '10 Tips for Better Photography', link: '/tips' },
    { title: 'Behind the Scenes of Our Latest Gallery', link: '/gallery-behind-scenes' },
    { title: 'Exploring Photography Trends in 2024', link: '/2024-trends' },
  ];

  return (
    <footer style={footerStyle}>
              {location.pathname !== '/' && goBackButton}

      <div className="row justify-content-between align-items-start">

        <div className="col-md-3">
          <a href="/">
            <img src="/logo/Throughthelens.png" alt="Logo" style={logoStyle} />
          </a>
          <p style={{ marginTop: '10px', color: '#000', fontSize: '14px', fontWeight: 'bold', marginBottom: '0' }}> CAPTURING MOMENTS, ONE FRAME AT A TIME...</p>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-4">
              <h5 style={{ color: '#333' }}>Insights</h5>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {insights.map((insight, index) => (
                  <li key={index}>
                    <a href={insight.link} style={navItemStyle}>{insight.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-4">
              <h5 style={{ color: '#333' }}>Pages</h5>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {pages.map((page, index) => (
                  <li key={index}>
                    <a href={page.link} style={navItemStyle}>{page.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-4">
              <h5 style={{ color: '#333' }}>Contact Us</h5>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.link} style={navItemStyle}>
                      <FontAwesomeIcon icon={link.icon} /> {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <h5 style={{ color: '#333' }}>Recent Posts</h5>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {recentPosts.map((post, index) => (
              <li key={index}>
                <a href={post.link} style={navItemStyle}>{post.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
