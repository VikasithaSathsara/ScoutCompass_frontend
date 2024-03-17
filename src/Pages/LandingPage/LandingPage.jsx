import "./LandingPage.css";
import Navbar from "../../Components/Navbar/Navbar";
import S1 from "../../Assests/Slide1.jpg";
import S2 from "../../Assests/Slide3.jpg";
import S3 from "../../Assests/Slide4.png";
import S4 from "../../Assests/Hiking.jpg";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function LandingPage() {
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
    <div className="bg_landing">
      <Navbar />
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

          <div class="navigation-manual">
            <label for="radio1" class="manual-btn" id="btn1"></label>
            <label for="radio2" class="manual-btn" id="btn2"></label>
            <label for="radio3" class="manual-btn" id="btn3"></label>
            <label for="radio4" class="manual-btn" id="btn4"></label>
          </div>
        </div>
      </div>

      <div id="blogs">
        <div className="content">
          <h2>Scouting for a Better Future</h2>

          <p>
            Engaging in scouting holds paramount significance for shaping a
            better future for individuals and society as a whole. Scouting
            instills a strong foundation of values, ethics, and leadership
            skills in participants, fostering the development of well-rounded
            individuals who are prepared to contribute positively to their
            communities. Through outdoor adventures, teamwork activities, and
            community service, scouting nurtures qualities such as resilience,
            empathy, and a sense of responsibility. The emphasis on practical
            life skills and problem-solving equips scouts with the tools needed
            to navigate life's challenges. Moreover, scouting promotes a deep
            connection with nature and encourages environmental stewardship,
            instilling a sense of appreciation for the world around us. As
            scouts progress through the program, they not only cultivate
            self-confidence and independence but also learn the importance of
            collaboration and mutual respect. By embodying the scout principles
            of being prepared, helpful, and trustworthy, individuals emerge from
            scouting with a strong moral compass, ready to contribute to a
            better, more compassionate future.
          </p>
        </div>
        <div class="blog-content">
          <div class="card card-1">
            <NavLink to="/scoutpromise">
              <div class="text">Scout Law and Promise</div>
            </NavLink>
          </div>
          <div class="card card-2">
            <NavLink to="/scouthistory">
              <div class="text">Scout History</div>
            </NavLink>
          </div>
          <div class="card card-3">
            <NavLink to="/scoutingstructure">
              <div class="text">Vision and Mission</div>
            </NavLink>
          </div>
          <div class="card card-4">
            <NavLink to="/scoutuniform">
              <div class="text">Scout Uniform</div>
            </NavLink>
          </div>
        </div>
      </div>

      <footer class="footer">
        <div>
          Coppyright &copy; 2024 | <span>ScoutCompass</span> Learning Management
          System
        </div>{" "}
        <br />
        {/* <div class="social">
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
                </div> */}
        <div>
          Developed By{" "}
          <span>
            <a href="#">Team WayFinders</a>
          </span>{" "}
          | Exploring New Skills{" "}
          {/* <span>
                        {" "}
                        <a href="">#######</a>{" "}
                    </span> */}
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
