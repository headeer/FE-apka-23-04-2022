import React from 'react';
import DateChange from "./DateChange";
import logoutIcon from "../../../assets/icons/logout_icon.png";
import calendarIcon from "../../../assets/icons/calendar_icon.png";
import mapIcon from "../../../assets/icons/map_icon.png";
import {useNavigate} from "react-router";

function Sidebar(props) {
    const navigation = useNavigate();
    const navList = [
        {name: 'Calendar', img: calendarIcon, link: '/calendar'},
        {name: 'Maps', img: mapIcon, link: '/main'},
    ]
    return (
        <div className="sidebar-wrapper">
            <div>
                <DateChange/>
                <nav>
                    <ul className="sidebar-wrapper__list">
                        {navList.map(el =>
                            <li key={el.name} onClick={() => navigation(el.link)}><img src={el.img} alt="el.name"/> <h3>{el.name}</h3></li>
                        )
                        }
                    </ul>
                </nav>
            </div>
            <div className="logout">
                <img  src={logoutIcon} alt="logout-icon"/>
            </div>
        </div>
    );
}

export default Sidebar;
