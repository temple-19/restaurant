import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Apo Abuja</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <p className="app__specialMenu-menu_heading">Cake Chef</p>
        <p className="p__opensans">
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
          alt="spoon"
        />
        <div className="app__footer-links_icons">
          <a
            href="https://instagram.com/cakechef_ng?igshid=OGQ5ZDc2ODk2ZA=="
            rel="noreferrer"
            style={{
              textDecoration: 'none',
            }}
          >
            <FiFacebook />
          </a>
          <a
            href="https://instagram.com/cakechef_ng?igshid=OGQ5ZDc2ODk2ZA=="
            rel="noreferrer"
            style={{
              textDecoration: 'none',
            }}
          >
            <FiTwitter />
          </a>
          <a
            href="https://instagram.com/cakechef_ng?igshid=OGQ5ZDc2ODk2ZA=="
            rel="noreferrer"
            style={{
              textDecoration: 'none',
            }}
          >
            <FiInstagram />
          </a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <a
        href="https://templecodes.netlify.app/"
        rel="noreferrer"
        style={{
          textDecoration: 'none',
        }}
      >
        <p className="p__opensans">Created By Temple.</p>
      </a>
    </div>
  </div>
);

export default Footer;
