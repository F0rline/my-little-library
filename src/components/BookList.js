import '../App.css';
import BookListItem from '../components/BookListItem';
import Header from './Header';
import Footer from './Footer';

function App() {
    return (
      <div className="App">
            <Header/>
        <header className="App-header">
            <div className='main-content'>
                <BookListItem/>
            </div>
        </header>
        <Footer/>
      </div>
    );
  }
  
  export default App;