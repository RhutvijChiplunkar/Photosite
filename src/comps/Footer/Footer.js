import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h4>Developed by Rhutvij Chiplunkar</h4>
        <a href="https://www.linkedin.com/in/rhutvij-chiplunkar/" target="_blank" rel="noopener noreferrer" className="social-icon"> <i class="fa fa-linkedin"></i></a>
        <a href="https://github.com/RhutvijChiplunkar" target="_blank" rel="noopener noreferrer" className="social-icon"> <i class="fa fa-github"></i></a>
      </div>
    </div>
  );
}

export default Footer;