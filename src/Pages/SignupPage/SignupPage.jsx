import { useState } from "react";
import "./SignupPage.css";
import { ChakraProvider } from "@chakra-ui/react";
import { toast, ToastContainer } from "react-toastify";

import Navbar from "../../Components/Navbar/Navbar";

import {
  Container,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Button,
  Text,
  Input,
  InputGroup,
  InputLeftAddon,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
} from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    confirmPassword: "",
    role: "",
    scout_dob: new Date(),
    instruct_dob: new Date(),
    district: "",
    instruct_gender: "",
    instruct_mobNum: "",
    instruct_school: "",
    instruct_warrentId: "",
    scout_gender: "",
    scout_school: "",
    scout_mobNum: "",
  });

  //Create a method to initialize scout and Instructor values to undefined. And call that methods when dropdown value changes.

  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [passwordMissMatch, setpasswordMissMatch] = useState(false);
  const [doB, setDoB] = useState(new Date());
  const [scoutDob, setScoutDob] = useState(new Date());
  const selectedRole = formData.role;
  const stackDirection = selectedRole ? "row" : "column";

  const isFormFilled = Object.values(formData).every(
    (value) => typeof value === "string" && value.trim() !== ""
  ); //if value == password, check if pass and comfirm pass is equal

  const onPasswordChange = () => (e) => {
    setpasswordMissMatch(false);
    setPass(e.currentTarget.value);
  };

  const onConfirmPasswordChange = () => (e) => {
    setpasswordMissMatch(false);
    setConfirmPass(e.currentTarget.value);
  };

  const onValueChange = (fieldName) => (e) => {
    console.log(formData);
    setFormData({
      ...formData,
      [fieldName]: e.currentTarget.value,
    });
  };

  const onDropdownValueChange = (fieldName) => (e) => {
    // setSelectedRole(e.target.value);
    setFormData({
      ...formData,
      [fieldName]: e.currentTarget.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (pass !== confirmPass) {
        setpasswordMissMatch(true);
        return;
      } else {


        if (formData.role === 'instructor') {

          const instruct_reg_requestBody = {
            instructFirstName: formData.firstName,
            instructLastName: formData.lastName,
            instructEmail: formData.email,
            instructPassword: confirmPass,
            instructDob: formData.instruct_dob,
            instructDistrict: formData.district,
            instructWarrantId: formData.instruct_warrentId,
            instructGender: formData.instruct_gender,
            instructMobNum: formData.instruct_mobNum,
            instructSchool: formData.instruct_school,

          };


          // Sending POST request
          const response = await fetch(
            "http://localhost:8081/api/scoutcompass/auth/instruct/register",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Origin: "http://localhost:3000",
                "Content-Length": "<calculated when request is sent>",
                Host: "<calculated when request is sent>",
                Accept: "*/*",
                "Accept-Encoding": "gzip, deflate, br",
                Connection: "keep-alive",
              },
              body: JSON.stringify(instruct_reg_requestBody),
            }
          );
          if (response.ok) {
            console.log("Instructor Registration successful!");
            toast.success("Instructor Registration successful!");
            // navigate("/home");
            //  window.location.href = "/home";
          } else {
            console.error("Instructor Registration Fail!");
            toast.error("Instructor Registration Fail!");
          }
        } else if (formData.role === 'scout') {


          const scout_reg_requestBody = {
            scoutFirstName: formData.firstName,
            scoutLastname: formData.lastName,
            scoutEmail: formData.email,
            scoutPassword: confirmPass,
            scoutDob: formData.instruct_dob,
            scoutDistrict: formData.district,
            scoutGender: formData.scout_gender,
            scoutMobNum: formData.scout_mobNum,
            scoutSchool: formData.scout_school,
            instructorId: '1',
          };


          // Sending POST request
          const response = await fetch(
            "http://localhost:8081/api/scoutcompass/auth/scout/register",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Origin: "http://localhost:3000",
                "Content-Length": "<calculated when request is sent>",
                Host: "<calculated when request is sent>",
                Accept: "*/*",
                "Accept-Encoding": "gzip, deflate, br",
                Connection: "keep-alive",
              },
              body: JSON.stringify(scout_reg_requestBody),
            }
          );
          if (response.ok) {
            console.log("Scout Registration successful!");
            toast.success("Scout Registration successful!");
            // navigate("/home");
            //  window.location.href = "/home";
          } else {
            console.error("Scout Registration Fail!");
            toast.error("Scout Registration Fail!");
          }


        }
      }
      setpasswordMissMatch(false);
      setFormData({
        ...formData,
        password: pass,
      });
      console.log("sdsdsdsd" + formData);
    } catch (error) {
      // handle server errors
    }
  };

  return (
    <ChakraProvider>
      <div className="main">
        <Navbar />
        <Card className=" max-w-[1500px] p-8 m-[2%] mt-[10%] justify-center items-center">
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src="https://images.pexels.com/photos/9302777/pexels-photo-9302777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Caffe Latte"
            />

            <Stack>
              <CardHeader>
                <Heading size="lg">Create Your Account</Heading>
              </CardHeader>
              <CardBody>
                <form onSubmit={onSubmit} className="flex flex-col gap-y-3">
                  <Stack direction={stackDirection}>
                    <Container>
                      <FormControl className="!gap-1" isRequired>
                        <FormLabel className="!font-semibold" fontSize="sm">
                          Full Name
                        </FormLabel>
                        <HStack>
                          <FormControl htmlFor="firstName" isRequired>
                            <Input
                              placeholder="First Name"
                              size="sm"
                              onChange={onValueChange("firstName")}
                            />
                          </FormControl>
                          <FormControl htmlFor="lastName" isRequired>
                            <Input
                              placeholder="Last Name"
                              size="sm"
                              onChange={onValueChange("lastName")}
                            />
                          </FormControl>
                        </HStack>
                      </FormControl>

                      <FormControl
                        className="!gap-1"
                        htmlFor="email"
                        isRequired
                      >
                        <FormLabel className="!font-semibold" fontSize="sm">
                          Email
                        </FormLabel>
                        <Input
                          type="email"
                          placeholder="Email"
                          size="sm"
                          onChange={onValueChange("email")}
                        />
                      </FormControl>
                      <FormControl
                        className="!gap-1"
                        isInvalid={passwordMissMatch}
                        isRequired
                      >
                        <FormLabel className="!font-semibold" fontSize="sm">
                          Password
                        </FormLabel>
                        <HStack>
                          <FormControl
                            htmlFor="password"
                            isInvalid={passwordMissMatch}
                            isRequired
                          >
                            <Input
                              type="password"
                              placeholder="Password"
                              size="sm"
                              onChange={onPasswordChange("password")}
                            />
                          </FormControl>
                          <FormControl
                            htmlFor="confirmPassword"
                            isInvalid={passwordMissMatch}
                            isRequired
                          >
                            <Input
                              type="password"
                              placeholder="Confirm Password"
                              size="sm"
                              onChange={onConfirmPasswordChange(
                                "confirmPassword"
                              )}
                            />
                          </FormControl>
                        </HStack>
                        {passwordMissMatch ? (
                          <FormErrorMessage>
                            Entered Passwords do Not Match!
                          </FormErrorMessage>
                        ) : null}
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel className="!font-semibold" fontSize="sm">
                          District
                        </FormLabel>
                        <Select
                          placeholder="Select your district"
                          onChange={onDropdownValueChange("district")}
                        >
                          <option value="Ampara">Ampara</option>
                          <option value="Anuradhapura">Anuradhapura</option>
                          <option value="Badulla">Badulla</option>
                          <option value="Baticaloa">Baticaloa</option>
                          <option value="Colombo">Colombo</option>
                          <option value="Galle">Galle</option>
                          <option value="Gampaha">Gampaha</option>
                          <option value="Hambanthota">Hambanthota</option>
                          <option value="Jaffna">Jaffna</option>
                          <option value="Kaluthara">Kaluthara</option>
                          <option value="Kandy">Kandy</option>
                          <option value="Kegalle">Kegalle</option>
                          <option value="Kilinochchi">Kilinochchi</option>
                          <option value="Kurunegala">Kurunegala</option>
                          <option value="Mannar">Mannar</option>
                          <option value="Matale">Matale</option>
                          <option value="Matara">Matara</option>
                          <option value="Monaragala">Monaragala</option>
                          <option value="Mullaitivu">Mullaitivu</option>
                          <option value="Nuwara Eliya">Nuwara Eliya</option>
                          <option value="Puttalama">Puttalama</option>
                          <option value="Rathnapura">Rathnapura</option>
                          <option value="Trincomalee">Trincomalee</option>
                          <option value="Vavuniya">Vavuniya</option>
                        </Select>
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel className="!font-semibold" fontSize="sm">
                          Role
                        </FormLabel>
                        <Select
                          placeholder="Select a Role"
                          onChange={onDropdownValueChange("role")}
                        >
                          <option value="scout">Scout</option>
                          <option value="instructor">Instructor</option>
                        </Select>
                      </FormControl>
                    </Container>
                    <Container>
                      {selectedRole === "scout" && (
                        <Stack>
                          <Heading size="md">Scout Details</Heading>
                          <FormControl isRequired>
                            <FormLabel className="!font-semibold" fontSize="sm">
                              Date of Birth
                            </FormLabel>
                            <DatePicker
                              selected={scoutDob}
                              onChange={(scout_dob) => setScoutDob(scout_dob)}
                            />
                          </FormControl>
                          <FormControl>
                            <FormLabel className="!font-semibold" fontSize="sm">
                              Gender
                            </FormLabel>
                            <Select
                              placeholder="Select Gender"
                              onChange={onDropdownValueChange("scout_gender")}
                            >
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="other">Other</option>
                            </Select>
                          </FormControl>
                          <FormControl isRequired>
                            <FormLabel className="!font-semibold" fontSize="sm">
                              Phone Number
                            </FormLabel>
                            <InputGroup>
                              <InputLeftAddon>+94</InputLeftAddon>
                              <Input
                                type="tel"
                                placeholder="Phone Number"
                                onChange={onValueChange("scout_mobNum")}
                              />
                            </InputGroup>
                          </FormControl>
                          <FormControl className="!gap-1" isRequired>
                            <FormLabel className="!font-semibold" fontSize="sm">
                              School
                            </FormLabel>
                            <Input
                              type="text"
                              placeholder="School"
                              size="sm"
                              onChange={onValueChange("scout_school")}
                            />
                          </FormControl>

                          <FormControl isRequired>
                            <FormLabel className="!font-semibold" fontSize="sm">
                              Instructor
                            </FormLabel>
                            <Select
                              placeholder="Select a instructor"
                              onChange={onDropdownValueChange("instructor")}
                            >
                              <option value="instructor1">0001</option>
                              <option value="instructor2">0002</option>
                              <option value="instructor3">0003</option>
                              <option value="instructor4">0004</option>
                            </Select>
                          </FormControl>
                        </Stack>
                      )}
                      {selectedRole === "instructor" && (
                        <Stack>
                          <Heading size="md">Instructor Details</Heading>
                          <FormControl htmlFor="instruct_school" className="!gap-1" isRequired>
                            <FormLabel className="!font-semibold" fontSize="sm">
                              School
                            </FormLabel>
                            <Input
                              type="text"
                              placeholder="School"
                              size="sm"
                              onChange={onValueChange("instruct_school")}
                            />
                          </FormControl>
                          <FormControl
                            className="!gap-1"
                            htmlFor="username"
                            isRequired
                          >
                            <FormLabel className="!font-semibold" fontSize="sm" htmlFor="instruct_warrentId">
                              Warrent Id
                            </FormLabel>
                            <Input
                              placeholder="Warrent Id"
                              size="sm"
                              onChange={onValueChange("instruct_warrentId")}
                            />
                          </FormControl>
                          <FormControl isRequired>
                            <FormLabel className="!font-semibold" fontSize="sm">
                              Date of Birth
                            </FormLabel>

                            <DatePicker
                              selected={doB}
                              onChange={(instruct_dob) => setDoB(instruct_dob)}
                            />
                          </FormControl>
                          <FormControl htmlFor="instruct_gender">
                            <FormLabel className="!font-semibold" fontSize="sm">
                              Gender
                            </FormLabel>
                            <Select
                              placeholder="Select a Role"
                              onChange={onDropdownValueChange("instruct_gender")}
                            >
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="other">Other</option>
                            </Select>
                          </FormControl>
                          <FormControl isRequired>
                            <FormLabel className="!font-semibold" fontSize="sm">
                              Phone Number
                            </FormLabel>
                            <InputGroup>
                              <InputLeftAddon>+94</InputLeftAddon>
                              <Input
                                type="tel"
                                placeholder="phone number"
                                onChange={onValueChange("instruct_mobNum")} />
                            </InputGroup>
                          </FormControl>
                        </Stack>
                      )}
                    </Container>
                  </Stack>
                  {/* set condition to isFormFilled to Disable Button till form is filled*/}
                  {true && (
                    <Button variant="solid" colorScheme="blue" type="submit">
                      Create Account
                    </Button>
                  )}
                  {false && (
                    <Button
                      variant="solid"
                      colorScheme="blue"
                      type="submit"
                      isDisabled
                    >
                      Create Account
                    </Button>
                  )}
                </form>
              </CardBody>
            </Stack>
          </Card>
        </Card>
      </div>
    </ChakraProvider>
  );
}
export default SignupPage;
