import { CARD_IMG } from "./../utils/constants";
import React from "react";
import { Link } from "react-router-dom";

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

/** Previous way of creating components */
/**
class Card extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        /*  Just Like useEffect in functional Componenets, use to call api after component is rendered
    }

    render() {
        
        const { name, avgRating, cuisines, locality, cloudinaryImageId, id } = this.props?.restItem.info;
        return (<><div className="card">
                    <Link to={"/restaurant/" + id} >
                    <img className="card-img" src={CARD_IMG + cloudinaryImageId}  alt="res-logo" />
                    </Link>
                    <h3>{name}</h3>
                    <h4>{avgRating} Star</h4>
                    <p>{cuisines.join(', ')}</p>
                    <p>{locality}</p> 
                    <button onClick={() => {
                        this.setState({
                            count: this.state.count + 1
                        })
                     }} >Button Count - {this.state.count}</button>
                  </div></>)
    }
}
export default Card;

*/