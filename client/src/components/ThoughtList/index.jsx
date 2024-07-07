import { Link } from 'react-router-dom';

const ThoughtList = ({
  thoughts,
  title,
  showTitle = true,
  showUsername = true,
}) => {

  const truncateText = (text, wordCount) => {
    const words = text.split(' ');
    if (words.length <= wordCount) {
      return text;
    }
    return words.slice(0, wordCount).join(' ') + '...';
  };

  const randomImages = [
    'https://images.unsplash.com/photo-1476169785137-3bfe32e30ee1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1680520020860-b8c551caa4c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1680520020900-ab740772566c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1662372551108-dbb3047369fd?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1551225471-e45c367f3b89?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1612396244378-6ce8fedc2437?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1620001001197-2484c0bb0f3f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1680520020900-ab740772566c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * randomImages.length);
    return randomImages[randomIndex];
  };

  if (!thoughts.length) {
    return <h3>No Blogs Posted Yet</h3>;
  }

  return (
    <>
      {thoughts &&
        thoughts.map((thought) => (
          <div key={thought._id} className="card mb-3" style={{ width: '24rem' }}>
            <img className='blog-img-top p-2' src={getRandomImage()} alt="Card image" />
            <div className="card-body">
              <h5 className="card-title p-2 m-0">
                {showUsername ? (
                  <Link className="text-dark" style={{ fontSize: '2rem' }} to={`/profiles/${thought.thoughtAuthor}`}>
                    <div className="flex-container">
                      <div>{thought.thoughtAuthor}</div>
                    </div>
                    <span className="time-posted" style={{ fontSize: '1.2rem' }}>posted on {thought.createdAt}</span>
                    <br />
                    <img className="card-img-top p-2" src={`https://i.pravatar.cc/60?u=${thought.thoughtAuthor}`} alt="Card image cap" />
                  </Link>
                ) : (
                  <span style={{ fontSize: '1rem' }}>
                    You posted on {thought.createdAt}
                  </span>
                )}
              </h5>
               <p className="card-text bg-light p-2">
              {truncateText(thought.thoughtText, 10)} 
              </p>              <Link className="btn btn-primary" to={`/thoughts/${thought._id}`}>
                Join the discussion on this blog post.
              </Link>
            </div>
          </div>
        ))}
    </>
  );
};

export default ThoughtList;
