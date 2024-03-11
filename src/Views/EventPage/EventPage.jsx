import SideMenu from "../../Components/SideMenu/SideMenu";
import "./EventPage.css";
import React, { useState } from "react";

import { ChakraProvider } from "@chakra-ui/react";

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
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Perform the file upload logic here, e.g., using FormData and an API endpoint

    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile);

      // Replace the following URL with your server endpoint
      fetch("https://example.com/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Upload successful:", data);
          // Handle success, update state, etc.
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
          // Handle error, show error message, etc.
        });
    }
  };

  return (
    <div>
      <SideMenu />

      {/* <h1>Event Page</h1> */}
      <div className="bg2">
        <ChakraProvider>
          <Popover isLazy>
            <PopoverTrigger>
              <Button
                leftIcon={<AddIcon />}
                colorScheme="blackAlpha"
                variant="solid"
                marginTop={10}
                marginLeft={1350}
              >
                Add Event
              </Button>
            </PopoverTrigger>
            <PopoverContent
              width={475}
              height={655}
              color="black"
              bg="white"
              borderColor="black"
              borderWidth={2}
              marginRight={50}
            >
              <div class="wrapper6">
                <div class="title">Event Details Form</div>
                <div class="form">
                  <div class="inputfield">
                    <label>Event Name</label>
                    <input type="text" class="input" />
                  </div>
                  <div class="inputfield">
                    <label>Date</label>
                    <input type="text" class="input" />
                    {/* <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    /> */}
                  </div>
                  <div class="inputfield">
                    <label>Location</label>
                    <input type="text" class="input" />
                  </div>
                  <div class="inputfield">
                    <label>Start Time</label>
                    <input type="password" class="input" />
                  </div>
                  <div class="inputfield">
                    <label>Duration</label>
                    <input type="password" class="input" />
                  </div>

                  <div class="inputfield">
                    <label>Description</label>
                    <textarea class="textarea"></textarea>
                  </div>
                  <div class="inputfield">
                    <label>Form Link</label>
                    <input type="link" class="input" />
                  </div>

                  <div class="inputfield">
                    <label>Add img</label>
                    <input type="file" onChange={handleFileChange} />
                  </div>

                  <div class="inputfield">
                    <input type="submit" value="Add Event" class="btn" />
                  </div>
                </div>
              </div>
              <PopoverArrow />
              <PopoverCloseButton />
            </PopoverContent>
          </Popover>
          <div className="e_box1">
            <IconButton
              aria-label="delete"
              icon={<DeleteIcon />}
              colorScheme="blackAlpha"
              marginLeft={240}
              marginTop={5}
            />

            <div className="e_box1_1">
              <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com.au%2Fpin%2Fscout-camp-flyers--786230047431403689%2F&psig=AOvVaw2VimpFvADqAjLH2lF9uxWg&ust=1709548005799000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIiqtt_w14QDFQAAAAAdAAAAABAE"
                alt=""
              />
              <div className="e_name1">
                <label>vhvjvdjdb</label>
              </div>
              <div className="reg_btn1">
                <Button
                  marginTop={160}
                  bg="rgb(246, 255, 0)"
                  // onClick={onOpen}
                  _hover={{
                    bg: "rgb(255, 55, 0)",
                    color: "white",
                  }}
                >
                  Register
                </Button>
              </div>
            </div>
          </div>

          <div className="e_box2">
            <IconButton
              aria-label="delete"
              icon={<DeleteIcon />}
              colorScheme="blackAlpha"
              marginLeft={240}
              marginTop={5}
            />

            <div className="e_box2_1">
              <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com.au%2Fpin%2Fscout-camp-flyers--786230047431403689%2F&psig=AOvVaw2VimpFvADqAjLH2lF9uxWg&ust=1709548005799000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIiqtt_w14QDFQAAAAAdAAAAABAE"
                alt=""
              />
              <div className="e_name2">
                <label>vhvjvdjdb</label>
              </div>
              <div className="reg_btn2">
                {" "}
                <Button
                  marginTop={160}
                  bg="rgb(246, 255, 0)"
                  // onClick={onOpen}
                  _hover={{
                    bg: "rgb(255, 55, 0)",
                    color: "white",
                  }}
                >
                  Register
                </Button>
              </div>
            </div>
          </div>

          <div className="e_box3">
            <IconButton
              aria-label="delete"
              icon={<DeleteIcon />}
              colorScheme="blackAlpha"
              marginLeft={240}
              marginTop={5}
            />

            <div className="e_box3_1">
              <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com.au%2Fpin%2Fscout-camp-flyers--786230047431403689%2F&psig=AOvVaw2VimpFvADqAjLH2lF9uxWg&ust=1709548005799000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIiqtt_w14QDFQAAAAAdAAAAABAE"
                alt=""
              />
              <div className="e_name3">
                <label>vhvjvdjdb</label>
              </div>
              <div className="reg_btn3">
                {" "}
                <Button
                  marginTop={160}
                  bg="rgb(246, 255, 0)"
                  // onClick={onOpen}
                  _hover={{
                    bg: "rgb(255, 55, 0)",
                    color: "white",
                  }}
                >
                  Register
                </Button>
              </div>
            </div>
          </div>
        </ChakraProvider>
      </div>
    </div>
  );
}

export default EventPage;
