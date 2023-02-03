import React, {useState} from "react";
import "./Menu.css";
import Sdata from "./Sdata";
import Explore from "./Explore";
const Menu =()=>{

  const [item, setItem] = useState(Sdata);
  const filterItem = (category)=>{
    const UpdateItem = Sdata.filter((curElem) =>{
      return curElem.category === category;
    });

       setItem(UpdateItem);
  }
    return(
      
    <>

    <div className="dabba">
      <li className="item"><a  href="#" onClick={() => filterItem("Trending")}>Trending</a></li>
      <li className="item"><a  href="#" onClick={() => filterItem("Global")}>Global</a></li>
      <li className="item"><a  href="#" onClick={() => filterItem("HighYielding")}>HighYielding</a></li>
      <li className="item"><a href="#" onClick={() => filterItem("NewArrivals")}>NewArrivals</a></li>
      <li className="item"><a  href="#" onClick={() => setItem(Sdata)}>All</a></li>
  </div>

    
<Explore item = {item} />
 
   
    </>

    )
}
export default Menu