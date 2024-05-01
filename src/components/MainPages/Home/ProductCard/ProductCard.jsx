import {
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import "./ProductCard.css";

import img1 from "../../../../assets/Images/ProductCard/Frame 1000002522.png";
import img2 from "../../../../assets/Images/ProductCard/gas.png";
import img3 from "../../../../assets/Images/ProductCard/Frame 1000002524.png";
import img4 from "../../../../assets/Images/ProductCard/Frame 1000002525.png";
import img5 from "../../../../assets/Images/ProductCard/Frame 1000002526.png";
import img6 from "../../../../assets/Images/ProductCard/Frame 1000002527.png";

const ProductCard = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item lg={2} md={3} sm={6} sx={12}>
            <Card
              className="one"
              sx={{
                backgroundColor: isSmallScreen ? "#ffffff" : "#EFFFF8",
                height: isSmallScreen ? "150px" : "200px",
                border: isSmallScreen
                  ? "none"
                  : "1px solid var(--Border-Regular, #e5e5e5)",
                boxShadow: isSmallScreen
                  ? "none"
                  : "0px 1px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardContent>
                <img src={img1} alt="" />
                <Typography
                  sx={{ marginTop: isSmallScreen ? "-3px" : '6px', textAlign: "center" }}
                  variant="body1"
                >
                  Gift Cards
                </Typography>
                <>
                  {isSmallScreen ? null : (
                    <div className="">
                      <Typography
                        sx={{
                          fontSize: "12px",
                          textAlign: "center",
                          marginTop: "10px",
                        }}
                      >
                        Tap to find all
                      </Typography>
                      <Typography
                        sx={{ fontSize: "10px", textAlign: "center" }}
                      >
                        Gift Cards
                      </Typography>
                    </div>
                  )}
                </>
              </CardContent>
            </Card>
          </Grid>

          <Grid item lg={2} md={3} sm={6} sx={12}>
            <Card
              className="one"
              sx={{
                backgroundColor: "#FFFFFF",
                height: isSmallScreen ? "150px" : "200px",
                border: isSmallScreen
                  ? "none"
                  : "1px solid var(--Border-Regular, #e5e5e5)",
                boxShadow: isSmallScreen
                  ? "none"
                  : "0px 1px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardContent>
                <img src={img2} alt="" style={{ marginLeft: "10px" }} />
                <div className="">
                  <Typography
                    sx={{ marginTop: "10px", textAlign: "center" }}
                    variant="body1"
                  >
                    Game Cards
                  </Typography>
                  <>
                    {isSmallScreen ? null : (
                      <div className="">
                        <Typography
                          sx={{
                            fontSize: "12px",
                            textAlign: "center",
                            marginTop: "10px",
                          }}
                        >
                          Tap to find all
                        </Typography>
                        <Typography
                          sx={{ fontSize: "10px", textAlign: "center" }}
                        >
                          Gift Cards
                        </Typography>
                      </div>
                    )}
                  </>
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid item lg={2} md={3} sm={6} sx={12}>
            <Card
              className="one"
              sx={{
                backgroundColor: "#FFFFFF",
                height: isSmallScreen ? "150px" : "200px",
                border: isSmallScreen
                  ? "none"
                  : "1px solid var(--Border-Regular, #e5e5e5)",
                boxShadow: isSmallScreen
                  ? "none"
                  : "0px 1px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardContent>
                <img src={img3} alt="" style={{ marginLeft: "20px" }} />
                <div className="">
                  <Typography
                    sx={{ marginTop: "10px", textAlign: "center" }}
                    variant="body1"
                  >
                    Shopping Cards
                  </Typography>
                  <>
                    {isSmallScreen ? null : (
                      <div className="">
                        <Typography
                          sx={{
                            fontSize: "12px",
                            textAlign: "center",
                            marginTop: "10px",
                          }}
                        >
                          Tap to find all
                        </Typography>
                        <Typography
                          sx={{ fontSize: "10px", textAlign: "center" }}
                        >
                          Gift Cards
                        </Typography>
                      </div>
                    )}
                  </>
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid item lg={2} md={3} sm={6} sx={12}>
            <Card
              className="one"
              sx={{
                backgroundColor: "#FFFFFF",
                height: isSmallScreen ? "150px" : "200px",
                border: isSmallScreen
                  ? "none"
                  : "1px solid var(--Border-Regular, #e5e5e5)",
                boxShadow: isSmallScreen
                  ? "none"
                  : "0px 1px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardContent>
                <img src={img4} alt="" style={{ marginLeft: "10px" }} />
                <div className="">
                  <Typography
                    sx={{ marginTop: "10px", textAlign: "center" }}
                    variant="body1"
                  >
                    Direct Cards
                  </Typography>
                  <>
                    {isSmallScreen ? null : (
                      <div className="">
                        <Typography
                          sx={{
                            fontSize: "12px",
                            textAlign: "center",
                            marginTop: "10px",
                          }}
                        >
                          Tap to find all
                        </Typography>
                        <Typography
                          sx={{ fontSize: "10px", textAlign: "center" }}
                        >
                          Gift Cards
                        </Typography>
                      </div>
                    )}
                  </>
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid item lg={2} md={3} sm={6} sx={12}>
            <Card
              className="one"
              sx={{
                backgroundColor: "#FFFFFF",
                height: isSmallScreen ? "150px" : "200px",
                border: isSmallScreen
                  ? "none"
                  : "1px solid var(--Border-Regular, #e5e5e5)",
                boxShadow: isSmallScreen
                  ? "none"
                  : "0px 1px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardContent>
                <img src={img5} alt="" style={{ marginLeft: "20px" }} />
                <div className="">
                  <Typography
                    sx={{ marginTop: "10px", textAlign: "center" }}
                    variant="body1"
                  >
                    Mobile Recharge
                  </Typography>
                  <>
                    {isSmallScreen ? null : (
                      <div className="">
                        <Typography
                          sx={{
                            fontSize: "12px",
                            textAlign: "center",
                            marginTop: "10px",
                          }}
                        >
                          Tap to find all
                        </Typography>
                        <Typography
                          sx={{ fontSize: "10px", textAlign: "center" }}
                        >
                          Gift Cards
                        </Typography>
                      </div>
                    )}
                  </>
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid item lg={2} md={3} sm={6} sx={12}>
            <Card
              className="one"
              sx={{
                backgroundColor: "#FFFFFF",
                height: isSmallScreen ? "150px" : "200px",
                border: isSmallScreen
                  ? "none"
                  : "1px solid var(--Border-Regular, #e5e5e5)",
                boxShadow: isSmallScreen
                  ? "none"
                  : "0px 1px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardContent>
                <img src={img6} alt="" />
                <div className="">
                  <Typography
                    sx={{ marginTop: "10px", textAlign: "center" }}
                    variant="body1"
                  >
                    Bill Pay
                  </Typography>
                  <>
                    {isSmallScreen ? null : (
                      <div className="">
                        <Typography
                          sx={{
                            fontSize: "12px",
                            textAlign: "center",
                            marginTop: "10px",
                          }}
                        >
                          Tap to find all
                        </Typography>
                        <Typography
                          sx={{ fontSize: "10px", textAlign: "center" }}
                        >
                          Gift Cards
                        </Typography>
                      </div>
                    )}
                  </>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
};

export default ProductCard;
