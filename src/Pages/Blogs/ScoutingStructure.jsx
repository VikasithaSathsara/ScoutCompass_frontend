import "./Blogs.css";
import L1 from "../../Assests/logo.png";
import { Button } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import BL3 from "../../Assests/vimi.jpg";
import BL4 from "../../Assests/the-scout-group-structure.png";
import { NavLink } from "react-router-dom";

function ScoutingStructure() {
    return (
        <div>
            <div class="fixedbar">
                <div className="bloglogo">
                    <a href="/">
                        <img src={L1} alt="" />
                    </a>
                </div>

                <div class="blog_content">
                    <h4 className="fixedbarh4">Content</h4>
                    <ul className="blog_ul">
                        <li>
                            <a href="#topic-main">Vision</a>
                        </li>
                        <li>
                            <a href="#topic-main">Mission</a>
                        </li>
                        <li>
                            <a href="#topic-main">Structure</a>
                        </li>
                    </ul>
                </div>

                <div class="other_blogs">
                    <h4 className="fixedbarh4">Other Articles</h4>
                    <ul className="blog_ul">
                        <li>
                            <NavLink to="/scoutpromise">
                                Scout Law and Promise
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/scouthistory">Scout History</NavLink>
                        </li>
                        <li>
                            <NavLink to="/scoutuniform">Scout Uniform</NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="blog_content_container">
                <div class="facts">
                    <div class="_header2">
                        <Button
                            bg="transparent"
                            textColor="black"
                            fontWeight="600"
                            width="100px"
                            borderRadius="40px"
                            leftIcon={<FaArrowLeft />}
                            border="2px solid black"
                            padding="10px"
                            onClick={() => window.history.back()}
                            _hover={{ bg: "yellow", textColor: "black" }}
                        >
                            Back
                        </Button>
                        <h1 class="blog_header">Mission and Vision</h1>
                    </div>

                    <div id="blogimage3">
                        <img src={BL3} alt="" />
                    </div>
                    <div className="blog2">
                        <h2 class="topic-main">Scout Vision</h2>
                        <p className="blog2_para">
                            “By 2023 Scouting will be the world’s leading
                            educational youth movement, enabling 100 million
                            young people to be active citizens creating positive
                            change in their communities and in the world based
                            on shared values.” The Vision for Scouting, Vision
                            2023, was adopted at the 40th World Scout Conference
                            in Ljubljana, Slovenia in 2014.
                            <br />
                        </p>

                        <h2 class="topic-main">බාලදක්ෂ දැක්ම</h2>
                        <p className="blog2_para">
                            "2023 වන විට බාලදක්ෂ ව්‍යාපාරය ලොව ප්‍රමුඛතම
                            අධ්‍යාපනික තරුණ ව්‍යාපාරය බවට පත්වනු ඇති අතර, මිලියන
                            100 ක තරුණ තරුණියන්ට ක්‍රියාශීලී පුරවැසියන් වීමට
                            හැකි වන පරිදි ඔවුන්ගේ ප්‍රජාවන් තුළ සහ හවුල්
                            වටිනාකම් මත පදනම්ව ලෝකයේ ධනාත්මක වෙනසක් ඇති කරයි."
                            බාලදක්ෂ දැක්ම, දැක්ම 2023, 2014 දී ස්ලෝවේනියාවේ
                            ලුබ්ලිජානා හි පැවති 40 වැනි ලෝක බාලදක්ෂ සමුළුවේදී
                            සම්මත කරන ලදී.
                        </p>
                    </div>

                    <div className="blog2">
                        <h2 class="topic-main">Scout Mission</h2>
                        <p className="blog2_para">
                            “The Mission of Scouting is to contribute to the
                            education of young people, through a value system
                            based on the Scout Promise and Law, to help build a
                            better world where people are self-fulfilled as
                            individuals and play a constructive role in
                            society.” The Mission was adopted at the 35th World
                            Scout Conference in Durban, South Africa in 1999.
                            Illustrating both the local and global impact of
                            Scouting, the Mission of Scouting has been captured
                            in World Scouting’s brand as “Creating a Better
                            World”.
                            <br />
                        </p>

                        <h2 class="topic-main">බාලදක්ෂ ප්‍රතිඥාව</h2>
                        <p className="blog2_para">
                            "බාලදක්ෂ ප්‍රතිඥාව සහ නීතිය මත පදනම් වූ හර පද්ධතියක්
                            හරහා තරුණ තරුණියන්ගේ අධ්‍යාපනයට දායක වීම බාලදක්ෂ
                            මෙහෙවර වන්නේ මිනිසුන් පුද්ගලයන් වශයෙන්
                            ස්වයං-පූර්ණත්වයට පත් වෙමින් සමාජය තුළ නිර්මාණාත්මක
                            කාර්යභාරයක් ඉටු කරන යහපත් ලෝකයක් ගොඩනැගීමට උපකාර
                            කිරීමයි." 1999 දී දකුණු අප්‍රිකාවේ ඩර්බන් හි පැවති
                            35 වැනි ලෝක බාලදක්ෂ සමුළුවේදී මෙම මෙහෙයුම සම්මත කරන
                            ලදී. බාලදක්ෂ සේවාවේ දේශීය හා ගෝලීය බලපෑම නිදර්ශනය
                            කරමින්, බාලදක්ෂ මෙහෙවර "වඩා හොඳ ලෝකයක් නිර්මාණය
                            කිරීම" ලෙස ලෝක බාලදක්ෂ සන්නාමය තුළ ග්‍රහණය කර ඇත.
                        </p>
                        <br />
                        <h2 class="topic-main1">Scout Structure</h2>
                        <h2 class="topic-main1">බාලදක්ෂ ව්‍යුහය</h2>
                        <br />
                        <br />
                        <div id="blogimage1">
                            <img src={BL4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScoutingStructure;
