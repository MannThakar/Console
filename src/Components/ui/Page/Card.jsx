/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./App.css";

const Card = ({ title, description, link, Category, img }) => {
  return (
    <>
      {
        <div className="md:w-80 md:min-h-[500px] hover:border hover:border-white flex flex-col md:gap-6 rounded-md border border-white min-h-[380px] w-40 mx-auto">
          <div className="flex items-center justify-center w-full md:p-4 bg-gray-400 rounded-md  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 md:h-80 h-56 p-2">
            <img
              src={img}
              alt=""
              className="md:w-11/12 rounded-xl md:max-h-60 "
            />
          </div>
          <div className="h-24 p-2 pl-5">
            <h2 className="md:text-2xl text-white font-basesemibold text-xl">
              {title}
            </h2>
            <button className="px-3 mt-4 text-lg text-black bg-white rounded-full font-basesemibold">
              {Category}
            </button>
          </div>
        </div>
      }
    </>
  );
};

export default Card;
