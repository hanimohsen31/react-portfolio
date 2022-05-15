import { Swiper } from "swiper/react/swiper";
import { SwiperSlide } from "swiper/react/swiper-slide";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./styles.css";
import { useState } from "react";
// import { CardPhoto } from '../CardPhoto/index';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export const SwiperApp = (props) => {
  const [slider, setSlider] = useState([]);

  // useEffect(() => {
  //   axios.get(props.axios_url).then((result) => {
  //     setVids(result.data);
  //   });
  // }, []);

  return (
    <>
      <div className="slider">
        <Swiper
          breakpoints={{
            0: {
              width: 0,
              slidesPerView: 1,
            },
          }}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{ clickable: true }}
          navigation={true}
          className="mySwiper"
        >
          {slider.map((p) => (
            <SwiperSlide>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
