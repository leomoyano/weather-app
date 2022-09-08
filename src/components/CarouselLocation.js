import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import CardLocationSelected from "./CardLocationSelected";

const CarouselLocation = () => {

const { locationList } = useSelector(state => state?.selectLocation);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

if(locationList.length === 0) {
  return <CardLocationSelected data={locationList} />
}

  return (
    <>
      {
        locationList.length === 1 ? (
          <div className="flex w-full justify-around items-center gap-x-4">
          {locationList.map((item) => (
                <CardLocationSelected key={item.id} data={item} />
              ))}
          </div>
        ) : (
          <div className="relative w-full justify-center flex items-center">
            <FaChevronLeft
              className="opacity-50 cursor-pointer hover:opacity-100"
              onClick={slideLeft}
              size={40}
            />
            <div
              id="slider"
              className="max-w-[460px] overflow-x-hidden flex flex-row lg:flex-row md:flex-row sm:flex-column h-full scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            >
              {locationList.map((item) => (
                <CardLocationSelected key={item.id} data={item} />
              ))}

            </div>
            <FaChevronRight
              className="opacity-50 cursor-pointer hover:opacity-100"
              onClick={slideRight}
              size={40}
            />
          </div>
        )
      }
    </>
  );
};

export default CarouselLocation;
