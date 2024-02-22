import React from 'react';
import '../styles/Footer.css';
import fb from '../assets/logos/fb.png'
import instagram from '../assets/logos/instagram.png'
import twitter from '../assets/logos/twitter.png'
import linkedin from '../assets/logos/linkedin.png'
import quora from '../assets/logos/quora.png'
import companyLogo from '../assets/logos/company logo.png'
import glassDoor from '../assets/logos/glassdoor-rating.png'
import iso from '../assets/logos/iso.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="containerFooter">
        <div className="footer-left">
          <div className="logo">
            <img src={companyLogo} alt="Company Logo"  className='C-logo'/>
          </div>
          <div className="email">contact@bluetickconsultants.com</div>
          <div className="rating">
            <img src={glassDoor} alt="Glassdoor Rating"   className='R-logo'/>
            <img src={iso} alt="ISO Certification" className='R-logo'/>
          </div>
          </div>
          <div className="footer-right">
          <div className="infoSection"><div className="resources">
            <h4>Resources</h4>
            <ul className='products-list'>
              <li><a href="#" >Blogs</a></li>
              
            </ul>
          </div>
          <div className="products">
            <h4>Products</h4>
            <ul className='products-list'>
            <li><a href="#">Talk to Code</a></li>
            <li><a href="#">Interview GPT</a></li>
            <li><a href="#">Privacy Doc</a></li>
            <li><a href="#">Sales Call Evaluator</a></li>
            </ul>
          </div></div>
          
        
        <div className="social-media">
          <ul>
            <li><a href="#"><img src={fb} alt="Facebook" /></a></li>
            <li><a href="#"><img src={instagram} alt="Instagram" /></a></li>
            <li><a href="#"><img src={twitter} alt="Twitter" /></a></li>
            <li><a href="#"><img src={linkedin} alt="LinkedIn" /></a></li>
            <li><a href="#"><img src={quora} alt="Quora" /></a></li>
          </ul>
          <div className="copyright">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
        </div>
       
        </div>
      </div>
    </footer>
  );
};

export default Footer;
