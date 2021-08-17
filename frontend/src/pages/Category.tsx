import { useQuery, gql } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { Category } from '../interfaces/interfaces';
import ReactMarkdown from 'react-markdown';

const CATEGORY = gql`
query GetCategory($id: ID!) {
  category(id: $id) {
    name,
    id,
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
}
`

function CategoryStream() {
  const { id } = useParams<any>();
  const {data, error, loading} = useQuery(CATEGORY, {variables: {id}});

  if(loading) return <p>Loading ...</p>
  if(error) return <p>Error: {error?.message}</p>

  const reviews: any[] = data.category.reviews;

  return (
    <div>
      <h2>{data.category.name}</h2>
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

export default CategoryStream
