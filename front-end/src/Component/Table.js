import React, { Component } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import Record from "./Record";
import Speech from "./Speech";
import "./Table.css";
import Select from "./Select"

class Table extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch(`http://127.0.0.1:5000/`)
      .then((res) => res.json())
      .then((json) => this.setState({ data: json }));
  }

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
        <div class="select">
          < Select />
        </div>
        <Record />
      </div>
    );
  }
}

export default Table;
