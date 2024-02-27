import "./ResourcePage.css";
import SideMenu from "../../Components/SideMenu/SideMenu";
import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { saveAs } from "file-saver";
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


  const [resourceArrayList, setResourceArrayList] = useState([]);
  const [file_, setFile_] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [file, setFile] = useState(null);
  const initialFocusRef = React.useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);


  const handleFileChange = (e) => {
    setFile_(e.target.files[0]);
  };
  const fetchResourceList = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/scoutcompass/resource/resourceList');
      const data = await response.json();

      setResourceArrayList(data);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchResourceList();
  }, []);

  const handleViewResource_ = (fileName) => {
    const baseUrl_ = "http://localhost:8081/api/scoutcompass/resource/download/";
    const pdfUrl = baseUrl_ + fileName;

   
    window.open(pdfUrl, '_blank');
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

      console.log("Response:", response);
      e.target.reset();
      setFile(null);
      setIsOpen(false);
      fetchResourceList();
        window.location.href = "/resource";
    } catch (error) {
      console.error("Error:", error);
    }

  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleDeleteResource = async (fileName) => {
    const confirmed = 
    window.confirm(
      "Are you sure you want to delete this resource?"
    );
    if (confirmed) {
      const baseUrl = "http://localhost:8081/api/scoutcompass/resource/delete/";
      const url = baseUrl + fileName;
      try {
        const response = await fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
      
        });

        fetchResourceList();
        window.location.href = "/resource";

        if (response.ok) {
          console.log('File deleted successfully');
        
        } else {
          console.error('Failed to delete file');
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    }
  };

  const handleDownload = (fileName) => {
    const baseUrl = "http://localhost:8081/api/scoutcompass/resource/download/";

    const url = baseUrl + fileName;

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
        link.setAttribute("download", fileName);
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
              isOpen={isOpen} 
              onClose={handleOpen} 
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
                      <div className="upload-file">
                        <input
                          type="text"
                          value={file_ ? file_.name : ""}
                          readOnly
                          placeholder="Selected file"
                        />
                      </div>
                      <div className="upload" >
                        <button type="submit">Upload File</button>
                      </div>
                    </form>
                  </div>

                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Stack>

          {resourceArrayList.map((item, index) => (

            <div className={`box${index + 1}`}  >
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
                    bgColor={"whiteAlpha"}
                    onClick={() => handleViewResource_(item.resourceName)}
                  >
                    View Resource
                  </MenuItem>

                  <MenuItem
                    icon={<DownloadIcon />}
                    bgColor={"whiteAlpha"}
                    onClick={() => handleDownload(item.resourceName)}

                  >
                    Download Resource
                  </MenuItem>

                  <MenuItem
                    icon={<DeleteIcon />}
                    bgColor={"whiteAlpha"}
                    onClick={() => handleDeleteResource(item.resourceName)}
                  >
                    Delete Resource
                  </MenuItem>
                </MenuList>
              </Menu>

              <div className="box1_1" onClick={() => handleViewResource_(item.resourceName)}>
                <img
                  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3APDF_file_icon.svg&psig=AOvVaw1SSWwqzWzje9d-uWDmO92f&ust=1708097668889000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNivyujVrYQDFQAAAAAdAAAAABAE"
                  alt=""
                />
                <div className="name1">
                  <label>{item.resourceName}</label>
                </div>
              </div>
            </div>))}

        </ChakraProvider>
      </div>
    </div>
  );
}

export default ResourcePage;