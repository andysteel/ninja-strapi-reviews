import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="site-header">
      <Link to="/"><h1>Ninja Reviews</h1></Link>
    </div>
  )
}

export default Header
