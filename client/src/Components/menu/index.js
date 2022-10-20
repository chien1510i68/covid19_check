import * as React from "react";
import { Link } from "react-router-dom";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Box } from "@mui/material";
export default function MenuPages() {
  const [alignment, setAlignment] = React.useState("VI");
  const [menu, setMenu] = React.useState("Home ", "CoronaVirus", "Vaccines");

  const handonChangeMenu = (e, newMenu) => {
    if (newMenu !== null) {
      setMenu(newMenu);
    }
  };

  const handleChange = (event, newAlignment) => {
    // Tránh loại bỏ nút đã chọn
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };


  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
        <Box className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <Box className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Box>
          <ToggleButtonGroup sx={{ width: 250, borderRadius: 2 }}>
            <Link to="/">
              <ToggleButton
                sx={{
                  width: 250,
                  bgcolor: "#FFFFFF",
                  fontWeight: "bold",
                  color: "#626D7B",
                  borderRadius: 2,
                }}
              >
                data-covid-19
              </ToggleButton>
            </Link>
          </ToggleButtonGroup>
        </Box>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </Box>
          <Box
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <ToggleButtonGroup
            sx={{ bgcolor: "#FFFFFF" }}
            value={menu}
            exclusive
            onChange={handonChangeMenu}
            aria-label="text alignment"
          >
            <ToggleButton
              value="Home"
              sx={{
                bgcolor: "#FFFFFF",
                fontWeight: "bold",
                color: "#626D7B",
                width: 150,
                display : "grid",
              }}
            >
              <Link to="/">Home</Link>
            </ToggleButton>
            <ToggleButton
              value="CoronaVirus"
              sx={{
                bgcolor: "#FFFFFF",
                fontWeight: "bold",
                color: "#626D7B",
                width: 150,
              }}
            >
              <Link to="/CoronaVirus">CoronaVirus</Link>
            </ToggleButton>
            <ToggleButton
              value="Vaccines"
              sx={{
                bgcolor: "#FFFFFF",
                fontWeight: "bold",
                color: "#626D7B",
                width: 150,
              }}
            >
              <Link to="/Vaccines">Vaccines</Link>
            </ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup
            sx={{ bgcolor: "#FFFFFF", marginLeft: 2 }}
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="text alignment"
          >
            <ToggleButton
              value="VI"
              sx={{ fontWeight: 600, width: 60, color: "#626D7B" }}
            >
              VI
            </ToggleButton>
            <ToggleButton
              value="EN"
              sx={{ fontWeight: 600, width: 60, color: "#626D7B" }}
            >
              EN
            </ToggleButton>
          </ToggleButtonGroup>
            </ul>
          </Box>
        </Box>
      </nav>
    </>
  );
}













// ---------------------------------








