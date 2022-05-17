import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import HistoryIcon from "@mui/icons-material/History";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
// import chivasLogo from "../assets/chivasLogo.png";
import { Link } from "react-router-dom";
import { Badge, createTheme, ThemeProvider } from "@mui/material";
import { Bookmark, Logout, ShoppingCart } from "@mui/icons-material";
import { clientContext } from "../contexts/ClientContext";
import logo from "../assets/logo.png";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const data = React.useContext(clientContext);
  const { cartCount, authWithGoogle, user, logOut } = data;

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const darkTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#151515"
        // "#151515",
        // "#0c0d0d"
      },
    },
  });

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="sticky">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                <Link to="/" className="logo-chivas">
                  <img width={50} src={logo} alt="" />
                </Link>
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <div className="tochka">
                    <Link to="/catalog">
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">Catalog</Typography>
                      </MenuItem>
                    </Link>
                    <Link to="/admin-panel">
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">
                          Admin Panel
                        </Typography>
                      </MenuItem>
                    </Link>
                    <Link to="/admin-panel/add">
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">
                          Add Product
                        </Typography>
                      </MenuItem>
                    </Link>
                    <Link to="/favorites">
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">Favorites</Typography>
                      </MenuItem>
                    </Link>
                    <Link to="/bottles-firebase">
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">Firebase</Typography>
                      </MenuItem>
                    </Link>
                    <Link to="/chat">
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">Chat</Typography>
                      </MenuItem>
                    </Link>
                    <Link to="/auth">
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">Authorization</Typography>
                      </MenuItem>
                    </Link>
                  </div>
                </Menu>
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              >
                <Link to="/" className="chivas-logo">
                  <img width={50} src={logo} alt="" />
                </Link>
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Link to="/catalog">
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    Catalog
                  </Button>
                </Link>
                <Link to="/admin-panel">
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    Admin Panel
                  </Button>
                </Link>
                <Link to="/admin-panel/add">
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    Add Product
                  </Button>
                </Link>
                <Link to="/bottles-firebase">
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    Firebase
                  </Button>
                </Link>
                <Link to="/chat">
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    Chat
                  </Button>
                </Link>
              </Box>

              <Box
                style={{ display: "flex", alignItems: "center" }}
                sx={{ flexGrow: 0 }}
              >
                <Link to="/favorites" style={{ marginRight: 10 }}>
                  <Bookmark style={{ color: "white" }} />
                </Link>
                <Link to="/history" style={{ marginRight: 10 }}>
                  <HistoryIcon style={{ color: "white" }}/>
                </Link>
                <Link to="/cart" style={{ marginRight: 10 }}>
                  <Badge badgeContent={cartCount} color="error">
                    <ShoppingCart style={{ color: "white" }} />
                  </Badge>
                </Link>
                {user ? (
                  <>
                    <Avatar
                      src={user.photoURL}
                      alt={user.displayName}
                      style={{ marginRight: 10 }}
                    />
                    <span className="username" style={{ marginRight: 10, color: "white" }}>
                      {user.email}
                    </span>
                    <Button onClick={logOut}>
                      <Logout color="error" />
                    </Button>
                  </>
                ) : (
                  <Button
                    className="singup-btn"
                    onClick={authWithGoogle}
                    variant="contained"
                    // theme={theme}
                  >
                    Войти
                  </Button>
                )}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </React.Fragment>
  );
};
export default Navbar;
