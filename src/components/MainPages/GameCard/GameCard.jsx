import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Icon,
  Stack,
  Typography,
} from "@mui/material";
import img1 from "../../../assets/Images/contentGaming/Frame 1000003047.png";
import img2 from "../../../assets/Images/contentGaming/Frame 1000003048.png";
import img3 from "../../../assets/Images/contentGaming/Frame 1000003048-1.png";
import img4 from "../../../assets/Images/contentGaming/Frame 1000002467.png";
import PublicIcon from "@mui/icons-material/Public";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Form } from "react-router-dom";
import { useState } from "react";

const GameCard = () => {
  const [cart, setCart] = useState([]);

  //handleFromSubmit......................!
  const handleFromSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  //handleCart..................!
  const handleCart = (newItem) => {
    if (!newItem) {
      console.log("Invalid item.");
      return;
    }

    const isItemInCart = cart.some((item) => item === newItem);

    if (!isItemInCart) {
      setCart((prevCart) => [...prevCart, newItem]);
    } else {
      console.log("Item already exists in the cart.");
    }
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <Stack>
        <div className="" style={{ display: "flex", marginBottom: "20px" }}>
          <Typography
            sx={{
              textAlign: "left",
              marginRight: "auto",
            }}
            variant="h6"
            gutterBottom
          >
            In-Game Currency <span style={{ fontWeight: 400 }}>(1500)</span>
          </Typography>
          <Button
            sx={{
              textAlign: "right",
              marginLeft: "auto",
              float: "right",
              textDecoration: "underline",
            }}
            type="link"
          >
            View All
          </Button>
        </div>
        <Grid spacing={1} container alignItems="center" justifyContent="center">
          <Grid item lg={3} md={6} sm={12} xs={12}>
            <Form onSubmit={handleFromSubmit}>
              <Card
                sx={{
                  padding: 1,
                  border: "1px solid var(--Border-Regular, #e5e5e5)",
                  height: '380px'
                }}
              >
                <CardMedia
                  sx={{ height: 200 }}
                  image={img1}
                  name="images"
                  title="green iguana"
                />
                <CardContent sx={{ paddingLeft: "1px" }}>
                  <Stack spacing={2}>
                    <Typography
                      gutterBottom
                      variant="body2"
                      name="productName"
                      sx={{ textAlign: "left", fontSize: '14px' }}
                    >
                      Call of Duty MW 2.0/ CW/ Vanguard/ Warzone 2.0 PC – Credit
                      Point (CP)
                    </Typography>
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
                      Global - Xbox
                    </Typography>
                    <Divider sx={{ margin: "auto" }} />
                  </Stack>
                </CardContent>
                <CardActions>
                  <Stack direction="row" spacing={3} sx={{ padding: "0px" }}>
                    <div
                      className=""
                      style={{ paddingLeft: "0px", marginLeft: "0px" }}
                    >
                      <Typography gutterBottom sx={{ fontSize: "11px" }}>
                        IQD 2405678.21
                      </Typography>
                      <Typography
                        gutterBottom
                        sx={{ fontSize: "13px", color: "#EC5928" }}
                      >
                        IQA 22622177.35
                      </Typography>
                    </div>
                    <div
                      className=""
                      style={{
                        marginRight: "auto",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <ShoppingCartOutlinedIcon
                        sx={{
                          fontSize: "20px",
                          color: "#000",
                          backgroundColor: "#fff",
                          padding: "6px",
                          marginRight: "10px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleCart("IQA 22622177.35")}
                        size="small"
                        type="button"
                      />
                      <Button variant="outlined" size="small" type="submit">
                        Buy Now
                      </Button>
                    </div>
                  </Stack>
                </CardActions>
              </Card>
            </Form>
          </Grid>
          <Grid item lg={3} md={6} sm={12} xs={12}>
            <Card
              sx={{
                padding: 1,
                border: "1px solid var(--Border-Regular, #e5e5e5)",
                height: '380px'
              }}
            >
              <CardMedia
                sx={{ height: 200 }}
                image={img2}
                title="green iguana"
              />
              <CardContent sx={{ paddingLeft: "1px" }}>
                <Stack spacing={2}>
                  <Typography
                    gutterBottom
                    sx={{ textAlign: "left", fontSize: '14px' }}
                  >
                    PUBG Mobile – UC Redeem Code (Midasbuy)
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ display: "inline-flex", alignItems: "center" }}
                  >
                    <Icon
                      component={PublicIcon}
                      fontSize="small"
                      sx={{ verticalAlign: "middle", marginRight: "8px" }}
                    />{" "}
                    Global - Hulu
                  </Typography>
                  <Divider sx={{ margin: "auto" }} />
                </Stack>
              </CardContent>
              <CardActions>
                <Stack direction="row" spacing={3} sx={{ padding: "0px" }}>
                  <div
                    className=""
                    style={{ paddingLeft: "0px", marginLeft: "0px" }}
                  >
                    <Typography gutterBottom sx={{ fontSize: "11px" }}>
                      IQD 2405678.21
                    </Typography>
                    <Typography
                      gutterBottom
                      sx={{ fontSize: "13px", color: "#EC5928" }}
                    >
                      IQA 22622177.36
                    </Typography>
                  </div>
                  <div
                    className=""
                    style={{
                      marginRight: "auto",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <ShoppingCartOutlinedIcon
                      sx={{
                        fontSize: "20px",
                        color: "#000",
                        backgroundColor: "#fff",
                        padding: "6px",
                        marginRight: "10px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleCart("IQA 22622177.36")}
                      size="small"
                    />
                    <Button variant="outlined" size="small">
                      Buy Now
                    </Button>
                  </div>
                </Stack>
              </CardActions>
            </Card>
          </Grid>
          <Grid item lg={3} md={6} sm={12} xs={12}>
            <Card
              sx={{
                padding: 1,
                border: "1px solid var(--Border-Regular, #e5e5e5)",
                height: '380px'
              }}
            >
              <CardMedia
                sx={{ height: 200 }}
                image={img3}
                title="green iguana"
              />
              <CardContent sx={{ paddingLeft: "1px" }}>
                <Stack spacing={2}>
                  <Typography
                    gutterBottom
                    sx={{ textAlign: "left", fontSize: '14px' }}
                  >
                    FC 24 - FIFA Points UC Redeem Code (Midasbuy)
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ display: "inline-flex", alignItems: "center" }}
                  >
                    <Icon
                      component={PublicIcon}
                      fontSize="small"
                      sx={{ verticalAlign: "middle", marginRight: "8px" }}
                    />{" "}
                    Global - Amazon
                  </Typography>
                  <Divider sx={{ margin: "auto" }} />
                </Stack>
              </CardContent>
              <CardActions>
                <Stack direction="row" spacing={3} sx={{ padding: "0px" }}>
                  <div
                    className=""
                    style={{ paddingLeft: "0px", marginLeft: "0px" }}
                  >
                    <Typography gutterBottom sx={{ fontSize: "11px" }}>
                      IQD 2405678.21
                    </Typography>
                    <Typography
                      gutterBottom
                      sx={{ fontSize: "13px", color: "#EC5928" }}
                    >
                      IQA 22622177.37
                    </Typography>
                  </div>
                  <div
                    className=""
                    style={{
                      marginRight: "auto",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <ShoppingCartOutlinedIcon
                      sx={{
                        fontSize: "20px",
                        color: "#000",
                        backgroundColor: "#fff",
                        padding: "6px",
                        marginRight: "10px",
                        cursor: "pointer",
                      }}
                      size="small"
                      onClick={() => handleCart("IQA 22622177.37")}
                    />
                    <Button variant="outlined" size="small">
                      Buy Now
                    </Button>
                  </div>
                </Stack>
              </CardActions>
            </Card>
          </Grid>
          <Grid item lg={3} md={6} sm={12} xs={12}>
            <Card
              sx={{
                padding: 1,
                border: "1px solid var(--Border-Regular, #e5e5e5)",
                height: '380px'
              }}
            >
              <CardMedia
                sx={{ height: 200 }}
                image={img4}
                title="green iguana"
              />
              <CardContent sx={{ paddingLeft: "1px" }}>
                <Stack spacing={2}>
                  <Typography
                    gutterBottom
                    variant="body2"
                    sx={{ textAlign: "left", fontSize: '14px' }}
                  >
                    Genshin Impact – Genesis Crystal (GC) TopUp
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ display: "inline-flex", alignItems: "center" }}
                  >
                    <Icon
                      component={PublicIcon}
                      fontSize="small"
                      sx={{ verticalAlign: "middle", marginRight: "8px" }}
                    />{" "}
                    Global - Playstation
                  </Typography>
                  <Divider sx={{ margin: "auto" }} />
                </Stack>
              </CardContent>
              <CardActions>
                <Stack direction="row" spacing={3} sx={{ padding: "0px" }}>
                  <div
                    className=""
                    style={{ paddingLeft: "0px", marginLeft: "0px" }}
                  >
                    <Typography gutterBottom sx={{ fontSize: "11px" }}>
                      IQD 2405678.21
                    </Typography>
                    <Typography
                      gutterBottom
                      sx={{ fontSize: "13px", color: "#EC5928" }}
                    >
                      IQA 22622177.38
                    </Typography>
                  </div>
                  <div
                    className=""
                    style={{
                      marginRight: "auto",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <ShoppingCartOutlinedIcon
                      sx={{
                        fontSize: "20px",
                        color: "#000",
                        backgroundColor: "#fff",
                        padding: "6px",
                        marginRight: "10px",
                        cursor: "pointer",
                      }}
                      size="small"
                      onClick={() => handleCart("IQA 22622177.38")}
                    />
                    <Button variant="outlined" size="small">
                      Buy Now
                    </Button>
                  </div>
                </Stack>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
};

export default GameCard;
