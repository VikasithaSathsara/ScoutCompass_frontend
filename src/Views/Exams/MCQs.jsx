import "./MCQs.css";
import { Button } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

function MCQs() {
    const navigate = useNavigate();
    useEffect(() => {
        const email = localStorage.getItem("loggedInUserEmail");
        if (!email) navigate("/login");
    }, []);

    return (
        <div className="bg_quiz">
            <h1>Practice Questions</h1>
            <Button
                bg="transparent"
                textColor="black"
                fontWeight="600"
                width="100px"
                borderRadius="40px"
                leftIcon={<FaArrowLeft />}
                border="2px solid black"
                padding="10px"
                marginLeft="120px"
                onClick={() => window.history.back()}
                _hover={{ bg: "yellow", textColor: "black" }}
            >
                Back
            </Button>
            <ol class="olcards">
                <li style={{ "--cardColor": "#fc374e" }}>
                    <a
                        href="https://forms.gle/gsLJgap4MHR5N1eo9"
                        target="_blank"
                    >
                        <div class="content">
                            <div class="mcq-title">Model MCQ Paper 1</div>
                        </div>
                    </a>
                </li>

                <li style={{ "--cardColor": "#fc374e" }}>
                    <a
                        href="https://forms.gle/EcZ6PTe6FUUZPbUH6"
                        target="_blank"
                    >
                        <div class="content">
                            <div class="mcq-title">Model MCQ Paper 2</div>
                        </div>
                    </a>
                </li>

                <li style={{ "--cardColor": "#fc374e" }}>
                    <a
                        href="https://forms.gle/Nwpy23owZBPWZSwv7"
                        target="_blank"
                    >
                        <div class="content">
                            <div class="mcq-title">Model MCQ Paper 3</div>
                        </div>
                    </a>
                </li>

                <li style={{ "--cardColor": "#fc374e" }}>
                    <a
                        href="https://forms.gle/tdT7Vut3U7LimTGr8"
                        target="_blank"
                    >
                        <div class="content">
                            <div class="mcq-title">Model MCQ Paper 4</div>
                        </div>
                    </a>
                </li>

                <li style={{ "--cardColor": "#fc374e" }}>
                    <a
                        href="https://forms.gle/7Jutajjk7bCEWti47"
                        target="_blank"
                    >
                        <div class="content">
                            <div class="mcq-title">Model MCQ Paper 5</div>
                        </div>
                    </a>
                </li>

                <li style={{ "--cardColor": "#fc374e" }}>
                    <a
                        href="https://forms.gle/kmGSdUqpMMwciD5p8"
                        target="_blank"
                    >
                        <div class="content">
                            <div class="mcq-title">Model MCQ Paper 6</div>
                        </div>
                    </a>
                </li>

                <li style={{ "--cardColor": "#fc374e" }}>
                    <a
                        href="https://forms.gle/1QEAfqGKXXerPjC2A"
                        target="_blank"
                    >
                        <div class="content">
                            <div class="mcq-title">Model MCQ Paper 7</div>
                        </div>
                    </a>
                </li>

                <li style={{ "--cardColor": "#fc374e" }}>
                    <a
                        href="https://forms.gle/LihAPZpnyzdu34xn7"
                        target="_blank"
                    >
                        <div class="content">
                            <div class="mcq-title">Model MCQ Paper 8</div>
                        </div>
                    </a>
                </li>

                <li style={{ "--cardColor": "#fc374e" }}>
                    <a
                        href="https://forms.gle/tnBTuD3fvdtSSXC87"
                        target="_blank"
                    >
                        <div class="content">
                            <div class="mcq-title">Model MCQ Paper 9</div>
                        </div>
                    </a>
                </li>

                <li style={{ "--cardColor": "#fc374e" }} id="last">
                    <a
                        href="https://forms.gle/cLgvyfHZ8P7kWGSe6"
                        target="_blank"
                    >
                        <div class="content">
                            <div class="mcq-title">Model MCQ Paper 10</div>
                        </div>
                    </a>
                </li>
            </ol>
        </div>
    );
}

export default MCQs;
