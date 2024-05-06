import {
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  Icon,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import img from "../../assets/Images/DetailsPagesImage/card.png";
import PublicIcon from "@mui/icons-material/Public";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const DetailsPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  //page top on position...............!
  React.useEffect(() => {
    window.scrollTo(100, 100);
  }, []);

  //cart
  const [count, setCount] = React.useState(0);

  const increment = (e) => {
    e.preventDefault();
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = (e) => {
    e.preventDefault();
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  //handleBuyProduct....................!
  const handleBuyProduct = () => {
    navigate('/information');
  }

  return (
    <div style={{ marginTop: "50px", marginBottom: "100px" }}>
      <Container>
        <Typography variant="h6">Details</Typography>
        <Typography variant="body2">
          Home / Gift Card / <span style={{ color: "orange" }}>Details</span> /
          ID: <span style={{ color: "#00a1a1" }}>{params.id}</span>
        </Typography>
      </Container>
      <Container sx={{ marginTop: "50px" }}>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          spacing={2}
        >
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <img style={{ width: "100%" }} src={img} alt="" />
            <div className="" style={{ marginTop: "8px" }}>
              <Typography
                variant="body2"
                color="text.secondary"
                name="brand"
                style={{ display: "inline-flex", alignItems: "center" }}
              >
                <Icon
                  component={PublicIcon}
                  fontSize="small"
                  sx={{ verticalAlign: "middle", marginRight: "8px" }}
                />{" "}
                Global - Playstation
              </Typography>
            </div>
            <div
              className=""
              style={{
                marginTop: "21px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography>IQD 500</Typography>

              <div
                className=""
                style={{
                  padding: "20px",
                  paddingLeft: "0px",
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                }}
              >
                <Stack>
                  <div
                    className=""
                    style={{
                      display: "flex",
                      height: "52px",
                      padding: "2px 0px 0px 0px",
                      gap: "16px",
                      borderRadius: "6px 0px 0px 0px",
                      border: "1px 0px 0px 0px",
                      opacity: "0px",
                    }}
                  >
                    <RemoveIcon
                      onClick={decrement}
                      sx={{
                        border: "1px solid gray",
                        cursor: "pointer",
                        fontSize: "20px",
                        padding: "3px",
                        background: "#E5E7EB",
                        color: "#4B5563",
                        width: "28px",
                        height: "28px",
                        gap: "10px",
                        borderRadius: "6px 6px 6px 6px",
                        opacity: "0px",
                      }}
                    />
                    <Typography
                      variant="body1"
                      gutterBottom
                      sx={{
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "10px",
                        marginRight: "10px",
                        marginTop: "5px",
                        width: "9px",
                        height: "26px",
                        gap: "0px",
                        opacity: "0px",
                      }}
                    >
                      {count}
                    </Typography>
                    <AddIcon
                      onClick={increment}
                      sx={{
                        border: "1px solid gray",
                        cursor: "pointer",
                        fontSize: "20px",
                        padding: "3px",
                        background: "#E5E7EB",
                        color: "#4B5563",
                        width: "28px",
                        height: "28px",
                        gap: "10px",
                        borderRadius: "6px 6px 6px 6px",
                        opacity: "0px",
                      }}
                    />
                  </div>
                </Stack>
              </div>
            </div>
            <div className="">
              <FormControlLabel
                control={<Checkbox />}
                label="I agree the Terms and Conditions"
                color="info"
              />
            </div>
            <div
              className=""
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "26px",
              }}
            >
              <Button
                variant="outlined"
                size="large"
                color="info"
                sx={{
                  textTransform: "none",
                  width: "80%",
                  marginRight: "10px",
                }}
              >
                Add to Cart
              </Button>
              <Button
                variant="contained"
                onClick={handleBuyProduct}
                size="large"
                color="info"
                sx={{ textTransform: "none", width: "80%" }}
              >
                Buy Now
              </Button>
            </div>
            ....
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} >
            <Typography variant="h6" sx={{ fontWeight: 300, textAlign: 'left', marginBottom: '580px' }}>This package is for 500</Typography>
          </Grid>
          <Grid item lg={12} xs={12}>
            <div className="" style={{ marginTop: "57px" }}>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ marginBottom: "10px" }}
              >
                TERMS OF USE
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  marginBottom: "10px",
                  fontFamily: "sans-serif",
                  color: "gray",
                }}
              >
                UPDATED AND EFFECTIVE AS OF Jan 28 2024
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  marginBottom: "10px",
                  fontFamily: "sans-serif",
                  color: "black",
                }}
              >
                Welcome to the KARTAT website. KARTAT is an online digital goods
                and services platform that facilitates, among others, sale and
                purchase of games, related merchandise and such other items
                including but not limited to game cards, gift cards, and
                services top up merchants and buyers or customers.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default DetailsPage;
