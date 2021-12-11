import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Box } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";

const defaultValues = {
  RestaurantName: "",
  Location: "",
  PhoneNumber: "",
  Email: "",
  Facebook: "",
  Instagram: "",
  Twitter: "",
  Linkedin: "",
  Logo: "",
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

const Form = () => {
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
    <form onSubmit={handleSubmit}>
      <Box className="reigester" sx={{ padding: 10, marginLeft: 50 }}>
        <h1
          style={{
            color: "var(--main-color)",
            paddingBottom: 30,
            marginRight: 30,
            fontWeight: "normal",
          }}
        >
          Lazeez
        </h1>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <p style={{ marginTop: 2 }}>Restaurant Name :</p>
          <TextField
            style={{ marginLeft: 20, backgroundColor: "#fff", width: "35%" }}
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
          <p style={{ marginTop: 2 }}>Location :</p>
          <TextField
            style={{ marginLeft: 90, backgroundColor: "#fff", width: "35%" }}
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
          <p style={{ marginTop: 2 }}>Logo :</p>
          <input
            style={{ marginLeft: 122 }}
            id="Logo"
            type="file"
            name="Logo"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", marginTop: 2 }}>
          <p style={{ marginTop: 2 }}>Pictures:</p>
          <input
            style={{ marginLeft: 100 }}
            id="Pictures"
            type="file"
            name="Pictures"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </Box>
        <Box>
          <h2
            style={{
              color: "var(--main-color)",
              fontWeight: "normal",
              paddingTop: 20,
            }}
          >
            About Your Restaurant:
          </h2>
          <Box sx={{ display: "flex", flexDirection: "row", marginTop: 2 }}>
            <p style={{ marginTop: 2 }}>Available Hours :</p>
            <p style={{ marginLeft: 26 }}>From</p>
            <input
              style={{ marginLeft: 9 }}
              id="fromTim"
              name="fromTim"
              type="time"
              value={formValues.fromTim}
              onChange={handleInputChange}
            />
            <p style={{ marginLeft: 9 }}>To</p>
            <input
              style={{ marginLeft: 9 }}
              id="timeTo"
              name="timeTo"
              type="time"
              value={formValues.timeTo}
              onChange={handleInputChange}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", marginTop: 2 }}>
            <p style={{ marginTop: 2 }}>Available days:</p>

            <Box sx={{marginLeft:5}}>
              <Checkbox
                size="small"
                id="Su"
                name="Su"
                value={formValues.name}
                onChange={handleInputChange}
              />
              
              <label>Su</label>
              <Checkbox
                size="small"
                id="Mo"
                name="Mo"
                value={formValues.name}
                onChange={handleInputChange}
              />
              
              <label>Mo</label>
              <Checkbox
                size="small"
                id="Tu"
                name="Tu"
                value={formValues.name}
                onChange={handleInputChange}
              />
              
              <label>Tu</label>
              <Checkbox
                size="small"
                id="We"
                name="We"
                value={formValues.name}
                onChange={handleInputChange}
              />
              
              <label>We</label><br/>
              <Checkbox
              style={{marginLeft:40}}
                size="small"
                id="Thr"
                name="Thr"
                value={formValues.name}
                onChange={handleInputChange}
              />
              
              <label>Thr</label>
              <Checkbox
                size="small"
                id="Fri"
                name="Fri"
                value={formValues.name}
                onChange={handleInputChange}
              />
              
              <label>Fri</label>
              <Checkbox
                size="small"
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
          <h2
            style={{
              color: "var(--main-color)",
              fontWeight: "normal",
              paddingTop: 20,
            }}
          >
            Contact:
          </h2>
          <Box sx={{ display: "flex", flexDirection: "row", marginTop: 2 }}>
            <p style={{ marginTop: 2 }}>Phone Number:</p>
            <TextField
              style={{ marginLeft: 39, backgroundColor: "#fff", width: "35%" }}
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
            <p style={{ marginTop: 2 }}>Email:</p>
            <TextField
              style={{ marginLeft: 112, backgroundColor: "#fff", width: "35%" }}
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
            <p style={{ marginTop: 2 }}>Facebook:</p>
            <TextField
              style={{ marginLeft: 79, backgroundColor: "#fff", width: "35%" }}
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
            <p style={{ marginTop: 2 }}>Instagram:</p>
            <TextField
              style={{ marginLeft: 75, backgroundColor: "#fff", width: "35%" }}
              size="small"
              variant="outlined"
              id="Instagram"
              name="Instagram"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", marginTop: 2 }}>
            <p style={{ marginTop: 2 }}>Twitter:</p>
            <TextField
              style={{ marginLeft: 105, backgroundColor: "#fff", width: "35%" }}
              size="small"
              variant="outlined"
              id="Twitter"
              name="Twitter"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", marginTop: 2 }}>
            <p style={{ marginTop: 2 }}>Linkedin:</p>
            <TextField
              style={{ marginLeft: 92, backgroundColor: "#fff", width: "35%" }}
              size="small"
              variant="outlined"
              id="Linkedin"
              name="Linkedin"
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
            marginLeft: 400,
            textAlign: "center",
            paddingRight: 40,
          }}
        >
          Submit
        </Button>
      </Box>
    </form>
  );
};
export default Form;
