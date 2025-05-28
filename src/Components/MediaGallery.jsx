import React from "react";
import { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import img1 from "../assets/images/pictures/Artboard 1.png";
import img2 from "../assets/images/pictures/Artboard 2.png";
import img3 from "../assets/images/pictures/Artboard 3.png";
import img4 from "../assets/images/pictures/Artboard 4.png";
import img5 from "../assets/images/pictures/Artboard 5.png";
import img6 from "../assets/images/pictures/Artboard 6.png";
import img7 from "../assets/images/pictures/Artboard 7.png";
import img8 from "../assets/images/pictures/Artboard 8.png";
import img9 from "../assets/images/pictures/Artboard 9.png";
import img10 from "../assets/images/pictures/Artboard 10.png";
import img11 from "../assets/images/pictures/Artboard 11.png";
import img12 from "../assets/images/pictures/Artboard 12.png";
import img13 from "../assets/images/pictures/Artboard 18.png";

const MediaGallery = () => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = new Swiper(swiperRef.current, {
      grabCursor: true,
      watchSlidesProgress: true,
      loop: true,
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 20,
      initialSlide: 0,
      on: {
        progress(e) {
          const t = e.slides.length;
          for (let r = 0; r < t; r++) {
            const o = e.slides[r],
              s = o.progress,
              i = Math.abs(s);
            let n = 1;
            if (i > 1) n = 0.3 * (i - 1) + 1;

            const l = o.querySelectorAll(".item-content"),
              a = s * n * 50 + "%",
              c = 1 - 0.2 * i,
              d = t - Math.abs(Math.round(s));

            o.style.transform = `translateX(${a}) scale(${c})`;
            o.style.zIndex = d.toString();
            o.style.opacity = i > 3 ? "0" : "1";

            l.forEach((e) => {
              e.style.opacity = (1 - i / 3).toString();
            });
          }
        },
        setTransition(e, t) {
          for (let r = 0; r < e.slides.length; r++) {
            const o = e.slides[r],
              s = o.querySelectorAll(".item-content");
            o.style.transitionDuration = `${t}ms`;
            s.forEach((el) => {
              el.style.transitionDuration = `${t}ms`;
            });
          }
        },
      },
    });

    return () => {
      swiperInstance.destroy();
    };
  }, []);
  return (
    <div>
      <div className="text-2xl md:text-4xl poppins my-10 text-center font-semibold">
        MEDIA GALLERY
      </div>
      <div className="my-10">
        <div className="swiper carousel-slider" ref={swiperRef}>
          <div className="swiper-wrapper">
            {/* Add your slides below */}
            {[
              img1,
              img2,
              img3,
              img4,
              img5,
              img6,
              img7,
              img8,
              img9,
              img10,
              img11,
              img12,
              img13,
            ].map((_, index) => (
              <div key={index} className="swiper-slide">
                <div className="item-content shadow-lg rounded-xl overflow-hidden">
                  <img src={_} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaGallery;
