import { useEffect, useState } from "react";
import { MENU_LINK } from "./constants";

const useResturantMenu = (resId) =>{

    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    }, [])

    const fetchMenu = async ()=>{
        const data = await fetch(MENU_LINK + resId);
        const json = await data.json()
        setResInfo(json.data);
    }

    return resInfo;
}

export default useResturantMenu;