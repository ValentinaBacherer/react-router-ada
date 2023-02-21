import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import BookList from './pages/BookList';
import About from './pages/About';
import Book from './pages/Book';

function App() {
  return (
    <div className='App'>
      <nav>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/booklist'>Books List</Link>
        </li>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/booklist' element={<BookList />} />
        <Route path='/book/:nombre' element={<Book />} />
        <Route path='/book' element={<h2>Por favor especifica un nombre</h2>} />
      </Routes>
    </div>
  );
}

export default App;
