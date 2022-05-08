import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import "./Select.css";
export default function BasicSelect() {
  const [lan, setLan] = React.useState("");

  const handleChange = (event) => {
    setLan(event.target.value);
  };

  return (
    <div class="select-button">
      <div class="form">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Language</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={lan}
            label="English"
            onChange={handleChange}
            variant="outlined"
          >
            <MenuItem value={"English"}>English</MenuItem>
            <MenuItem value={"VietNam"}>Viet Nam</MenuItem>
          </Select>
        </FormControl>
        </div>
        <Button variant="outlined">Claim</Button>
    </div>
  );
}
