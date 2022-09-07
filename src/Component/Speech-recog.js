import React, { useState } from "react";
import AudioReactRecorder, { RecordState } from "audio-react-recorder";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
function SpeechRecog() {
  const [recordState, setrecordState] = useState(null);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  const Construct = () => {
    const makeLine = transcript.split("over");
    console.log(makeLine);
  };
  return (
    <div>
      -----------------------------------------
      <div>
        <p>Microphone: {listening ? "on" : "off"}</p>
        <button onClick={SpeechRecognition.startListening}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
        <button onClick={Construct}>Construct</button>
        <p>{transcript}</p>
      </div>
    </div>

    // --------------
  );
}

export default SpeechRecog;
