import { Container, Divider, Grid, Stack, Typography } from "@mui/material";
import img from "../../../assets/Images/Footer/subscribe.png";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PhoneInTalkTwoToneIcon from "@mui/icons-material/PhoneInTalkTwoTone";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div style={{ background: "#fafafa", paddingBottom: "30px",}}>
      <img
        style={{ width: "100%", marginBottom: "0px", background: "none" }}
        src={img}
        alt=""
      />
      <div className="" style={{ paddingTop: '30px' }}>
        <Container sx={{ marginBottom: '50px' }}>
          <Grid
            container
            alignItems={"center"}
            justifyContent={"center"}
            spacing={3}
          >
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <Stack spacing={2} sx={{ marginBottom: '30px' }}>
                <Typography variant="h6" gutterBottom>
                  Contact Us{" "}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  For any suggestions, queries or complaints please contact us
                  at :
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <EmailIcon sx={{ marginRight: "8px" }} /> support@kartat.com
                </Typography>

                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <PhoneIcon sx={{ marginRight: "8px" }} /> +917975025703
                </Typography>

                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <PhoneInTalkTwoToneIcon sx={{ marginRight: "8px" }} />{" "}
                  +917975025703
                </Typography>
              </Stack>
            </Grid>
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <Stack spacing={1}>
                <Typography variant="h6" gutterBottom>
                  Vouchers
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Gaming Cards
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Gaming CD-Key
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Game Console
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Game Top-Up
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Gift Card
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Subscription
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Play Gift Card
                </Typography>
              </Stack>
            </Grid>
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <Stack spacing={1}>
                <Typography variant="h6" gutterBottom>
                  Bill Payment
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Mobile Top-up
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Gas
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Water
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Internet
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Electricity
                </Typography>
                <Typography variant="body2" gutterBottom>
                  House Rent
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Education
                </Typography>
              </Stack>
            </Grid>
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <Stack>
                <Typography variant="h6" gutterBottom>Follow Us</Typography>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold" }}
                >
                  Hurry up.{" "}
                </Typography>
                <Typography variant="body2">
                  Hurry up. It's quick, safe, and convenient. Power up your
                  journey. Get a loyalty point with every single purchase.
                  Please follow and share with your friends
                </Typography>
                <Stack spacing={2} direction={'row'} sx={{ marginTop: '20px' }}>
                    <InstagramIcon />
                    <FacebookIcon />
                    <TwitterIcon />
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>

        <Divider />
        <Stack direction={'row'} spacing={3} alignItems={'center'} justifyContent={'center'} sx={{ padding: '20px' }}>
           <Typography variant="body1">Privacy Policy</Typography>
           <Typography variant="body1">Shipping and Handling</Typography>
           <Typography variant="body1">Terms of Service</Typography>
           <Typography variant="body1">Orders and Returns</Typography>
           <Typography variant="body1">Contact Us</Typography>
        </Stack>
        <Divider />
        <Container className="" style={{ marginTop: '50px' }}>
            <Typography variant="bodt2" gutterBottom>© 2024 and All Rights Reserved KARTAT. Powered by Newroztech</Typography>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
