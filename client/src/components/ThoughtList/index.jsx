import { Link } from 'react-router-dom';

const ThoughtList = ({
  thoughts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!thoughts.length) {
    return <h3>No Blogs Posted Yet</h3>;
  }

  return (
    <>
      {thoughts &&
        thoughts.map((thought) => (
          <div key={thought._id} className="card mb-3" style={{ width: '25rem' }}>
            <img className="card-img-top p-2" src={`https://i.pravatar.cc/350?u=${thought.thoughtAuthor}`}alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title p-2 m-0">
                {showUsername ? (
                  <Link className="text-dark" style={{ fontSize: '2rem' }} to={`/profiles/${thought.thoughtAuthor}`}>
                    {thought.thoughtTitle} <br />{thought.thoughtAuthor} <br />
                    <span style={{ fontSize: '1.2rem' }}>
                      posted on {thought.createdAt}
                    </span>
                  </Link>
                ) : (
                  <>
                    <span style={{ fontSize: '1rem' }}>
                      You posted on {thought.createdAt}
                    </span>
                  </>
                )}
              </h5>
              <p className="card-text bg-light p-2">{thought.thoughtText}</p>
              <Link className="btn btn-primary" to={`/thoughts/${thought._id}`}>
                Join the discussion on this blog post.
              </Link>
            </div>
          </div>
        ))}
    </>
  );
};

export default ThoughtList;