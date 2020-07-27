import React, {useState,useEffect} from 'react';
import './App.css';
import Conditions from './components/Conditions'

function App() {

  const KEY = "7ad51afce75ed1824cf04733a5016083";
  const [data, setData] = useState({});
  const [cityID, setCityID] = useState("Krakow");

  function changeCityID(e){
    setCityID(e.target.value)
  }

  function getData(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityID}&appid=${KEY}&units=metric`)
      .then(res => res.json())
      .then(
        (res) => {
          setData(res);
        },
        (error) => {
          console.log("error: "+error)
        }
      )
  }

  useEffect(() => {
    getData()
  },[])

    return (
      <div className="App">
      <Conditions data={data} getData={getData} changeCityID={changeCityID}/>
    </div>
    ); 
}

export default App;
