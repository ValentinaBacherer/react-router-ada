import { Link } from 'react-router-dom';
const BooksList = () => (
  <div>
    <h1>Books Page</h1>
    <li>
      <Link to='/book/libro-de-selva'>Libro de la selva</Link>
    </li>

    <li>
      <Link to='/book/libro-de-sofia'>Libro de Sofia</Link>
    </li>
  </div>
);
export default BooksList;
