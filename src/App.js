import './App.css';
import React, {useEffect, useState} from "react";
import Wine from "./Pages/Wine";
import Navbar from "./Components/Navbar/Navbar";
import Sparkling from "./Pages/Sparkling";

function App() {
    const [drink, setDrink] = useState('Вино')
  return (
      <div className='App'>
          <div className='container'>
              <Navbar drink={drink} setDrink={setDrink} />
              {drink === 'Вино'?  <Wine drink={drink} /> : null}
              {drink === 'Игристое'?  <Sparkling drink={drink} /> : null}
          </div>
      </div>
  );
}

export default App;
