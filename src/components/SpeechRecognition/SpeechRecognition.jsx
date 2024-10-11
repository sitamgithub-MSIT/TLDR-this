import React, { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { IconMicrophone } from "@tabler/icons-react";

/**
 * A React component for speech recognition functionality.
 * This component uses the useSpeechRecognition hook to transcribe speech,
 * and provides a microphone icon to toggle voice recording.
 * @param {Object} props - The component props.
 * @param {Function} props.setSourceText - A function to update the source text with the transcribed speech.
 * @returns {JSX.Element} A div containing a microphone icon for voice recording.
 */
const SpeechRecognitionComponent = ({ setSourceText }) => {
  const { transcript, listening } = useSpeechRecognition();

  useEffect(() => {
    setSourceText(transcript);
  }, [transcript, setSourceText]);

  const handleVoiceRecording = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  return (
    <div>
      <IconMicrophone
        size={22}
        className="text-gray-400"
        onClick={handleVoiceRecording}
      />
    </div>
  );
};

export default SpeechRecognitionComponent;
