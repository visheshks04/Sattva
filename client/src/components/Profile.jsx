import React from "react";
import { CChart } from "@coreui/react-chartjs";
import { useState } from "react";
import { useEffect } from "react";
import { getDiagnosis, getSuggestion } from "../utils/getSuggestions";

const Profile = ({ user }) => {
  const [values, setValues] = useState({
    anger: 0,
    fear: 0,
    joy: 0,
    sadness: 0,
    surprise: 0,
    love: 0,
  });

  const [maxKey, setMaxKey] = useState(null);

  const [diag, setDiag] = useState("");

  const [sugg, setSugg] = useState("");

  // const [sadness, setSadness] = useState(0)
  // const [joy, setJoy] = useState(0)
  // const [love, setLove] = useState(0)
  // const [fear, setFear] = useState(0)
  // const [surprise, setSurprise] = useState(0)

  useEffect(() => {
    user.states.map((data) => {
      for (const key in data) {
        if (key !== "__v" && key !== "_id" && key !== "date") {
          setValues((prev) => ({
            ...prev,
            [key]: data[key] + prev[key],
          }));
        }
      }
    });
    setMaxKey(
      Object.keys(values).reduce((a, b) => (values[a] > values[b] ? a : b))
    );
    setSugg(getSuggestion(maxKey))
    setDiag(getDiagnosis(maxKey))
  }, []);

  console.log(values);

  return (
    <div className="bg-pink-300 h-screen flex">
      <section
        style={{ "font-family": "Montserrat" }}
        class=" bg-[#071e34] flex font-medium items-center ml-24  h-1/2"
      >
        <section class="w-64 bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
          <div class="flex items-center justify-between">
            <span class="text-gray-400 text-sm">2d ago</span>
            <span class="text-emerald-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </span>
          </div>
          <div class="mt-6 w-fit mx-auto">
            <img
              src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe"
              class="rounded-full w-28 "
              alt="profile picture"
              srcset=""
            />
          </div>

          <div class="mt-8 ">
            <h2 class="text-white font-bold text-2xl tracking-wide">
              {user.name} <br /> {user.dob}
            </h2>
          </div>
          <p class="text-emerald-400 font-semibold mt-2.5">Active</p>

          <div class="h-1 w-full bg-black mt-8 rounded-full">
            <div class="h-1 rounded-full w-2/5 bg-yellow-500 "></div>
          </div>
          <div class="mt-3 text-white text-sm">
            <span class="text-gray-400 font-semibold">Week:</span>
            <span>40%</span>
          </div>
        </section>
      </section>
      <section
        style={{ "font-family": "Montserrat" }}
        class=" bg-[#071e34] flex font-medium ml-24 mt-10 h-4/5 w-4/6 bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg"
      >
        <div className="w-1/2 h-full flex flex-col">
          <h1 className="font-sans text-6xl">Progress Report</h1>
          <CChart
            className="w-2/3 mt-10 h-2/3"
            type="doughnut"
            data={{
              labels: ["Anger", "Fear", "Sadness", "Joy", "Surprise", "Love"],
              datasets: [
                {
                  backgroundColor: [
                    "#71788d",
                    "#00a0de",
                    "#ee7b1a",
                    "#522886",
                    "#e60012",
                    "#00ac9b",
                  ],
                  data: [
                    values.anger,
                    values.fear,
                    values.sadness,
                    values.joy,
                    values.surprise,
                    values.love,
                  ],
                },
              ],
            }}
          />
          <div className="w-full h-1/4">
            <h1 className="font-sans text-4xl">Diagnosis</h1>
            <div className="text-2xl ml-16 mt-2">{diag}</div>
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-col">
          <h1 className="font-sans text-6xl">Mood Track</h1>
          <CChart
            className="w-full mt-10 h-3/5"
            type="line"
            data={{
              labels: ["Feb 1", "Feb 2", "Feb 3", "Feb 4", "Feb 5"],
              datasets: [
                {
                  label: "Anger",
                  backgroundColor: "#71788d",
                  borderColor: "#71788d",
                  pointBackgroundColor: "#71788d",
                  pointBorderColor: "#fff",
                  data: [user.states[0].anger, user.states[1].anger, user.states[2].anger, user.states[3].anger, user.states[4].anger, user.states[5].anger]
                },
                {
                  label: "Fear",
                  backgroundColor: "#00a0de",
                  borderColor: "#00a0de",
                  pointBackgroundColor: "#00a0de",
                  pointBorderColor: "#fff",
                  data: [user.states[0].fear, user.states[1].fear, user.states[2].fear, user.states[3].fear, user.states[4].fear, user.states[5].fear]
                },
                {
                  label: "Love",
                  backgroundColor: "#ee7b1a",
                  borderColor: "#ee7b1a",
                  pointBackgroundColor: "#ee7b1a",
                  pointBorderColor: "#fff",
                  data: [user.states[0].love, user.states[1].love, user.states[2].love, user.states[3].love, user.states[4].love, user.states[5].love]
                },
                {
                  label: "Sadness",
                  backgroundColor: "#522886",
                  borderColor: "#522886",
                  pointBackgroundColor: "#522886",
                  pointBorderColor: "#fff",
                  data: [user.states[0].sadness, user.states[1].sadness, user.states[2].sadness, user.states[3].sadness, user.states[4].sadness, user.states[5].sadness]
                },
                {
                  label: "Joy",
                  backgroundColor: "#e60012",
                  borderColor: "#e60012",
                  pointBackgroundColor: "#e60012",
                  pointBorderColor: "#fff",
                  data: [user.states[0].joy, user.states[1].joy, user.states[2].joy, user.states[3].joy, user.states[4].joy, user.states[5].joy]
                },
                {
                  label: "Surprise",
                  backgroundColor: "#00ac9b",
                  borderColor: "#00ac9b",
                  pointBackgroundColor: "#00ac9b",
                  pointBorderColor: "#fff",
                  data: [user.states[0].surprise, user.states[1].surprise, user.states[2].surprise, user.states[3].surprise, user.states[4].surprise, user.states[5].surprise]
                },
              ],
            }}
          />
          <div className="w-full ">
            <h1 className="font-sans text-4xl mt-4">Suggestions</h1>
            <div className="text-2xl ml-16 mt-2">{sugg}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
