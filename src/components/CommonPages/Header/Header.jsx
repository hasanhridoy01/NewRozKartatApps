import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  Container,
  Divider,
  Drawer,
  Grid,
  Select,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import logo from "../../../assets/Images/logo.png";
import logo1 from "../../../assets/Images/ico.png";
import cartImage from "../../../assets/Images/thumbnail.png";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";

import { Paper } from "@mui/material";

// Styled wrapper for the search icon
const SearchIconWrapperr = styled("div")({
  padding: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Header = () => {
  //handle nav-link active...........!
  const [isActiveHome, setIsActiveHome] = React.useState(false);
  const [isActiveGame, setIsActiveGame] = React.useState(false);
  const [isActiveVouchers, setIsActiveVouchers] = React.useState(false);
  const [isActiveBill, setIsActiveBill] = React.useState(false);
  const [isActiveMobile, setIsActiveMobile] = React.useState(false);
  const navigate = useNavigate();

  const handleActiveEffectHome = (e) => {
    e.preventDefault();
    navigate('/');
    setIsActiveHome(true);
    setIsActiveGame(false);
    setIsActiveVouchers(false);
    setIsActiveBill(false);
    setIsActiveMobile(false);
  };
  const handleActiveEffectGame = (e) => {
    e.preventDefault();
    navigate('/game');
    setIsActiveGame(true);
    setIsActiveHome(false);
    setIsActiveVouchers(false);
    setIsActiveBill(false);
    setIsActiveMobile(false);
  };
  const handleActiveEffectVouchers = (e) => {
    e.preventDefault();
    navigate('/vouchers');
    setIsActiveVouchers(true);
    setIsActiveHome(false);
    setIsActiveGame(false);
    setIsActiveBill(false);
    setIsActiveMobile(false);
  };
  const handleActiveEffectBill = (e) => {
    e.preventDefault();
    navigate('/billPay');
    setIsActiveBill(true);
    setIsActiveHome(false);
    setIsActiveGame(false);
    setIsActiveVouchers(false);
    setIsActiveMobile(false);
  };
  const handleActiveEffectMobile = (e) => {
    e.preventDefault();
    setIsActiveMobile(true);
    setIsActiveHome(false);
    setIsActiveGame(false);
    setIsActiveVouchers(false);
    setIsActiveBill(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isSmallScreen = useMediaQuery("(max-width: 1200px)");
  const isSmallScreenTwo = useMediaQuery("(max-width: 840px)");
  const isSmallScreenThree = useMediaQuery("(max-width: 640px)");

  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpenDrawer(newOpen);
  };

  //cart
  const [count, setCount] = React.useState(0);

  const increment = (e) => {
    e.preventDefault();
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = (e) => {
    e.preventDefault();
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  //dismiss cart content...................!
  const [visible, setVisible] = React.useState(true);
  const clearItem = () => {
    setVisible(false);
  };

  //handleMenuDrawer............................!
  const [drawer, setDrawer] = React.useState(false);

  const handleMenuDrawer = () => {
    setDrawer(true);
  };

  const handleCloseDrawer = () => {
    setDrawer(false);
  };

  const DrawerListTwo = (
    <Box
      sx={{ width: 250, padding: "40px" }}
      role="presentation"
      onClick={handleMenuDrawer}
    >
      <div className="" style={{ marginLeft: "50px", marginBottom: "20px" }}>
        <img src={logo} alt="" />
      </div>
      <Divider />
      <Typography
        variant="h6"
        gutterBottom
        sx={{ margin: "8px", marginLeft: "50px" }}
      >
        Home
      </Typography>
      <Divider />
      <Typography
        variant="h6"
        gutterBottom
        sx={{ margin: "8px", marginLeft: "50px" }}
      >
        Game Top-Up
      </Typography>
      <Divider />
      <Typography
        variant="h6"
        gutterBottom
        sx={{ margin: "8px", marginLeft: "50px" }}
      >
        Vouchers
      </Typography>
      <Divider />
      <Typography
        variant="h6"
        gutterBottom
        sx={{ margin: "8px", marginLeft: "50px" }}
      >
        Bill Pay
      </Typography>
      <Divider />
      <Typography
        variant="h6"
        gutterBottom
        sx={{ margin: "8px", marginLeft: "50px" }}
      >
        Mobile Recharge
      </Typography>
      <Divider />
    </Box>
  );

  const DrawerList = (
    <Box
      sx={{ width: 250, padding: "20px" }}
      role="presentation"
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{ marginTop: "26px", color: "gray" }}
      >
        <span style={{ marginRight: "10px" }}>0</span>items in your cart
      </Typography>
      <Divider width="365px" />

      {visible ? (
        <div
          className=""
          style={{
            padding: "20px",
            paddingLeft: "0px",
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <img
            style={{ height: "80px", width: "80px" }}
            src={cartImage}
            alt=""
          />
          <Stack>
            <p>10$</p>
            <div className="" style={{ display: "flex" }}>
              <AddIcon
                onClick={increment}
                sx={{
                  border: "1px solid gray",
                  cursor: "pointer",
                  fontSize: "20px",
                  padding: "3px",
                  background: "#DCFCE7",
                  color: "#40c65e",
                }}
              />
              <Typography
                variant="body1"
                gutterBottom
                sx={{ marginLeft: "15px", marginRight: "15px" }}
              >
                {count}
              </Typography>
              <RemoveIcon
                onClick={decrement}
                sx={{
                  border: "1px solid gray",
                  cursor: "pointer",
                  fontSize: "20px",
                  padding: "3px",
                  background: "#FEE2E2",
                  color: "#EF4444",
                }}
              />
            </div>
            <p>IQD 120</p>
          </Stack>
          <ClearIcon
            onClick={clearItem}
            sx={{
              position: "absolute",
              right: 14,
              cursor: "pointer",
              fontSize: "17px",
              border: "1px solid #40c65e",
              padding: "5px",
              borderRadius: "20px",
            }}
          />
        </div>
      ) : null}

      <div className="" style={{ position: "absolute", bottom: "16px" }}>
        <Button
          variant="contained"
          gutterBottom
          sx={{
            width: "365px",
            textTransform: "none",
            backgroundColor: "#25B0EB",
            boxShadow: "none",
          }}
          size="large"
        >
          Check Out
        </Button>
        <Button
          variant="outlined"
          gutterBottom
          sx={{
            width: "365px",
            marginTop: "10px",
            textTransform: "none",
            boxShadow: "none",
            border: "1px solid var(--Border-Regular, #e5e5e5)",
          }}
          size="large"
        >
          Open Cart
        </Button>
      </div>
    </Box>
  );

  return (
    <div className="top">
      <Box
        className="head"
        style={{
          ...(isSmallScreen
            ? { padding: "24px 80px 24px 70px" }
            : { padding: "24px 250px 24px 176px" }),
          height: isSmallScreenThree ? "110px" : "",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: isSmallScreenThree ? "column" : "row",
          }}
        >
          <div className="">
            <img
              src={logo}
              alt=""
              style={{
                ...(isSmallScreen
                  ? { marginLeft: "-40px" }
                  : { padding: "0px" }),
              }}
            />
          </div>
          <div
            className="search"
            style={{
              marginTop: isSmallScreenThree ? "27px" : "0px",
              marginLeft: isSmallScreenThree ? "-56px" : "0px",
            }}
          >
            <Container sx={{ display: "flex" }}>
              {" "}
              {/* Adjust the maxWidth as needed */}
              <Paper
                component="form"
                sx={{
                  p: "2px 2px",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  boxShadow: "none",
                }}
              >
                <StyledInputBase
                  placeholder="Searching For…"
                  inputProps={{ "aria-label": "search" }}
                />
                <SearchIconWrapperr>
                  <SearchIcon />
                </SearchIconWrapperr>
              </Paper>
            </Container>
          </div>
        </div>

        {isSmallScreenTwo ? (
          ""
        ) : (
          <div
            className=""
            style={{ display: "flex", height: "32px", float: "right" }}
          >
            <Button
              onClick={toggleDrawer(true)}
              startIcon={
                <ShoppingCartOutlinedIcon
                  sx={{
                    fontSize: "30px",
                    color: "#000",
                    backgroundColor: "#fff",
                    padding: "6px",
                    width: "100%",
                  }}
                />
              }
            ></Button>
            <img
              src={logo1}
              alt=""
              style={{ background: "none", width: "40px" }}
            />
            <Button
              startIcon={
                <Person2OutlinedIcon
                  sx={{
                    fontSize: "30px",
                    color: "#000",
                    backgroundColor: "#fff",
                    padding: "6px",
                    width: "100%",
                  }}
                />
              }
            ></Button>
          </div>
        )}

        <Drawer
          anchor="right"
          open={openDrawer}
          onClose={toggleDrawer(false)}
          sx={{
            width: 260, // Customize the width of the drawer
            background: "none", // Change the background color
            marginBottom: "30px",
            "& .MuiDrawer-paper": {
              // Target the paper element inside the Drawer for more specific styling
              width: 400,
              background: "#fff",
              overflow: "hidden",
              // Add more styles as needed
            },
          }}
        >
          {DrawerList}
        </Drawer>

        <Drawer open={drawer} onClose={handleCloseDrawer}>
          {DrawerListTwo}
        </Drawer>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          borderBottom: "1px solid #F0F0F0",
          borderTop: "1px solid #F0F0F0",
        }}
      >
        <Container>
          <AppBar
            elevation={0}
            sx={{
              backgroundColor: "#fff",
              boxShadow: "none",
              position: "sticky",
              top: 0,
              zIndex: 100,
            }}
          >
            <Toolbar>
              {isSmallScreenThree ? (
                <IconButton
                  size="large"
                  edge="start"
                  color="dark"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleMenuDrawer}
                >
                  <FormatListBulletedIcon />
                </IconButton>
              ) : (
                <IconButton
                  size="large"
                  edge="start"
                  color="dark"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <FormatListBulletedIcon />
                </IconButton>
              )}
              <Typography
                variant="body2"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "block" },
                  color: "#000",
                  fontWeight: "500",
                }}
              >
                EXPLORE ALL
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
                  float: "right",
                }}
              >
                <NavLink
                  to="/"
                  className="navbar"
                  onClick={handleActiveEffectHome}
                  style={{
                    borderBottom: isActiveHome ? "2px solid #EC5928" : "none",
                    padding: "20px",
                  }}
                >
                  <Typography>Home</Typography>
                </NavLink>
                <NavLink
                  to="/game"
                  className="navbar"
                  onClick={handleActiveEffectGame}
                  style={{
                    borderBottom: isActiveGame ? "2px solid #EC5928" : "none",
                    padding: "20px",
                  }}
                >
                  <Typography>Game Top-Up</Typography>
                </NavLink>
                <NavLink
                  className="navbar"
                  onClick={handleActiveEffectVouchers}
                  style={{
                    borderBottom: isActiveVouchers
                      ? "2px solid #EC5928"
                      : "none",
                    padding: "20px",
                  }}
                >
                  <Typography>Vouchers</Typography>
                </NavLink>
                <NavLink
                  className="navbar"
                  onClick={handleActiveEffectBill}
                  style={{
                    borderBottom: isActiveBill ? "2px solid #EC5928" : "none",
                    padding: "20px",
                  }}
                >
                  <Typography>Bill Pay</Typography>
                </NavLink>
                <NavLink
                  className="navbar"
                  onClick={handleActiveEffectMobile}
                  style={{
                    borderBottom: isActiveMobile ? "2px solid #EC5928" : "none",
                    padding: "20px",
                  }}
                >
                  <Typography>Mobile Recharge</Typography>
                </NavLink>
              </Stack>
            </Toolbar>
          </AppBar>
        </Container>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{ width: "1200px", marginTop: "11px", height: "600px" }}
        >
          <Container sx={{ padding: "20px" }}>
            <Grid container alignItems="center" justifyContent="center">
              <Grid item lg={4} sx={{ padding: "20px", width: "400px" }}>
                <Typography
                  variant="body2"
                  sx={{
                    marginLeft: "0px",
                    marginBottom: "20px",
                    color: "gray",
                    fontSize: "14px",
                  }}
                >
                  Vouchers
                </Typography>
                <Stack spacing={2}>
                  <NavLink className="DNav">Gaming Cards</NavLink>
                  <NavLink className="DNav">Gaming CD-Key</NavLink>
                  <NavLink className="DNav">Gaming Console</NavLink>
                  <NavLink className="DNav">Gaming Top-Up</NavLink>
                  <NavLink className="DNav">Gift Card</NavLink>
                  <NavLink className="DNav">Subscription</NavLink>
                  <NavLink className="DNav">Play Gift Card</NavLink>
                  <NavLink className="DNav">Apple Store</NavLink>
                </Stack>
              </Grid>
              <Grid item lg={4} sx={{ padding: "20px", width: "400px" }}>
                <Typography
                  variant="body2"
                  sx={{
                    marginLeft: "0px",
                    marginBottom: "20px",
                    color: "gray",
                    fontSize: "14px",
                  }}
                >
                  Bill Payment
                </Typography>
                <Stack spacing={2}>
                  <NavLink className="DNav">Mobile Top-up</NavLink>
                  <NavLink className="DNav">Gas</NavLink>
                  <NavLink className="DNav">Water</NavLink>
                  <NavLink className="DNav">Internet</NavLink>
                  <NavLink className="DNav">Electricity</NavLink>
                  <NavLink className="DNav">House Rent</NavLink>
                  <NavLink className="DNav">Education</NavLink>
                  <NavLink className="DNav"></NavLink>
                  <NavLink className="DNav"></NavLink>
                </Stack>
              </Grid>
              <Grid item lg={4} sx={{ padding: "20px", width: "400px" }}>
                <Typography
                  variant="body2"
                  sx={{
                    marginLeft: "0px",
                    marginBottom: "20px",
                    color: "gray",
                    fontSize: "14px",
                  }}
                >
                  Game
                </Typography>
                <Stack spacing={2}>
                  <NavLink className="DNav">PC Games</NavLink>
                  <NavLink className="DNav">WebGame</NavLink>
                  <NavLink className="DNav">Mobile Games</NavLink>
                  <NavLink className="DNav">PlayStation</NavLink>
                  <NavLink className="DNav">Xbox Games</NavLink>
                  <NavLink className="DNav"></NavLink>
                  <NavLink className="DNav"></NavLink>
                  <NavLink className="DNav"></NavLink>
                  <NavLink className="DNav"></NavLink>
                  <NavLink className="DNav"></NavLink>
                  <NavLink className="DNav"></NavLink>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Menu>
      </Box>
    </div>
  );
};

export default Header;
