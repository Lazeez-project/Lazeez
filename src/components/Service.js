import React from "react";
import Box from "@material-ui/core/Box";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import Fab from "@mui/material/Fab";
export const Service = () => {
  return (
    <Box
      sx={{
        color: "var(--main-color)",
        marginLeft: 70,
        marginBottom: 50,
        paddingLeft: 10,
      }}
    >
      <h1 style={{ fontWeight: "normal" }}>Restaurant Services :</h1>
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          paddingTop: 30,
        }}
      >
        <Box sx={{ color: "black", marginRight: 30 }}>
          <Fab
            sx={{
              marginBottom: 2,
              color: "var(--bg-color)",
              backgroundColor: "var(--main-color)",
            }}
          >
            <FastfoodIcon fontSize="large" />
          </Fab>
          <h2 style={{ marginBottom: 2, fontWeight: "normal" }}>Fast food</h2>
          <p>
            Providing food and drink services to
            <br /> guests in and restaurants, showing <br /> attentiveness, and
            understanding of their needs and expectations.
          </p>
        </Box>
        <Box sx={{ color: "black", marginRight: 30 }}>
          <Fab
            sx={{
              marginBottom: 2,
              color: "var(--bg-color)",
              backgroundColor: "var(--main-color)",
            }}
          >
            <DeliveryDiningIcon fontSize="large" />
          </Fab>
          <h2 style={{ marginBottom: 2, fontWeight: "normal" }}>
            Fast Delivery
          </h2>
          <p style={{ color: "rgb(44, 39, 39)" }}>
            Providing food and drink services to <br />
            guests in and restaurants, showing <br />
            attentiveness, and understanding of their needs and expectations.
          </p>
        </Box>
        <Box sx={{ color: "black" }}>
          <Fab
            sx={{
              marginBottom: 2,
              color: "var(--bg-color)",
              backgroundColor: "var(--main-color)",
            }}
          >
            <CoffeeMakerIcon fontSize="large" />
          </Fab>
          <h2 style={{ marginBottom: 2, fontWeight: "normal" }}>hot drinks</h2>
          <p style={{}}>
            Providing food and drink services to <br /> guests in and
            restaurants, showing
            <br /> attentiveness, and understanding of their needs and
            expectations.
          </p>
        </Box>
      </Box>
    </Box>
  );
};
export default Service;
