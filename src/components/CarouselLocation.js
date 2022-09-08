import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import CardLocationSelected from "./CardLocationSelected";

const CarouselLocation = () => {

const { locationList } = useSelector(state => state?.selectLocation);

    const data = [{
        id: 3834814,
        location: "Tafí del Valle",
        country: "AR",
        weather: [
          {
            "id": 802,
            "main": "Clouds",
            "description": "nubes dispersas",
            "icon": "03d"
          }
        ],
        main: {
          "temp": 23.39,
          "feels_like": 21.99,
          "temp_min": 23.39,
          "temp_max": 23.39,
          "pressure": 1006,
          "humidity": 8,
          "sea_level": 1006,
          "grnd_level": 804
        }
      },
      {
        "id": 3117735,
        "location": "Madrid",
        "country": "ES",
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "cielo claro",
                "icon": "01n"
            }
        ],
        "main": {
            "temp": 23.75,
            "feels_like": 23.15,
            "temp_min": 21.75,
            "temp_max": 24.81,
            "pressure": 1017,
            "humidity": 37
        }
    }];

    const dataImg = [
        {
          id: 1,
          img: 'https://images.unsplash.com/photo-1547005327-ef75a6961556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        },
        {
          id: 2,
          img: 'https://images.unsplash.com/photo-1480926965639-9b5f63a0817b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        },
        {
          id: 3,
          img: 'https://images.unsplash.com/photo-1566024287286-457247b70310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        },
        {
          id: 4,
          img: 'https://images.unsplash.com/photo-1494791368093-85217fbbf8de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        },
        {
          id: 5,
          img: 'https://images.unsplash.com/photo-1551405780-03882d5a2ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        }]

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

//   <img className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
//   src={item.img}
//   alt='/'
// />

  return (
    <>
          {
              locationList.length === 0 ? (
               <hr />
              ) : (
                  <div className="relative flex items-center">
                      <FaChevronLeft
                          className="opacity-50 cursor-pointer hover:opacity-100"
                          onClick={slideLeft}
                          size={40}
                      />
                      <div
                          id="slider"
                          className="max-w-[450px] overflow-x-hidden flex flex-row lg:flex-row md:flex-row sm:flex-column h-full scroll whitespace-nowrap scroll-smooth scrollbar-hide"
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
