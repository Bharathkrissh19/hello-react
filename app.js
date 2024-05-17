import react from "react";
import reactDom from "react-dom/client";

/**
 * header
 *  -logo
 *  -nav items
 * body
 *  -search bar
 *  -restaurant container
 *     -RestaurantCard
 *     -img
 *     -name of res,Star rating,cusine,delivehry time
 *  footer
 *  -copyright
 *  -links
 *  -address
 *  -contact
 */

const Header=()=>{
    return (
    <div className="header">
        <div >
            <img src="https://i.pinimg.com/564x/59/5f/a5/595fa5ffb3d67f62ceabaa0d9a40d1e2.jpg" className="logo"/>
        </div>
        <div className="nav-bar">
            {/* <div className="aboveNav">
                Mana Inti Ruchulu
            </div> */}
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    )
}


const RestaurantCard = (props)=>{
    return(
        <div className="res-card" >
            <img className="img"
             alt="res-logo"
             src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/zjlp8z2tdg6dgify5fhd"/>
                <h3>{props.resName}</h3>
                <h4>{props.cuisine}</h4>
                <h4>4.4 starts</h4>
                <h4>38 minutes</h4>
                
        </div>
    )
}

const Body =()=>{
    return(
        <div className="body">
            <div className="search">search </div>
            <div className="res-container" >
                <RestaurantCard resName="meghana foods" cuisine="south indian,north indian ,biriyani"/>
                <RestaurantCard resName="bharath home foods" cuisine="every south indian home foods"/>
            </div>
        </div>
    )
}
const AppLayout= ()=> {
    return (
        <div className="app">
            <Header></Header>
            <Body></Body>
        </div>
    )
};

const root = reactDom.createRoot(document.getElementById("boot"));
root.render(<AppLayout/>);