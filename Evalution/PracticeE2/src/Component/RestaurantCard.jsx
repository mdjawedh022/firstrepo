import styles from "./RestaurantCard.css"
function RestaurantCard(props) {
  const {image,name,number_of_votes,price_starts_from,rating,type}=props
  return (
  <div data-testid="restaurant-card" className="container">
   {/* display the props */}
  <div>
  <img src={image} alt={name} data-testid="restaurant-card-image"/>
  </div>
   <b data-testid="restaurant-card-name" >{name}</b>
   <p data-testid="restaurant-card-type" >{type}</p>
   <p data-testid="restaurant-card-rating" >{rating}</p>
   <p data-testid="restaurant-card-price" >{price_starts_from}</p>
   <p data-testid="restaurant-card-votes" >{number_of_votes}</p>
   
    </div>
  );
}

export default RestaurantCard;
