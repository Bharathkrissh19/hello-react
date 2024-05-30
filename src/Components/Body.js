
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData"

export const Body = () => {
    return (
      <div className="body">
        <div className="search">search </div>
        <div className="res-container">
         {
          resList.map((info)=>(<RestaurantCard key={info.info.id} resData={info}/>))
         }
        </div>
      </div>
    );
  };

  export default Body;