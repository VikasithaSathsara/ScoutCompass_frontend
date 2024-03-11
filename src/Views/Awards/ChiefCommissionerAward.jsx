import "./Award.css";
import B3 from "../../Assests/ChiefCommissioners.png";
import { Button } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ChiefCommissionerAward() {
    const navigate = useNavigate();
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
                    marginRight="120px"
                    onClick={() => window.history.back()}
                    _hover={{ bg: "yellow", textColor: "black" }}
                >
                    Back
                </Button>

                <div className="image">
                    <img src={B3} alt="" />
                </div>
                <h1>
                    Chief Commissioner <br />
                    Award
                </h1>
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
                                Thrift - Savings Account 2 <br />
                                සකසුරුවම් - ඉතුරුම් ගිණුම 2{" "}
                            </td>
                            <td> 17 Dec, 2022 </td>
                            <td>
                                <a href="#" class="status completed">
                                    Completed
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td> 2 </td>
                            <td>
                                {" "}
                                Skills in Art and Hobbies 1 <br />
                                කලාව සහ විනෝදාංශ පිළිබඳ කුසලතා 1
                            </td>
                            <td> 27 Aug, 2023 </td>
                            <td>
                                <a
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            2
                                        );
                                        localStorage.setItem("award_id", 3);
                                        navigate("/requirments");
                                    }}
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
                                Knots and Whipping 3
                                <br />
                                ගැට හා වෙලීම 3
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <a href="#" class="status attempt">
                                    Attempt
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td> 4</td>
                            <td>
                                {" "}
                                Types of Fire Places
                                <br />
                                ගිනි මෙලවීමේ ක්‍රම
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <a
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            4
                                        );
                                        localStorage.setItem("award_id", 3);
                                        navigate("/requirments");
                                    }}
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
                                Pioneering Project 2
                                <br />
                                පුරෝගාමී ව්‍යාපෘතිය 2
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <a href="#" class="status attempt">
                                    Attempt
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td> 6</td>
                            <td>
                                {" "}
                                Identify parts of a human foot print/ shoe
                                print/ animal or bird foot prints <br />
                                මිනිස් පා සටහනක/ සපත්තු අඩියක/ සත්ව හෝ පක්ෂි පා
                                සටහනක කොටස් හඳුනා ගැනීමට හැකිවීම.
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <a href="#" class="status attempt">
                                    Attempt
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td> 7</td>
                            <td>
                                {" "}
                                Compass and Mapping 2 <br />
                                මාලිමාව හා සිතියම්කරණය 2
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <a
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            7
                                        );
                                        localStorage.setItem("award_id", 3);
                                        navigate("/requirments");
                                    }}
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
                                Estimation of Heights, Lengths, Weights <br />
                                උස, දුර, බර නිශ්චය කිරීම
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <a href="#" class="status attempt">
                                    Attempt
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td> 9</td>
                            <td>
                                {" "}
                                Use of Different Tools <br />
                                විවිධ උපකරණ භාවිතය
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <a href="#" class="status attempt">
                                    Attempt
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td> 10</td>
                            <td>
                                {" "}
                                Ten Common Birds <br />
                                පක්ෂීන් වර්ග 15
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <a
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            10
                                        );
                                        localStorage.setItem("award_id", 3);
                                        navigate("/requirments");
                                    }}
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
                                Swimming/ Alternate skill <br />
                                පිහිනුම්/ විකල්ප කුසලතා
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <a href="#" class="status attempt">
                                    Attempt
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td> 12</td>
                            <td>
                                {" "}
                                Smartness and Good Order 3
                                <br />
                                සුරුබුහුටිකම සහ නිසි පිළිවෙළ 3
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <a href="#" class="status attempt">
                                    Attempt
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td> 13</td>
                            <td>
                                {" "}
                                Social Health 2 <br />
                                ප්‍රජා සෞඛ්‍යය 2
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <a
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            13
                                        );
                                        localStorage.setItem("award_id", 3);
                                        navigate("/requirments");
                                    }}
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
                                Highway Code <br />
                                මාර්ග නීති
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <a
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            14
                                        );
                                        localStorage.setItem("award_id", 3);
                                        navigate("/requirments");
                                    }}
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
                                IT Literacy 2 <br />
                                තොරතුරු තාක්ෂණ දැනුම 2{" "}
                            </td>
                            <td> 17 Dec, 2022 </td>
                            <td>
                                <a
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            15
                                        );
                                        localStorage.setItem("award_id", 3);
                                        navigate("/requirments");
                                    }}
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
                                Knowledge of the Area Around 2 <br />
                                අවට ප්රදේශය පිළිබඳ දැනුම 2
                            </td>
                            <td> 27 Aug, 2023 </td>
                            <td>
                                <a href="#" class="status attempt">
                                    Attempt
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td> 17 </td>
                            <td>
                                {" "}
                                Scout Vision and Mission
                                <br />
                                බාලදක්ෂ අභිප්‍රාය ප්‍රකාශය හා මෙහෙවර ප්‍රකාශය
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <a
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            17
                                        );
                                        localStorage.setItem("award_id", 3);
                                        navigate("/requirments");
                                    }}
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
                                First Aid 3
                                <br />
                                ප්‍රථමාධාර 3
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <a
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            18
                                        );
                                        localStorage.setItem("award_id", 3);
                                        navigate("/requirments");
                                    }}
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
                                Safe From Harm 9
                                <br />
                                හානියෙන් සුරක්ෂාව 9
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <a
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            19
                                        );
                                        localStorage.setItem("award_id", 3);
                                        navigate("/requirments");
                                    }}
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
                                Environment Protection Activity <br />
                                පරිසර ආරක්ෂණ ක්‍රියාකාරකම්
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <a
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            20
                                        );
                                        localStorage.setItem("award_id", 3);
                                        navigate("/requirments");
                                    }}
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
                                Link Language Skills 2 <br />
                                සම්බන්ධීකරන භාෂා කුසලතා 2
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <a
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            21
                                        );
                                        localStorage.setItem("award_id", 3);
                                        navigate("/requirments");
                                    }}
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
                                <a href="#" class="status attempt">
                                    Attempt
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td> 23 </td>
                            <td>
                                {" "}
                                District Commissioner's Hike <br />
                                දිසා කොමසාරිස් පා ගමන
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <a href="#" class="status attempt">
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
                            9 Months of Service <br />
                            මාස 9 ක සේවා කාලය
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

export default ChiefCommissionerAward;
