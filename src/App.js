import './App.css';
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import BookList from './components/BookList'
import Catalogue from './components/Catalogue';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BookList/>}/>
        <Route path={'/catalogue/:id'} element={<Catalogue/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
