import "./Bottle.css";

const Bottle = ({ bottle, handleAddToCart }) => {
  const { name, img, price, ratings } = bottle;
  return (
    <div className="bottle">
      <h4>Bottle Name: {name} </h4>
      <img className="bottle-img" src={img} alt={name} />

      <div className="bottle-footer">
        <p>
          Price: <b> {price}$</b>
        </p>
        <p>
          <small>Ratings: {ratings}</small>
        </p>
      </div>
      <button onClick={() => handleAddToCart(bottle)}>Add to Cart</button>
    </div>
  );
};

export default Bottle;
