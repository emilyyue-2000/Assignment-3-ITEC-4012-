import "./styles.css";
import {useEffect, useState, useContext} from 'react';
import { PageItem } from "../../pageItem";
import FurnitureOrderContext from "../../../furnitureOrderContext";

export const FurnitureHomePage = () => {
  
  const [furniture, setFurniture] = useState([]);

  const globalstate = useContext(FurnitureOrderContext);

  useEffect(
    () => {
      getFurniture();
    }, []
  );


const getFurniture = async() => {
    try{
      const response = await fetch ('https://firestore.googleapis.com/v1/projects/assignment-3-9e970/databases/(default)/documents/Furniture/');
      console.log('now here 1234');
      const data = await response.json();
      console.log(data);
      const formattedData = data.documents.map((PageItem) => {
        return PageItem.fields
      });
   
      
    console.log(formattedData);
    console.log('now here 4');
    
    setFurniture(formattedData);
    console.log(furniture);

   globalstate.initalizeFurniture(formattedData);
   console.log('now here 6');
    }catch(err){
      console.log (err)
    }

    console.log ('here1')

  }
  return (
    <div className="furniture-page">
      <h1 className="furniture-title">All Items for Sale</h1>
      <div className="furniture-container">
      console.log('here2');
        {furniture.map((furnitures) => (
          <PageItem name={PageItem.Name}/>
        ))}
      </div>
      Furniture For Sale
    </div>


  );
};


