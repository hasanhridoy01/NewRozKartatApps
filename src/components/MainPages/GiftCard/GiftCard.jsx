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
import img1 from "../../../assets/Images/GiftCard/card.png";
import img2 from "../../../assets/Images/GiftCard/card1.png";
import img3 from "../../../assets/Images/GiftCard/card2.png";
import img4 from "../../../assets/Images/GiftCard/card3.png";
import PublicIcon from "@mui/icons-material/Public";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const GiftCard = () => {
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
            Gift Cards <span style={{ fontWeight: 400 }}>(1500)</span>
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
            <Card sx={{ padding: 1, border: "1px solid var(--Border-Regular, #e5e5e5)" }}>
              <CardMedia
                sx={{ height: 200 }}
                image={img1}
                title="green iguana"
              />
              <CardContent sx={{ paddingLeft: "1px" }}>
                <Stack spacing={2}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    sx={{ textAlign: "left" }}
                  >
                    Play station Network Card Global
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
                    Global - Xbox
                  </Typography>
                  <Divider sx={{ margin: "auto" }} />
                </Stack>
              </CardContent>
              <CardActions>
                <Stack direction="row" spacing={2} sx={{ padding: "0px" }}>
                  <div
                    className=""
                    style={{ paddingLeft: "0px", marginLeft: "0px" }}
                  >
                    <Typography gutterBottom sx={{ fontSize: '11px' }}>
                      IQD 2405678.21
                    </Typography>
                    <Typography gutterBottom sx={{ fontSize: '13px', color: '#EC5928' }}>
                      IQA 22622177.35
                    </Typography>
                  </div>
                  <div className="" style={{ marginRight: "auto" }}>
                    <Button
                      startIcon={
                        <ShoppingCartOutlinedIcon
                          sx={{
                            fontSize: "30px",
                            color: "#000",
                            backgroundColor: "#fff",
                            padding: "6px",
                            width: "100%",
                            marginRight: "10px",
                          }}
                          size="small"
                        />
                      }
                    ></Button>
                    <Button variant="outlined" size="small">Buy Now</Button>
                  </div>
                </Stack>
              </CardActions>
            </Card>
          </Grid>
          <Grid item lg={3} md={6} sm={12} xs={12}>
            <Card sx={{ padding: 1, border: "1px solid var(--Border-Regular, #e5e5e5)" }}>
              <CardMedia
                sx={{ height: 200 }}
                image={img2}
                title="green iguana"
              />
              <CardContent sx={{ paddingLeft: "1px" }}>
                <Stack spacing={2}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    sx={{ textAlign: "left" }}
                  >
                    Play station Network Card Global
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
                <Stack direction="row" spacing={2} sx={{ padding: "0px" }}>
                  <div
                    className=""
                    style={{ paddingLeft: "0px", marginLeft: "0px" }}
                  >
                    <Typography gutterBottom sx={{ fontSize: '11px' }}>
                      IQD 2405678.21
                    </Typography>
                    <Typography gutterBottom sx={{ fontSize: '13px', color: '#EC5928' }}>
                      IQA 22622177.35
                    </Typography>
                  </div>
                  <div className="" style={{ marginRight: "auto" }}>
                    <Button
                      startIcon={
                        <ShoppingCartOutlinedIcon
                          sx={{
                            fontSize: "30px",
                            color: "#000",
                            backgroundColor: "#fff",
                            padding: "6px",
                            width: "100%",
                            marginRight: "10px",
                          }}
                          size="small"
                        />
                      }
                    ></Button>
                    <Button variant="outlined" size="small">Buy Now</Button>
                  </div>
                </Stack>
              </CardActions>
            </Card>
          </Grid>
          <Grid item lg={3} md={6} sm={12} xs={12}>
            <Card sx={{ padding: 1, border: "1px solid var(--Border-Regular, #e5e5e5)" }}>
              <CardMedia
                sx={{ height: 200 }}
                image={img3}
                title="green iguana"
              />
              <CardContent sx={{ paddingLeft: "1px" }}>
                <Stack spacing={2}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    sx={{ textAlign: "left" }}
                  >
                    Play station Network Card Global
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
                <Stack direction="row" spacing={2} sx={{ padding: "0px" }}>
                  <div
                    className=""
                    style={{ paddingLeft: "0px", marginLeft: "0px" }}
                  >
                    <Typography gutterBottom sx={{ fontSize: '11px' }}>
                      IQD 2405678.21
                    </Typography>
                    <Typography gutterBottom sx={{ fontSize: '13px', color: '#EC5928' }}>
                      IQA 22622177.35
                    </Typography>
                  </div>
                  <div className="" style={{ marginRight: "auto" }}>
                    <Button
                      startIcon={
                        <ShoppingCartOutlinedIcon
                          sx={{
                            fontSize: "30px",
                            color: "#000",
                            backgroundColor: "#fff",
                            padding: "6px",
                            width: "100%",
                            marginRight: "10px",
                          }}
                          size="small"
                        />
                      }
                    ></Button>
                    <Button variant="outlined" size="small">Buy Now</Button>
                  </div>
                </Stack>
              </CardActions>
            </Card>
          </Grid>
          <Grid item lg={3} md={6} sm={12} xs={12}>
            <Card sx={{ padding: 1, border: "1px solid var(--Border-Regular, #e5e5e5)" }}>
              <CardMedia
                sx={{ height: 200 }}
                image={img4}
                title="green iguana"
              />
              <CardContent sx={{ paddingLeft: "1px" }}>
                <Stack spacing={2}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    sx={{ textAlign: "left" }}
                  >
                    Play station Network Card Global
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
                <Stack direction="row" spacing={2} sx={{ padding: "0px" }}>
                  <div
                    className=""
                    style={{ paddingLeft: "0px", marginLeft: "0px" }}
                  >
                    <Typography gutterBottom sx={{ fontSize: '11px' }}>
                      IQD 2405678.21
                    </Typography>
                    <Typography gutterBottom sx={{ fontSize: '13px', color: '#EC5928' }}>
                      IQA 22622177.35
                    </Typography>
                  </div>
                  <div className="" style={{ marginRight: "auto" }}>
                    <Button
                      startIcon={
                        <ShoppingCartOutlinedIcon
                          sx={{
                            fontSize: "30px",
                            color: "#000",
                            backgroundColor: "#fff",
                            padding: "6px",
                            width: "100%",
                            marginRight: "10px",
                          }}
                          size="small"
                        />
                      }
                    ></Button>
                    <Button variant="outlined" size="small">Buy Now</Button>
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

export default GiftCard;
