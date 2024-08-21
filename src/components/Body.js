import resList from "../utils/mocData";
import Card from "./Card";
import { useState } from "react";

const Body = () => {

    const [ restaurantList, setRestaurantList ] = useState(resList);

    const filterListLess = () => {
        const filteredList = restaurantList.filter((item) => (item.info.avgRating > 4))
        setRestaurantList(filteredList);
    }

    const filterListAll = () => {
        setRestaurantList(resList);
    }

    return (<div className="body-container">
        <div className="filter-action">
            <div className="search">
                Search Resturant: <input type="text" name="search" className="search-box" onKeyUp={() => {
                    const searchBox = document.getElementsByClassName('search-box')[0].value.toLowerCase();
                    const filteredList = resList.filter((item) => item.info.name.toLowerCase().indexOf(searchBox) > -1);
                    setRestaurantList(filteredList);
                }}/>
            </div>
            <div className="sort">
                <button className="sort-click" onClick={filterListLess}>LessThen 4</button>
                <button className="sort-click" onClick={filterListAll}>Show All</button>
            </div>
        </div>
        <div className="card-div">
            {restaurantList.map((restaurant) => (
                <Card key={restaurant.info.id} restItem={restaurant} />
            ) )}
        </div>
        
    </div>
    );
}

export default Body;