import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="m-4 mb-8 text-center xs:m-8 md:m-12">
      <Link to="/"><h1 className="logo inline-block px-3 py-1 text-3xl md:px-6 md:py-2 md:text-6xl">Feelin' My Shelf</h1></Link>
    </nav>
  )
}
