import React from 'react';
import { GoogleSlides } from 'react-google-slides';

const SlideComponent = () => {
  return (
    <div style={{ width: '800px', height: '600px' }}>
      <GoogleSlides
        width={800}
        height={600}
        slidesLink="https://docs.google.com/presentation/d/1wsayJfvaf06ZOu4Rx5y0uzHuRIOtzKCXxuuQD0Uv6b0/edit#slide=id.g280f68f35c9_0_40"
      />
    </div>
  );
};

export default SlideComponent;