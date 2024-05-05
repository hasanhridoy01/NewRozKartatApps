import {
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import cartImage from "../../assets/Images/thumbnail.png";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";

const AddToCart = () => {
  //page on top position..............!
  useEffect(() => {
    window.scrollTo(0, 0);
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

  //dismiss cart content...................!
  const [visible, setVisible] = React.useState(true);
  const clearItem = () => {
    setVisible(false);
  };

  return (
    <div style={{ marginTop: "80px", marginBottom: "100px" }}>
      <Container>
        <Typography variant="h5">Cart</Typography>
        <Typography variant="body2">Home / Cart</Typography>
      </Container>
      <Container sx={{ marginTop: "50px" }}>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          spacing={3}
        >
          <Grid item lg={8} md={12} sm={12}>
            <Typography variant="h6">Shopping cart</Typography>
            <Typography variant="body2" sx={{ marginBottom: "16px" }}>
              1 items in your cart
            </Typography>
            <Divider />
            <Typography
              variant="body1"
              sx={{ marginTop: "8px", marginBottom: "20px" }}
            >
              Check the products you want to purchase now.
            </Typography>
            {visible ? (
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
                <img
                  style={{ height: "80px", width: "80px" }}
                  src={cartImage}
                  alt=""
                />
                <Stack>
                  <p>10$</p>
                  <div className="" style={{ display: "flex" }}>
                    <AddIcon
                      onClick={increment}
                      sx={{
                        border: "1px solid gray",
                        cursor: "pointer",
                        fontSize: "20px",
                        padding: "3px",
                        background: "#DCFCE7",
                        color: "#40c65e",
                      }}
                    />
                    <Typography
                      variant="body1"
                      gutterBottom
                      sx={{ marginLeft: "15px", marginRight: "15px" }}
                    >
                      {count}
                    </Typography>
                    <RemoveIcon
                      onClick={decrement}
                      sx={{
                        border: "1px solid gray",
                        cursor: "pointer",
                        fontSize: "20px",
                        padding: "3px",
                        background: "#FEE2E2",
                        color: "#EF4444",
                      }}
                    />
                  </div>
                  <p>IQD 120</p>
                </Stack>
                <ClearIcon
                  onClick={clearItem}
                  sx={{
                    position: "absolute",
                    right: 580,
                    cursor: "pointer",
                    fontSize: "17px",
                    border: "1px solid #40c65e",
                    padding: "5px",
                    borderRadius: "20px",
                  }}
                />
              </div>
            ) : null}

            {visible ? (
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
                <img
                  style={{ height: "80px", width: "80px" }}
                  src={cartImage}
                  alt=""
                />
                <Stack>
                  <p>10$</p>
                  <div className="" style={{ display: "flex" }}>
                    <AddIcon
                      onClick={increment}
                      sx={{
                        border: "1px solid gray",
                        cursor: "pointer",
                        fontSize: "20px",
                        padding: "3px",
                        background: "#DCFCE7",
                        color: "#40c65e",
                      }}
                    />
                    <Typography
                      variant="body1"
                      gutterBottom
                      sx={{ marginLeft: "15px", marginRight: "15px" }}
                    >
                      {count}
                    </Typography>
                    <RemoveIcon
                      onClick={decrement}
                      sx={{
                        border: "1px solid gray",
                        cursor: "pointer",
                        fontSize: "20px",
                        padding: "3px",
                        background: "#FEE2E2",
                        color: "#EF4444",
                      }}
                    />
                  </div>
                  <p>IQD 120</p>
                </Stack>
                <ClearIcon
                  onClick={clearItem}
                  sx={{
                    position: "absolute",
                    right: 580,
                    cursor: "pointer",
                    fontSize: "17px",
                    border: "1px solid #40c65e",
                    padding: "5px",
                    borderRadius: "20px",
                  }}
                />
              </div>
            ) : null}
          </Grid>
          <Grid item lg={4} md={12} sm={12}>
            <Card
              sx={{
                padding: "20px",
                boxShadow: "none",
                border: "1px dotted gray",
              }}
            >
              <CardContent alignItems={"center"} justifyContent={"center"}>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "center", marginBottom: "15px" }}
                >
                  Order Summary
                </Typography>
                <Divider />
                <Stack spacing={2} sx={{ marginTop: "30px" }}>
                  <div
                    className=""
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography>Price:</Typography>
                    <Typography>IQD 1000</Typography>
                  </div>
                  <div
                    className=""
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography>Discount:</Typography>
                    <Typography>IQD 00</Typography>
                  </div>
                  <div
                    className=""
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography>Subtotal:</Typography>
                    <Typography>IQD 1000</Typography>
                  </div>
                  <div
                    className=""
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "30px",
                    }}
                  >
                    <Typography>Estimated Tax:</Typography>
                    <Typography>Tax Included</Typography>
                  </div>
                  <Divider />
                  <div
                    className=""
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <Typography>Total:</Typography>
                    <Typography sx={{ color: "orange" }}>IQD 1000</Typography>
                  </div>
                  <Button
                    variant="contained"
                    sx={{ textTransform: "none" }}
                    color="info"
                  >
                    Check Out
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AddToCart;
