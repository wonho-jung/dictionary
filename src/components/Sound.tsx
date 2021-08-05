import React from "react";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import { useSpeechSynthesis } from "react-speech-kit";
import "./Sound.scss";
interface Props {
  input: string;
}

const Sound: React.FC<Props> = ({ input }) => {
  const { speak } = useSpeechSynthesis();

  return (
    <div>
      <VolumeUpIcon
        className="Sound__volumeIcon"
        onClick={() => speak({ text: input })}
      />
    </div>
  );
};

export default Sound;
