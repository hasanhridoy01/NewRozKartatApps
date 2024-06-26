import {
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import img1 from "../../assets/Images/section_icon/webgame-colored.svg";
import img2 from "../../assets/Images/section_icon/direct-top-up-colored.svg";
import img3 from "../../assets/Images/section_icon/game-cards-colored.svg";
import img4 from "../../assets/Images/section_icon/gift-cards-colored.svg";
import img5 from "../../assets/Images/section_icon/mobile-colored.svg";
import img6 from "../../assets/Images/section_icon/playstation-colored.svg";

// import "./BillPay.css";

const BillPay = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  return (
    <div style={{ marginTop: "100px", marginBottom: "100px" }}>
      <Container>
        <div className="">
          <Typography variant="h5">Game Top-Up</Typography>
          <Typography variant="body2">
            <span style={{ color: "gray" }}>Home</span> /{" "}
            <span style={{ color: "orange" }}>Game Top-Up</span>
          </Typography>
        </div>

        <Stack direction="row" spacing={2} sx={{ marginTop: "40px" }}>
          <Grid container alignItems="center" justifyContent="center">
            <Grid item lg={2} md={3} sm={6} sx={12}>
              <Card
                className="one"
                sx={{
                  backgroundColor: isSmallScreen ? "#ffffff" : "#EFFFF8",
                  height: isSmallScreen ? "150px" : "200px",
                  "& .card-image": {
                    opacity: 1,
                    height: "35px",
                    width: "39px",
                    padding: "22px",
                    borderRadius: "50px",
                    backgroundColor: "#fff",
                  },
                  "&:hover": {
                    backgroundColor: "#ffffff",
                    "& .card-image": {
                      backgroundColor: "#EFFFF8",
                    },
                  },
                }}
              >
                <CardContent>
                  <img src={img1} alt="" className="card-image" />
                  <Typography
                    sx={{
                      marginTop: isSmallScreen ? "-3px" : "6px",
                      textAlign: "center",
                    }}
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
                  "& .card-image": {
                    opacity: 1,
                    height: "35px",
                    width: "39px",
                    padding: "22px",
                    borderRadius: "50px",
                    backgroundColor: "#EEFAFF",
                  },
                  "&:hover": {
                    backgroundColor: "#EEFAFF",
                    "& .card-image": {
                      backgroundColor: "#fff",
                    },
                  },
                }}
              >
                <CardContent>
                  <img
                    src={img2}
                    alt=""
                    className="card-image"
                    style={{ marginLeft: "10px" }}
                  />
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
                  "& .card-image": {
                    opacity: 1,
                    height: "35px",
                    width: "39px",
                    padding: "22px",
                    borderRadius: "50px",
                    backgroundColor: "#F7F0FF",
                  },
                  "&:hover": {
                    backgroundColor: "#F7F0FF",
                    "& .card-image": {
                      backgroundColor: "#fff",
                    },
                  },
                }}
              >
                <CardContent>
                  <img
                    src={img3}
                    alt=""
                    className="card-image"
                    style={{ marginLeft: "20px" }}
                  />
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
                  "& .card-image": {
                    opacity: 1,
                    height: "35px",
                    width: "39px",
                    padding: "22px",
                    borderRadius: "50px",
                    backgroundColor: "#FFF3F3",
                  },
                  "&:hover": {
                    backgroundColor: "#FFF3F3",
                    "& .card-image": {
                      backgroundColor: "#fff",
                    },
                  },
                }}
              >
                <CardContent>
                  <img
                    src={img4}
                    alt=""
                    className="card-image"
                    style={{ marginLeft: "10px" }}
                  />
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
                  "& .card-image": {
                    opacity: 1,
                    height: "35px",
                    width: "39px",
                    padding: "22px",
                    borderRadius: "50px",
                    backgroundColor: "#EDFFE9",
                  },
                  "&:hover": {
                    backgroundColor: "#EDFFE9",
                    "& .card-image": {
                      backgroundColor: "#fff",
                    },
                  },
                }}
              >
                <CardContent>
                  <img
                    src={img5}
                    alt=""
                    className="card-image"
                    style={{ marginLeft: "20px" }}
                  />
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
                  "& .card-image": {
                    opacity: 1,
                    height: "35px",
                    width: "39px",
                    padding: "22px",
                    borderRadius: "50px",
                    backgroundColor: "#FFFAEC",
                  },
                  "&:hover": {
                    backgroundColor: "#FFFAEC",
                    "& .card-image": {
                      backgroundColor: "#fff",
                    },
                  },
                }}
              >
                <CardContent>
                  <img src={img6} className="card-image" alt="" />
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

        <Stack direction="row" spacing={2} sx={{ marginTop: "2px" }}>
          <Grid container alignItems="center" justifyContent="center">
            <Grid item lg={2} md={3} sm={6} sx={12}>
              <Card
                className="one"
                sx={{
                  backgroundColor: isSmallScreen ? "#ffffff" : "#EFFFF8",
                  height: isSmallScreen ? "150px" : "200px",
                  "& .card-image": {
                    opacity: 1,
                    height: "35px",
                    width: "39px",
                    padding: "22px",
                    borderRadius: "50px",
                    backgroundColor: "#fff",
                  },
                  "&:hover": {
                    backgroundColor: "#ffffff",
                    "& .card-image": {
                      backgroundColor: "#EFFFF8",
                    },
                  },
                }}
              >
                <CardContent>
                  <img src={img1} alt="" className="card-image" />
                  <Typography
                    sx={{
                      marginTop: isSmallScreen ? "-3px" : "6px",
                      textAlign: "center",
                    }}
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
                  "& .card-image": {
                    opacity: 1,
                    height: "35px",
                    width: "39px",
                    padding: "22px",
                    borderRadius: "50px",
                    backgroundColor: "#EEFAFF",
                  },
                  "&:hover": {
                    backgroundColor: "#EEFAFF",
                    "& .card-image": {
                      backgroundColor: "#fff",
                    },
                  },
                }}
              >
                <CardContent>
                  <img
                    src={img2}
                    alt=""
                    className="card-image"
                    style={{ marginLeft: "10px" }}
                  />
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
                  "& .card-image": {
                    opacity: 1,
                    height: "35px",
                    width: "39px",
                    padding: "22px",
                    borderRadius: "50px",
                    backgroundColor: "#F7F0FF",
                  },
                  "&:hover": {
                    backgroundColor: "#F7F0FF",
                    "& .card-image": {
                      backgroundColor: "#fff",
                    },
                  },
                }}
              >
                <CardContent>
                  <img
                    src={img3}
                    alt=""
                    className="card-image"
                    style={{ marginLeft: "20px" }}
                  />
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
                  "& .card-image": {
                    opacity: 1,
                    height: "35px",
                    width: "39px",
                    padding: "22px",
                    borderRadius: "50px",
                    backgroundColor: "#FFF3F3",
                  },
                  "&:hover": {
                    backgroundColor: "#FFF3F3",
                    "& .card-image": {
                      backgroundColor: "#fff",
                    },
                  },
                }}
              >
                <CardContent>
                  <img
                    src={img4}
                    alt=""
                    className="card-image"
                    style={{ marginLeft: "10px" }}
                  />
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
                  "& .card-image": {
                    opacity: 1,
                    height: "35px",
                    width: "39px",
                    padding: "22px",
                    borderRadius: "50px",
                    backgroundColor: "#EDFFE9",
                  },
                  "&:hover": {
                    backgroundColor: "#EDFFE9",
                    "& .card-image": {
                      backgroundColor: "#fff",
                    },
                  },
                }}
              >
                <CardContent>
                  <img
                    src={img5}
                    alt=""
                    className="card-image"
                    style={{ marginLeft: "20px" }}
                  />
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
                  "& .card-image": {
                    opacity: 1,
                    height: "35px",
                    width: "39px",
                    padding: "22px",
                    borderRadius: "50px",
                    backgroundColor: "#FFFAEC",
                  },
                  "&:hover": {
                    backgroundColor: "#FFFAEC",
                    "& .card-image": {
                      backgroundColor: "#fff",
                    },
                  },
                }}
              >
                <CardContent>
                  <img src={img6} className="card-image" alt="" />
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

        {/* <Stack direction="row" spacing={2} sx={{ marginTop: "1px" }}>
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
                    sx={{
                      marginTop: isSmallScreen ? "-3px" : "6px",
                      textAlign: "center",
                    }}
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
        </Stack> */}
      </Container>
    </div>
  );
};

export default BillPay;
