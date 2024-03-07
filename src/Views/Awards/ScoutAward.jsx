import "./Award.css";
import B2 from "../../Assests/ScoutAward.png";
import { Button } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";

function ScoutAward() {
  return (
    <div className="bg_awards">
      <section class="table__header">
        <Button
          bg="transparent"
          textColor="white"
          fontWeight="600"
          width="100px"
          borderRadius="40px"
          leftIcon={<FaArrowLeft />}
          border="2px solid #ccc"
          padding="10px"
          marginRight="220px"
          onClick={() => window.history.back()}
          _hover={{ bg: "yellow", textColor: "black" }}
        >
          Back
        </Button>

        <div className="image">
          <img src={B2} alt="" />
        </div>
        <h1>Scout Award</h1>
      </section>

      <section class="table__body">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Requirment</th>
              <th>Completed Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> 1 </td>
              <td>
                {" "}
                Scout Movement in Sri Lanka <br />
                ශ්‍රී ලංකා බාලදක්ෂ ව්‍යාපාරය{" "}
              </td>
              <td> 17 Dec, 2022 </td>
              <td>
                <a
                  href="https://forms.gle/EoNmAtdZ8cw6MjNR9"
                  target="_blank"
                  class="status attempt"
                >
                  Attempt
                </a>
              </td>
            </tr>
            <tr>
              <td> 2 </td>
              <td>
                {" "}
                National flag and national symbols <br />
                ජාතික ධජය සහ ජාතික සංකේත
              </td>
              <td> 27 Aug, 2023 </td>
              <td>
                <a
                  href="https://forms.gle/gVZChGwZ5YTYerup7"
                  target="_blank"
                  class="status re-attempt"
                >
                  Re-Attempt
                </a>
              </td>
            </tr>
            <tr>
              <td> 3</td>
              <td>
                {" "}
                Simple health habits 2
                <br />
                සරල සෞඛ්‍ය පුරුදු 2
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <a
                  href="https://forms.gle/RdyLAjtAw5AvfV858"
                  target="_blank"
                  class="status attempt"
                >
                  Attempt
                </a>
              </td>
            </tr>
            <tr>
              <td> 4</td>
              <td>
                {" "}
                Correct Posture and Habits
                <br />
                නිවැරදි ඉරියව් සහ චර්යා ධර්ම
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <a
                  href="https://forms.gle/Di8R3UmySty8YQeY8"
                  target="_blank"
                  class="status attempt"
                >
                  Attempt
                </a>
              </td>
            </tr>
            <tr>
              <td> 5</td>
              <td>
                {" "}
                Social Health 1
                <br />
                ප්‍රජා සෞඛ්‍යය 1
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <a
                  href="https://forms.gle/gAiLcwXXk43XwVTM7"
                  target="_blank"
                  class="status attempt"
                >
                  Attempt
                </a>
              </td>
            </tr>
            <tr>
              <td> 6</td>
              <td>
                {" "}
                Preparation for Flag Break/Hoisting <br />
                ධජය විහිදුවීම/එසවීම
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <a
                  href="https://forms.gle/f3UghHzPQfyrW9Br6"
                  target="_blank"
                  class="status attempt"
                >
                  Attempt
                </a>
              </td>
            </tr>
            <tr>
              <td> 7</td>
              <td>
                {" "}
                Know the Area 1 <br />
                වපසරිය දැන සිටීම
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <a
                  href="https://forms.gle/uyJJn9zaSUXYaPEF8"
                  target="_blank"
                  class="status attempt"
                >
                  Attempt
                </a>
              </td>
            </tr>
            <tr>
              <td> 8</td>
              <td>
                {" "}
                Outdoor Activity <br />
                එළිමහන් ක්‍රියාකාරකම්
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <a
                  href="https://forms.gle/eKi56JHgTKacfwzVA"
                  target="_blank"
                  class="status attempt"
                >
                  Attempt
                </a>
              </td>
            </tr>
            <tr>
              <td> 9</td>
              <td>
                {" "}
                Environment Protection for Sustainability <br />
                තිරසර බව සඳහා පරිසර ආරක්ෂාව
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <a
                  href="https://forms.gle/1vHuqNAzkY1JYdsi8"
                  target="_blank"
                  class="status attempt"
                >
                  Attempt
                </a>
              </td>
            </tr>
            <tr>
              <td> 10</td>
              <td>
                {" "}
                Safe from Harm 8 <br />
                හානියෙන් සුරක්ෂාව 8
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <a
                  href="https://forms.gle/mskNzvxak9pWBnaF6"
                  target="_blank"
                  class="status attempt"
                >
                  Attempt
                </a>
              </td>
            </tr>
            <tr>
              <td> 11</td>
              <td>
                {" "}
                Knots and Lashing 2 <br />
                ගැට හා බැමි 2
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <a
                  href="https://forms.gle/x8iH1vGg94AZzo5NA"
                  target="_blank"
                  class="status attempt"
                >
                  Attempt
                </a>
              </td>
            </tr>
            <tr>
              <td> 12</td>
              <td>
                {" "}
                pioneering work 1 <br />
                පුරෝගාමී ක්‍රියාකාරකම් 1
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <a
                  href="https://forms.gle/szooQQ9aPByKyiRb7"
                  target="_blank"
                  class="status attempt"
                >
                  Attempt
                </a>
              </td>
            </tr>
            <tr>
              <td> 13</td>
              <td>
                {" "}
                Compass and Mapping 1 <br />
                මාලිමාව හා සිතියම්කරණය 1
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <a
                  href="https://forms.gle/DNS4RFDRXptZfgYD9"
                  target="_blank"
                  class="status attempt"
                >
                  Attempt
                </a>
              </td>
            </tr>
            <tr>
              <td> 14</td>
              <td>
                {" "}
                B.P. Exercises <br />
                බී.පී. ව්‍යායාම
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <a
                  href="https://forms.gle/znr8FTtVVmsNXFsS7"
                  target="_blank"
                  class="status attempt"
                >
                  Attempt
                </a>
              </td>
            </tr>
            <tr>
              <td> 15 </td>
              <td>
                {" "}
                Sense Training <br />
                ඉන්ද්‍රිය පුහුණුව{" "}
              </td>
              <td> 17 Dec, 2022 </td>
              <td>
                <a
                  href="https://forms.gle/KNADEr7x5HUpfkXt5"
                  target="_blank"
                  class="status attempt"
                >
                  Attempt
                </a>
              </td>
            </tr>
            <tr>
              <td> 16 </td>
              <td>
                {" "}
                Fifteen Common Trees <br />
                ගස් වර්ග 15
              </td>
              <td> 27 Aug, 2023 </td>
              <td>
                <a
                  href="https://forms.gle/uk4Tx9JpMs638BCn6"
                  target="_blank"
                  class="status attempt"
                >
                  Attempt
                </a>
              </td>
            </tr>
            <tr>
              <td> 17 </td>
              <td>
                {" "}
                Smartness and Good Order 2
                <br />
                සුරුබුහුටිකම සහ නිසි පිළිවෙළ 2
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <a
                  href="https://forms.gle/LDG8SiyQ73h2QDXg9"
                  target="_blank"
                  class="status attempt"
                >
                  Attempt
                </a>
              </td>
            </tr>
            <tr>
              <td> 18 </td>
              <td>
                {" "}
                First Aid 2
                <br />
                ප්‍රථමාධාර 2
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <a
                  href="https://forms.gle/8nfstT8R3Xtj8x3TA"
                  target="_blank"
                  class="status attempt"
                >
                  Attempt
                </a>
              </td>
            </tr>
            <tr>
              <td> 19 </td>
              <td>
                {" "}
                IT Literacy 1
                <br />
                තොරතුරු තාක්ෂණ දැනුම 1
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <a
                  href="https://forms.gle/pdckKyeyAGnSLFj6A"
                  target="_blank"
                  class="status attempt"
                >
                  Attempt
                </a>
              </td>
            </tr>
            <tr>
              <td> 20 </td>
              <td>
                {" "}
                Link Language Skills 1 <br />
                සම්බන්ධීකරණ භාෂා කුසලතා 1
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <a
                  href="https://forms.gle/mRQPL8LwpgrJpWhB9"
                  target="_blank"
                  class="status attempt"
                >
                  Attempt
                </a>
              </td>
            </tr>
            <tr>
              <td> 21 </td>
              <td>
                {" "}
                Good Habits 2 <br />
                යහපත් පුරුදු 2
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <a
                  href="https://forms.gle/9whddw3ABaofRrzU7"
                  target="_blank"
                  class="status attempt"
                >
                  Attempt
                </a>
              </td>
            </tr>
            <tr>
              <td> 22 </td>
              <td>
                {" "}
                Two Nights Camping <br />
                කඳවුරු රාත්‍රී දෙක
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <a
                  href="https://forms.gle/UvoLa3X7zqAKfg697"
                  target="_blank"
                  class="status attempt"
                >
                  Attempt
                </a>
              </td>
            </tr>
            <tr>
              <td> 23 </td>
              <td>
                {" "}
                One Day Hike of 12km <br />
                කි.මී. 12 එක් දින පාගමන
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <a
                  href="https://forms.gle/aiyfSJHBvcZgocAE6"
                  target="_blank"
                  class="status attempt"
                >
                  Attempt
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <table className="sevice">
        <tbody>
          <tr>
            <td>***</td>
            <td>
              6 Months of Service <br />
              මාස 6 ක සේවා කාලය
            </td>
            <td> 17 Dec, 2022 </td>
            <td>
              <a href="#" class="status completed">
                Completed
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ScoutAward;
