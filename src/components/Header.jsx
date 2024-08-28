import { LOGO_LINK } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    let [btnName, setBtnName] = useState("Login");

    return (
        <div className="flex justify-between shadow-lg bg-pink-200">
            <div>
                <img className="w-28 m-4" src= {LOGO_LINK} />
            </div>
            <div className="items-center flex">
                <ul className="flex m-6 p-6">
                    <li className="px-4"><Link to={"/"} className="">Home</Link></li>
                    <li className="px-4"><Link to={"/about"} className="">About Us</Link></li>
                    <li className="px-4"><Link to={"/contact"} className="">Contact Us</Link></li>
                    <li className="px-4"><Link to={"/grocery"} className="">Grocery</Link></li>
                    <li className="px-4"><Link to={"/cart"} className="">Cart</Link></li>
                    <button className="login-btn" onClick={()=> {
                        btnName === "Login"? setBtnName("Logout"):setBtnName("Login");
                    }} >{btnName}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;