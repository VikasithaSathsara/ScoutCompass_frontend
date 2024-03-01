import "./Award.css";
import B1 from "../../Assests/Membership.png";
import { Button } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";

function PresidentAward() {
    return (
        <div>
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
                    <img src={B1} alt="" />
                </div>
                <h1>President's Award</h1>
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
                                Scout Promise and Law 3 <br />
                                බාලදක්ෂ පොරොන්දුව සහ නීතිය 3{" "}
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
                                Log Book 2 <br />
                                ලොග් පොත 2
                            </td>
                            <td> 27 Aug, 2023 </td>
                            <td>
                                <a href="#" class="status re-attempt">
                                    Re-Attempt
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td> 3</td>
                            <td>
                                {" "}
                                Skills in Art and Hobbies 3
                                <br />
                                කලා සහ විනෝදාංශ කුසලතා 3
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
                                Scout Craft
                                <br />
                                බාලදක්ෂ ශිල්පය
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <a href="#" class="status attempt">
                                    Attempt
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td> 5</td>
                            <td>
                                {" "}
                                Pioneering Project 4
                                <br />
                                පුරෝගාමී ව්‍යාපෘතිය 4
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
                                Leadership in Emergencies and Natural Disasters  <br />
                                හදිසි අවස්ථාවකදී ස්වභාවික විපතකදී  නායකත්වය දැරීම
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
                                Health Habits <br />
                                සෞඛ්‍ය පුරුදු
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
                                IT Literacy 4 <br />
                                තොරතුරු තාක්ෂණ දැනුම 4{" "}
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
                                Link Language Skills 4 <br />
                                සම්බන්ධීකරන  භාෂා කුසලතා 4
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
                                Safe from Harm 11 <br />
                                හානියෙන් සුරක්ෂාව 11
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
                                Organising a Hike including Scout Skills and Challenges  <br />
                                බාලදක්ෂ ශිල්පිය දක්ශතා සහ අභියෝග ඇතුළුව පාගමනක් සංවිධානය කිරීම
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
                            <td> 13</td>
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
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default PresidentAward;
