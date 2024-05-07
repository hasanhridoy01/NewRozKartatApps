import { createContext, useState } from "react";

export const DataContext = createContext(null); 

const DataProvider = ({ children }) => {
    const [singleCart, setSingleCart] = useState(null);

    return (
        <DataContext.Provider value={{ singleCart, setSingleCart }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;