import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client';
import { Category } from '../interfaces/interfaces';

const CATEGORIES = gql`
query GetCategories {
  categories {
    name,
    id
  }
}
`

function Header() {
  const  {data, error, loading} = useQuery(CATEGORIES)

  if(loading) return <p>Loading ...</p>
  if(error) return <p>Error: {error?.message}</p>
  return (
    <div className="site-header">
      <Link to="/"><h1>Ninja Reviews</h1></Link>
      <nav className="categories">
        <span>Filter reviews by category</span>
        {data.categories.map((category: Category) => (
          <Link key={category.id} to={`/category/${category.id}`}>
            {category.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Header
