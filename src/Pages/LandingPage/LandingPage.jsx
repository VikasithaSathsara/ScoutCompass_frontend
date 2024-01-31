import "./LandingPage.css";
import S1 from "../../Assests/slide1 copy.jpg";
import S2 from "../../Assests/1.jpg";
import S3 from "../../Assests/background.jpg";
import S4 from "../../Assests/CampfireBehavior.jpg";

function LandingPage() {
  return (
    <div>
      <div class="slider">
        <div class="slides">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />

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
            <label for="radio1" class="manual-btn" id="#btn1"></label>
            <label for="radio2" class="manual-btn" id="#btn2"></label>
            <label for="radio3" class="manual-btn" id="#btn3"></label>
            <label for="radio4" class="manual-btn" id="#btn4"></label>
          </div>
        </div>
      </div>

      <div id="blogs">
            <h1>scouting</h1>
            <div class="blog-content">
                <div class="card card-1">
                    <a href="" target="_blank">
                        <div class="text">
                            ########
                        </div>
                    </a>
                </div>
                <div class="card card-2">
                    <a href="./blogs/student2blog.html" target="_blank">
                        <div class="text">
                            ########
                        </div>
                    </a>
                </div>
                <div class="card card-3">
                    <a href="./blogs/student3blog.html" target="_blank">
                        <div class="text">
                           ########
                        </div>
                    </a>
                </div>
                <div class="card card-4">
                    <a href="./blogs/student4blog.html" target="_blank">
                        <div class="text">
                            ########
                        </div>
                    </a>
                </div>
            </div>
           
        </div>
 
    </div>

    //         <section class="content">
    //             <div class="hero">
    //                 <div class="slider">
    //                     <div class="slides">
    //                         <input type="radio" name="slide-btn" id="slide-1" checked/>
    //                         <input type="radio" name="slide-btn" id="slide-2"/>
    //                         <input type="radio" name="slide-btn" id="slide-3"/>
    //                         <input type="radio" name="slide-btn" id="slide-4"/>

    //                         <div class="slide slide1">
    //                             <img src={S1} alt=""/>
    //                         </div>

    //                         <div class="slide slide2">
    //                             <img src={S2} alt=""/>
    //                             <div class="slide-content">
    //                                 <h2>
    //                                     A brand new Adventure waiting for you...
    //                                 </h2>
    //                                 <a href="./products.html">Start Purchase Now...</a>
    //                             </div>
    //                         </div>

    //                         <div class="slide slide3">
    //                             <img src={S3} alt=""/>
    //                             <div class="slide-content">
    //                                 <h2>
    //                                     Gather Knowledge all around the Video Gaming World...
    //                                 </h2>
    //                                 <a href="#blogs">Read Articles Now...</a>
    //                             </div>
    //                         </div>

    //                         <div class="slide slide4">
    //                             <img src={S1} alt=""/>
    //                             <div class="slide-content">
    //                                 <h2>
    //                                     Don't Just let the Game Over yet.
    //                                     <br/> Test Your Knowledge...
    //                                 </h2>
    //                                 <a href="./quiz.html">Take the Quiz Now...</a>
    //                              </div>
    //                         </div>

    //                         <div class="navigation-manual">
    //                             <label for="slide-1" class="manual-btn" id="btn1"/>
    //                             <label for="slide-2" class="manual-btn" id="btn2"/>
    //                             <label for="slide-3" class="manual-btn" id="btn3"/>
    //                             <label for="slide-4" class="manual-btn" id="btn4"/>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>

    //             <div id="blogs">
    //             <h1>Knowledge Beyond Entertainment</h1>
    // <div class="blog-content">
    //     <div class="card card-1">
    //         <a href="" target="_blank">
    //             <div class="text">
    //                 Authorized Game Downloading.
    //             </div>
    //         </a>
    //     </div>
    //                 <div class="card card-2">
    //                     <a href="./blogs/student2blog.html" target="_blank">
    //                         <div class="text">
    //                             Game Engine
    //                         </div>
    //                     </a>
    //                 </div>
    //                 <div class="card card-3">
    //                     <a href="./blogs/student3blog.html" target="_blank">
    //                         <div class="text">
    //                            Consequences of Gaming.
    //                         </div>
    //                     </a>
    //                 </div>
    //                 <div class="card card-4">
    //                     <a href="./blogs/student4blog.html" target="_blank">
    //                         <div class="text">
    //                             Video Game Literacy
    //                         </div>
    //                     </a>
    //                 </div>
    //             </div>

    //         </div>
    // </section>
  );
}

export default LandingPage;
