import { Button, Grid, Typography } from "@mui/material";
import img1 from "../../../assets/Images/GameCD/item.png";
import img2 from "../../../assets/Images/GameCD/item 1.png";
import img3 from "../../../assets/Images/GameCD/item 2.png";

const Arrivals = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="" style={{ display: "flex", marginBottom: "20px" }}>
        <Typography
          sx={{
            textAlign: "left",
            marginRight: "auto",
          }}
          variant="h6"
          gutterBottom
        >
          New Arrivals <span style={{ fontWeight: 400 }}>(9)</span>
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
      <Grid container alignItems="center" justifyContent="center">
        <Grid item lg={4} sm={6} xs={12}>
          <img style={{ width: "98%" }} src={img1} alt="" />
        </Grid>
        <Grid item lg={4} sm={6} xs={12}>
          <img style={{ width: "98%" }} src={img2} alt="" />
        </Grid>
        <Grid item lg={4} sm={6} xs={12}>
          <img style={{ width: "98%" }} src={img3} alt="" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Arrivals;
