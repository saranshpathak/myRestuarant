import React from "react";

const Navbar = ({menuList,filterItem}) => {
  return (
    <div className="navbarMainContainer">
      <div className="button-group">
        {
          menuList.map((curr)=>{
            return(
            <button onClick={()=>{filterItem(curr)}}>
        {curr}
        </button>
            )
          })
        }
        
      </div>
    
    </div>
  );
};

export default Navbar;
