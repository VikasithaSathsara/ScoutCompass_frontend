import React, { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import "./Requirments.css";
import { useNavigate } from "react-router-dom";
import { WarningTwoIcon, CheckCircleIcon, InfoIcon } from "@chakra-ui/icons";

const Requirments = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [finalScore, setFinalScore] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const email = localStorage.getItem("loggedInUserEmail");
        if (!email) navigate("/login");
    }, []);

    const [requirementData, setRequirementData] = useState({
        userName: "",
        awardId: "",
        requirementId: "",
        marks: "",
    });

    useEffect(() => {
        // Fetch quiz questions from Spring Boot API
        const fetchQuestions = async (awardId, requirementId) => {
            try {
                const response = await fetch(
                    `http://localhost:8081/api/scoutcompass/requirement/questions?awardId=${awardId}&requirementId=${requirementId}`
                );
                const data = await response.json();
                if (data) {
                    setQuestions(data);
                }
                //   localStorage.removeItem("award_id");
                //   localStorage.removeItem("requirment_id");
            } catch (error) {
                console.error("Error fetching questions:", error);
            }
        };
        const requirment_id = localStorage.getItem("requirment_id");
        const award_id = localStorage.getItem("award_id");
        fetchQuestions(award_id, requirment_id);
    }, []);

    const handleAnswerSelect = (selectedAnswer, questionIndex) => {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[questionIndex] = selectedAnswer;
        setUserAnswers(updatedAnswers);
    };

    const handleNextQuestions = () => {
        setCurrentQuestion((prevQuestion) => prevQuestion + 5);
    };

    const handlePreviousQuestions = () => {
        setCurrentQuestion((prevQuestion) => Math.max(0, prevQuestion - 5));
    };

    const isSubmitDisabled = userAnswers.length !== questions.length;

    const handleSubmitQuiz = async () => {
        // Check if all questions have been answered before submitting
        if (userAnswers.length !== questions.length) {
            alert("Please answer all questions before submitting.");
            return;
        }

        // Calculate final score
        const score = userAnswers.reduce((totalScore, answer, index) => {
            return answer === questions[index].correctAnswer
                ? totalScore + 10
                : totalScore;
        }, 0);

        setFinalScore(score);

        const requirment_id = localStorage.getItem("requirment_id");
        const award_id = localStorage.getItem("award_id");
        const userEmail = localStorage.getItem("loggedInUserEmail");

        const dataToSend = {
            userName: userEmail,
            awardId: award_id,
            requirementId: requirment_id,
            marks: score,
        };

        try {
            await fetch(
                `http://localhost:8081/api/scoutcompass/requirement/status/marks/submit`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(dataToSend),
                }
            );

            downloadReceipt(award_id,requirementData.sinhalaName,score); 

            localStorage.removeItem("award_id");
            localStorage.removeItem("requirment_id");

            let textColor = "";
            let icon = null;
            let completionStatus = "";
            let explain = "";

            if (score >= 70) {
                icon = <CheckCircleIcon w={100} h={100} marginTop={50} />;
                textColor = "green";
                completionStatus = "Completed !";
                explain = "Great work !";
            } else if (score >= 50) {
                icon = <InfoIcon w={100} h={100} marginTop={50} />;
                textColor = "orange";
                completionStatus = "Failed!";
                explain = "Nice Try !";
            } else {
                icon = <WarningTwoIcon w={100} h={100} marginTop={50} />;
                textColor = "red";
                completionStatus = "Failed !";
                explain = "Not good enough !";
            }

            setFeedback({
                text: `Your score is ${score} out of 100`,
                color: textColor,
                icon: icon,
                completionStatus: completionStatus,
                explain: explain,
            });
        } catch (error) {
            console.error("Error submitting quiz:", error);
        }
    };
    const [feedback, setFeedback] = useState({
        text: "",
        color: "",
        icon: null,
        completionStatus: "",
        explain: "",
    });

    if (!questions.length) {
        return <div>Loading...</div>;
    }

    const currentQuestions = questions.slice(
        currentQuestion,
        currentQuestion + 5
    );

    const generateReceiptContent = (award_id,requirement_id, _marks) => {
        const { userName, award_Id, requirement_Id, marks_ } = requirementData;
        const userEmail = localStorage.getItem("loggedInUserEmail");
        const awardId = award_id;
        const requirementId = requirement_id;
        const marks = _marks;
        const receiptContent = `
            User:            ${userEmail}
            Award ID:        ${awardId}
            Requirement ID:  ${requirementId}
            Marks:           ${marks}
        `;
        return receiptContent;
    };

        // Function to download receipt
        const downloadReceipt = (award_id,requirement_id, _marks) => {
            const receiptContent = generateReceiptContent(award_id,requirement_id, _marks);
            const element = document.createElement("a");
            const file = new Blob([receiptContent], { type: "text/plain" });
            element.href = URL.createObjectURL(file);
            element.download = "quiz_receipt.txt";
            document.body.appendChild(element); // Required for this to work in Firefox
            element.click();
        };

    return (
        <div>
            <h2 className="quizh2">Requirement 2 of Award 1</h2>
            <Button
                bg="transparent"
                textColor="black"
                fontWeight="600"
                width="100px"
                borderRadius="40px"
                leftIcon={<FaArrowLeft />}
                border="2px solid black"
                padding="10px"
                marginLeft="60px"
                onClick={() => window.history.back()}
                _hover={{ bg: "yellow", textColor: "black" }}
            >
                Exit
            </Button>
            {finalScore !== null ? (
                <div className="score">
                    <div id="final-score" style={{ color: feedback.color }}>
                        {feedback.icon}
                    </div>
                    <p id="marks">{feedback.text}</p>

                    <h3 id="explain" style={{ color: feedback.color }}>
                        {feedback.explain}
                    </h3>
                    <h2 id="score-completed">
                        Requirement {feedback.completionStatus}
                    </h2>
                </div>
            ) : (
                <div className="quiz-container">
                    {currentQuestions.map((currentQuestionData, index) => (
                        <div key={index}>
                            <h2 className="question-number">
                                Question {currentQuestion + index + 1}
                            </h2>
                            <p className="questions">
                                {currentQuestionData.questionText}
                            </p>
                            <ol>
                                <li>
                                    <label className="answers">
                                        <input
                                            className="quiz-answers"
                                            type="radio"
                                            name={`answer-${index}`}
                                            value={currentQuestionData.answer1}
                                            checked={
                                                userAnswers[
                                                    currentQuestion + index
                                                ] ===
                                                currentQuestionData.answer1
                                            }
                                            onChange={() =>
                                                handleAnswerSelect(
                                                    currentQuestionData.answer1,
                                                    currentQuestion + index
                                                )
                                            }
                                        />
                                        {currentQuestionData.answer1}
                                    </label>
                                </li>
                                <li>
                                    <label className="answers">
                                        <input
                                            className="quiz-answers"
                                            type="radio"
                                            name={`answer-${index}`}
                                            value={currentQuestionData.answer2}
                                            checked={
                                                userAnswers[
                                                    currentQuestion + index
                                                ] ===
                                                currentQuestionData.answer2
                                            }
                                            onChange={() =>
                                                handleAnswerSelect(
                                                    currentQuestionData.answer2,
                                                    currentQuestion + index
                                                )
                                            }
                                        />
                                        {currentQuestionData.answer2}
                                    </label>
                                </li>
                                <li>
                                    <label className="answers">
                                        <input
                                            className="quiz-answers"
                                            type="radio"
                                            name={`answer-${index}`}
                                            value={currentQuestionData.answer3}
                                            checked={
                                                userAnswers[
                                                    currentQuestion + index
                                                ] ===
                                                currentQuestionData.answer3
                                            }
                                            onChange={() =>
                                                handleAnswerSelect(
                                                    currentQuestionData.answer3,
                                                    currentQuestion + index
                                                )
                                            }
                                        />
                                        {currentQuestionData.answer3}
                                    </label>
                                </li>
                                <li>
                                    <label className="answers">
                                        <input
                                            className="quiz-answers"
                                            type="radio"
                                            name={`answer-${index}`}
                                            value={currentQuestionData.answer4}
                                            checked={
                                                userAnswers[
                                                    currentQuestion + index
                                                ] ===
                                                currentQuestionData.answer4
                                            }
                                            onChange={() =>
                                                handleAnswerSelect(
                                                    currentQuestionData.answer4,
                                                    currentQuestion + index
                                                )
                                            }
                                        />
                                        {currentQuestionData.answer4}
                                    </label>
                                </li>
                            </ol>
                        </div>
                    ))}
                    <div className="quiz-button-container">
                        <button
                            className="quiz-button"
                            onClick={handlePreviousQuestions}
                            disabled={currentQuestion === 0}
                        >
                            Previous
                        </button>
                        <button
                            className="quiz-button"
                            onClick={handleNextQuestions}
                            disabled={currentQuestion + 5 >= questions.length}
                        >
                            Next
                        </button>
                        <button
                            className="quiz-button"
                            onClick={handleSubmitQuiz}
                            disabled={isSubmitDisabled}
                        >
                            Submit Quiz
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Requirments;
