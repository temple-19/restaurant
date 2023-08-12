import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Discover the Latest Flavor Sensation!" />
      <h1 className="app__header-h1">Cake Elegance Unveiled</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        "Indulge in Layers of Sweet Delight. A Symphony of Flavors and Heavenly
        Bliss Await!"{' '}
      </p>
      <a
        href="https://instagram.com/cakechef_ng?igshid=OGQ5ZDc2ODk2ZA=="
        rel="noreferrer"
        style={{
          textDecoration: 'none',
        }}
      >
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
