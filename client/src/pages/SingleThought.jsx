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
            color: 'gray',
            border: '1px solid #1a1a1a',
            borderRadius: '0.5rem',
            lineHeight: '1.5',
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
