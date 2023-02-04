import React, { useState } from "react";
import Logo from "./assets/record.png";
import LeaveButton from "./Buttons/LeaveButton";
import { useEffect } from "react";
import axios from "axios";
import { useRef } from "react";

const SelfSpeakRoom = () => {
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const [active, setActive] = useState(false);


  const task = useRef([
    "Tell us how was your day!",
    "What unique thing have you done till now today?",
    "What are your plans for the rest of the day?",
    "Are you doing your hobbies? How about you tell us what they are?",
    "Great day requires some physical exercise! What would you like to do now?"
  ])

  const startRec = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      setMediaRecorder(mediaRecorder);
      mediaRecorder.start();
      setActive(true);

      const audioChunks = [];
      mediaRecorder.addEventListener("dataavailable", (event) => {
        audioChunks.push(event.data);
        setAudioChunks(audioChunks);
      });

      mediaRecorder.addEventListener("stop", () => {
        setActive(false);
        const audioBlob = new Blob(audioChunks);
        setAudioBlob(audioBlob);
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioUrl(audioUrl);
        const audio = new Audio(audioUrl);
        const audioFile = new File([audioBlob], "audio.wav", {
          type: "audio/wav",
        });
        const formData = new FormData();
        formData.append("audioFile", audioFile, "audio.wav");
        axios
          .post("http://localhost:8000/audio/upload", formData)
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        audio.play();
      });
    });
  };

  return (
    <div className="h-screen w-screen bg-black flex flex-col items-center">
      <h1 className="mt-10 text-8xl font-bold">Self-Speaking Room</h1>
      <h2 className="mt-10 text-4xl font-bold font-mono">{
        task.current[Math.floor(Math.random() * 5)]
      }</h2>
      <div className="mt-10 flex justify-center w-screen h-1/3">
        <img src={Logo} alt="" className="h-full" />
      </div>
      <div className="mt-10">
        {active ? (
          <div className="">
            <LeaveButton onClick = {() => mediaRecorder.stop()}/>
          </div>
        ) : (
          <button
            type="button"
            className="px-6 py-3 w-52 bg-indigo-400 text-white font-bold hover:opacity-80 rounded-3xl border-none focus:ring-1 ring-brand-100 outline-none"
            onClick={startRec}
          >
            Start Speaking
          </button>
        )}
      </div>
    </div>
  );
};

export default SelfSpeakRoom;
