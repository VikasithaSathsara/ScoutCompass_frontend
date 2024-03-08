import "./Award.css";
import B1 from "../../Assests/Membership.png";
import { Button } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";

function MembershipAward() {
    const navigateToAnotherPage = async (requirementId, awardId) => {
        localStorage.setItem("requirement_id", requirementId);
        localStorage.setItem("award_id", awardId);
        window.location.href = "/requirments";
    };

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
                    <img src={B1} alt="" />
                </div>
                <h1>Membership Award</h1>
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
                                Scout Promise and Law <br />
                                බාලදක්ෂ පොරොන්දුව සහ නීතිය{" "}
                            </td>
                            <td> 17 Dec, 2022 </td>
                            <td>
                                <button
                                    onClick={() => navigateToAnotherPage(1, 2)}
                                    className="status completed"
                                >
                                    Completed
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td> 2 </td>
                            <td>
                                {" "}
                                National Anthem <br />
                                ජාතික ගීය
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
                                Scout Sign and Methods of Saluting
                                <br />
                                බාලදක්ෂ ආචාරය සහ සලකුණ
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
                                Founder
                                <br />
                                නිර්මාතෘවරයා
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
                                Scout Whistle and Hand Signals
                                <br />
                                බාලදක්ෂ නලා සහ හස්ත සංඥා
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
                                Knots and Whipping 1 <br />
                                ගැට හා වෙළුම් 1
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
                                Smartness and Good Order 1 <br />
                                හුරුබුහුටි බව සහ හොඳ පිළිවෙල 1
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
                                Log Book 1 <br />
                                ලොග් පොත 1
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
                                Simple Health Habits 1 <br />
                                සරල සෞඛය පුරුදු 1
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
                                Safe from Harm 7 <br />
                                හානියෙන් සුරක්ෂාව 7
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
                                Thrift-Savings Account 1 <br />
                                ඉතුරුම් ගිණුම 1
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
                                Good Habbits 1 <br />
                                යහපත් පුරුදු 1
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
                                First Aid 1 <br />
                                ප්රථමාධාර 1
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <a href="#" class="status attempt">
                                    Attempt
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td> 14</td>
                            <td>
                                {" "}
                                Wood Craft Signs <br />
                                වන මං සලකුණු
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
                            2 Months of Service <br />
                            මාස 2 ක සේවා කාලය
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

export default MembershipAward;
