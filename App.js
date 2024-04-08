
import React from "react";
import ReactDOM from "react-dom/client";

const Header=()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://banner2.cleanpng.com/20180702/vrt/kisspng-online-food-ordering-food-delivery-grubhub-5b3a1b75a36132.9626073015305347736692.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>about</li>
                    <li>contact</li>
                    <li>cart</li>
                </ul>

            </div>

        </div>
    );
};

const AppLayout=()=>{
    return (
        <div className="app">
        <Header />
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

