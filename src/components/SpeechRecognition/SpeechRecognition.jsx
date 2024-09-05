import React from "react";
import { useEffect } from "react";
import SpeechRecognition from "react-speech-recognition";
import { useSpeechRecognition } from "react-speech-recognition";
import { IconMicrophone } from "@tabler/icons-react";

const SpeechRecognitionComponent = ({ setSourceText }) => {
  const { transcript, listening } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      setSourceText(transcript);
    }
  }, [transcript, setSourceText]);

  const handlingVoiceRecording = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening();
    }
  };

  return (
    <div>
      <IconMicrophone
        size={22}
        onClick={handlingVoiceRecording}
        className="text-gray-400"
      />
    </div>
  );
};

export default SpeechRecognitionComponent;
