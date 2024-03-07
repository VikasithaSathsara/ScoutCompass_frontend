import "./Blogs.css";
import L1 from "../../Assests/logo.png";
import { Button } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";

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
              <a href="#topic-main">£££££££</a>
            </li>
            <li>
              <a href="#sub-topic-1">££££££££££</a>
            </li>
          </ul>
        </div>

        <div class="other_blogs">
          <h4 className="fixedbarh4">Other Articles</h4>
          <ul className="blog_ul">
            <li>
              <a href="/scoutpromise">Scout Law and Promise</a>
            </li>
            <li>
              <a href="/scouthistory">Scout History</a>
            </li>
            <li>
              <a href="/scoutuniform">Scout Uniform</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="blog_content_container">
        <div class="facts">
          <div class="_header2">
            <Button
              bg="#003153"
              textColor="white"
              fontWeight="600"
              width="100px"
              borderRadius="40px"
              leftIcon={<FaArrowLeft />}
              border="2px solid #ccc"
              padding="10px"
              onClick={() => window.history.back()}
              _hover={{ bg: "yellow", textColor: "black" }}
            >
              Back
            </Button>
            <h1 class="blog_header">Scouting Structure.</h1>
          </div>

          <div id="blogimage1">{/* <img src={BL2} alt="" /> */}</div>
          <div className="blog2">
            <h2 class="topic-main">Scouting Structure.</h2>
            <p className="blog2_para"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScoutingStructure;
