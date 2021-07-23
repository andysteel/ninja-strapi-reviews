import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetchList'

function Home() {
  const {data, error, loading} = useFetch('http://localhost:1337/reviews');

  if(loading) return <p>Loading ...</p>
  if(error) return <p>Error: {error?.message}</p>
  return (
    <div>
      {data.map((r, i) => (
        <div key={r.title+i} className="review-card">
          <div className="rating">{r.rating}</div>
          <h2>{r.title}</h2>

          <small>Stream list</small>

          <p className="review-card-body">{r.body.substring(0,200)}...</p>
          <Link to={`/details/${r.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  )
}

export default Home
