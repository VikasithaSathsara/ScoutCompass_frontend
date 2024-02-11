import "./LandingPage.css";

import S1 from "../../Assests/Slide1.jpg";
import S2 from "../../Assests/Slide3.jpg";
import S3 from "../../Assests/Slide4.png";
import S4 from "../../Assests/Hiking.jpg";
import React, { useState, useEffect } from "react";

function LandingPage() {
  // Set the default checked radio button
  const [selectedSlide, setSelectedSlide] = useState("radio1");

  // Event handler for radio button changes
  const handleSlideChange = (event) => {
    setSelectedSlide(event.target.id);
  };

  // Auto slider functionality
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Determine the next slide ID based on the current selection
      const nextSlide = getNextSlideId(selectedSlide);
      setSelectedSlide(nextSlide);
    }, 6000); // Change slide every 6 seconds (adjust as needed)

    // Clear the interval when the component unmounts or changes
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
    <div>
      <div class="slider">
        <div class="slides">
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

          <div class="slide slide1">
            <img src={S1} alt="" />
          </div>

          <div class="slide slide2">
            <img src={S2} alt="" />
          </div>

          <div class="slide slide3">
            <img src={S3} alt="" />
          </div>

          <div class="slide slide4">
            <img src={S4} alt="" />
          </div>

          {/* <div class="slide slide5">
            <img src={S5} alt="" />
          </div> */}

          <div class="navigation-manual">
            <label for="radio1" class="manual-btn" id="btn1"></label>
            <label for="radio2" class="manual-btn" id="btn2"></label>
            <label for="radio3" class="manual-btn" id="btn3"></label>
            <label for="radio4" class="manual-btn" id="btn4"></label>
          </div>
        </div>
      </div>

      <div id="blogs">
        <h1>scouting</h1>
        <div class="blog-content">
          <div class="card card-1">
            <a href="">
              <div class="text">Scout Law and Promise</div>
            </a>
          </div>
          <div class="card card-2">
            <a href="">
              <div class="text">Scout History</div>
            </a>
          </div>
          <div class="card card-3">
            <a href="">
              <div class="text">Scouting Structure</div>
            </a>
          </div>
          <div class="card card-4">
            <a href="">
              <div class="text">Scout Uniform</div>
            </a>
          </div>
        </div>
      </div>

      <footer class="footer">
        <div>
          Coppyright &copy; 2024 | <span>ScoutCompass</span> ######
        </div>
        <div class="social">
          <a href="#" target="_blank">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" target="_blank">
            <i class="fab fa-discord"></i>
          </a>
          <a href="" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        <div>
          Developed By{" "}
          <span>
            <a href="./about.html">ScoutCompass</a>
          </span>{" "}
          | ######{" "}
          <span>
            {" "}
            <a href="">#######</a>{" "}
          </span>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
