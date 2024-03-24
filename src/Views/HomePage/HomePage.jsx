import "./HomePage.css";
import SideMenu from "../../Components/SideMenu/SideMenu";
import Map from "../../Assests/worldmap.jpg";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from "@chakra-ui/react";
import {
    Button,
    Card,
    Heading,
    CardBody,
    StackDivider,
    Text,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    Box,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { Alert, AlertIcon } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

    useEffect(() => {
        const email = localStorage.getItem("loggedInUserEmail");
        if (!email) navigate("/login");
    }, []);

    const [isOpen, setIsOpen] = useState(true);

    const onClose = () => setIsOpen(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(false);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    const data = [
        { label: "Africa Region", value: 40, color: "#5EB344" },
        { label: "Arab Region", value: 19, color: "#FCB72A" },
        { label: "Asia-Pacific Region", value: 30, color: "#F8821A" },
        { label: "European Region", value: 66, color: "#E0393E" },
        { label: "Inter-America Region", value: 36, color: "#963D97" },
    ];

    const [latestEvent, setLatestevent] = useState([]);
    const [scoutCount, setScoutCount] = useState("");
    const [instructorCount, setInstroutorCount] = useState("");
    const [eventCount, setEventCount] = useState("");
    const [resourceCount, setResourceCount] = useState("");

    const fetchLatestEvent = async () => {
        try {
            const response = await fetch(
                "http://13.233.134.21:8081/api/scoutcompass/event/latestEvent"
            );
            const data = await response.json();

            setLatestevent(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const fetchEventCount = async () => {
        try {
            const response = await fetch(
                "http://13.233.134.21:8081/api/scoutcompass/event/count"
            );
            const data = await response.json();

            setEventCount(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const fetchResourceCount = async () => {
        try {
            const response = await fetch(
                "http://13.233.134.21:8081/api/scoutcompass/resource/count"
            );
            const data = await response.json();

            setResourceCount(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const fetchScoutCount = async () => {
        try {
            const response = await fetch(
                "http://13.233.134.21:8081/api/scoutcompass/auth/scout/count"
            );
            const data = await response.json();

            setScoutCount(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const fetchInstructorCount = async () => {
        try {
            const response = await fetch(
                "http://13.233.134.21:8081/api/scoutcompass/auth/instructor/count"
            );
            const data = await response.json();

            setInstroutorCount(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        fetchLatestEvent();
        fetchEventCount();
        fetchResourceCount();
        fetchInstructorCount();
        fetchScoutCount();
    }, []);

    return (
        <div className="bg_home">
            <ChakraProvider>
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                />
                <SideMenu />
                <h1>Home Page</h1>
                <Drawer
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                    size="sm"
                >
                    <DrawerOverlay />
                    <DrawerContent bgColor="#CBD5E0">
                        <DrawerCloseButton />
                        <DrawerHeader
                            borderBottomWidth="1px"
                            textAlign="center"
                            size="lg"
                        >
                            Event Reminder
                        </DrawerHeader>

                        <DrawerBody>
                            <Alert
                                status="info"
                                variant="left-accent"
                                marginTop={10}
                            >
                                <AlertIcon />A new event has been added !
                            </Alert>
                            <Card marginTop={20}>
                                <CardBody>
                                    <Stack
                                        divider={<StackDivider />}
                                        spacing="7"
                                        borderColor="black"
                                    >
                                        <Box style={{ marginBottom: "20px" }}>
                                            <Heading
                                                size="xs"
                                                textTransform="uppercase"
                                                color="blue.500"
                                            >
                                                Event Name
                                            </Heading>
                                            <Text pt="2" fontSize="sm">
                                                {latestEvent.eventName}
                                            </Text>
                                        </Box>
                                        <Box style={{ marginBottom: "20px" }}>
                                            <Heading
                                                size="xs"
                                                textTransform="uppercase"
                                                color="green.500"
                                            >
                                                Date
                                            </Heading>
                                            <Text pt="2" fontSize="sm">
                                                {latestEvent.eventDate}
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Heading
                                                size="xs"
                                                textTransform="uppercase"
                                                color="purple.500"
                                            >
                                                Location
                                            </Heading>
                                            <Text pt="2" fontSize="sm">
                                                {latestEvent.eventLocation}
                                            </Text>
                                        </Box>
                                    </Stack>
                                </CardBody>
                            </Card>
                            <Link to="/event">
                                <Button
                                    rightIcon={<ArrowRightIcon />}
                                    colorScheme="blackAlpha"
                                    variant="solid"
                                    marginLeft={130}
                                    marginTop={100}
                                >
                                    See more
                                </Button>
                            </Link>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
                <div class="hm_content">
                    <div class="hm_card">
                        <div class="hm_icon">
                            <i class="material-icons md-36">groups</i>
                        </div>

                        <p class="hm_title">SCOUTS </p>
                        <p class="hm_text">{scoutCount}</p>
                    </div>

                    <div class="hm_card">
                        <div class="hm_icon">
                            <i class="material-icons md-36">person</i>
                        </div>
                        <p class="hm_title">INSTRUCTORS </p>
                        <p class="hm_text">{instructorCount}</p>
                    </div>

                    <div class="hm_card">
                        <div class="hm_icon">
                            <i class="material-icons md-36">event</i>
                        </div>
                        <p class="hm_title">EVENTS </p>
                        <p class="hm_text">{eventCount}</p>
                    </div>

                    <div class="hm_card">
                        <a href="/mcq">
                            <div class="hm_icon">
                                <i class="material-icons md-36">description</i>
                            </div>
                            <p class="hm_title">MCQ</p>
                            <p class="hm_text">
                                Enhance your scouting knowledge
                            </p>
                        </a>
                    </div>
                </div>
                <section id="chart">
                    <div className="simple-bar-chart">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className="item"
                                style={{
                                    "--clr": item.color,
                                    "--val": item.value,
                                }}
                            >
                                <div className="label">{item.label}</div>
                                <div className="value">{`${item.value}`}</div>
                            </div>
                        ))}
                    </div>

                    <TableContainer
                        marginLeft={50}
                        marginTop={100}
                        maxWidth="100%"
                        overflowX="auto"
                    >
                        <Table
                            bgColor="white"
                            variant="striped"
                            colorScheme="blue"
                            size="md"
                            width="100%"
                        >
                            <TableCaption textColor="black" fontWeight={700}>
                                Scouting distribution around the world
                            </TableCaption>
                            <Thead>
                                <Tr>
                                    <Th bgColor="#1E90FF" textColor="black">
                                        Region
                                    </Th>
                                    <Th bgColor="#1E90FF" textColor="black">
                                        Number of organization
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td textAlign="start">Africa Region</Td>
                                    <Td textAlign="center">40</Td>
                                </Tr>
                                <Tr>
                                    <Td>Arab Region</Td>
                                    <Td textAlign="center">19</Td>
                                </Tr>
                                <Tr>
                                    <Td>Asia-Pacific Region</Td>
                                    <Td textAlign="center">30</Td>
                                </Tr>
                                <Tr>
                                    <Td>European Region</Td>
                                    <Td textAlign="center">66</Td>
                                </Tr>
                                <Tr>
                                    <Td>Interamerica Region</Td>
                                    <Td textAlign="center">36</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </section>

                <div className="hm_ftr">
                    <img src={Map} id="map" />
                    <ul class="bargraph">
                        <li class="reddeep">Africa Region</li>
                        <li class="redpink">Arab Region</li>
                        <li class="orange">Asia-Pacific Region</li>
                        <li class="yellow">European Region</li>
                        <li class="greenbright">Inter-America Region</li>
                        <br />
                        <lable id="grp_lbl">
                            Number of scouts around the world (Million)
                        </lable>
                    </ul>
                </div>
            </ChakraProvider>
        </div>
    );
}

export default HomePage;
