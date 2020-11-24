import React from "react";
import Mic from "../img/mic.png";
import * as B from "./Style";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SpeakOut = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  // stt value input
  let TransValue = transcript;
  console.log(TransValue);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  return (
    <B.Background
      onMouseDown={SpeechRecognition.startListening}
      onMouseUp={SpeechRecognition.stopListening}
    >
      <img src={Mic} alt="Speck" />

      <span>최대한 또박또박 말해주세요</span>
      <div>Tell me as clearly as you can</div>
      <span id="value_wrap" onClick={resetTranscript}>
        {transcript}
      </span>
    </B.Background>
  );
};

export default SpeakOut;
