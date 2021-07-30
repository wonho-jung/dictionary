import React from "react";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import * as googleTTS from "google-tts-api";
function Sound() {
  const url = googleTTS.getAudioUrl("Hello World", {
    lang: "en",
    slow: false,
    host: "https://translate.google.com",
  });
  console.log(url); // https://translate.google.com/translate_tts?...

  const sound = () => {
    new Audio(
      "https://translate.google.com/translate_tts?ie=UTF-8&q=Hello%20World&tl=en-US&total=1&idx=0&textlen=11&client=tw-ob&prev=input&ttsspeed=1"
    ).play();
  };
  return (
    <div>
      <VolumeUpIcon onClick={sound} />
    </div>
  );
}

export default Sound;
