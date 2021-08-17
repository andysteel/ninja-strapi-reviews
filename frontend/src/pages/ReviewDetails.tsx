import { useParams } from "react-router-dom"
import { useQuery, gql } from '@apollo/client';
import { Category } from '../interfaces/interfaces';
import ReactMarkdown from 'react-markdown';

function ReviewDetails() {
  const { id } = useParams<any>();
  const REVIEW = gql`
  query getReview {
    review(id: ${id}) {
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
  const  {data, error, loading} = useQuery(REVIEW)

  if(loading) return <p>Loading ...</p>
  if(error) return <p>Error: {error?.message}</p>

  return (
    <div className="review-card">
          <div className="rating">{data.review.rating}</div>
          <h2>{data.review.title}</h2>

          {data.review.categories.map((c: Category) => (
            <small key={c.id}>{c.name}</small>
          ))}

          <ReactMarkdown className="review-card-body">{data.review.body}</ReactMarkdown>
    </div>
  )
}

export default ReviewDetails
