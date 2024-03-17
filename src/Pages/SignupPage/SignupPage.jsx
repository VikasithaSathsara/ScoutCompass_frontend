import { useState } from "react";
import "./SignupPage.css";
import { Center, ChakraProvider } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
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
    const toast = useToast();
    const [loading, setLoading] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (pass !== confirmPass) {
                setpasswordMissMatch(true);
                return;
            } else {
                if (formData.role === "instructor") {
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
                        "http://13.233.134.21:8081/api/scoutcompass/auth/instruct/register",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Origin: "http://13.233.134.21:3000",
                                "Content-Length":
                                    "<calculated when request is sent>",
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

                        // navigate("/home");
                        //  window.location.href = "/home";

                        // navigate("/home");
                        //  window.location.href = "/home";
                        const examplePromise = new Promise(
                            (resolve, reject) => {
                                setTimeout(() => resolve(200), 800);
                            }
                        );

                        // Will display the loading toast until the promise is either resolved
                        // or rejected.
                        toast.promise(examplePromise, {
                            success: {
                                title: "Instructor Successfully Registered!",
                                description: "Looks great",
                                position: "top",
                            },
                            error: {
                                title: "Promise rejected",
                                description: "Something wrong",
                                position: "top-right",
                            },
                            loading: {
                                title: "Request Proccessing",
                                description: "Please wait",
                                position: "top-right",
                            },
                        });
                        setTimeout(function () {
                            window.location.replace("/login");
                        }, 2500);
                    } else {
                        console.error("Instructor Registration Fail!");
                        toast.error("Instructor Registration Fail!");
                    }
                } else if (formData.role === "scout") {
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
                        instructorId: "1",
                    };

                    // Sending POST request
                    const response = await fetch(
                        "http://13.233.134.21:8081/api/scoutcompass/auth/scout/register",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Origin: "http://13.233.134.21:3000",
                                "Content-Length":
                                    "<calculated when request is sent>",
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

                        // navigate("/home");
                        // window.location.href = "/home";
                        const examplePromise = new Promise(
                            (resolve, reject) => {
                                setTimeout(() => resolve(200), 800);
                            }
                        );

                        // Will display the loading toast until the promise is either resolved
                        // or rejected.
                        toast.promise(examplePromise, {
                            success: {
                                title: "Scout Successfully Registered!",
                                description: "Looks great",
                                position: "top",
                            },
                            error: {
                                title: "Promise rejected",
                                description: "Something wrong",
                                position: "top-right",
                            },
                            loading: {
                                title: "Request Proccessing",
                                description: "Please wait",
                                position: "top-right",
                            },
                        });
                        setTimeout(function () {
                            window.location.replace("/login");
                        }, 2500);
                    } else {
                        console.error("Scout Registration Fail!");
                        toast.error("Scout Registration Fail!");
                    }
                }
            }
            setSubmitSuccess(true);
            setpasswordMissMatch(false);
            setFormData({
                ...formData,
                password: pass,
            });
            console.log("sdsdsdsd" + formData);
        } catch (error) {
            // handle server errors
            setLoading(false);
        }
    };

    return (
        <ChakraProvider>
            <div className="main">
                <Navbar />
                <Card
                    className=" max-w-[1500px] p-8 m-[2%] mt-[10%] justify-center items-center "
                    bg="rgba(0, 0, 0, 0.65)"
                >
                    {/* <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            
          > */}
                    <Stack>
                        <CardHeader>
                            <Heading size="lg" textAlign="Center" color="white">
                                Create Your Account
                            </Heading>
                        </CardHeader>
                        <CardBody>
                            <form
                                onSubmit={onSubmit}
                                className="flex flex-col gap-y-3"
                            >
                                <Stack direction={stackDirection}>
                                    <Container>
                                        <FormControl
                                            className="!gap-1"
                                            isRequired
                                        >
                                            <FormLabel
                                                className="!font-semibold"
                                                fontSize="md"
                                                color="white"
                                            >
                                                Full Name
                                            </FormLabel>
                                            <HStack>
                                                <FormControl
                                                    htmlFor="firstName"
                                                    isRequired
                                                >
                                                    <Input
                                                        placeholder="First Name"
                                                        size="md"
                                                        borderColor="white"
                                                        borderRadius={40}
                                                        onChange={onValueChange(
                                                            "firstName"
                                                        )}
                                                    />
                                                </FormControl>
                                                <FormControl
                                                    htmlFor="lastName"
                                                    isRequired
                                                >
                                                    <Input
                                                        placeholder="Last Name"
                                                        size="md"
                                                        color="white"
                                                        borderColor="white"
                                                        borderRadius={40}
                                                        onChange={onValueChange(
                                                            "lastName"
                                                        )}
                                                    />
                                                </FormControl>
                                            </HStack>
                                        </FormControl>

                                        <FormControl
                                            className="!gap-1"
                                            htmlFor="email"
                                            isRequired
                                        >
                                            <FormLabel
                                                className="!font-semibold"
                                                fontSize="md"
                                                color="white"
                                            >
                                                Email
                                            </FormLabel>
                                            <Input
                                                type="email"
                                                placeholder="Email"
                                                size="md"
                                                color="white"
                                                borderColor="white"
                                                borderRadius={40}
                                                onChange={onValueChange(
                                                    "email"
                                                )}
                                            />
                                        </FormControl>
                                        <FormControl
                                            className="!gap-1"
                                            isInvalid={passwordMissMatch}
                                            isRequired
                                        >
                                            <FormLabel
                                                className="!font-semibold"
                                                fontSize="md"
                                                color="white"
                                            >
                                                Password
                                            </FormLabel>
                                            <HStack>
                                                <FormControl
                                                    htmlFor="password"
                                                    isInvalid={
                                                        passwordMissMatch
                                                    }
                                                    isRequired
                                                >
                                                    <Input
                                                        type="password"
                                                        placeholder="Password"
                                                        size="md"
                                                        color="white"
                                                        borderColor="white"
                                                        borderRadius={40}
                                                        onChange={onPasswordChange(
                                                            "password"
                                                        )}
                                                    />
                                                </FormControl>
                                                <FormControl
                                                    htmlFor="confirmPassword"
                                                    isInvalid={
                                                        passwordMissMatch
                                                    }
                                                    isRequired
                                                >
                                                    <Input
                                                        type="password"
                                                        placeholder="Confirm Password"
                                                        size="md"
                                                        color="white"
                                                        borderColor="white"
                                                        borderRadius={40}
                                                        onChange={onConfirmPasswordChange(
                                                            "confirmPassword"
                                                        )}
                                                    />
                                                </FormControl>
                                            </HStack>
                                            {passwordMissMatch ? (
                                                <FormErrorMessage>
                                                    Entered Passwords do Not
                                                    Match!
                                                </FormErrorMessage>
                                            ) : null}
                                        </FormControl>

                                        <FormControl isRequired>
                                            <FormLabel
                                                className="!font-semibold"
                                                fontSize="md"
                                                color="white"
                                            >
                                                District
                                            </FormLabel>
                                            <Select
                                                placeholder="Select your district"
                                                size="md"
                                                color="gray"
                                                borderColor="white"
                                                borderRadius={40}
                                                onChange={onDropdownValueChange(
                                                    "district"
                                                )}
                                            >
                                                <option value="Ampara">
                                                    Ampara
                                                </option>
                                                <option value="Anuradhapura">
                                                    Anuradhapura
                                                </option>
                                                <option value="Badulla">
                                                    Badulla
                                                </option>
                                                <option value="Baticaloa">
                                                    Baticaloa
                                                </option>
                                                <option value="Colombo">
                                                    Colombo
                                                </option>
                                                <option value="Galle">
                                                    Galle
                                                </option>
                                                <option value="Gampaha">
                                                    Gampaha
                                                </option>
                                                <option value="Hambanthota">
                                                    Hambanthota
                                                </option>
                                                <option value="Jaffna">
                                                    Jaffna
                                                </option>
                                                <option value="Kaluthara">
                                                    Kaluthara
                                                </option>
                                                <option value="Kandy">
                                                    Kandy
                                                </option>
                                                <option value="Kegalle">
                                                    Kegalle
                                                </option>
                                                <option value="Kilinochchi">
                                                    Kilinochchi
                                                </option>
                                                <option value="Kurunegala">
                                                    Kurunegala
                                                </option>
                                                <option value="Mannar">
                                                    Mannar
                                                </option>
                                                <option value="Matale">
                                                    Matale
                                                </option>
                                                <option value="Matara">
                                                    Matara
                                                </option>
                                                <option value="Monaragala">
                                                    Monaragala
                                                </option>
                                                <option value="Mullaitivu">
                                                    Mullaitivu
                                                </option>
                                                <option value="Nuwara Eliya">
                                                    Nuwara Eliya
                                                </option>
                                                <option value="Puttalama">
                                                    Puttalama
                                                </option>
                                                <option value="Rathnapura">
                                                    Rathnapura
                                                </option>
                                                <option value="Trincomalee">
                                                    Trincomalee
                                                </option>
                                                <option value="Vavuniya">
                                                    Vavuniya
                                                </option>
                                            </Select>
                                        </FormControl>
                                        <FormControl isRequired>
                                            <FormLabel
                                                className="!font-semibold"
                                                fontSize="md"
                                                color="white"
                                            >
                                                Role
                                            </FormLabel>
                                            <Select
                                                placeholder="Select a Role"
                                                size="md"
                                                color="gray"
                                                borderColor="white"
                                                borderRadius={40}
                                                onChange={onDropdownValueChange(
                                                    "role"
                                                )}
                                            >
                                                <option value="scout">
                                                    Scout
                                                </option>
                                                <option value="instructor">
                                                    Instructor
                                                </option>
                                            </Select>
                                        </FormControl>
                                    </Container>
                                    <Container>
                                        {selectedRole === "scout" && (
                                            <Stack>
                                                <Heading
                                                    size="md"
                                                    color="white"
                                                    textAlign="center"
                                                >
                                                    Scout Details
                                                </Heading>
                                                <FormControl
                                                    className="!gap-1"
                                                    isRequired
                                                >
                                                    <FormLabel
                                                        className="!font-semibold"
                                                        fontSize="md"
                                                        color="white"
                                                    >
                                                        School
                                                    </FormLabel>
                                                    <Input
                                                        type="text"
                                                        placeholder="School"
                                                        size="md"
                                                        color="white"
                                                        borderColor="white"
                                                        borderRadius={40}
                                                        onChange={onValueChange(
                                                            "scout_school"
                                                        )}
                                                    />
                                                </FormControl>
                                                <FormControl isRequired>
                                                    <FormLabel
                                                        className="!font-semibold"
                                                        fontSize="md"
                                                        color="white"
                                                    >
                                                        Instructor
                                                    </FormLabel>
                                                    <Select
                                                        placeholder="Select a instructor"
                                                        size="md"
                                                        color="gray"
                                                        borderColor="white"
                                                        borderRadius={40}
                                                        onChange={onDropdownValueChange(
                                                            "instructor"
                                                        )}
                                                    >
                                                        <option value="instructor1">
                                                            0001
                                                        </option>
                                                        <option value="instructor2">
                                                            0002
                                                        </option>
                                                        <option value="instructor3">
                                                            0003
                                                        </option>
                                                        <option value="instructor4">
                                                            0004
                                                        </option>
                                                    </Select>
                                                </FormControl>
                                                <FormControl isRequired>
                                                    <FormLabel
                                                        className="!font-semibold"
                                                        fontSize="md"
                                                        color="white"
                                                    >
                                                        Date of Birth
                                                    </FormLabel>
                                                    <DatePicker
                                                        selected={scoutDob}
                                                        onChange={(scout_dob) =>
                                                            setScoutDob(
                                                                scout_dob
                                                            )
                                                        }
                                                    />
                                                </FormControl>
                                                <FormControl>
                                                    <FormLabel
                                                        className="!font-semibold"
                                                        fontSize="md"
                                                        color="white"
                                                    >
                                                        Gender
                                                    </FormLabel>
                                                    <Select
                                                        placeholder="Select Gender"
                                                        color="gray"
                                                        size="md"
                                                        borderColor="white"
                                                        borderRadius={40}
                                                        onChange={onDropdownValueChange(
                                                            "scout_gender"
                                                        )}
                                                    >
                                                        <option value="male">
                                                            Male
                                                        </option>
                                                        <option value="female">
                                                            Female
                                                        </option>
                                                        <option value="other">
                                                            Other
                                                        </option>
                                                    </Select>
                                                </FormControl>
                                                <FormControl isRequired>
                                                    <FormLabel
                                                        className="!font-semibold"
                                                        fontSize="md"
                                                        color="white"
                                                    >
                                                        Phone Number
                                                    </FormLabel>
                                                    <InputGroup>
                                                        <InputLeftAddon>
                                                            +94
                                                        </InputLeftAddon>
                                                        <Input
                                                            type="tel"
                                                            placeholder="Phone Number"
                                                            size="md"
                                                            color="white"
                                                            borderColor="white"
                                                            borderRadius={40}
                                                            onChange={onValueChange(
                                                                "scout_mobNum"
                                                            )}
                                                        />
                                                    </InputGroup>
                                                </FormControl>
                                            </Stack>
                                        )}
                                        {selectedRole === "instructor" && (
                                            <Stack>
                                                <Heading
                                                    size="md"
                                                    color="white"
                                                    textAlign="center"
                                                >
                                                    Instructor Details
                                                </Heading>
                                                <FormControl
                                                    htmlFor="instruct_school"
                                                    className="!gap-1"
                                                    isRequired
                                                >
                                                    <FormLabel
                                                        className="!font-semibold"
                                                        fontSize="md"
                                                        color="white"
                                                    >
                                                        School
                                                    </FormLabel>
                                                    <Input
                                                        type="text"
                                                        placeholder="School"
                                                        size="md"
                                                        color="white"
                                                        borderColor="white"
                                                        borderRadius={40}
                                                        onChange={onValueChange(
                                                            "instruct_school"
                                                        )}
                                                    />
                                                </FormControl>
                                                <FormControl
                                                    className="!gap-1"
                                                    htmlFor="username"
                                                    isRequired
                                                >
                                                    <FormLabel
                                                        className="!font-semibold"
                                                        size="md"
                                                        color="white"
                                                        htmlFor="instruct_warrentId"
                                                    >
                                                        Warrent Id
                                                    </FormLabel>
                                                    <Input
                                                        placeholder="Warrent Id"
                                                        size="md"
                                                        color="white"
                                                        borderColor="white"
                                                        borderRadius={40}
                                                        onChange={onValueChange(
                                                            "instruct_warrentId"
                                                        )}
                                                    />
                                                </FormControl>
                                                <FormControl isRequired>
                                                    <FormLabel
                                                        className="!font-semibold"
                                                        fontSize="md"
                                                        color="white"
                                                    >
                                                        Date of Birth
                                                    </FormLabel>

                                                    <DatePicker
                                                        selected={doB}
                                                        onChange={(
                                                            instruct_dob
                                                        ) =>
                                                            setDoB(instruct_dob)
                                                        }
                                                    />
                                                </FormControl>
                                                <FormControl htmlFor="instruct_gender">
                                                    <FormLabel
                                                        className="!font-semibold"
                                                        fontSize="md"
                                                        color="white"
                                                    >
                                                        Gender
                                                    </FormLabel>
                                                    <Select
                                                        placeholder="Select your gender"
                                                        size="md"
                                                        color="gray"
                                                        borderColor="white"
                                                        borderRadius={40}
                                                        onChange={onDropdownValueChange(
                                                            "instruct_gender"
                                                        )}
                                                    >
                                                        <option value="male">
                                                            Male
                                                        </option>
                                                        <option value="female">
                                                            Female
                                                        </option>
                                                        <option value="other">
                                                            Other
                                                        </option>
                                                    </Select>
                                                </FormControl>
                                                <FormControl isRequired>
                                                    <FormLabel
                                                        className="!font-semibold"
                                                        fontSize="md"
                                                        color="white"
                                                    >
                                                        Phone Number
                                                    </FormLabel>
                                                    <InputGroup>
                                                        <InputLeftAddon>
                                                            +94
                                                        </InputLeftAddon>
                                                        <Input
                                                            type="tel"
                                                            placeholder="phone number"
                                                            size="md"
                                                            color="white"
                                                            borderColor="white"
                                                            borderRadius={40}
                                                            onChange={onValueChange(
                                                                "instruct_mobNum"
                                                            )}
                                                        />
                                                    </InputGroup>
                                                </FormControl>
                                            </Stack>
                                        )}
                                    </Container>
                                </Stack>
                                {/* set condition to isFormFilled to Disable Button till form is filled*/}
                                {true && (
                                    <Button
                                        variant="solid"
                                        bg="rgb(246, 255, 0)"
                                        borderColor="white"
                                        borderRadius={40}
                                        type="submit"
                                        isDisabled={loading}
                                        _hover={{
                                            bg: "rgb(255, 55, 0)",
                                            color: "white",
                                            border: "2px solid white",
                                        }}
                                    >
                                        Create Account
                                    </Button>
                                )}
                                {false && (
                                    <Button
                                        variant="solid"
                                        bg="rgb(246, 255, 0)"
                                        borderColor="white"
                                        borderRadius={40}
                                        type="submit"
                                        isDisabled={loading}
                                        _hover={{
                                            bg: "rgb(255, 55, 0)",
                                            color: "white",
                                            border: "2px solid white",
                                        }}
                                    >
                                        Create Account
                                    </Button>
                                )}
                            </form>
                        </CardBody>
                    </Stack>
                    {/* </Card> */}
                </Card>
            </div>
        </ChakraProvider>
    );
}
export default SignupPage;
