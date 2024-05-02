import {
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import img1 from "../../../../assets/Images/ProductCardSmall/ico1.png";
import img2 from "../../../../assets/Images/ProductCardSmall/ico2.png";
import img3 from "../../../../assets/Images/ProductCardSmall/ico4.png";
import img4 from "../../../../assets/Images/ProductCardSmall/ico6.png";
import { NavLink } from "react-router-dom";

const ProductCardSmall = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <Stack>
        <div className="" style={{ display: 'flex', marginBottom: '20px'}}>
          <Typography
            sx={{
              textAlign: "left",
              marginRight: "auto",
            }}
            variant="h6"
            gutterBottom
          >
            Games For <span style={{ fontWeight: 400 }}>(30)</span>
          </Typography>
          <Button
            sx={{ textAlign: "right", marginLeft: "auto", float: "right", textDecoration: 'underline' }}
            type="link"
          >
            View All
          </Button>
        </div>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item lg={3} md={6} sm={6} sx={12}>
            <Card sx={{ border: "1px solid var(--Border-Regular, #e5e5e5)" }}>
              <CardContent>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-around"
                >
                  <img src={img1} alt="" />
                  <div className="">
                    <Typography variant="body1">PC Games</Typography>
                    <Typography
                      variant="body2"
                      sx={{ marginTop: "5px", fontSize: "12px" }}
                    >
                      324 games for your PC
                    </Typography>
                  </div>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={3} md={6} sm={6} sx={12}>
            <Card sx={{ border: "1px solid var(--Border-Regular, #e5e5e5)" }}>
              <CardContent>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-around"
                >
                  <img src={img2} alt="" />
                  <div className="">
                    <Typography variant="body1">Playstation</Typography>
                    <Typography
                      variant="body2"
                      sx={{ marginTop: "5px", fontSize: "12px" }}
                    >
                      324 games for your PC
                    </Typography>
                  </div>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={3} md={6} sm={6} sx={12}>
            <Card sx={{ border: "1px solid var(--Border-Regular, #e5e5e5)" }}>
              <CardContent>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-around"
                >
                  <img src={img3} alt="" />
                  <div className="">
                    <Typography variant="body1">Webgame</Typography>
                    <Typography
                      variant="body2"
                      sx={{ marginTop: "5px", fontSize: "12px" }}
                    >
                      324 games for your PC
                    </Typography>
                  </div>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={3} md={6} sm={6} sx={12}>
            <Card sx={{ border: "1px solid var(--Border-Regular, #e5e5e5)" }}>
              <CardContent>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-around"
                >
                  <img src={img4} alt="" />
                  <div className="">
                    <Typography variant="body1">Xbox</Typography>
                    <Typography
                      variant="body2"
                      sx={{ marginTop: "5px", fontSize: "12px" }}
                    >
                      324 games for your PC
                    </Typography>
                  </div>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
};

export default ProductCardSmall;
