import "./header.scss";
import logo from '../../assets/img/logo.svg';
import menu from '../../assets/img/menu.svg';
import { useState } from "react";


const Header = () => {
    const [active, setActive] = useState(false);

    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo-header" />
            </div>
            <div className={!active ? "pages primary-fonts" : "pages primary-fonts menu-active"}>
                <a href={'/'}>INTRODUCTION</a>
                <a href={'/solution'}>SOLUTION</a>
                <a href={'/rateplan'}>RATEPLAN</a>
                <a href={'/login'}>LOGIN</a>
                <a href={'/applyforfreeuse'}>APPLY FOR FREE USE</a>
            </div>

            <div className={"menu"} onClick={() => setActive(!active)}>
                <img src={menu} alt="menu-icon" />
            </div>
        </div>
    )
}

export default Header