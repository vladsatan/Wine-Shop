import './App.css';
import ArticleCards from './Components/Article-cards/ArticleCards';
import Filter from './Components/Filters/Filter';
import Navbar from './Components/Navbar/Navbar';
import ProductCard from './Components/ProductCard/ProductCard';
import Slider from './Components/Slider/Slider';
import OrderFilters from './Components/Filters/OrderFilters';
import data from './bdTest';

function App() {
    
  return (
    <div className="App">

       <div className='container'>
        <Navbar />
        <Slider />
        <ArticleCards />
          <div className='main-container'>

             <div className='filter-side'>
               <Filter />
             </div>


             <div className='item-side'>
             <OrderFilters />
             {data.map(e=>{return <ProductCard key={e.id} productCardInfo={e} />})}
             </div>
          </div>
       </div>
    </div>
  );
}

export default App;
