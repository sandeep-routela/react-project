
import Card from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {

    const [ restaurantList, setRestaurantList ] = useState([]);
    const [ filteredList, setFilteredList] = useState([]);
    const [ searchValue, setSearchValue ] = useState("");

    /*  Show restaurant list whose rating is less than 4 */
    const filterListLess = () => {
        const filteredList = restaurantList.filter((item) => (item.info.avgRating > 4))
        setFilteredList(filteredList);
    }

    /* Show all restaurant list */
    const filterListAll = () => {
        setFilteredList(restaurantList);
        setSearchValue("");
    }

    /* Search Filter for restuarant list */
    const searchList = (e) => {
        const searchBoxValue = e.target.value.toLowerCase();
        const filteredList = restaurantList.filter((item) => item.info.name.toLowerCase().includes(searchBoxValue));
        setFilteredList(filteredList);
    } 

    useEffect(() => {
        fetchData();
    },[]);

    /* Api Call */
    const fetchData = async ()  => {
        const fetchApiData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.40980&lng=77.31000&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await fetchApiData.json();       
        setRestaurantList(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  
        setFilteredList(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  
    }

    /* Dynamic Card Div Listing */
    const CardDiv = ({ filteredList }) => {

        return filteredList.length === 0 ? (<Shimmer />) :
        (<div className="card-div"> 
            {filteredList.map((restaurant) => (   
                <Card key={restaurant.info.id} restItem={restaurant} />
            ) )}
        </div>)
    }
    

    return (<div className="body-container">
        <div className="filter-action">
            <div className="search">
                Search Resturant: <input type="text" name="search" className="search-box" value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }} onKeyUp={searchList}/>
            </div>
            <div className="sort">
                <button className="sort-click" onClick={filterListLess}>LessThen 4</button>
                <button className="sort-click" onClick={filterListAll}>Show All</button>
            </div>
        </div>
        <CardDiv filteredList={filteredList}/>   
    </div>
    );
}

export default Body;