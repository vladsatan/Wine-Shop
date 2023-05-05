import './App.css';
import ArticleCards from './Components/Article-cards/ArticleCards';
import Filter from './Components/Filters/Filter';
import Navbar from './Components/Navbar/Navbar';
import ProductCard from './Components/ProductCard/ProductCard';
import Slider from './Components/Slider/Slider';
import Line from './img/Line.png';
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
      let [limiter, setLimiter] = useState(9)
      let [limitWine, setLimitWine] = useState([])

    useEffect(()=>{
        setFilterWine(getFilterOfColors(chooseColor,chooseSweetness,choosePrice,chooseCountry,chooseSort,chooseClassification,wines))
    },[chooseColor,chooseSweetness,choosePrice,chooseCountry,chooseSort,chooseClassification])

    useEffect(()=>{
        let arr = []
        for(let i = 0; i < filterWine.length; i++){
            if(i < limiter){
                arr.push(filterWine[i])
            }
        }
        console.log(arr)
        setLimitWine(arr)
    },[limiter,filterWine])

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

                 <div className='items-box'>
             {limitWine.map(e=>{return <ProductCard key={e.id} productCardInfo={e} />})}
                 </div>

                 <div className='see-all' onClick={()=> setLimiter(limiter += 9)}>
                   <p>смотреть все</p>
                   <img src={Line} alt="-"/>
                 </div>

             </div>
          </div>
       </div>
    </div>
  );
}

export default App;
