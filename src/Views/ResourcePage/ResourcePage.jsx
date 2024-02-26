import "./ResourcePage.css";
import SideMenu from "../../Components/SideMenu/SideMenu";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import { ChakraProvider } from "@chakra-ui/react";

import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import {
  AddIcon,
  DeleteIcon,
  HamburgerIcon,
  DownloadIcon,
  ViewIcon,
} from "@chakra-ui/icons";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function ResourcePage() {
  const handleViewResource_ = () => {
    // Replace the URL with your actual API endpoint
    const pdfUrl =
      "http://localhost:8081/api/scoutcompass/resource/download/week_03(1).pdf";

    // Open the PDF in a new tab
    window.open(pdfUrl, "_blank");
  };
  const [file_, setFile_] = useState(null);

  const handleFileChange = (e) => {
    setFile_(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file_) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("resource", file_);

    try {
      const response = await fetch(
        "http://localhost:8081/api/scoutcompass/resource/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      // Handle the response accordingly
      console.log("Response:", response);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const initialFocusRef = React.useRef();

  // View,delete resources part

  const handleDeleteResource = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this resource?"
    );
    if (confirmed) {
      alert("Resource Deleted");
    }
  };

  // Inside your functional component or class component

  const handleDownload = () => {
    const url =
      "http://localhost:8081/api/scoutcompass/resource/download/week_03(1).pdf";

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "week_03(1).pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error("Error downloading file:", error);
      });
  };

  return (
    <div>
      <SideMenu />
      <div className="bg1">
        <ChakraProvider>
          <Stack direction="row" spacing={5} marginLeft={1200} marginBottom={5}>
            <Popover
              initialFocusRef={initialFocusRef}
              placement="bottom"
              closeOnBlur={false}
              isOpen={isOpen} // Pass isOpen to control the popover visibility
              onClose={handleOpen} // Use onClose to handle popover close
            >
              <PopoverTrigger>
                <Button
                  onClick={handleOpen}
                  leftIcon={<AddIcon />}
                  colorScheme="blackAlpha"
                  variant="solid"
                  marginTop={5}
                  marginLeft={100}
                >
                  Add Resources
                </Button>
              </PopoverTrigger>
              <PopoverContent
                width={375}
                height={390}
                color="black"
                bg="white"
                borderColor="black"
                borderWidth={3}
                marginRight={25}
              >
                <PopoverArrow bg="white" />
                <PopoverCloseButton />
                <PopoverBody>
                  <div className="file-card">
                    <form onSubmit={handleSubmit}>
                      <div className="file-inputs">
                        <input
                          type="file"
                          id="fileInput"
                          onChange={handleFileChange}
                        />
                        <button>
                          <p className="main1">
                            Browse here
                            <br />
                            or
                            <br />
                            Drag & Drop
                          </p>
                        </button>
                      </div>
                      <div className="upload">
                        <button type="submit">Upload File</button>
                      </div>
                    </form>
                  </div>
                    
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Stack>

          <div className="box1">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                colorScheme="white"
                variant="outline"
                marginLeft={150}
                marginTop={2.5}
              />
              <MenuList bgColor={"yellow"} marginLeft={-165}>
                <MenuItem
                  icon={<ViewIcon />}
                  bgColor={"whiteAlpha"}
                  onClick={handleViewResource_}
                >
                  View Resource
                </MenuItem>

                <MenuItem
                  icon={<DownloadIcon />}
                  bgColor={"whiteAlpha"}
                  onClick={handleDownload}
                >
                  Download Resource
                </MenuItem>

                <MenuItem
                  icon={<DeleteIcon />}
                  bgColor={"whiteAlpha"}
                  onClick={handleDeleteResource}
                >
                  Delete Resource
                </MenuItem>
              </MenuList>
            </Menu>

            <div className="box1_1">
              <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3APDF_file_icon.svg&psig=AOvVaw1SSWwqzWzje9d-uWDmO92f&ust=1708097668889000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNivyujVrYQDFQAAAAAdAAAAABAE"
                alt=""
              />
              <div className="name1">
                <label>Singithi Scout Programe gggggggggggggggggggg</label>
              </div>
            </div>
          </div>

          <div className="box2">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                colorScheme="white"
                variant="outline"
                marginLeft={150}
                marginTop={2.5}
              />
              <MenuList marginLeft={-165} bgColor={"yellow"}>
                <MenuItem
                  icon={<ViewIcon />}
                  bgColor={"whiteAlpha"}
                  onClick={handleViewResource_}
                >
                  View Resource
                </MenuItem>

                <MenuItem
                  icon={<DownloadIcon />}
                  bgColor={"whiteAlpha"}
                  onClick={handleDownload}
                >
                  Download Resource
                </MenuItem>

                <MenuItem icon={<DeleteIcon />} bgColor={"whiteAlpha"}>
                  Delete Resource
                </MenuItem>
              </MenuList>
            </Menu>
            <div className="box2_1">
              <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3APDF_file_icon.svg&psig=AOvVaw1SSWwqzWzje9d-uWDmO92f&ust=1708097668889000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNivyujVrYQDFQAAAAAdAAAAABAE"
                alt=""
              />
              <div className="name2">
                <label>Singithi Scout Programe</label>
              </div>
            </div>
          </div>

          <div className="box3">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                colorScheme="white"
                variant="outline"
                marginLeft={150}
                marginTop={2.5}
              />
              <MenuList marginLeft={-165} bgColor={"yellow"}>
                <MenuItem
                  icon={<ViewIcon />}
                  bgColor={"whiteAlpha"}
                  onClick={handleViewResource_}
                >
                  View Resource
                </MenuItem>

                <MenuItem
                  icon={<DownloadIcon />}
                  bgColor={"whiteAlpha"}
                  onClick={handleDownload}
                >
                  Download Resource
                </MenuItem>

                <MenuItem icon={<DeleteIcon />} bgColor={"whiteAlpha"}>
                  Delete Resource
                </MenuItem>
              </MenuList>
            </Menu>
            <div className="box3_1">
              <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3APDF_file_icon.svg&psig=AOvVaw1SSWwqzWzje9d-uWDmO92f&ust=1708097668889000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNivyujVrYQDFQAAAAAdAAAAABAE"
                alt=""
              />
              <div className="name3">
                <label>Singithi Scout Programe</label>
              </div>
            </div>
          </div>

          <div className="box4">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                colorScheme="white"
                variant="outline"
                marginLeft={150}
                marginTop={2.5}
              />
              <MenuList marginLeft={-165} bgColor={"yellow"}>
                <MenuItem
                  icon={<ViewIcon />}
                  bgColor={"whiteAlpha"}
                  onClick={handleViewResource_}
                >
                  View Resource
                </MenuItem>

                <MenuItem
                  icon={<DownloadIcon />}
                  bgColor={"whiteAlpha"}
                  onClick={handleDownload}
                >
                  Download Resource
                </MenuItem>

                <MenuItem icon={<DeleteIcon />} bgColor={"whiteAlpha"}>
                  Delete Resource
                </MenuItem>
              </MenuList>
            </Menu>
            <div className="box4_1">
              <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3APDF_file_icon.svg&psig=AOvVaw1SSWwqzWzje9d-uWDmO92f&ust=1708097668889000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNivyujVrYQDFQAAAAAdAAAAABAE"
                alt=""
              />
              <div className="name4">
                <label>Singithi Scout Programe</label>
              </div>
            </div>
          </div>

          <div className="box5">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                colorScheme="white"
                variant="outline"
                marginLeft={150}
                marginTop={2.5}
              />
              <MenuList marginLeft={-165} bgColor={"yellow"}>
                <MenuItem
                  icon={<ViewIcon />}
                  bgColor={"whiteAlpha"}
                  onClick={handleViewResource_}
                >
                  View Resource
                </MenuItem>

                <MenuItem
                  icon={<DownloadIcon />}
                  bgColor={"whiteAlpha"}
                  onClick={handleDownload}
                >
                  Download Resource
                </MenuItem>

                <MenuItem icon={<DeleteIcon />} bgColor={"whiteAlpha"}>
                  Delete Resource
                </MenuItem>
              </MenuList>
            </Menu>
            <div className="box5_1">
              <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3APDF_file_icon.svg&psig=AOvVaw1SSWwqzWzje9d-uWDmO92f&ust=1708097668889000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNivyujVrYQDFQAAAAAdAAAAABAE"
                alt=""
              />
              <div className="name5">
                <label>Singithi Scout Programe</label>
              </div>
            </div>
          </div>

          <div className="box6">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                colorScheme="white"
                variant="outline"
                marginLeft={150}
                marginTop={2.5}
              />
              <MenuList marginLeft={-165} bgColor={"yellow"}>
                <MenuItem
                  icon={<ViewIcon />}
                  bgColor={"whiteAlpha"}
                  onClick={handleViewResource_}
                >
                  View Resource
                </MenuItem>

                <MenuItem
                  icon={<DownloadIcon />}
                  bgColor={"whiteAlpha"}
                  onClick={handleDownload}
                >
                  Download Resource
                </MenuItem>

                <MenuItem icon={<DeleteIcon />} bgColor={"whiteAlpha"}>
                  Delete Resource
                </MenuItem>
              </MenuList>
            </Menu>
            <div className="box6_1">
              <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3APDF_file_icon.svg&psig=AOvVaw1SSWwqzWzje9d-uWDmO92f&ust=1708097668889000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNivyujVrYQDFQAAAAAdAAAAABAE"
                alt=""
              />
              <div className="name6">
                <label>Singithi Scout Programe</label>
              </div>
            </div>
          </div>

          <div className="box7">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                colorScheme="white"
                variant="outline"
                marginLeft={150}
                marginTop={2.5}
              />
              <MenuList marginLeft={-165} bgColor={"yellow"}>
                <MenuItem
                  icon={<ViewIcon />}
                  bgColor={"whiteAlpha"}
                  onClick={handleViewResource_}
                >
                  View Resource
                </MenuItem>
                <MenuItem
                  icon={<DownloadIcon />}
                  bgColor={"whiteAlpha"}
                  onClick={handleDownload}
                >
                  Download Resource
                </MenuItem>

                <MenuItem icon={<DeleteIcon />} bgColor={"whiteAlpha"}>
                  Delete Resource
                </MenuItem>
              </MenuList>
            </Menu>
            <div className="box7_1">
              <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3APDF_file_icon.svg&psig=AOvVaw1SSWwqzWzje9d-uWDmO92f&ust=1708097668889000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNivyujVrYQDFQAAAAAdAAAAABAE"
                alt=""
              />
              <div className="name7">
                <label>Singithi Scout Programe</label>
              </div>
            </div>
          </div>

          <div className="box8">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                colorScheme="white"
                variant="outline"
                marginLeft={150}
                marginTop={2.5}
              />
              <MenuList marginLeft={-165} bgColor={"yellow"}>
                <MenuItem
                  icon={<ViewIcon />}
                  bgColor={"whiteAlpha"}
                  onClick={handleViewResource_}
                >
                  View Resource
                </MenuItem>

                <MenuItem
                  icon={<DownloadIcon />}
                  bgColor={"whiteAlpha"}
                  onClick={handleDownload}
                >
                  Download Resource
                </MenuItem>

                <MenuItem icon={<DeleteIcon />} bgColor={"whiteAlpha"}>
                  Delete Resource
                </MenuItem>
              </MenuList>
            </Menu>
            <div className="box8_1">
              <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3APDF_file_icon.svg&psig=AOvVaw1SSWwqzWzje9d-uWDmO92f&ust=1708097668889000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNivyujVrYQDFQAAAAAdAAAAABAE"
                alt=""
              />
              <div className="name8">
                <label>Singithi Scout Programe</label>
              </div>
            </div>
          </div>

          <div className="box9">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                colorScheme="white"
                variant="outline"
                marginLeft={150}
                marginTop={2.5}
              />
              <MenuList marginLeft={-165} bgColor={"yellow"}>
                <MenuItem
                  icon={<ViewIcon />}
                  bgColor={"whiteAlpha"}
                  onClick={handleViewResource_}
                >
                  View Resource
                </MenuItem>

                <MenuItem
                  icon={<DownloadIcon />}
                  bgColor={"whiteAlpha"}
                  onClick={handleDownload}
                >
                  Download Resource
                </MenuItem>

                <MenuItem icon={<DeleteIcon />} bgColor={"whiteAlpha"}>
                  Delete Resource
                </MenuItem>
              </MenuList>
            </Menu>
            <div className="box9_1">
              <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3APDF_file_icon.svg&psig=AOvVaw1SSWwqzWzje9d-uWDmO92f&ust=1708097668889000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNivyujVrYQDFQAAAAAdAAAAABAE"
                alt=""
              />
              <div className="name9">
                <label>Singithi Scout Programe</label>
              </div>
            </div>
          </div>

          <div className="box10">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                colorScheme="white"
                variant="outline"
                marginLeft={150}
                marginTop={2.5}
              />
              <MenuList marginLeft={-165} bgColor={"yellow"}>
                <MenuItem
                  icon={<ViewIcon />}
                  bgColor={"whiteAlpha"}
                  onClick={handleViewResource_}
                >
                  View Resource
                </MenuItem>

                <MenuItem
                  icon={<DownloadIcon />}
                  bgColor={"whiteAlpha"}
                  onClick={handleDownload}
                >
                  Download Resource
                </MenuItem>

                <MenuItem icon={<DeleteIcon />} bgColor={"whiteAlpha"}>
                  Delete Resource
                </MenuItem>
              </MenuList>
            </Menu>
            <div className="box10_1">
              <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3APDF_file_icon.svg&psig=AOvVaw1SSWwqzWzje9d-uWDmO92f&ust=1708097668889000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNivyujVrYQDFQAAAAAdAAAAABAE"
                alt=""
              />
              <div className="name10">
                <label>Singithi Scout Programe</label>
              </div>
            </div>
          </div>
        </ChakraProvider>
      </div>
    </div>
  );
}

export default ResourcePage;
