/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "../../styles/App.css";
import PropTypes from "prop-types";
import useLocalStorage from "../../hooks/useLocalStorage";
import heartIcon from "../../assets//icons/01_heart_icon.svg";
import filledHeartIcon from "../../assets//icons/02_filled_heart_icon.svg";

const Card = ({ title, Category, img, id, setRender }) => {
  const { getItem, setItem } = useLocalStorage("userData");

  const handleBookmark = (e) => {
    e.stopPropagation(); // Prevents event from bubbling to the main card click
    const userData = getItem() || [];
    const bookmarked = userData.map((item) => {
      if (item.id === id) {
        return { ...item, isBookmark: !item.isBookmark };
      }
      return item;
    });
    setItem(bookmarked);
    setRender(bookmarked);
  };

  return (
    <>
      {
        <div className="md:w-80 md:min-h-[500px] hover:border hover:border-white flex flex-col md:gap-6 rounded-md border border-white min-h-[380px] w-40 lg:w-11/12 mx-auto lg:overflow-hidden relative">
          <img
            width="24"
            height="24"
            src={
              getItem()?.find((item) => item.id === id)?.isBookmark
                ? filledHeartIcon
                : heartIcon
            }
            alt="like--v1"
            onClick={handleBookmark}
            className="fill-white absolute top-3 right-3 z-50"
          />
          <div className="flex items-center justify-center md:w-full md:p-4 bg-gray-400 rounded-md  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 md:h-80 h-56 p-2 cursor-pointer">
            <img
              src={img}
              alt="Product Image"
              className="md:w-11/12 rounded-xl md:max-h-60 "
            />
          </div>
          <div className="h-24 p-2 pl-5">
            <h2 className="md:text-2xl text-white font-basesemibold text-xl cursor-pointer">
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

//Default Props
Card.defaultProps = {
  title: "Default Title",
  description: "Default Description",
  link: "https://github.com",
  Category: "Default Category",
  img: "https://picsum.photos/200",
};

//Checking PropTypes
Card.PropTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  Category: PropTypes.string,
  img: PropTypes.string,
};

export default Card;
