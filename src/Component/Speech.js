import React from "react";
import Speech from "react-speech";
function SpeechReact() {
  return (
    <div>
      <Speech
        text="Welcome to react speech"
        stop={true}
        pause={true}
        resume={true}
      />
      ,
    </div>
  );
}

export default SpeechReact;
