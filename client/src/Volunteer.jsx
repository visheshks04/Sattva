import { useHMSActions } from "@100mslive/hms-video-react";
import React, {useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import getVolToken from "./utils/getVolToken";
import axios from 'axios';
import { useEffect } from "react";
import Avatar from "boring-avatars";
import Input from "./components/Join/Input";
import Select from "./components/Join/Select";
import JoinButton from "./components/Join/JoinButton";
import { Tag3 } from "./components/Tags/tags.component";

const Volunteer = () => {

  const hmsActions = useHMSActions();
  const [role, setRole] = useState('speaker');
  const [username, setUsername] = useState('');
  const rooms = useRef([])

  useEffect(() => {
    axios.get('http://localhost:8000/get-rooms').then(res => {
      const arr = res.data
      rooms.current = [...arr]
    })
  }, [rooms])

  console.log(rooms);

  const JoinRoom = (tag) => {
    getVolToken(role)
      .then((token) => {
        axios.post('http://localhost:8000/create-room', {token, tag}).then(res => console.log(res)).catch(err => console.log(err))
        hmsActions.join({
          userName: username || 'Anonymous',
          authToken: token,
          settings: {
            isAudioMuted: true, 
          },
          initEndpoint : process.env.REACT_APP_HMS_INIT_PEER_ENPOINT || undefined
        });
      })
      .catch((error) => {
        console.log('Token API Error', error);
      });
  };

  const navigate = useNavigate();

  const JoinRoomElem = ({text}) => (<div className="flex flex-col items-center justify-center rounded-md mb-20 border border-gray-300 h-100 w-1/4 bg-white">
  <Avatar size={120} name={username} />
  <Input state={{ username, setUsername }} />
  <Select state={{ role, setRole }} />
  <JoinButton onClick={JoinRoom} />
 <div className='mt-4'>
  <Tag3 text={text}/>
 </div>
</div>)

  const handleClick = async () => {
    const value = await Swal.fire({
      title: "What would you like to discuss?",
      input: "text",
      inputLabel: "Enter here",
      inputValue: "",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        }
      },
    });

    JoinRoom(value.value)
    navigate("/speaker-room")
  };

  return (
    <div className="relative w-screen h-screen">
      <div className="fixed rounded-full top-32 left-11">
        <button class="p-0 w-16 h-16 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
          <svg
            viewBox="0 0 20 20"
            enable-background="new 0 0 20 20"
            class="w-6 h-6 inline-block"
            onClick={handleClick}
          >
            <path
              fill="#FFFFFF"
              d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z"
            />
          </svg>
        </button>
        <div className="w-screen flex justify-around">
          {rooms.current.map(room => <JoinRoomElem text = {room.tag}/>)} 
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
