import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const footerStyle = {
    backgroundColor: '#f8f9fa',
    color: '#333',
    fontFamily: "'Merriweather', serif",
    paddingTop: '30px',
    paddingBottom: '30px',
    marginTop: 'auto',
    textAlign: 'left',
    paddingLeft: '30px',
    paddingRight: '30px',
    borderTop: '1px solid #ddd',
    boxShadow: '0 -1px 5px rgba(0,0,0,0.1)',
  };
  
  const logoStyle = {
    width: '200px',
    height: 'auto',
    marginBottom: '15px',
  };

  const navItemStyle = {
    margin: '5px 0',
    color: '#333',
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
    { name: 'Spotlight', link: '/spotlight' },
    { name: 'Galleries', link: '/galleries' },
    { name: 'Trends', link: '/trends' },
  ];

  const socialLinks = [
    { name: 'Twitter', link: 'https://twitter.com/example', icon: '🐦' },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/example', icon: '🔗' },
    { name: 'Email', link: 'mailto:info@example.com', icon: '✉️' },
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
          <p style={{ marginTop: '10px', color: '#666' }}>Capturing moments, one frame at a time.</p>
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
              <h5 style={{ color: '#333' }}>Contact</h5>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.link} style={navItemStyle}>
                      {link.icon} {link.name}
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
