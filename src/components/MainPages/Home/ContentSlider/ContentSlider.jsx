import { Container, Grid } from "@mui/material";
import img1 from "../../../../assets/Images/homeSlider/Rectangle 12312.png";
import img2 from "../../../../assets/Images/homeSlider/item.png";

const ContentSlider = () => {
  return (
    <div style={{ marginTop: '100px' }}>
      <>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <img style={{ width: '98%' }} src={img2} alt="" />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <img style={{ width: '98%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} src={img2} alt="" />
          </Grid>
        </Grid>
      </>
    </div>
  );
};

export default ContentSlider;
