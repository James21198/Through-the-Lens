import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';


const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <style>
        {`
          .border {
            padding: 30px;
          }
          
          .card-profile {
            width: 50%;
            border: 1px solid lightgray;
            border-radius: 30px; 
            margin-bottom: 1rem;
            margin: 0.5rem;
            padding: 0.20rem; 
            background-color: #fff; 
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            transition: transform 0.2s, box-shadow 0.2s; 
          }

          .fancy-font {
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            font-size: 1rem;
            line-height: 1.5;
          }
        `}
      </style>
      
      <div className="flex-row justify-center mb-3">
        <h2 style={{ marginTop: '20px'}} className="col-12 col-md-10 text-dark p-3 mb-5">
          Viewing {userParam ? `${user.username}'s` : 'Your'} Profile
        </h2>
        <div className="col-12 col-md-10 mb-3">
          <div className="card-profile mb-3">
            <h3 className="border">
              <img className="card-img-top p-2" src={`https://i.pravatar.cc/100?u=${user._id}`} alt="Card image cap" />
              <ul className="fancy-font">Equipments {userParam ? `${user.username}'s` : 'you'} used:</ul>
              <ul className="fancy-font">
                <li>Canon EOS R5</li>
                <li>Nikon Z7 II</li>
                <li>Manfrotto 055 Aluminum 3-Section Tripod</li>
                <li>Sony FE 16-35mm f/2.8 GM Lens</li>
                <li>Wacom Intuos Pro Graphics Tablet</li>
              </ul>
            </h3>
          </div>
        </div>
        <h1 className="col-12 col-md-10 text-dark p-3 mb-5">{userParam ? `${user.username}'s` : 'Your'} blogposts...</h1>
        <div className="col-12 col-md-10 mb-5">
          <ThoughtList
            thoughts={user.thoughts}
            
            showTitle={false}
            showUsername={false}
          />
        </div>
        {!userParam && (
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ 
              borderRadius: '1rem',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.2s, box-shadow 0.2s', 
            }}
          >
            <ThoughtForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
