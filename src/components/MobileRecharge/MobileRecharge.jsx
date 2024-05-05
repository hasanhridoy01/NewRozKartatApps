import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import img from "../../assets/Images/mobile/robi.png";

const currencies = [
  {
    value: "Bangladesh",
    label: "Bangladesh",
  },
  {
    value: "Iraq",
    label: "Iraq",
  },
];

const MobileRecharge = () => {
  return (
    <div style={{ marginTop: "100px", marginBottom: "100px" }}>
      <Container>
        <div className="" style={{ marginBottom: "50px" }}>
          <Typography variant="h5">Top-Up</Typography>
          <Typography variant="body1">
            Home / Bill Payment /{" "}
            <span style={{ color: "orange" }}>Top-Up</span>
          </Typography>
        </div>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          spacing={1}
        >
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              id="outlined-select-currency"
              sx={{ width: "80%" }}
              select
              label="Country List"
              defaultValue="Country List"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Stack sx={{ marginTop: "30px", marginBottom: "20px" }}>
              <label htmlFor="">Select Operator</label>
              <Stack sx={{ marginTop: "25px" }} direction={"row"} spacing={2}>
                <img
                  style={{
                    background: "#E5E7EB",
                    border: "1px solid #00a1a1",
                    padding: "15px",
                  }}
                  src={img}
                  alt=""
                />
                <img
                  style={{ background: "#E5E7EB", padding: "15px" }}
                  src={img}
                  alt=""
                />
                <img
                  style={{ background: "#E5E7EB", padding: "15px" }}
                  src={img}
                  alt=""
                />
              </Stack>
            </Stack>
            <TextField
              sx={{ width: "80%", marginTop: "10px" }}
              id="outlined-basic"
              label="Enter your Recipient Mobile number"
              variant="outlined"
            />
            <TextField
              sx={{ width: "80%", marginTop: "20px" }}
              id="outlined-basic"
              label="Enter recharge amount"
              variant="outlined"
            />
            <div className="" style={{ marginTop: "20px" }}>
              <FormControlLabel
                color="info"
                control={<Checkbox />}
                label="I agree the Terms and Conditions"
              />
            </div>
            <Stack direction={"row"} spacing={2} sx={{ marginTop: '20px', width: '458px' }}>
              <Button variant="outlined" color="info" fullWidth>Add to Cart</Button>
              <Button variant="contained" color="info" fullWidth>Add to Cart</Button>
            </Stack>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Typography variant="body2" gutterBottom>
              Recharge your mobile phone credits in Bangladesh, from anywhere,
              to anyone
            </Typography>
            <Typography variant="h6" gutterBottom>
              Description
            </Typography>
            <Typography variant="body2" gutterBottom>
              Transition from winter to spring in comforting neutrals with a
              functional feel. These sneakers are for the Air Max superfans,
              combining elements from past Air Max models. The heel cup is
              inspired by the AM90 while the AM180 influences the textured Air
              unit, which delivers just the right amount of cushioning. Go
              ahead—max out your look.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Benefits
            </Typography>
            <ul>
              <li style={{ marginTop: "8px" }}>
                The upper combines synthetic leather and airy mesh for a layered
                look built to last.
              </li>
              <li style={{ marginTop: "8px" }}>
                Plush and comfortable, the Max Air cushioning has just the right
                amount of support.
              </li>
              <li style={{ marginTop: "8px" }}>
                Rubber outsole gives you durable traction.
              </li>
            </ul>

            <Typography variant="body1" gutterBottom>
              Product details
            </Typography>
            <ul>
              <li style={{ marginTop: "8px" }}>Foam midsole</li>
              <li style={{ marginTop: "8px" }}>Rubber outsole</li>
              <li style={{ marginTop: "8px" }}>
                Colour Shown: Light Bone/Neutral Olive/Light Bone/Neutral Olive
              </li>
              <li style={{ marginTop: "8px" }}>Style: FN0136-001</li>
              <li style={{ marginTop: "8px" }}>
                Country/Region of Origin: Indonesia
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MobileRecharge;
