import { Outlet } from "react-router-dom";


/* Font-Family */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from "../../components/CommonPages/Header/Header";
import Slider from "../../components/CommonPages/Slider/Slider";

const Main = () => {
    return (
        <div style={{ width: '100%', overflow: 'hidden',}}>
          <Header />
          <Slider />
          <Outlet />  
        </div>
    );
};

export default Main;