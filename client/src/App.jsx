import {
  HMSRoomProvider,
  useHMSStore,
  selectIsConnectedToRoom,
} from "@100mslive/hms-video-react";
import Join from "./components/Join";
import Room from "./components/Room";
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Client } from "appwrite";

import Header from './components/Header/header.component';
import Activities from "./components/Activities/activities.component";
import SelfSpeakRoom from "./components/selfRoom";
import Login from "./components/Login";
import Community from "./components/Community";

import axios from 'axios';
import Profile from "./components/Profile";
import Volunteer from "./Volunteer";

const SpacesApp = () => {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  return (
    <>
      {isConnected ? (
        <Room />
      ) : (
        <>
          <Join text1={"Criminal Behaviour"} text2 = {"Trauma"}/>
          <Join text1={"Family Issues"} text2 = {"Drug Abuse"}/>
          <Join text1={"Grief"} text2 = {"Overcome Fear"}/>
          <Join text1={"Anger Issues"} text2 = {"Social Skills"}/>
        </>
      )}
    </>
  );
};

const App = () => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    axios.post('http://localhost:8000/getUser', {
      userID : '63de45ffcee58871e8ec11bc',
    }).then(res => {
      console.log(res.data.user);
      setUser(res.data.user)
    }).catch(err => console.log(err))
  }, [])

  return (
    <BrowserRouter>
      <HMSRoomProvider>
        <Header/>   
      <Routes>
        <Route path = "/" element = {<Login/>} />
        <Route path = "/speaker-room" element = {
          <>
            <h1 className="text-white text-5xl text-center mt-20">Destress Zone</h1>
              <div className="page">
                <SpacesApp />
              </div>
          </>
          } 
        />
        <Route path = "/activities" element = {<Activities/>} />
        <Route path = "/self-room" element = {<SelfSpeakRoom/>} />
        <Route path = "/feed" element = {<Community/>} />
        <Route path = "/profile" element = {<Profile user = {user}/>} />
        <Route path = "/volunteer" element = {<Volunteer/>} />
      </Routes>
      </HMSRoomProvider>
    </BrowserRouter>
  );
}

export default App;
