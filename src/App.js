import React, { useState } from 'react';
import './App.css';
import VehicleList from './components/VehicleList';
import CarForm from './components/CarForm';

function App() {

  const [cars, setCars] = useState([]);

  const handleCarSubmit = (newCar) => {
    // Colocar lógica de envio das informações do novo carro 
    setCars([...cars, newCar]);
  };
  
  return (
    <div className="App">
      <h1>LISTAGEM DE VEICULOS - TESTE FE WS</h1>
      <VehicleList />
      <CarForm onCarSubmit={handleCarSubmit} />
    </div>
  );
}


export default App;
