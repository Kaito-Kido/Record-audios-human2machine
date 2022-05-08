import React, { Component } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import Record from "./Record";
import Speech from "./Speech";
import "./Table.css";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import "./Select.css";


class Table extends Component {
  constructor() {
    super();
    this.state = { data: [],
      lan: "English",
    loading: false };
  }

  handleChange = (event) => {
    this.setState({lan: event.target.value});
    console.log(this.state.lan)
  };
  componentDidMount() {
    fetch(`http://127.0.0.1:5000/`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ data: json }); console.log(this.state.data.English)
    });
  };


  render() {
    return (
      <div>
        {this.state.data.map((el, index) => (
          <div className="line-container">
            <p>{index % 2 === 0 ? "AI: " : "You: "}</p>
            <div>
              <p>{el}</p>
              <Speech str={el} />
            </div>
          </div>
        ))}
        
        <div class="select-button">
            <div class="form">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Language</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={this.lan}
                  label="English"
                  onChange={this.handleChange}
                  variant="outlined"
                >
                  <MenuItem value={"English"}>English</MenuItem>
                  <MenuItem value={"VietNam"}>Viet Nam</MenuItem>
                </Select>
              </FormControl>
              </div>
              <Button variant="outlined">Claim</Button>
        </div>

        <Record />
      </div>
    );
  }
}

export default Table;
