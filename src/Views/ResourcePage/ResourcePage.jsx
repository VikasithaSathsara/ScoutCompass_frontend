import "./ResourcePage.css";
// import Menu from "../../Components/Menu/Menu";

import React, { useState } from "react";

import { Document, Page, pdfjs } from "react-pdf";
import { saveAs } from "file-saver";

import { ChakraProvider } from "@chakra-ui/react";

import {
  Box,
  ButtonGroup,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
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
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const initialFocusRef = React.useRef();

  // View,delete resources part

  const handleViewResource = () => {
    alert("Viewing Resource");
  };

  const handleDeleteResource = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this resource?"
    );
    if (confirmed) {
      alert("Resource Deleted");
    }
  };

  // Add resources part

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [file, setFile] = useState(null);

  const onFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPageNumber(1);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleDelete = () => {
    setFile(null);
    setNumPages(null);
    setPageNumber(1);
  };

  const handleDownload = () => {
    if (file) {
      saveAs(file, "downloaded.pdf");
    }
  };
  return (
    <div>
      {/* <Menu />  */}
      {/* <h1>Resource Page</h1> */}

      <div className="bg1">
        <div className="wrap1">
          <ChakraProvider>
            <Stack
              direction="row"
              spacing={5}
              marginLeft={1200}
              marginBottom={5}
            >
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
                  >
                    Add Resources
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  color="black"
                  bg="white"
                  borderColor="yellow"
                  marginRight={150}
                >
                  <PopoverHeader pt={4} fontWeight="bold" border="0">
                    <Document
                      file="SINGITHI SCOUT PROGRAME.pdf"
                      onLoadSuccess={(event) => {
                        console.log("Document loaded successfully!");
                      }}
                    >
                      <Page />
                    </Document>
                    {/* <h1>PDF Viewer</h1>
                  <input type="file" onChange={onFileChange} />
                  {file && (
                    <div>
                      <Document
                        file={file}
                        onLoadSuccess={onDocumentLoadSuccess}
                        options={{
                          workerSrc: pdfjs.GlobalWorkerOptions.workerSrc,
                        }}
                      >
                        <Page pageNumber={pageNumber} />
                      </Document>
                      <p>
                        Page {pageNumber} of {numPages}
                      </p>
                      <button
                        onClick={() =>
                          setPageNumber((prevPage) => prevPage - 1)
                        }
                      >
                        Previous
                      </button>
                      <button
                        onClick={() =>
                          setPageNumber((prevPage) => prevPage + 1)
                        }
                      >
                        Next
                      </button>
                      <button onClick={handleDownload}>Download</button>
                      <button onClick={handleDelete}>Delete</button>
                    </div>
                  )} */}
                  </PopoverHeader>
                  <PopoverArrow bg="white" />
                  <PopoverCloseButton />
                  <PopoverBody>
                    <div className="add">
                      <p className="add_title">Add Resource</p>
                    </div>
                  </PopoverBody>
                  <PopoverFooter
                    border="0"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    pb={4}
                  >
                    <Box fontSize="sm"></Box>
                    {/* <ButtonGroup size="sm">
                    <Button colorScheme="green">Add</Button>
                    <Button colorScheme="blue" ref={initialFocusRef}>
                      Cancel
                    </Button>
                  </ButtonGroup> */}
                  </PopoverFooter>
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
                <MenuList marginRight={1} bgColor={"yellow"}>
                  <MenuItem
                    icon={<ViewIcon />}
                    bgColor={"gray"}
                    onClick={handleViewResource}
                  >
                    View Resource
                  </MenuItem>
                  <a
                    href="SINGITHI SCOUT PROGRAME.pdf"
                    Download="Singithi Scout Programe.pdf"
                  >
                    <MenuItem icon={<DownloadIcon />} bgColor={"gray"}>
                      Download Resource
                    </MenuItem>
                  </a>
                  <MenuItem
                    icon={<DeleteIcon />}
                    bgColor={"gray"}
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
                  <label>Singithi Scout Programe</label>
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
                <MenuList marginRight={1} bgColor={"yellow"}>
                  <MenuItem icon={<ViewIcon />} bgColor={"gray"}>
                    View Resource
                  </MenuItem>
                  <a
                    href="SINGITHI SCOUT PROGRAME.pdf"
                    Download="Singithi Scout Programe.pdf"
                  >
                    <MenuItem icon={<DownloadIcon />} bgColor={"gray"}>
                      Download Resource
                    </MenuItem>
                  </a>
                  <MenuItem icon={<DeleteIcon />} bgColor={"gray"}>
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
                  <label>Cub Scout Programe Book </label>
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
                <MenuList marginRight={1} bgColor={"yellow"}>
                  <MenuItem icon={<ViewIcon />} bgColor={"gray"}>
                    View Resource
                  </MenuItem>
                  <a
                    href="SINGITHI SCOUT PROGRAME.pdf"
                    Download="Singithi Scout Programe.pdf"
                  >
                    <MenuItem icon={<DownloadIcon />} bgColor={"gray"}>
                      Download Resource
                    </MenuItem>
                  </a>
                  <MenuItem icon={<DeleteIcon />} bgColor={"gray"}>
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
                  <label>Cub Scout Proficiency Badge Book </label>
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
                <MenuList marginRight={1} bgColor={"yellow"}>
                  <MenuItem icon={<ViewIcon />} bgColor={"gray"}>
                    View Resource
                  </MenuItem>
                  <a
                    href="SINGITHI SCOUT PROGRAME.pdf"
                    Download="Singithi Scout Programe.pdf"
                  >
                    <MenuItem icon={<DownloadIcon />} bgColor={"gray"}>
                      Download Resource
                    </MenuItem>
                  </a>
                  <MenuItem icon={<DeleteIcon />} bgColor={"gray"}>
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
                  <label>Rover Scout Youth Program </label>
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
                <MenuList marginRight={1} bgColor={"yellow"}>
                  <MenuItem icon={<ViewIcon />} bgColor={"gray"}>
                    View Resource
                  </MenuItem>
                  <a
                    href="SINGITHI SCOUT PROGRAME.pdf"
                    Download="Singithi Scout Programe.pdf"
                  >
                    <MenuItem icon={<DownloadIcon />} bgColor={"gray"}>
                      Download Resource
                    </MenuItem>
                  </a>
                  <MenuItem icon={<DeleteIcon />} bgColor={"gray"}>
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
                  <label>Scout JS HandBook 2 Scout Award </label>
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
                <MenuList marginRight={1} bgColor={"yellow"}>
                  <MenuItem icon={<ViewIcon />} bgColor={"gray"}>
                    View Resource
                  </MenuItem>
                  <a
                    href="SINGITHI SCOUT PROGRAME.pdf"
                    Download="Singithi Scout Programe.pdf"
                  >
                    <MenuItem icon={<DownloadIcon />} bgColor={"gray"}>
                      Download Resource
                    </MenuItem>
                  </a>
                  <MenuItem icon={<DeleteIcon />} bgColor={"gray"}>
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
                  <label>Scout's Hand Book 1 Membership Badge </label>
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
                <MenuList marginRight={1} bgColor={"yellow"}>
                  <MenuItem icon={<ViewIcon />} bgColor={"gray"}>
                    View Resource
                  </MenuItem>
                  <a
                    href="SINGITHI SCOUT PROGRAME.pdf"
                    Download="Singithi Scout Programe.pdf"
                  >
                    <MenuItem icon={<DownloadIcon />} bgColor={"gray"}>
                      Download Resource
                    </MenuItem>
                  </a>
                  <MenuItem icon={<DeleteIcon />} bgColor={"gray"}>
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
                  <label>Scout's Hand Book 1 Membership Badge </label>
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
                <MenuList marginRight={1} bgColor={"yellow"}>
                  <MenuItem icon={<ViewIcon />} bgColor={"gray"}>
                    View Resource
                  </MenuItem>
                  <a
                    href="SINGITHI SCOUT PROGRAME.pdf"
                    Download="Singithi Scout Programe.pdf"
                  >
                    <MenuItem icon={<DownloadIcon />} bgColor={"gray"}>
                      Download Resource
                    </MenuItem>
                  </a>
                  <MenuItem icon={<DeleteIcon />} bgColor={"gray"}>
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
                  <label>Scout's Hand Book 1 Membership Badge </label>
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
                <MenuList marginRight={1} bgColor={"yellow"}>
                  <MenuItem icon={<ViewIcon />} bgColor={"gray"}>
                    View Resource
                  </MenuItem>
                  <a
                    href="SINGITHI SCOUT PROGRAME.pdf"
                    Download="Singithi Scout Programe.pdf"
                  >
                    <MenuItem icon={<DownloadIcon />} bgColor={"gray"}>
                      Download Resource
                    </MenuItem>
                  </a>
                  <MenuItem icon={<DeleteIcon />} bgColor={"gray"}>
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
                  <label>Scout's Hand Book 1 Membership Badge </label>
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
                <MenuList marginRight={1} bgColor={"yellow"}>
                  <MenuItem icon={<ViewIcon />} bgColor={"gray"}>
                    View Resource
                  </MenuItem>
                  <a
                    href="SINGITHI SCOUT PROGRAME.pdf"
                    Download="Singithi Scout Programe.pdf"
                  >
                    <MenuItem icon={<DownloadIcon />} bgColor={"gray"}>
                      Download Resource
                    </MenuItem>
                  </a>
                  <MenuItem icon={<DeleteIcon />} bgColor={"gray"}>
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
                  <label>Scout's Hand Book 1 Membership Badge </label>
                </div>
              </div>
            </div>

            <div className="box11">
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
                <MenuList marginRight={1} bgColor={"yellow"}>
                  <MenuItem icon={<ViewIcon />} bgColor={"gray"}>
                    View Resource
                  </MenuItem>
                  <a
                    href="SINGITHI SCOUT PROGRAME.pdf"
                    Download="Singithi Scout Programe.pdf"
                  >
                    <MenuItem icon={<DownloadIcon />} bgColor={"gray"}>
                      Download Resource
                    </MenuItem>
                  </a>
                  <MenuItem icon={<DeleteIcon />} bgColor={"gray"}>
                    Delete Resource
                  </MenuItem>
                </MenuList>
              </Menu>
              <div className="box11_1">
                <img
                  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3APDF_file_icon.svg&psig=AOvVaw1SSWwqzWzje9d-uWDmO92f&ust=1708097668889000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNivyujVrYQDFQAAAAAdAAAAABAE"
                  alt=""
                />
                <div className="name11">
                  <label>Scout's Hand Book 1 Membership Badge </label>
                </div>
              </div>
            </div>

            <div className="box12">
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
                <MenuList marginRight={1} bgColor={"yellow"}>
                  <MenuItem icon={<ViewIcon />} bgColor={"gray"}>
                    View Resource
                  </MenuItem>
                  <a
                    href="SINGITHI SCOUT PROGRAME.pdf"
                    Download="Singithi Scout Programe.pdf"
                  >
                    <MenuItem icon={<DownloadIcon />} bgColor={"gray"}>
                      Download Resource
                    </MenuItem>
                  </a>
                  <MenuItem icon={<DeleteIcon />} bgColor={"gray"}>
                    Delete Resource
                  </MenuItem>
                </MenuList>
              </Menu>
              <div className="box12_1">
                <img
                  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3APDF_file_icon.svg&psig=AOvVaw1SSWwqzWzje9d-uWDmO92f&ust=1708097668889000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNivyujVrYQDFQAAAAAdAAAAABAE"
                  alt=""
                />
                <div className="name12">
                  <label>Scout's Hand Book 1 Membership Badge </label>
                </div>
              </div>
            </div>

            <div className="box13">
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
                <MenuList marginRight={1} bgColor={"yellow"}>
                  <MenuItem icon={<ViewIcon />} bgColor={"gray"}>
                    View Resource
                  </MenuItem>
                  <a
                    href="SINGITHI SCOUT PROGRAME.pdf"
                    Download="Singithi Scout Programe.pdf"
                  >
                    <MenuItem icon={<DownloadIcon />} bgColor={"gray"}>
                      Download Resource
                    </MenuItem>
                  </a>
                  <MenuItem icon={<DeleteIcon />} bgColor={"gray"}>
                    Delete Resource
                  </MenuItem>
                </MenuList>
              </Menu>
              <div className="box13_1">
                <img
                  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3APDF_file_icon.svg&psig=AOvVaw1SSWwqzWzje9d-uWDmO92f&ust=1708097668889000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNivyujVrYQDFQAAAAAdAAAAABAE"
                  alt=""
                />
                <div className="name13">
                  <label>Scout's Hand Book 1 Membership Badge </label>
                </div>
              </div>
            </div>

            <div className="box14">
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
                <MenuList marginRight={1} bgColor={"yellow"}>
                  <MenuItem icon={<ViewIcon />} bgColor={"gray"}>
                    View Resource
                  </MenuItem>
                  <a
                    href="SINGITHI SCOUT PROGRAME.pdf"
                    Download="Singithi Scout Programe.pdf"
                  >
                    <MenuItem icon={<DownloadIcon />} bgColor={"gray"}>
                      Download Resource
                    </MenuItem>
                  </a>
                  <MenuItem icon={<DeleteIcon />} bgColor={"gray"}>
                    Delete Resource
                  </MenuItem>
                </MenuList>
              </Menu>
              <div className="box14_1">
                <img
                  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3APDF_file_icon.svg&psig=AOvVaw1SSWwqzWzje9d-uWDmO92f&ust=1708097668889000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNivyujVrYQDFQAAAAAdAAAAABAE"
                  alt=""
                />
                <div className="name14">
                  <label>Scout's Hand Book 1 Membership Badge </label>
                </div>
              </div>
            </div>

            <div className="box15">
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
                <MenuList marginRight={1} bgColor={"yellow"}>
                  <MenuItem icon={<ViewIcon />} bgColor={"gray"}>
                    View Resource
                  </MenuItem>
                  <a
                    href="SINGITHI SCOUT PROGRAME.pdf"
                    Download="Singithi Scout Programe.pdf"
                  >
                    <MenuItem icon={<DownloadIcon />} bgColor={"gray"}>
                      Download Resource
                    </MenuItem>
                  </a>
                  <MenuItem icon={<DeleteIcon />} bgColor={"gray"}>
                    Delete Resource
                  </MenuItem>
                </MenuList>
              </Menu>
              <div className="box15_1">
                <img
                  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3APDF_file_icon.svg&psig=AOvVaw1SSWwqzWzje9d-uWDmO92f&ust=1708097668889000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNivyujVrYQDFQAAAAAdAAAAABAE"
                  alt=""
                />
                <div className="name15">
                  <label>Scout's Hand Book 1 Membership Badge </label>
                </div>
              </div>
            </div>

            <div className="box16">
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
                <MenuList marginRight={1} bgColor={"yellow"}>
                  <MenuItem icon={<ViewIcon />} bgColor={"gray"}>
                    View Resource
                  </MenuItem>
                  <a
                    href="SINGITHI SCOUT PROGRAME.pdf"
                    Download="Singithi Scout Programe.pdf"
                  >
                    <MenuItem icon={<DownloadIcon />} bgColor={"gray"}>
                      Download Resource
                    </MenuItem>
                  </a>
                  <MenuItem icon={<DeleteIcon />} bgColor={"gray"}>
                    Delete Resource
                  </MenuItem>
                </MenuList>
              </Menu>
              <div className="box16_1">
                <img
                  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3APDF_file_icon.svg&psig=AOvVaw1SSWwqzWzje9d-uWDmO92f&ust=1708097668889000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNivyujVrYQDFQAAAAAdAAAAABAE"
                  alt=""
                />
                <div className="name16">
                  <label>Scout's Hand Book 1 Membership Badge </label>
                </div>
              </div>
            </div>

            <div className="box17">
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
                <MenuList marginRight={1} bgColor={"yellow"}>
                  <MenuItem icon={<ViewIcon />} bgColor={"gray"}>
                    View Resource
                  </MenuItem>
                  <a
                    href="SINGITHI SCOUT PROGRAME.pdf"
                    Download="Singithi Scout Programe.pdf"
                  >
                    <MenuItem icon={<DownloadIcon />} bgColor={"gray"}>
                      Download Resource
                    </MenuItem>
                  </a>
                  <MenuItem icon={<DeleteIcon />} bgColor={"gray"}>
                    Delete Resource
                  </MenuItem>
                </MenuList>
              </Menu>
              <div className="box17_1">
                <img
                  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3APDF_file_icon.svg&psig=AOvVaw1SSWwqzWzje9d-uWDmO92f&ust=1708097668889000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNivyujVrYQDFQAAAAAdAAAAABAE"
                  alt=""
                />
                <div className="name17">
                  <label>Scout's Hand Book 1 Membership Badge </label>
                </div>
              </div>
            </div>

            <div className="box18">
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
                <MenuList marginRight={1} bgColor={"yellow"}>
                  <MenuItem icon={<ViewIcon />} bgColor={"gray"}>
                    View Resource
                  </MenuItem>
                  <a
                    href="SINGITHI SCOUT PROGRAME.pdf"
                    Download="Singithi Scout Programe.pdf"
                  >
                    <MenuItem icon={<DownloadIcon />} bgColor={"gray"}>
                      Download Resource
                    </MenuItem>
                  </a>
                  <MenuItem icon={<DeleteIcon />} bgColor={"gray"}>
                    Delete Resource
                  </MenuItem>
                </MenuList>
              </Menu>
              <div className="box18_1">
                <img
                  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3APDF_file_icon.svg&psig=AOvVaw1SSWwqzWzje9d-uWDmO92f&ust=1708097668889000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNivyujVrYQDFQAAAAAdAAAAABAE"
                  alt=""
                />
                <div className="name18">
                  <label>Scout's Hand Book 1 Membership Badge </label>
                </div>
              </div>
            </div>

            <div className="box19">
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
                <MenuList marginRight={1} bgColor={"yellow"}>
                  <MenuItem icon={<ViewIcon />} bgColor={"gray"}>
                    View Resource
                  </MenuItem>
                  <a
                    href="SINGITHI SCOUT PROGRAME.pdf"
                    Download="Singithi Scout Programe.pdf"
                  >
                    <MenuItem icon={<DownloadIcon />} bgColor={"gray"}>
                      Download Resource
                    </MenuItem>
                  </a>
                  <MenuItem icon={<DeleteIcon />} bgColor={"gray"}>
                    Delete Resource
                  </MenuItem>
                </MenuList>
              </Menu>
              <div className="box19_1">
                <img
                  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3APDF_file_icon.svg&psig=AOvVaw1SSWwqzWzje9d-uWDmO92f&ust=1708097668889000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNivyujVrYQDFQAAAAAdAAAAABAE"
                  alt=""
                />
                <div className="name19">
                  <label>Scout's Hand Book 1 Membership Badge </label>
                </div>
              </div>
            </div>

            <div className="box20">
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
                <MenuList marginRight={1} bgColor={"yellow"}>
                  <MenuItem icon={<ViewIcon />} bgColor={"gray"}>
                    View Resource
                  </MenuItem>
                  <a
                    href="SINGITHI SCOUT PROGRAME.pdf"
                    Download="Singithi Scout Programe.pdf"
                  >
                    <MenuItem icon={<DownloadIcon />} bgColor={"gray"}>
                      Download Resource
                    </MenuItem>
                  </a>
                  <MenuItem icon={<DeleteIcon />} bgColor={"gray"}>
                    Delete Resource
                  </MenuItem>
                </MenuList>
              </Menu>
              <div className="box20_1">
                <img
                  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3APDF_file_icon.svg&psig=AOvVaw1SSWwqzWzje9d-uWDmO92f&ust=1708097668889000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNivyujVrYQDFQAAAAAdAAAAABAE"
                  alt=""
                />
                <div className="name20">
                  <label>Scout's Hand Book 1 Membership Badge </label>
                </div>
              </div>
            </div>

            <div className="box21">
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
                <MenuList marginRight={1} bgColor={"yellow"}>
                  <MenuItem icon={<ViewIcon />} bgColor={"gray"}>
                    View Resource
                  </MenuItem>
                  <a
                    href="SINGITHI SCOUT PROGRAME.pdf"
                    Download="Singithi Scout Programe.pdf"
                  >
                    <MenuItem icon={<DownloadIcon />} bgColor={"gray"}>
                      Download Resource
                    </MenuItem>
                  </a>
                  <MenuItem icon={<DeleteIcon />} bgColor={"gray"}>
                    Delete Resource
                  </MenuItem>
                </MenuList>
              </Menu>
              <div className="box21_1">
                <img
                  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3APDF_file_icon.svg&psig=AOvVaw1SSWwqzWzje9d-uWDmO92f&ust=1708097668889000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNivyujVrYQDFQAAAAAdAAAAABAE"
                  alt=""
                />
                <div className="name21">
                  <label>Scout's Hand Book 1 Membership Badge </label>
                </div>
              </div>
            </div>

            <div className="box22">
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
                <MenuList marginRight={1} bgColor={"yellow"}>
                  <MenuItem icon={<ViewIcon />} bgColor={"gray"}>
                    View Resource
                  </MenuItem>
                  <a
                    href="SINGITHI SCOUT PROGRAME.pdf"
                    Download="Singithi Scout Programe.pdf"
                  >
                    <MenuItem icon={<DownloadIcon />} bgColor={"gray"}>
                      Download Resource
                    </MenuItem>
                  </a>
                  <MenuItem icon={<DeleteIcon />} bgColor={"gray"}>
                    Delete Resource
                  </MenuItem>
                </MenuList>
              </Menu>
              <div className="box22_1">
                <img
                  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3APDF_file_icon.svg&psig=AOvVaw1SSWwqzWzje9d-uWDmO92f&ust=1708097668889000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNivyujVrYQDFQAAAAAdAAAAABAE"
                  alt=""
                />
                <div className="name22">
                  <label>Scout's Hand Book 1 Membership Badge </label>
                </div>
              </div>
            </div>
          </ChakraProvider>
        </div>
      </div>
    </div>
  );
}

export default ResourcePage;
