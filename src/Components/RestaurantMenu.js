import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
            const response = await fetch(MENU_URL + resId);
            const json = await response.json();
            setResInfo(json.data);
    };

    if (resInfo === null) {
        return <Shimmer />;
    }

    // Destructure safely
    const cardInfo = resInfo.cards[2]?.card?.card?.info;
    const { name, sla } = cardInfo;

    return (
        <div style={{ marginTop: "5vw", padding: "2vw" }} className="menu">
            <h1>{name}</h1>
            <h2>{sla.slaString}</h2>
            <h3>Item 1</h3>
            <h3>Item 2</h3>
        </div>
    );
};

export default RestaurantMenu;
