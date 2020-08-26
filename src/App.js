import React from 'react';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import FoodItem from './components/FoodItem/FoodItem';
import Cart from './components/Cart/Cart';


function App() {

  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    fetch('https://hot-onion.herokuapp.com/api/v1/foods')
    .then(res => res.json())
    .then(data => {
      setFoods(data.data.foods)
    })
  }, [])

  const addToCart = (item) => {
    console.log('click',item);
    const newCart = [...cart, item];
    setCart(newCart)
  }

  const totalPrice = cart.reduce((acc, current) => acc + current.price, 0);

  return (
    <div className="container-fluid px-2">
      <h2 className="text-center py-4 logo">Awesome Foods</h2>
      <div className="row food-items">
        <div className="col-md-9 row border-right">
              {
                  foods.map(food => <FoodItem food={food} key={food._id} addToCart={addToCart}></FoodItem>)
              }
        </div>
        <div className="col-md-3">
            <h2 className="text-center">Cart {cart.length}</h2>
          <ul className="list-group">
              {
                cart.map(item => <Cart item={item}></Cart>)
              }
          </ul>
            <button className="btn btn-primary btn-block">Checkout <span className="badge badge-light">{totalPrice}</span></button>
        </div>
      </div>
    </div>
  );
}

export default App;
