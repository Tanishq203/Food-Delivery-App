import axios from "axios";
import { useEffect, useState } from "react";

function Apicalling(){
    const [allRestaurant, setAllRestaurants] = useState([]);

    useEffect(()=>{        
        const API = "/api/restaurants/list/v5?lat=18.52110&lng=73.85020&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        async function calling(){
            const resp = await axios.get(API);
            // console.log(resp.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            setAllRestaurants(resp.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        }
        calling()
    } , [])

    return allRestaurant
}

export default Apicalling

