import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Baker's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            At Cake Chef, we stand by our beliefs and principles in crafting
            exceptional experiences for every palate.
          </p>
        </div>
        <p className="p__opensans">
          {' '}
          We believe flavors have stories to tell. Our cakes speak of passion,
          creativity, and the joy of sharing moments with loved ones.{' '}
        </p>
      </div>
    </div>
  </div>
);

export default Chef;
