import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { Category } from '../interfaces/interfaces';
import ReactMarkdown from 'react-markdown';

const REVIEWS = gql`
  query getReviews {
    reviews {
      title,
      body,
      rating,
      id,
      categories {
        name,
        id
      }
    }
  }
`

function Home() {
  const {data, error, loading} = useQuery(REVIEWS);

  if(loading) return <p>Loading ...</p>
  if(error) return <p>Error: {error?.message}</p>

  const reviews: any[] = data.reviews;

  return (
    <div>
      {reviews.map((r, i) => (
        <div key={r.title+i} className="review-card">
          <div className="rating">{r.rating}</div>
          <h2>{r.title}</h2>

          {r.categories.map((c: Category) => (
            <small key={c.id}>{c.name}</small>
          ))}

          <ReactMarkdown className="review-card-body">{`${r.body.substring(0,200)}...`}</ReactMarkdown>
          <Link to={`/details/${r.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  )
}

export default Home
