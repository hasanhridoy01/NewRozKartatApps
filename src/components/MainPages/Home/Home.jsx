import { Container } from "@mui/material";
import ProductCard from "./ProductCard/ProductCard";
import ProductCardSmall from "./ProductCardSmall/ProductCardSmall";
import GiftCard from "../GiftCard/GiftCard";
import ContentSlider from "./ContentSlider/ContentSlider";
import GameCard from "../GameCard/GameCard";

const Home = () => {
    return (
        <div style={{ marginTop: '50px', marginBottom: '100px', }}>
            <Container>
                <ProductCard />
                <ProductCardSmall />
                <GiftCard />
                <ContentSlider />
                <GameCard />
            </Container>
        </div>
    );
};

export default Home;