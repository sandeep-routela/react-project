import { CARD_IMG } from "./../utils/constants";

const Card = ({ restItem }) => {

    // const { restItem } = props; 
     const { name, avgRating, cuisines, locality, cloudinaryImageId } = restItem?.info;
 
     return (<div className="card">
         <img className="card-img" src={CARD_IMG + cloudinaryImageId}  alt="res-logo" />
         <h3>{name}</h3>
         <h4>{avgRating} Star</h4>
         <p>{cuisines.join(', ')}</p>
         <p>{locality}</p>
     </div>)
 }

 export default Card;