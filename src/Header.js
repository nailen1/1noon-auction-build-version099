import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Header() {
    const navigate = useNavigate();
    let [selectIcon, setSelectIcon] = useState(['selected-icon', ' ', ' ', ' ', ' ']);
    return (
        <>
            {/* <div id="to-to-top"></div> */}
            <div className="header">
                <h1 className="header-title" onClick={() => navigate('/')}>1noon auction</h1>
            </div>
            {/* HEADER MENU ICONS */}
            <div className="top-icon-menu">
                <ul>
                    <li onClick={() => {
                        navigate('/');
                        setSelectIcon(['selected-icon', ' ', ' ', ' ', ' ']);
                    }}>
                        <i className={"bx bxs-layer-plus " + selectIcon[0]}></i>
                    </li>
                    <li onClick={() => {
                        navigate('/location');
                        setSelectIcon([' ', 'selected-icon', ' ', ' ', ' ']);
                    }}>
                        <i className={"bx bxs-map-pin " + selectIcon[1]}></i>
                    </li>
                    <li onClick={() => {
                        navigate('/price');
                        setSelectIcon([' ', ' ', 'selected-icon', ' ', ' ']);
                    }}>
                        <i className={'bx bx-won ' + selectIcon[2]}></i>
                    </li>
                    <li onClick={() => {
                        navigate('/date');
                        setSelectIcon([' ', ' ', ' ', 'selected-icon', ' ']);
                    }}>
                        <i className={"bx bxs-calendar " + selectIcon[3]}></i>
                    </li>
                    <li onClick={() => {
                        navigate('/news');
                        setSelectIcon([' ', ' ', ' ', ' ', 'selected-icon']);
                    }}>
                        <i className={'bx bxs-category ' + selectIcon[4]} ></i>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header;