import { createContext, useState } from "react";
import Header from "../../components/CommonPages/Header/Header";

export const DataContext = createContext(null); 

const DataProvider = ({ children }) => {
    const [singleCart, setSingleCart] = useState(null);

    // Function to send data to other components
    const cartData = (cart) => {
        setSingleCart(cart);
    }

    return (
        <DataContext.Provider value={{ singleCart, cartData }}>
            
        </DataContext.Provider>
    );
};

export default DataProvider;
