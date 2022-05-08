import React, { Component } from "react";
import { saveAs } from "file-saver"
import AudioReactRecorder, { RecordState } from "audio-react-recorder";
import { Button } from "@mui/material";
class Record extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recordState: null,
    };
  }

  start = () => {
    this.setState({
      recordState: RecordState.START,
    });
  };

  stop = (audioData) => {
    this.setState({
      recordState: RecordState.STOP,
    });
  };

  //audioData contains blob and blobUrl
  onStop = (audioData) => {
    console.log("audioData", audioData);
    saveAs(audioData.url, "save.wav")
  };

  render() {
    const { recordState } = this.state;

    return (
      <div>
        <AudioReactRecorder state={recordState} onStop={this.onStop} />

        <Button variant="outlined" onClick={this.start}>Start</Button>
        <Button variant="outlined" onClick={this.stop}>Stop</Button>
      </div>
    );
  }
}
export default Record;
