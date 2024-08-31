import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const ResMenu = () => {

    let [menuData, setMenuData ] = useState(null);
    let { resId } = useParams();

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        const menuDetails = await fetch(MENU_URL + resId);
        const jsonData = await menuDetails.json();
        const resMenuData = jsonData?.data?.cards[2]?.card?.card?.info ;
        setMenuData(resMenuData);
    }

    if(menuData === null){
        return <Shimmer />
    }

     const { name, areaName, avgRating, costForTwoMessage, cuisines } = menuData;

    return (<div className="restuarant-menu">
        <span className="res-detail-name"><h1>{name} : <span className="menu-rating">{avgRating + ' Stars'}</span></h1></span>
        <h3>{areaName} </h3>
        <h3>{cuisines.join(', ')} - {costForTwoMessage}</h3>
        <ul>
            <li>Indian</li>
            <li>Thai</li>
            <li>Italian</li>
        </ul>
    </div>);
}

export default ResMenu;