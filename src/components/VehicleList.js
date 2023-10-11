import React, { useEffect, useState } from 'react';
import './styles.css';

function VehicleList() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    /* const fetchData = async () => {
       try {
        const response1 = await axios.get('https://wswork.com.br/cars_by_brand.json');
        const response2 = await axios.get('https://wswork.com.br/cars.json');
        console.log(response1);
        // Combinar os resultados das duas APIs
        const combinedData = [...response1.data.cars, ...response2.data.cars];
        setVehicles(combinedData);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }

    }; 

    fetchData(); */

    const data1 = {
        cars: [
            {

                "id": 1,
                "timestamp_cadastro" : 1696539488,
                "modelo_id" : 12,
                "ano": 2015, 
                "combustivel" : "FLEX", 
                "num_portas" : 4,
                "cor": "BEGE",
                "nome_modelo" : "ONIX PLUS",
                "valor" : 50000 
               },
               {
       
                "id": 2,
                "timestamp_cadastro" : 1696531234,
                "modelo_id" : 14,
                "ano": 2014, 
                "combustivel" : "FLEX", 
                "num_portas" : 4,
                "cor": "AZUL",
                "nome_modelo" : "JETTA",
                "valor" : 49000 
               },
               {
       
                "id": 3,
                "timestamp_cadastro" : 16965354321,
                "modelo_id" : 79,
                "ano": 1993, 
                "combustivel" : "DIESEL", 
                "num_portas" : 4,
                "cor": "AZUL",
                "nome_modelo" : "HILLUX SW4",
                "valor" : 47500 
               }
        ],
      };
  
      const data2 = {
        cars: [
            {

                "id": 55,
                "timestamp_cadastro" : 1696549488,
                "modelo_id" : 88,
                "ano": 2014, 
                "combustivel" : "FLEX", 
                "num_portas" : 4,
                "cor": "BRANCA",
                "nome_modelo" : "ETIOS",
                "valor" : 36000,
                "brand":1
               },
               {
       
                "id": 23,
                "timestamp_cadastro" : 1696531236,
                "modelo_id" : 77,
                "ano": 2014, 
                "combustivel" : "FLEX", 
                "num_portas" : 4,
                "cor": "PRETO",
                "nome_modelo" : "COROLLA",
                "valor" : 120000, 
                "brand":1
               },
               {
       
                "id": 3,
                "timestamp_cadastro" : 16965354321,
                "modelo_id" : 79,
                "ano": 1993, 
                "combustivel" : "DIESEL", 
                "num_portas" : 4,
                "cor": "AZUL",
                "nome_modelo" : "HILLUX SW4",
                "valor" : 47500,
                "brand":1
               }
        ],
      };
  
      const allVehicles = [...data1.cars, ...data2.cars];
  
      setVehicles(allVehicles);
  }, []);

  
  const groupByBrand = () => {
    const grouped = {};

    vehicles.forEach((vehicle) => {
      const brandName = vehicle.brand;
      if (!grouped[brandName]) {
        grouped[brandName] = [];
      }
      grouped[brandName].push(vehicle);
    });

    return grouped;
  };


  const groupedVehicles = groupByBrand();

  return (
    <div className='CarListContainer'>
      {Object.keys(groupedVehicles).map((brandName) => (
        <div key={brandName}>
          <div className='card'>
            <h2>{brandName === '1' ? 'TOYOTA' : 'Marca Não Informada'}</h2>
            <ul>
                {groupedVehicles[brandName].map((vehicle) => (
                <li key={vehicle.id}>
                    <div className='nomedocarro'>{`${vehicle.nome_modelo}`}</div>
                    <div className='anoecordocarro'>{`${vehicle.ano} - ${vehicle.cor}`}</div>
                    <div className='valordocarro'>{`R$ ${vehicle.valor}`}</div>
                </li>
                ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VehicleList;
