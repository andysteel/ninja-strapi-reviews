import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"

function ReviewDetails() {
  const { id } = useParams<any>();
  const  {data, error, loading} = useFetch('http://localhost:1337/reviews/'+id)

  if(loading) return <p>Loading ...</p>
  if(error) return <p>Error: {error?.message}</p>

  return (
    <div className="review-card">
          <div className="rating">{data.rating}</div>
          <h2>{data.title}</h2>

          <small>Stream list</small>

          <p className="review-card-body">{data.body}</p>
    </div>
  )
}

export default ReviewDetails
