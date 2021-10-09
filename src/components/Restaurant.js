import React,{useState} from 'react'
import MenuCard from './MenuCard'
import Navbar from './Navbar';
import "./style.css";
import menu from './MenuDataApi';

const uniqueList = [
    ...new Set(
      menu.map((curElem) => {
        return curElem.category;
      })
    ),
    "All",
  ];
const Restaurant = () => {
    const [menuData,setMenuData]=useState(menu);
    const [menuList,setMenuList] = useState(uniqueList);

    const filterItem = (category)=>{
        if(category=="All"){
            setMenuData(menu);
            return
        }
        const updatedList = menu.filter((curr) =>{
        return curr.category===category;
    }
        )
        setMenuData(updatedList);
    }
    return (
        <>
        <Navbar menuList ={menuList} filterItem={filterItem}/>
            <MenuCard menuData={menuData}/>
        </>
    );
}

export default Restaurant;
