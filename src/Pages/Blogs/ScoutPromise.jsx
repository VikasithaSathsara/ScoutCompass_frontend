import "./Blogs.css";
import L1 from "../../Assests/logo.png";
import BL1 from "../../Assests/Promise1.jpg";
import { Button } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import B1 from "../../Assests/Membership2.png";

function ScoutPromise() {
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
              <a href="#topic-main">Scout Promise</a>
            </li>
            <li>
              <a href="#sub-topic-1">Scout Law</a>
            </li>
          </ul>
        </div>

        <div class="other_blogs">
          <h4 className="fixedbarh4">Other Articles</h4>
          <ul className="blog_ul">
            <li>
              <a href="/scouthistory">Scout History</a>
            </li>
            <li>
              <a href="/scoutingstructure">Scouting Structure</a>
            </li>
            <li>
              <a href="/scoutuniform">Scout Uniform</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="blog_content_container">
        <div class="facts">
          <div class="_header1">
            <Button
              bg="#003153"
              textColor="white"
              fontWeight="600"
              width="100px"
              borderRadius="40px"
              leftIcon={<FaArrowLeft />}
              border="2px solid #ccc"
              padding="10px"
              marginRight="150px"
              onClick={() => window.history.back()}
              _hover={{ bg: "yellow", textColor: "black" }}
            >
              Back
            </Button>
            <h1 class="blog_header">Scout Law And Promise</h1>
          </div>
          <div id="blogimage1">
            <img src={BL1} alt="" />
          </div>
          <div className="blog1">
            <h2 class="topic-main">Scout Promise.</h2>
            <p className="blog1_para">
              On my honour, I promise to do my best To do my duty to my religion
              and country To help other people at all times To obey the Scout
              law.
              <br />
            </p>
            <h2 class="topic-main">බාලදක්‍ෂ පොරොන්දුව.</h2>
            <p className="blog1_para">
              මාගේ ආගම හා රට කෙරෙහි යුතුකම් ඉටු කිරීමට ද, සෑම කල්හිම අනුන්ට
              උපකාර කිරීමට ද, බාලදක්ෂ නීතියට කීකරු වීමට ද, මාගේ අවංක විශ්වාසය උඩ
              මාෙග් සම්පූර්ණ උත්සාහය යෙදීමට ගෞරව බහුමානයෙන් යුතුව පොරොන්දු වෙමි.
            </p>
          </div>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={B1} alt="" />
          </div>{" "}
          <br />
          <div className="law">
            <h2 class="topic-main">Scout Law.</h2>
            <p className="blog1_para">
              (01) A Scout is Trustworthy. <br />
              (02) A Scout is Loyal.
              <br />
              (03) A Scout is Friendly and Considerate. <br />
              (04) A Scout is a brother to every other Scout.
              <br />
              (05) A Scout is Courteous. <br />
              (06) A Scout is Kind. <br />
              (07) A Scout is Obedient. <br />
              (08) A Scout is Cheerful. <br />
              (09) A Scout is Thrifty. <br />
              (10) A Scout is Clean in Thought, Word and Deed.
              <br />
            </p>
            <h2 class="topic-main">බාලදක්‍ෂ නීතිය.</h2>
            <p className="blog1_para">
              (01) බාලදක්ෂයා විශ්වාස කටයුතු අයෙකි.
              <br />
              (02) බාලදක්ෂයා පක්ෂපාතී අයෙකි. <br />
              (03) බාලදක්ෂයා හි‌තෛශිය කාරුනික අයෙකි. <br />
              (04) බාලදක්ෂයා සෑම බාලදක්ෂයෙකුගේම සහෝදරයෙකි.
              <br />
              (05) බාලදක්ෂයා ‌ධෛර්යය සම්පන්න අයෙකි.
              <br />
              (06) බාලදක්ෂයා සත්ත්ව කරුණාව ඇති අයෙකි.
              <br />
              (07) බාලදක්ෂයා සහයෝගයෙන් ක්‍රියා කරන්නෙකි.
              <br />
              (08) බාලදක්ෂයා සොම්නස් සහගත අයෙකි.
              <br />
              (09) බාලදක්ෂයා සකසුරුවම් අයෙකි.
              <br />
              (10) බාලදක්ෂයා සිත, කය හා වචනයෙන් පිරිසිදු අයෙකි.
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScoutPromise;
