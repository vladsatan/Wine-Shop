import './App.css';
import ArticleCards from './Components/Article-cards/ArticleCards';
import Navbar from './Components/Navbar/Navbar';
import Slider from './Components/Slider/Slider';

function App() {
  return (
    <div className="App">

       <div className='container'>
        <Navbar />
        <Slider />
        <ArticleCards />
       </div>
    </div>
  );
}

export default App;
