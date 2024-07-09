import "./Card.css";

const Cart = (data) => {
  const {
    name,
    category,
    stockQuantity,
    brand,
    rating,
    description,
    price,
    image,
  } = data.item;
  console.log(data);
  return (
    <div>
      <div className="card " key={data._id}>
        <img className="h-[300px] w-[100%] mx-auto" src={image} alt="" />
        <div className="card-content">
          <div className="card-title">{name}</div>
          <div className="card-description">{description}</div>
          <div className="card-price">{price}$</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
