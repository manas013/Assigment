import React from "react";
import "../Signup/mediaquary.css";

import { Button, Img, Input, Line, Text } from "components";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import UploadfilefromModal from "modals/Uploadfilefrom";

const SignupPage = () => {
  const navigate = useNavigate();

  const glogin=useGoogleLogin({
    onSuccess:(tokenResponse)=>getGoogleInfo(tokenResponse)
  })
  const getGoogleInfo = (data) => {
    fetch(`
      https://www.googleapis.com/oauth2/v2/userinfo?access_token=${data.access_token}`
    )
      .then((response) => response.json())
      .then(async (data) => {
        let payload = {
          email: data.email,
          first_name: data.given_name || "",
          last_name: data.family_name || "",
          token: data.id,
          provider_key: data.email,
          provider: "google",
        };
        localStorage.setItem("info",JSON.stringify(payload))
        navigate("/homescreendashboard")
      });
  };
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-center mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1440px] mx-auto md:px-5 w-full">
          <div id='circle_height' className="h-[1117px] relative w-[58%] md:w-full">
            <div id='circle_height' className="absolute bg-amber-300 h-[1117px] inset-[0] justify-center m-auto w-[97%]"></div>
            <Img
            id='circle_top'
              className="absolute  inset-x-[0] mx-auto object-cover top-[21%] w-full"
              src="images/img_helix3.png"
              alt="helixThree"
            />
          </div>
          <div style={{display:'flex', justifyContent:'center',width:'100%'}}>
          <div id="form_section" className="flex md:flex-1 flex-col   w-[100%] pr-40 pl-20 md:w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start">

          
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-gray-700"
              size="txtOpenSansRomanBold36"
            >
              Welcome!
            </Text>
            <Text
              className="mt-[41px] text-base text-gray-500"
              size="txtOpenSansRomanRegular16Gray500"
            >
              Email Address
            </Text>
            <Input
              name="email"
              placeholder="umartinez@gmail.com"
              className="font-opensans leading-[normal] p-0 placeholder:text-blue_gray-100 text-left text-xl w-full"
              wrapClassName="mt-2.5 w-full"
              type="email"
            ></Input>
            <Text
              className="mt-6 text-base text-gray-500"
              size="txtOpenSansRomanRegular16Gray500"
            >
              Password
            </Text>
            <div
             id="password" className="bg-cover bg-no-repeat flex flex-col h-[75px] items-end justify-start mt-2.5 p-[25px] sm:px-5 w-full"
              style={{  border:'1px solid rgba(152 152 152)', borderRadius:'6px' }}
            >
              <Img
                className="h-6 mr-[15px] w-6"
                src="images/img_checkmark_gray_300_01.svg"
                alt="checkmark"
              />
            </div>
            <Text
              className="mt-[11px] text-base text-gray-500"
              size="txtOpenSansRomanRegular16Gray500"
            >
              Password must be at least 8 characters long.
            </Text>
            <Text
              className="mt-[23px] text-base text-gray-500"
              size="txtOpenSansRomanRegular16Gray500"
            >
              Confirm Password
            </Text>
            <div
             id="password" className="bg-cover bg-no-repeat flex flex-col h-[75px] items-end justify-start mt-2.5 p-[25px] sm:px-5 w-full"
              style={{ border:'1px solid rgba(152 152 152)', borderRadius:'6px' }}
            >
              <Img
                className="h-6 mr-[15px] w-6"
                src="images/img_checkmark_gray_300_01.svg"
                alt="checkmark_One"
              />
            </div>
            </div>
            <div>
            <Text
              className="md:ml-[0] ml-[34px] mt-[57px] text-base text-center text-gray-700"
              size="txtInterRegular16"
            >
              <span className="text-gray-500 font-inter font-normal">
                By signing up you agree with
              </span>
              <span className="text-blue-A400 font-inter font-normal">
                {" "}
                terms and conditions
              </span>
            </Text>
            </div>
            <Button
              className="cursor-pointer font-inter leading-[normal] min-w-[450px] w-[100%] sm:min-w-full mt-7 text-center text-xl"
              shape="square"
              color="amber_300"
              size="md"
              variant="fill"
            >
              Sign up
            </Button>
            <div id="hr_content" className="flex sm:flex-col flex-row font-opensans sm:gap-10 items-start justify-between mt-[26px] w-full">
              <Line id='hr_tag'className="bg-gray-300_01 h-px sm:mt-0 my-[13px] w-[32%]" />
              <Text
                className="text-gray-500 text-xl"
                size="txtOpenSansRomanRegular20Gray500"
              >
                Or Sign in with
              </Text>
              <Line id='hr_tag' className="bg-gray-300_01 h-px sm:mt-0 my-[13px] w-[32%]" />
            </div>
            <div id="images_google" className="flex flex-row gap-[76px] items-center justify-center md:ml-[0] ml-[88px] mt-[22px] w-[61%] md:w-full">
              <Img
                className="h-10 w-10"
                src="images/img_383instance.svg"
                alt="383instance"
                onClick={glogin}
                style={{cursor:'pointer'}}
              />
              <Img
                className="h-10 w-10"
                src="images/img_388instance.svg"
                alt="388instance"
              />
              <Img
                className="h-10 w-10"
                src="images/img_391instance.svg"
                alt="391instance"
              />
            </div>
            <div className="flex flex-row gap-2.5 items-center justify-center md:ml-[0] ml-[72px] mt-[41px] w-[68%] md:w-full">
              <a href="javascript:" className="text-gray-500 text-xl">
                <Text size="txtOpenSansRomanRegular20Gray500">
                  Already have an account?
                </Text>
              </a>
              <a href="javascript:" className="text-blue-A400 text-xl">
                <Text size="txtInterRegular20">Log in</Text>
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
