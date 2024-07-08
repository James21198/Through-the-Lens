import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_THOUGHT } from '../utils/queries';

import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const SingleThought = () => {
  const { thoughtId } = useParams();
  const [open, setOpen] = React.useState(false);

  const { loading, data } = useQuery(QUERY_SINGLE_THOUGHT, {
    variables: { thoughtId: thoughtId },
  });

  const thought = data?.thought || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-3">
      <h3 className="card-header text-dark p-2 m-0">
        {thought.thoughtAuthor} <br />
        <img className="p-2" style={{ width: '80px', height: '80px', borderRadius: '50%'}} src={`https://i.pravatar.cc/60?u=${thought.thoughtAuthor}`} alt="Card image cap" />
        <br />
        <span style={{ fontSize: '1rem', fontStyle: 'italic'}}>
          posted this blog on {thought.createdAt}
        </span>
      </h3>
      <>
        <button className="btn btn-primary" style={{ marginTop: '30px', width: '20%'}} onClick={() => setOpen(true)}>
          View Gallery
        </button>
  
        <br />
  
        {/* Blog Article Section */}
        <div className="blog-article">
          <h4 className="text-dark" style={{ marginBottom: '1rem', marginTop: '2rem' }}>
            Mastering the Magic: A Guide to Photography Lighting
          </h4>
          <p style={{ lineHeight: '1.6' }}>
            Welcome to our comprehensive guide on mastering the art of photography lighting! Whether you’re a beginner looking to get started or a seasoned photographer aiming to refine your skills, understanding lighting is crucial to capturing stunning photographs. In this guide, we’ll explore the different types of lighting, techniques for creating the perfect lighting setup, and tips for using natural and artificial light to enhance your photos.
          </p>
          <p style={{ lineHeight: '1.6' }}>
            <strong>1. Understanding Light Types:</strong> The two main types of light in photography are natural light and artificial light. Natural light comes from sources like the sun, while artificial light comes from equipment like flashes and studio lights. Both have their own advantages and challenges, and mastering them can elevate your photography to the next level.
          </p>
          <p style={{ lineHeight: '1.6' }}>
            <strong>2. Types of Lighting Techniques:</strong> There are various lighting techniques you can use, such as backlighting, sidelighting, and diffused lighting. Each technique creates different effects and moods, so it’s important to experiment and find what works best for your subject and style.
          </p>
          <p style={{ lineHeight: '1.6' }}>
            <strong>3. Tips for Effective Lighting:</strong> To make the most of your lighting setup, consider using reflectors to bounce light, diffusers to soften harsh light, and understanding the color temperature of your light sources to maintain proper white balance.
          </p>
          <p style={{ lineHeight: '1.6' }}>
            By mastering these concepts, you’ll be able to create more professional and visually appealing photographs. Keep experimenting and practicing, and you’ll soon see the results in your work!
          </p>
        </div>
  
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[
            { src: "/1.jpg" },
            { src: "/2.jpg" },
            { src: "/3.jpg" },
            { src: "/4.jpg" },
            { src: "/5.jpg" }
          ]}
        />
      </>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.2rem',
            color: 'white',
            lineHeight: '1',
          }}
        >
          {thought.thoughtText}
        </blockquote>
      </div>
  
      <div className="my-5">
        <CommentList comments={thought.comments} />
      </div>
      <div className="m-3 p-4" style={{ 
        borderRadius: '0.5rem',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s, box-shadow 0.2s', 
  
        }}>
        <CommentForm thoughtId={thought._id} />
      </div>
    </div>
  );
  
};

export default SingleThought;
