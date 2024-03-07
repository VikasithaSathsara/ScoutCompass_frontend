import "./HomePage.css";
import SideMenu from "../../Components/SideMenu/SideMenu";
import S1 from "../../Assests/Slide1.jpg";
import S2 from "../../Assests/Slide3.jpg";
import S3 from "../../Assests/Slide4.png";
import S4 from "../../Assests/Hiking.jpg";
import React, { useState, useEffect } from "react";

function HomePage() {
  const [selectedSlide, setSelectedSlide] = useState("radio1");
  const handleSlideChange = (event) => {
    setSelectedSlide(event.target.id);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextSlide = getNextSlideId(selectedSlide);
      setSelectedSlide(nextSlide);
    }, 6000);
    return () => clearInterval(intervalId);
  }, [selectedSlide]);

  const getNextSlideId = (currentSlide) => {
    switch (currentSlide) {
      case "radio1":
        return "radio2";
      case "radio2":
        return "radio3";
      case "radio3":
        return "radio4";
      case "radio4":
        return "radio1";
    }
  };

  return (
    <div className="bg_home">
      <SideMenu />
      <h1>Home Page</h1>
      <div class="homeslider">
        <div class="homeslides">
          <input
            type="radio"
            name="radio-btn"
            id="radio1"
            checked={selectedSlide === "radio1"}
            onChange={handleSlideChange}
          />
          <input
            type="radio"
            name="radio-btn"
            id="radio2"
            checked={selectedSlide === "radio2"}
            onChange={handleSlideChange}
          />
          <input
            type="radio"
            name="radio-btn"
            id="radio3"
            checked={selectedSlide === "radio3"}
            onChange={handleSlideChange}
          />
          <input
            type="radio"
            name="radio-btn"
            id="radio4"
            checked={selectedSlide === "radio4"}
            onChange={handleSlideChange}
          />

          <div class="homeslide slide1">
            <img src={S1} alt="" />
          </div>

          <div class="homeslide slide2">
            <img src={S2} alt="" />
          </div>

          <div class="homeslide slide3">
            <img src={S3} alt="" />
          </div>

          <div class="homeslide slide4">
            <img src={S4} alt="" />
          </div>
        </div>
      </div>

      <div id="homecontainer">
        <div id="home-products-container">
          <a href="#">
            <div class="homeproduct" id="">
              <span className="material-symbols-outlined">groups</span>
              <div className="number">1777</div>
              <div className="intro">Scouts</div>
            </div>
          </a>
          <a href="#">
            <div class="homeproduct" id="">
              <span className="material-symbols-outlined">
                interactive_space
              </span>
              <div className="number">1777</div>
              <div className="intro">Instructors</div>
            </div>
          </a>

          <a href="#">
            <div class="homeproduct" id="">
              <span className="material-symbols-outlined">camping</span>
              <div className="number">1777</div>
              <div className="intro">Events nearby</div>
            </div>
          </a>
          <a href="#">
            <div class="homeproduct" id="">
              <span className="material-symbols-outlined">description</span>
              <div className="number">1777</div>
              <div className="intro">MCQ'S</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
