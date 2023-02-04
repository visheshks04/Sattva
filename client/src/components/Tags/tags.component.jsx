import React from "react";

export const Tag1 = ({text}) => (
  <div class=" ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
    {text}
  </div>
);

export const Tag2 = ({text}) => (
  <div class=" ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full">
    {text}
  </div>
);

export const Tag3 = ({text}) => (
  <div class=" ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full">
    {text}
  </div>
);

export const Tag4 = ({text}) => (
  <div class=" ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border">
    {text}
  </div>
);

export const Tag5 = ({text}) => (
  <div class="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
    {text}
  </div>
);
