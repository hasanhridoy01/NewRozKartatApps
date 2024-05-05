import {
    Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const CustomerInformation = () => {
  return (
    <div style={{ marginTop: "80px", marginBottom: "100px" }}>
      <Container>
        <Typography variant="h5">Customer Information</Typography>
        <Typography variant="body2">
          Home / Cart /{" "}
          <span style={{ color: "orange" }}>Customer Information</span>
        </Typography>
      </Container>
      <Container sx={{ marginTop: "40px" }}>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          spacing={5}
        >
          <Grid item lg={8} md={12} sm={12}>
            <Stack direction={"row"} spacing={2}>
              <div
                className=""
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <label htmlFor="" style={{ marginBottom: "15px" }}>
                  Name
                </label>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  sx={{ background: "#FAFAFA" }}
                />
              </div>
              <div
                className=""
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <label htmlFor="" style={{ marginBottom: "15px" }}>
                  Email
                </label>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  sx={{ background: "#FAFAFA" }}
                />
              </div>
            </Stack>
            <Stack direction={"row"} spacing={2} style={{ marginTop: "40px" }}>
              <div
                className=""
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <label htmlFor="" style={{ marginBottom: "15px" }}>
                  Country
                </label>
                <TextField
                  id="outlined-basic"
                  label="Country"
                  variant="outlined"
                  sx={{ background: "#FAFAFA" }}
                />
              </div>
              <div
                className=""
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <label htmlFor="" style={{ marginBottom: "15px" }}>
                  City
                </label>
                <TextField
                  id="outlined-basic"
                  label="City"
                  variant="outlined"
                  sx={{ background: "#FAFAFA" }}
                />
              </div>
              <div
                className=""
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <label htmlFor="" style={{ marginBottom: "15px" }}>
                  Code
                </label>
                <TextField
                  id="outlined-basic"
                  label="Code"
                  variant="outlined"
                  sx={{ background: "#FAFAFA" }}
                />
              </div>
            </Stack>
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                marginTop: '30px'
              }}
            >
              <label htmlFor="" style={{ marginBottom: "15px" }}>
                Address
              </label>
              <TextField
                id="outlined-basic"
                label="Address"
                variant="outlined"
                sx={{ background: "#FAFAFA" }}
              />
            </div>
            <Button variant="contained" color="info" size="large" sx={{ marginTop: '10px', float: 'right', boxShadow: 'none', textTransform: 'none' }}>Proceed</Button>
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
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CustomerInformation;
