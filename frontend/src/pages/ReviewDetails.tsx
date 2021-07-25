import { Link, useParams } from "react-router-dom"
import { useQuery, gql } from '@apollo/client';

function ReviewDetails() {
  const { id } = useParams<any>();
  const REVIEW = gql`
  query getReview {
    review(id: ${id}) {
      title,
      body,
      rating,
      id
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

          <Link to="/"><small>Stream list</small></Link>

          <p className="review-card-body">{data.review.body}</p>
    </div>
  )
}

export default ReviewDetails
