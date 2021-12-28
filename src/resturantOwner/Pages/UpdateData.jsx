import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
const defaultValues = {
    RestaurantName: "",
    Location: "",
    PhoneNumber: "",
    MobileNumber:"",
    Email: "",
    Facebook: "",
    Instagram: "",
    Pictures: "",
    fromTim: "",
    timeTo: "",
    AvailableDays: "",
    St: "",
    Su: "",
    Mo: "",
    Tu: "",
    We: "",
    Thr:"",
    Fri:"", 
};

const UpdateData = () => {
    const [formValues, setFormValues] = useState(defaultValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
          ...formValues,
          [name]: value,
        });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
      };
    return (
      <Box sx={{ width: "100%", minHeight: "100vh" }}>
        <form onSubmit={handleSubmit}>
          <Box className="reigester" sx={{ padding: 10, fontSize: 22 }}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography variant="p">Restaurant Name</Typography>
              <TextField
                style={{
                  marginLeft: 20,
                  backgroundColor: "#fff",
                  width: "50%",
                }}
                size="small"
                variant="outlined"
                id="name-input"
                name="RestaurantName"
                type="text"
                value={formValues.name}
                onChange={handleInputChange}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", marginTop: 2 }}>
              <Typography variant="p">Location</Typography>
              <TextField
                style={{
                  marginLeft: 118,
                  backgroundColor: "#fff",
                  width: "50%",
                }}
                size="small"
                variant="outlined"
                id="Location"
                name="Location"
                type="text"
                value={formValues.name}
                onChange={handleInputChange}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", marginTop: 2 }}>
              <Typography variant="p">Pictures</Typography>
              <input
                style={{ marginLeft: 128 }}
                id="Pictures"
                type="file"
                name="Pictures"
                value={formValues.name}
                onChange={handleInputChange}
              />
            </Box>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  color: "var(--main-color)",
                  fontWeight: "normal",
                  paddingTop: 5,
                  fontSize: 27,
                }}
              >
                About Your Restaurant:
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", marginTop: 2 }}>
                <Typography variant="p">Pictures</Typography>
                <Typography variant="p" sx={{ marginLeft: 16 }}>
                  From
                </Typography>
                <input
                  style={{ marginLeft: 9, paddingLeft: 20 }}
                  id="fromTim"
                  name="fromTim"
                  type="time"
                  value={formValues.fromTim}
                  onChange={handleInputChange}
                />
                <Typography variant="p" sx={{ marginLeft: 5 }}>
                  To
                </Typography>
                <input
                  style={{ marginLeft: 9, paddingLeft: 20 }}
                  id="timeTo"
                  name="timeTo"
                  type="time"
                  value={formValues.timeTo}
                  onChange={handleInputChange}
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", marginTop: 2 }}>
                <Typography variant="p">Available days</Typography>
                <Box sx={{ marginLeft: 6 }}>
                  <Checkbox
                    id="Su"
                    name="Su"
                    value={formValues.name}
                    onChange={handleInputChange}
                  />

                  <label>Su</label>
                  <Checkbox
                    id="Mo"
                    name="Mo"
                    value={formValues.name}
                    onChange={handleInputChange}
                  />

                  <label>Mo</label>
                  <Checkbox
                    id="Tu"
                    name="Tu"
                    value={formValues.name}
                    onChange={handleInputChange}
                  />

                  <label>Tu</label>
                  <Checkbox
                    id="We"
                    name="We"
                    value={formValues.name}
                    onChange={handleInputChange}
                  />
                  <label>We</label>
                  <Checkbox
                    id="Thr"
                    name="Thr"
                    value={formValues.name}
                    onChange={handleInputChange}
                  />
                  <label>Thr</label>
                  <Checkbox
                    id="Fri"
                    name="Fri"
                    value={formValues.name}
                    onChange={handleInputChange}
                  />
                  <label>Fri</label>
                  <Checkbox
                    id="St"
                    name="St"
                    value={formValues.name}
                    onChange={handleInputChange}
                  />
                  <label>St</label>
                </Box>
              </Box>
            </Box>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  color: "var(--main-color)",
                  fontWeight: "normal",
                  paddingTop: 5,
                  fontSize: 35,
                }}
              >
                Contact:
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", marginTop: 2 }}>
                <Typography variant="p">Phone Number</Typography>
                <TextField
                  style={{
                    marginLeft: 39,
                    backgroundColor: "#fff",
                    width: "50%",
                  }}
                  size="small"
                  variant="outlined"
                  id="Phone_number"
                  name="PhoneNumber"
                  type="text"
                  value={formValues.name}
                  onChange={handleInputChange}
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", marginTop: 2 }}>
                <Typography variant="p">Mobile Number</Typography>
                <TextField
                  style={{
                    marginLeft: 36,
                    backgroundColor: "#fff",
                    width: "50%",
                  }}
                  size="small"
                  variant="outlined"
                  id="mobile_number"
                  name="MobileNumber"
                  type="text"
                  value={formValues.name}
                  onChange={handleInputChange}
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", marginTop: 2 }}>
                <Typography variant="p">Email</Typography>
                <TextField
                  style={{
                    marginLeft: 142,
                    backgroundColor: "#fff",
                    width: "50%",
                  }}
                  size="small"
                  variant="outlined"
                  id="email"
                  name="Email"
                  type="email"
                  value={formValues.name}
                  onChange={handleInputChange}
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", marginTop: 2 }}>
                <Typography variant="p">Facebook</Typography>
                <TextField
                  style={{
                    marginLeft: 94,
                    backgroundColor: "#fff",
                    width: "50%",
                  }}
                  size="small"
                  variant="outlined"
                  id="Facebook"
                  name="Facebook"
                  type="text"
                  value={formValues.name}
                  onChange={handleInputChange}
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", marginTop: 2 }}>
                <Typography variant="p">Instagram</Typography>
                <TextField
                  style={{
                    marginLeft: 86,
                    backgroundColor: "#fff",
                    width: "50%",
                  }}
                  size="small"
                  variant="outlined"
                  id="Instagram"
                  name="Instagram"
                  type="text"
                  value={formValues.name}
                  onChange={handleInputChange}
                />
              </Box>
            </Box>
            <Button
              variant="contained"
              type="submit"
              style={{
                backgroundColor: "var(--main-color)",
                color: "white",
                marginTop: 20,
                marginLeft: 650,
                textAlign: "center",
                paddingLeft: 40,
                paddingRight: 40,
              }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    );}

export default UpdateData
