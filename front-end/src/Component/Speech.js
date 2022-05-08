import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";

export default function Speech({ str }) {
  const { speak } = useSpeechSynthesis();
  return (
    <div className="speech">
      <div className="group">
        <button onClick={() => speak({ text: str })}>🎤</button>
      </div>
    </div>
  );
}
