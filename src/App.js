import './App.css';
import ArticleCards from './Components/Article-cards/ArticleCards';
import Filter from './Components/Filters/Filter';
import Navbar from './Components/Navbar/Navbar';
import ProductCard from './Components/ProductCard/ProductCard';
import Slider from './Components/Slider/Slider';
import wines from './bdTest';
import {useEffect, useState} from "react";
import {getFilterOfColors} from "./Scripts";

function App() {

      const [chooseColor, setChooseColor] = useState([])
      const [chooseSweetness, setChooseSweetness] = useState([])
      const [choosePrice, setChoosePrise] = useState([])
      const [chooseCountry, setChooseCountry] = useState([])
      const [chooseSort, setChooseSort] = useState([])
      const [chooseClassification, setChooseClassification] = useState([])
      const [filterWine, setFilterWine] = useState(wines)

    useEffect(()=>{
        setFilterWine(getFilterOfColors(chooseColor,chooseSweetness,choosePrice,chooseCountry,chooseSort,chooseClassification,wines))
    },[chooseColor,chooseSweetness,choosePrice,chooseCountry,chooseSort,chooseClassification])

  return (
    <div className="App">

       <div className='container'>
        <Navbar />
        <Slider />
        <ArticleCards />
          <div className='main-container'>

             <div className='filter-side'>
               <Filter
                   chooseColor={chooseColor}
                   setChooseColor={setChooseColor}
                   chooseSweetness={chooseSweetness}
                   setChooseSweetness={setChooseSweetness}
                   choosePrice={choosePrice}
                   setChoosePrise={setChoosePrise}
                   chooseCountry={chooseCountry}
                   setChooseCountry={setChooseCountry}
                   chooseSort={chooseSort}
                   setChooseSort={setChooseSort}
                   chooseClassification={chooseClassification}
                   setChooseClassification={setChooseClassification}/>
             </div>


             <div className='item-side'>
             {filterWine.map(e=>{return <ProductCard key={e.id} productCardInfo={e} />})}
             </div>
          </div>
       </div>
    </div>
  );
}

export default App;
