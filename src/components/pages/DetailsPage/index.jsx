import './styles.css';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import FurnitureOrderContext from '../../../furnitureOrderContext';

export const  FurnitureDetailsPage = (props) =>{
    const {id} = useParams();

    const globalstate = useContext(FurnitureOrderContext);

    const [furniture, setFurniture] = useState ({});

    useEffect(() => {
        const furniture = globalstate.furniture.find(
            (furniture) => furniture.id.stringValue === id
        );
        setFurniture(furniture);
    }, [])

    if (furniture) {
        return(
            <div className="furniture-page">
                <h1 className="furniture-title"> {furniture.name?.stringValue} </h1>
                <img src={furniture.image?.stringValue} alt = "furniture-photo"/>
            </div>
        )
    }else {
        return <p> No Furniture to be Found </p>
    }

}
