import { useQuery } from '@apollo/client';

import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';

import { QUERY_THOUGHTS } from '../utils/queries';

import React from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '/Carousel-1.jpg';
import image2 from '/Carousel-2.jpg';
import image3 from '/Carousel-3.jpg';
import image4 from '/Carousel-4.jpg';
import image5 from '/Carousel-5.jpg';
import image6 from '/Carousel-6.jpg';

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="flex-row justify-center">
      <div className="App">
        <AliceCarousel autoPlay autoPlayInterval="3000" infinite={true}>
          <img src = {image1} className="sliderimg" />
          <img src = {image2} className="sliderimg" />
          <img src = {image3} className="sliderimg" />
          <img src = {image4} className="sliderimg" />
          <img src = {image5} className="sliderimg" />
          <img src = {image6} className="sliderimg" />
        </AliceCarousel>
      </div>
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px #1a1a1a' }}
        >
          <ThoughtForm />
        </div>
        <div className="flex-row justify-center"> 
          <h1>BLOG SPOTLIGHT...</h1>
        </div>
        <div className="flex-row justify-center"> 
        
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="BLOG SPOTLIGHT..."
            />
          )}
      </div>
      </div>
    </main>
  );
};

export default Home;
