import SideMenu from "../../Components/SideMenu/SideMenu";
import "./EventPage.css";
import React, { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
    IconButton,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

import { AddIcon, DeleteIcon } from "@chakra-ui/icons";

function EventPage() {
    const [formData, setFormData] = useState({
        eventName: "",
        date: "",
        location: "",
        startTime: "",
        duration: "",
        description: "",
        formLink: "",
        photo: null,
    });
    const [eventArrayList, setEventArrayList] = useState([]);

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setFormData({
            ...formData,
            photo: event.target.files[0],
        });
    };

    const fetchEventList = async () => {
        try {
            const response = await fetch(
                "http://13.233.134.21:8081/api/scoutcompass/event/eventList"
            );
            const data = await response.json();

            setEventArrayList(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchEventList();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const {
            eventName,
            date,
            location,
            startTime,
            duration,
            description,
            formLink,
            photo,
        } = formData;

        const dataToSend = {
            eventName: formData.eventName,
            eventDate: formData.date,
            dayDuration: formData.duration,
            eventLocation: formData.location,
            startTime: formData.startTime,
            description: formData.description,
            formLink: formData.formLink,
            // Photo should be appended to the formData only if it is not null
            ...(photo && { photo }),
        };

        try {
            const response = await fetch(
                "http://13.233.134.21:8081/api/scoutcompass/event/create",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(dataToSend),
                }
            );
            fetchEventList();
            window.location.href = "/event";
            if (response.ok) {
                const data = await response.json();
                console.log("Success:", data);
            } else {
                console.error("Error:", response.status);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleDeleteEvent = async (fileName) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this event?"
        );
        if (confirmed) {
            const baseUrl =
                "http://13.233.134.21:8081/api/scoutcompass/event/delete/";
            const url = baseUrl + fileName;
            try {
                const response = await fetch(url, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                fetchEventList();
                window.location.href = "/event";

                if (response.ok) {
                    console.log("Event deleted successfully");
                } else {
                    console.error("Event to delete file");
                }
            } catch (error) {
                console.error("Error:", error.message);
            }
        }
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const navigate = useNavigate();
    useEffect(() => {
        const email = localStorage.getItem("loggedInUserEmail");
        if (!email) navigate("/login");
    }, []);




    
    const [isAdmin, setIsAdmin] = useState(false);
    
    useEffect(() => {
        // Fetch user entity based on logged-in user's email
        const fetchUserEntity = async () => {
            try {
                const loggedInUserEmail = localStorage.getItem("loggedInUserEmail");
                const response = await fetch(`http://localhost:8081/api/scoutcompass/auth/user?userEmail=${loggedInUserEmail}`);
                const userData = await response.json();
                // Assuming userData has a 'role' key
                setIsAdmin(userData.role === "ROLE_ADMIN");
                
            } catch (error) {
                console.error("Error fetching user entity:", error);
            }
        };

        fetchUserEntity();
    }, []);
 
  

    



    return (
        <div className="bg_event">
            <SideMenu />

            <h1>Event Page</h1>
            <div>
                <ChakraProvider>
                {isAdmin && ( 
                    <Popover isLazy>
                        <PopoverTrigger>
                            <Button
                                leftIcon={<AddIcon />}
                                colorScheme="blackAlpha"
                                variant="solid"
                                position="absolute"
                                top="20"
                                right="10"
                            >
                                Add Event
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent
                            width={450}
                            height={570}
                            color="black"
                            bg="white"
                            borderColor="black"
                            borderWidth={2}
                            marginRight={50}
                        >
                            <div class="wrapper6">
                                <div class="title">Event Details Form</div>
                                <form onSubmit={handleSubmit}>
                                    <div className="form">
                                        <div className="inputfield">
                                            <label>Event Name</label>
                                            <input
                                                type="text"
                                                className="input"
                                                name="eventName"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="inputfield">
                                            <label>Date</label>
                                            <input
                                                type="text"
                                                className="input"
                                                name="date"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="inputfield">
                                            <label>Location</label>
                                            <input
                                                type="text"
                                                className="input"
                                                name="location"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="inputfield">
                                            <label>Start Time</label>
                                            <input
                                                type="text"
                                                className="input"
                                                name="startTime"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="inputfield">
                                            <label>Duration</label>
                                            <input
                                                type="text"
                                                className="input"
                                                name="duration"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="inputfield">
                                            <label>Description</label>
                                            <textarea
                                                className="textarea"
                                                name="description"
                                                style={{ height: "80px" }}
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>
                                        <div className="inputfield">
                                            <label>Form Link</label>
                                            <input
                                                type="link"
                                                className="input"
                                                name="formLink"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="inputfield">
                                            <input
                                                type="submit"
                                                value="Add Event"
                                                className="btn"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <PopoverArrow />
                            <PopoverCloseButton />
                        </PopoverContent>
                    </Popover>
)}
                    <div className="event_container">
                        {eventArrayList.map((item, index) => (
                            <div className={`e_box${index + 1}`}>
                                <IconButton
                                    aria-label="delete"
                                    icon={<DeleteIcon />}
                                    colorScheme="blackAlpha"
                                    marginLeft={240}
                                    marginTop={5}
                                    onClick={() =>
                                        handleDeleteEvent(item.eventName)
                                    }
                                />

                                <div className="e_box1_1">
                                    <img
                                        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com.au%2Fpin%2Fscout-camp-flyers--786230047431403689%2F&psig=AOvVaw2VimpFvADqAjLH2lF9uxWg&ust=1709548005799000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIiqtt_w14QDFQAAAAAdAAAAABAE"
                                        alt=""
                                    />
                                </div>
                                <div className="e_name1">
                                    <label className="e_lbl">Name :</label>{" "}
                                    {item.eventName} <br />
                                    <label className="e_lbl">Date :</label>{" "}
                                    {item.eventDate} <br />
                                    <label className="e_lbl">
                                        Duration :
                                    </label>{" "}
                                    {item.dayDuration}
                                    <br />
                                    <label className="e_lbl">
                                        Location :
                                    </label>{" "}
                                    {item.eventLocation}
                                    <br />
                                    <label className="e_lbl">
                                        Start Time :
                                    </label>{" "}
                                    {item.startTime}
                                    <br />
                                    <label className="e_lbl">
                                        Description :
                                    </label>{" "}
                                    {item.description}
                                    <br />
                                    <Button
                                        bg="rgb(246, 255, 0)"
                                        marginTop="10px"
                                        border="1px solid black"
                                        onClick={() =>
                                            window.open(item.formLink, "_blank")
                                        }
                                        _hover={{
                                            bg: "rgb(255, 55, 0)",
                                            color: "white",
                                        }}
                                    >
                                        Register
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </ChakraProvider>
            </div>
        </div>
    );
}

export default EventPage;
