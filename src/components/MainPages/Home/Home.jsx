import { Container } from "@mui/material";
import ProductCard from "./ProductCard/ProductCard";
import ProductCardSmall from "./ProductCardSmall/ProductCardSmall";
import GiftCard from "../GiftCard/GiftCard";
import ContentSlider from "./ContentSlider/ContentSlider";
import GameCard from "../GameCard/GameCard";
import BigIamages from "../BigIamages/BigIamages";
import GameCD from "../GameCD/GameCD";
import Arrivals from "../Arrivals/Arrivals";

const Home = () => {
    return (
        <div style={{ marginTop: '50px', marginBottom: '100px',}}>
            <Container>
                <ProductCard />
                <ProductCardSmall />
                <GiftCard />
                <ContentSlider />
                <GameCard />
                <BigIamages />
                <GameCD />
                <Arrivals />
            </Container>
        </div>
    );
};

export default Home;