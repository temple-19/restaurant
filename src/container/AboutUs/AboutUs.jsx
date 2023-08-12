import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Savor Every Moment as We Craft Dreams into Delectable Creations. From
          Passion to Perfection, Experience the Art of Cake-Making.
        </p>
        <a
          href="https://instagram.com/cakechef_ng?igshid=OGQ5ZDc2ODk2ZA=="
          rel="noreferrer"
          style={{
            textDecoration: 'none',
          }}
        >
          <button type="button" className="custom__button">
            Know More
          </button>
        </a>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Tracing the Layers of Flavorful Memories, Where Each Bite Narrates a
          Tale of Passion and Craftsmanship
        </p>
        <a
          href="https://instagram.com/cakechef_ng?igshid=OGQ5ZDc2ODk2ZA=="
          rel="noreferrer"
          style={{
            textDecoration: 'none',
          }}
        >
          <button type="button" className="custom__button">
            Know More
          </button>
        </a>
      </div>
    </div>
  </div>
);

export default AboutUs;
