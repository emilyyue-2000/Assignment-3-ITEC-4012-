import { instanceOf } from 'prop-types';
import React, {useState} from 'react';

const FurnitureOrderContext = React.createContext({
    furniture: [],
    order: [],
    initalizeFurniture: () => {},
    addFurnitureToOrder: () => {},
    removeFurnitureFromOrder: () => {},
});

export const FurnitureOrderContextProvider = (props) => {
    const [order, setOrder] = useState([]);
    const [furniture, setFurniture] = useState([]);
    console.log('texting initilization');
    const initalizeFurniture = (furnitureFromApi) => {
        console.log ('testing init');
        setFurniture(furnitureFromApi);
        console.log('texting initilization');
    }

    const addFurnitureToOrder = (furniture) => {
        console.log('texting initilization');
        let newOrder = order; 
        newOrder.push (furniture);
        setOrder(order);
    }

    const removeFurnitureFromOrder = (furnitureId) => {
        console.log('texting initilization');
        let prevOrder = order;
        const found = order.findIndex( (furniture ) => {
            return (furniture.id === furnitureId); 
        })
        if (found !== -1) {
            prevOrder.splice(found, 1); // delete one
            setOrder([...prevOrder]);
        } else {
            console.log ("error delete");
        }
    }
    
    return (<FurnitureOrderContext.Provider
     value={{order: order, addFurnitureToOrder: addFurnitureToOrder, removeFurnitureFromOrder: removeFurnitureFromOrder, furniture: furniture, initalizeFurniture: initalizeFurniture }}
    >
        {props.children}
    </FurnitureOrderContext.Provider>)

} 

export default FurnitureOrderContext;