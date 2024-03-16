import "./Award.css";
import B4 from "../../Assests/PrimeMinisters.png";
import { Button } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

function PrimeMinisterAward() {
    const navigate = useNavigate();

    useEffect(() => {
        const email = localStorage.getItem("loggedInUserEmail");
        if (!email) navigate("/login");
    }, []);

    return (
        <div className="bg_awards">
            <section class="table__header">
                <Button
                    bg="transparent"
                    textColor="black"
                    fontWeight="600"
                    width="100px"
                    borderRadius="40px"
                    leftIcon={<FaArrowLeft />}
                    border="2px solid black"
                    padding="10px"
                    marginRight="120px"
                    onClick={() => window.history.back()}
                    _hover={{ bg: "yellow", textColor: "black" }}
                >
                    Back
                </Button>

                <div className="image">
                    <img src={B4} alt="" />
                </div>
                <h1>Prime Minister Award</h1>
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
                                Scout Promise and Scout Law 2 <br />
                                බාලදක්ෂ පොරොන්දුව සහ නීතිය 2{" "}
                            </td>
                            <td> 17 Dec, 2022 </td>
                            <td>
                                <a
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            1
                                        );
                                        localStorage.setItem("award_id", 4);
                                        navigate("/requirments");
                                    }}
                                    class="status completed"
                                >
                                    Completed
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td> 2 </td>
                            <td>
                                {" "}
                                Structure of the WOSM <br />
                                ලෝක බාලදක්ෂ සංවිධානයෙහි ව්‍යුහය
                            </td>
                            <td> 27 Aug, 2023 </td>
                            <td>
                                <a
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            2
                                        );
                                        localStorage.setItem("award_id", 4);
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
                                Thrift-Savings Account 3 <br />
                                ඉතුරුම් ගිණුම 3
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
                                Public Consciousness and Protection of Public
                                Property
                                <br />
                                යහපත් ප්‍රජා හැගීම් හා පොදු සම්පත් සුරැකීම
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <a
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            4
                                        );
                                        localStorage.setItem("award_id", 4);
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
                                Skills in Arts and Hobbies 2
                                <br />
                                කලා සහ විනෝදාංශ කුසලතා 2
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <a
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            5
                                        );
                                        localStorage.setItem("award_id", 4);
                                        navigate("/requirments");
                                    }}
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
                                Backwoodsman Cooking <br />
                                වනවාසියාගේ ක්‍රමයට ආහාර පිසීම
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
                                Splicing <br />
                                පිරිද්දීම කඹ ආධාරයෙන්
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <a href="#" class="status attempt">
                                    Attempt
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td> 8</td>
                            <td>
                                {" "}
                                Pioneering 3
                                <br />
                                පුරෝගාමී කටයුතු 2
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
                                Tents and Other Equipment <br />
                                කූඩාරම් සහ අනෙකුත් උපකරණ
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
                                Smartness and Good Order 4
                                <br />
                                සුරුබුහුටිකම සහ නිසි පිළිවෙළ 4
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <a href="#" class="status attempt">
                                    Attempt
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td> 11</td>
                            <td>
                                {" "}
                                Balanced meal <br />
                                සමබර ආහාර
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <a
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            11
                                        );
                                        localStorage.setItem("award_id", 4);
                                        navigate("/requirments");
                                    }}
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
                                Productivity Concept <br />
                                ඵලදායිතා සංකල්පය
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <a
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            12
                                        );
                                        localStorage.setItem("award_id", 4);
                                        navigate("/requirments");
                                    }}
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
                                IT Literacy 3 <br />
                                තොරතුරු තාක්ෂණ දැනුම 3
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <a
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            13
                                        );
                                        localStorage.setItem("award_id", 4);
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
                                Link Language Skills 3 <br />
                                සම්බන්ධීකරන භාෂා කුසලතා 3
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <a
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            14
                                        );
                                        localStorage.setItem("award_id", 4);
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
                                Compass and Mapping 3 <br />
                                මාලිමාව හා සිතියම්කරණය 3
                            </td>
                            <td> 17 Dec, 2022 </td>
                            <td>
                                <a
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            15
                                        );
                                        localStorage.setItem("award_id", 4);
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
                                Camp Equipment <br />
                                කඳවුරු මෙවලම්
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
                                Adventure Skills
                                <br />
                                වික්‍රමාන්තික ක්‍රියා
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <a href="#" class="status attempt">
                                    Attempt
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td> 18 </td>
                            <td>
                                {" "}
                                Time Management
                                <br />
                                කාලය කළමණාකරණය කිරීම
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <a
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            18
                                        );
                                        localStorage.setItem("award_id", 4);
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
                                Safe From Harm 10
                                <br />
                                හානියෙන් සුරක්ෂාව 10
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <a
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            19
                                        );
                                        localStorage.setItem("award_id", 4);
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
                                Four Nights Camping <br />
                                කඳවුරු රාත්‍රී 4
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <a href="#" class="status attempt">
                                    Attempt
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td> 21 </td>
                            <td>
                                {" "}
                                Community Service Project <br />
                                ප්‍රජා සේවා ව්‍යාපෘතිය
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <a href="#" class="status attempt">
                                    Attempt
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td> 22 </td>
                            <td>
                                {" "}
                                Make the Bushman's Thong <br />
                                වනවාසියාගේ රැහැන සකස් කිරීම
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

export default PrimeMinisterAward;
