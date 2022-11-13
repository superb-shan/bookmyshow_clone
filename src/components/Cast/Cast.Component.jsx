import React from "react";

const Cast = (props) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-32 h-32">
          <img
            src= {props.image ? `https://image.tmdb.org/t/p/original${props.image}` : "https://storage.googleapis.com/ares-profile-pictures/hd/the.dapple.grey-7b64c1392a28524474711b4aa1dbbc7b_hd.jpg"}
            alt="cast and crew members"
            className="w-full h-full rounded-full object-center object-cover"
          />
        </div>
        <h1 className="text-xl text-gray-800">{props.castName}</h1>
        <h5 className="text-sm text-gray-500">as {props.role}</h5>
      </div>
    </div>
  );
};

export default Cast;
