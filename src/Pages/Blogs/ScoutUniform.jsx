import "./Blogs.css";
import L1 from "../../Assests/logo.png";
import { Button } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import BL5 from "../../Assests/jscout_uniform.png";
import BL6 from "../../Assests/seniorscout_uniform.png";
import BL7 from "../../Assests/Senior_Air_scout.png";
import BL8 from "../../Assests/Senior_Sea_Scout.png";
import { NavLink } from "react-router-dom";

function ScoutUniform() {
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
                            <a href="#topic-main">What Scouts wear</a>
                        </li>
                        <li>
                            <a href="#topic-main">Junior Scout Uniform</a>
                        </li>
                        <li>
                            <a href="#sub-topic-1">Senior Scout Uniform</a>
                        </li>
                        <li>
                            <a href="#sub-topic-1">Air Scout Uniform</a>
                        </li>
                        <li>
                            <a href="#topic-main">Sea Scout Uniform</a>
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
                            <a href=""></a>
                        </li>
                        <li>
                            <NavLink to="/scouthistory">Scout History</NavLink>
                        </li>
                        <li>
                            <NavLink to="/scoutingstructure">
                                Scout Vision and Mission
                            </NavLink>
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
                        <h1 class="blog_header">Scout Uniform</h1>
                    </div>

                    <div id="blogimage4">
                        <img src={BL5} alt="" />
                    </div>
                    <div className="blog2">
                        <h2 class="topic-main">What Scouts wear</h2>
                        <p className="blog2_para">
                            Scouts wear a uniform during their weekly meetings
                            and sometimes on trips away, depending on where
                            they're going and what they're doing. Usually, this
                            consists of a teal green shirt or blouse with their
                            badges sewn on, which they pair with a scarf, known
                            as a necker. Exact uniforms will vary slightly if
                            your Troop is part of the Air Scouts or Sea Scouts.{" "}
                            <br />
                            <br />
                            Alongside their shirts, Scouts might wear the
                            accompanying blue uniform trousers or skirt, or they
                            might save their uniform bottoms to wear for special
                            occasions like awards ceremonies and public events –
                            choosing to wear something more casual with their
                            shirt during the week. Optional accessories such as
                            hats, hoodies, are also available.
                        </p>
                        <br />
                        <h2 class="topic-main">බාලදක්ෂ නිල ඇඳුම යනු කුමක්ද?</h2>
                        <p className="blog2_para">
                            බාලදක්ෂයින් ඔවුන්ගේ සතිපතා රැස්වීම් වලදී සහ සමහර විට
                            ඔවුන් යන ස්ථානය සහ ඔවුන් කරන්නේ කුමක්ද යන්න මත
                            පදනම්ව, නිළ ඇඳුමක් අඳිති. සාමාන්‍යයෙන්, මෙය සමන්විත
                            වන්නේ ඔවුන්ගේ ලාංඡන මැසූ ටීල් කොළ පැහැති කමිසයකින්
                            හෝ බ්ලවුසයකින් වන අතර, ඔවුන් බෙල්ලක් ලෙස හැඳින්වෙන
                            ස්කාෆ් සමඟ යුගල කරයි. ඔබේ භට කණ්ඩායම ගුවන්
                            බාලදක්ෂයින් හෝ මුහුදු බාලදක්ෂයින්ගේ කොටසක් නම්
                            නිවැරදි නිල ඇඳුම් තරමක් වෙනස් වනු ඇත. <br />
                            <br />
                            ඔවුන්ගේ කමිසයට අමතරව, බාලදක්ෂයින් නිල් නිල ඇඳුමේ
                            කලිසම හෝ සායක් පැළඳිය හැකිය, නැතහොත් සම්මාන උත්සව සහ
                            පොදු උත්සව වැනි විශේෂ අවස්ථා සඳහා ඇඳීමට ඔවුන්ගේ නිල
                            ඇඳුමේ යට ඉතිරි කර ගත හැකිය - සතිය තුළ ඔවුන්ගේ කමිසය
                            සමඟ වඩාත් අනියම් දෙයක් ඇඳීමට තෝරා ගැනීම. තොප්පි,
                            හුඩි වැනි විකල්ප උපාංග ද තිබේ.
                            <br />
                            <br />
                            <br />
                        </p>
                        <div id="blogimage2">
                            <figure>
                                <img src={BL5} alt="" />
                                <figcaption>Junior Scout Uniform</figcaption>
                            </figure>
                            <figure>
                                <img src={BL6} alt="" />
                                <figcaption>Senior Scout Uniform</figcaption>
                            </figure>
                        </div>
                        <br />
                        <br /> <br />
                        <br />
                        <div id="blogimage2">
                            <figure>
                                <img src={BL7} alt="" />
                                <figcaption>Air Scout Uniform</figcaption>
                            </figure>
                            <figure>
                                <img src={BL8} alt="" />
                                <figcaption>Sea Scout Uniform</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScoutUniform;
