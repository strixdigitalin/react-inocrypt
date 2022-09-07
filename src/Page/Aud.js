import React, { useState } from "react";
import AudioReactRecorder, { RecordState } from "audio-react-recorder";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import SpeechRecog from "../Component/Speech-recog";
import SpeechReact from "../Component/Speech";
function Aud() {
  return (
    // <SpeechRecog />
    <SpeechReact />
    // --------------
  );
}

export default Aud;
