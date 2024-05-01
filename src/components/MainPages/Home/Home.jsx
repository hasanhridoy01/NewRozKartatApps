import { Container } from "@mui/material";
import ProductCard from "./ProductCard/ProductCard";

const Home = () => {
    return (
        <div style={{ marginTop: '50px', marginBottom: '100px' }}>
            <Container>
                <ProductCard />
            </Container>
        </div>
    );
};

export default Home;