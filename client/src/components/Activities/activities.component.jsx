import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Activities = () => {

  const navigate = useNavigate();

  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <section class="mb-20 mt-32 w-8/12 text-gray-800 text-center md:text-left">
        <div class="block rounded-lg shadow-lg bg-white">
          <div class="flex flex-wrap items-center">
            <div class="grow-0 shrink-0 basis-auto block lg:flex w-full md:w-4/12">
              <img
                src="https://c1.wallpaperflare.com/preview/680/943/635/virtual-reality-person-woman-lady.jpg"
                alt="Trendy Pants and Shoes"
                class="w-full rounded-t-lg md:rounded-tr-none md:rounded-bl-lg"
              />
            </div>
            <div class="grow-0 shrink-0 basis-auto w-full md:w-8/12">
              <div class="px-6 py-12 md:px-12">
                <h2 class="text-6xl font-bold relative mb-6">
                  <span class="text-red-600">"Transcend Reality"</span>
                </h2>
                <p class="text-black mb-6 pb-2">
                  Our app provides a unique and immersive virtual reality
                  experience for users, allowing them to visualize and practice
                  yoga and exercise poses in a fully-realized virtual
                  environment. Additionally, the app offers a serene virtual
                  space for users to engage in mindfulness meditation, promoting
                  relaxation and inner peace.
                </p>
                <p className="mb-6 pb-2 text-black">
                  With its advanced VR technology, our app offers a highly
                  engaging and effective way to improve one's physical and
                  mental well-being.
                </p>
                <button
                  type="button"
                  class="inline-block px-7 py-3 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  EXPLORE IN VIRTUAL REALITY
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="mb-32 mt-32 w-8/12 text-gray-800 text-center md:text-left">
        <div class="block rounded-lg shadow-lg bg-white">
          <div class="flex flex-wrap items-center">
            <div class="grow-0 shrink-0 basis-auto block lg:flex w-full md:w-4/12">
              <img
                src="https://images.pexels.com/photos/4427906/pexels-photo-4427906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Trendy Pants and Shoes"
                class="w-full rounded-t-lg md:rounded-tr-none md:rounded-bl-lg"
              />
            </div>
            <div class="grow-0 shrink-0 basis-auto w-full md:w-8/12">
              <div class="px-6 py-12 md:px-12">
                <h2 class="text-6xl font-bold mb-6">
                  <span class="text-red-600">"Conversational Soiree"</span>
                </h2>
                <p class="text-black mb-6 pb-2">
                  Volunteering for a one on one discussion session is a great
                  way to make a positive impact in someone's life. Whether
                  you're a student, a professional, or simply someone with a
                  passion for helping others, this opportunity offers a unique
                  chance to make a meaningful difference in someone's life.
                </p>
                <p className="mb-6 pb-2 text-black">
                  By lending an ear, offering advice, and providing support,
                  you'll help to foster a positive and empowering environment
                  for the individual you're working with.
                </p>
                <button
                  type="button"
                  onClick={() => navigate("/volunteer")}
                  class="inline-block px-7 py-3 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Onto Volunteer Space
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="mb-32 mt-32 w-8/12 text-gray-800 text-center md:text-left">
        <div class="block rounded-lg shadow-lg bg-white">
          <div class="flex flex-wrap items-center">
            <div class="grow-0 shrink-0 basis-auto block lg:flex w-full md:w-4/12">
              <img
                src="https://images.pexels.com/photos/3587477/pexels-photo-3587477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Trendy Pants and Shoes"
                class="w-full rounded-t-lg md:rounded-tr-none md:rounded-bl-lg"
              />
            </div>
            <div class="grow-0 shrink-0 basis-auto w-full md:w-8/12">
              <div class="px-6 py-12 md:px-12">
                <h2 class="text-6xl font-bold mb-6">
                  <span class="text-red-600">"Daily Reflection"</span>
                </h2>
                <p class="text-black mb-6 pb-2">
                  Don't feel like discussing or talking to anyone today? Well,
                  Bring out your inner emotions and tell us how was your day!!
                </p>
                <p className="mb-6 pb-2 text-black">
                  We are excited and eager to learn about your thoughts and your
                  activities of the day!
                </p>
                <button
                  type="button"
                  class="inline-block px-7 py-3 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  onClick={() => navigate("/self-room")}
                >
                  Tap to Begin!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
