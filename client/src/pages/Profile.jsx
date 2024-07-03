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
          @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');

          .dotted-border {
            border: 1px dotted #1a1a1a;
            padding: 10px;
            margin-bottom: 10px;
          }

          .fancy-font {
            font-family: 'Dancing Script', cursive;
          }
        `}
      </style>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>
        <div className="col-12 col-md-10 mb-3">
          <div className="card mb-3">
            <h3 className="dotted-border">
              <img className="card-img-top p-2" src={`https://i.pravatar.cc/100?u=${user._id}`} alt="Card image cap" />
              <ul className="fancy-font">Equipments {userParam ? `${user.username}'s` : 'your'} used:</ul>
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
        <div className="col-12 col-md-10 mb-5">
          <ThoughtList
            thoughts={user.thoughts}
            title={`${user.username}'s thoughts...`}
            showTitle={false}
            showUsername={false}
          />
        </div>
        {!userParam && (
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px dotted #1a1a1a' }}
          >
            <ThoughtForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
