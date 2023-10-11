import React, { useState } from 'react';
import './styles.css';

function CarForm({ onCarSubmit }) {
  const [carData, setCarData] = useState({
    modelo_id: '',
    ano: '',
    combustivel: '',
    num_portas: '',
    cor: '',
    nome_modelo: '',
    valor: '',
    brand: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCarData({ ...carData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCarSubmit(carData);
    setCarData({
      modelo_id: '',
      ano: '',
      combustivel: '',
      num_portas: '',
      cor: '',
      nome_modelo: '',
      valor: '',
      brand: '',
    });
  };

  return (

    <div className='CarFormContainer'>
        <h2>Cadastrar Carro</h2>
        <form onSubmit={handleSubmit}>
            <div>
                    <input
                        placeholder='Id'
                        type="hidden"
                        name="modelo_id"
                        value={carData.modelo_id}
                        onChange={handleInputChange}
                    />
                    <input
                        placeholder='Ano'
                        type="number"
                        name="ano"
                        value={carData.ano}
                        onChange={handleInputChange}
                    />
                    <input
                        placeholder='Portas'
                        type="number"
                        name="num_portas"
                        value={carData.num_portas}
                        onChange={handleInputChange}
                    />
                    <input
                        placeholder='Cor'
                        type="text"
                        name="cor"
                        value={carData.cor}
                        onChange={handleInputChange}
                    />
                    <input
                        placeholder='Modelo'
                        type="text"
                        name="nome_carro"
                        value={carData.nome_modelo}
                        onChange={handleInputChange}
                    />
                    <input
                        placeholder='Valor'
                        type="number"
                        name="valor"
                        value={carData.valor}
                        onChange={handleInputChange}
                    />
                    <input
                        placeholder='Marca'
                        type="text"
                        name="marca"
                        value={carData.brand}
                        onChange={handleInputChange}
                    />
            </div>

                <button type="submit">Adicionar</button>
        </form>
    </div>
  );
}

export default CarForm;
