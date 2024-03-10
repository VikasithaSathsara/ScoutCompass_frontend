import "./HomePage.css";
import SideMenu from "../../Components/SideMenu/SideMenu";
import S1 from "../../Assests/Slide1.jpg";
import S2 from "../../Assests/Slide3.jpg";
import S3 from "../../Assests/Slide4.png";
import S4 from "../../Assests/Hiking.jpg";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";

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

function HomePage() {
  const [selectedSlide, setSelectedSlide] = useState("radio1");
  const handleSlideChange = (event) => {
    setSelectedSlide(event.target.id);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextSlide = getNextSlideId(selectedSlide);
      setSelectedSlide(nextSlide);
    }, 6000);
    return () => clearInterval(intervalId);
  }, [selectedSlide]);

  const getNextSlideId = (currentSlide) => {
    switch (currentSlide) {
      case "radio1":
        return "radio2";
      case "radio2":
        return "radio3";
      case "radio3":
        return "radio4";
      case "radio4":
        return "radio1";
    }
  };

  const [isOpen, setIsOpen] = useState(true);

  const onClose = () => setIsOpen(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg_home">
      <ChakraProvider>
        <SideMenu />
        <h1>Home Page</h1>
        <div class="homeslider">
          <div class="homeslides">
            <input
              type="radio"
              name="radio-btn"
              id="radio1"
              checked={selectedSlide === "radio1"}
              onChange={handleSlideChange}
            />
            <input
              type="radio"
              name="radio-btn"
              id="radio2"
              checked={selectedSlide === "radio2"}
              onChange={handleSlideChange}
            />
            <input
              type="radio"
              name="radio-btn"
              id="radio3"
              checked={selectedSlide === "radio3"}
              onChange={handleSlideChange}
            />
            <input
              type="radio"
              name="radio-btn"
              id="radio4"
              checked={selectedSlide === "radio4"}
              onChange={handleSlideChange}
            />

            <div class="homeslide slide1">
              <img src={S1} alt="" />
            </div>

            <div class="homeslide slide2">
              <img src={S2} alt="" />
            </div>

            <div class="homeslide slide3">
              <img src={S3} alt="" />
            </div>

            <div class="homeslide slide4">
              <img src={S4} alt="" />
            </div>
          </div>
        </div>

        <div id="homecontainer">
          <div id="home-products-container">
            <a href="#">
              <div class="homeproduct" id="">
                <span className="material-symbols-outlined">groups</span>
                <div className="number">1777</div>
                <div className="intro">Scouts</div>
              </div>
            </a>
            <a href="#">
              <div class="homeproduct" id="">
                <span className="material-symbols-outlined">
                  interactive_space
                </span>
                <div className="number">1777</div>
                <div className="intro">Instructors</div>
              </div>
            </a>

            <a href="#">
              <div class="homeproduct" id="">
                <span className="material-symbols-outlined">camping</span>
                <div className="number">1777</div>
                <div className="intro">Events nearby</div>
              </div>
            </a>
            <a href="mcq">
              <div class="homeproduct" id="">
                <span className="material-symbols-outlined">description</span>
                <div className="number">1777</div>
                <div className="intro">MCQ'S</div>
              </div>
            </a>
          </div>
        </div>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
          <DrawerOverlay />
          <DrawerContent bgColor="#CBD5E0">
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px" textAlign="center" size="lg">
              Event Reminder
            </DrawerHeader>

            <DrawerBody>
              <Alert status="info" variant="left-accent" marginTop={10}>
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
                        View a summary of all your clients over the last month.
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
                        Check out the overview of your clients.
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
                        See a detailed analysis of all your business clients.
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
      </ChakraProvider>
    </div>
  );
}

export default HomePage;
