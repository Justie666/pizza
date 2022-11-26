import React, { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const FullPizza: FC = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState<{
    title: string;
    imageUrl: string;
    price: number;
  }>();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://63515a14dfe45bbd55bde556.mockapi.io/items/${id}`
        );
        setPizza(data);
      } catch (e) {
        alert('Ошибка при получении пиццы!');
        navigate('/');
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return (
      <div className="container">
        <h2>Загрузка...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="Пицца" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₽</h4>
    </div>
  );
};

export default FullPizza;
