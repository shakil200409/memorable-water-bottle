import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToLS, getStoredData } from "../../utilites/localStorage";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("../../../public/bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  //   Load cart from local storage
  useEffect(() => {
    console.log("called the useEffect", bottles.length);
    if (bottles.length) {
      const storedCart = getStoredData();
      //   console.log(storedCart, bottles);
      const savedCart = [];
      for (const id of storedCart) {
        console.log(id);
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          savedCart.push(bottle);
        }
      }
      setCart(savedCart);
    }
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLS(bottle.id);
  };

  return (
    <div>
      <h2>Bottles: {bottles.length}</h2>
      <h3>Cart: {cart.length}</h3>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            handleAddToCart={handleAddToCart}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
