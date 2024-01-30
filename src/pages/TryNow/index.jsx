import React from "react";
import "../TryNow/trynow_mediaquary.css";

import { Button, Img, Input, Text } from "components";

const TryNowPage = () => {
  return (
    <>
      <div id="main_tryNow" className="bg-white-A700 font-opensans h-[1117px] mx-auto md:pr-10 sm:pr-5 pr-[223px] relative w-full">
        <div id="left_site_main" className="absolute bg-amber-300 flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto p-[97px] md:px-5 w-[49%]">
          <div id="text_left_site" className="flex flex-col items-start justify-start mb-[66px] mt-[25px] w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900"
              size="txtOpenSansRomanBold36Bluegray900"
            >
              Subscribe to our Enterprise Plan{" "}
            </Text>
            <Text
              className="mt-[35px] text-base text-blue_gray-900"
              size="txtOpenSansRomanRegular16Bluegray900"
            >
              <>
                Our Enterprise Plan is designed for businesses and organizations
                that want to provide their employees or members with a
                personalized plans to achieve their health and wellness goals.
                With our Enterprise Plan, you&#39;ll get access to a suite of
                advanced features and tools.
                <br />
                <br />
                To request more information about our Enterprise Plan , please
                fill out the form below. One of our representatives will be in
                touch with you shortly.
              </>
            </Text>
            <Img
              className="h-6 mt-[45px] w-6"
              src="images/img_checkmark_blue_gray_900.svg"
              alt="checkmark"
            />
            <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start mt-[69px] w-full">
              <Img
                className="h-6 md:mt-0 mt-[5px] w-6"
                src="images/img_checkmark_blue_gray_900.svg"
                alt="checkmark_One"
              />
              <Text
                className="sm:flex-1 text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-[95%] sm:w-full"
                size="txtOpenSansRomanBold24Bluegray900"
              >
                Priority access to our team of experts for technical assistance
                and troubleshooting
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start mt-8 w-full">
              <Img
                className="h-6 md:mt-0 mt-[5px] w-6"
                src="images/img_checkmark_blue_gray_900.svg"
                alt="checkmark_Two"
              />
              <Text
                className="sm:flex-1 text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-[95%] sm:w-full"
                size="txtOpenSansRomanBold24Bluegray900"
              >
                <>
                  Access advanced analytics and reporting to track your
                  organization&#39;s fitness and wellness goals
                </>
              </Text>
            </div>
         
          </div>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Img
              className="h-48 md:h-auto md:ml-[0]  mt-[40px] object-cover w-[193px] sm:w-full"
              src="images/img_760rectangle.png"
              alt="760rectangle"
              id='Deatox'
            />

            </div>
        </div>
        <div id="right_site" className="absolute flex flex-col h-max inset-y-[0] items-start justify-start my-auto right-[20%] w-[27%]">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-gray-700"
            size="txtOpenSansRomanBold36"
          >
            Enterprise Plan Request
          </Text>
          <Text
            className="mt-[37px] text-base text-gray-500"
            size="txtOpenSansRomanRegular16Gray500"
          >
            Full Name
          </Text>
          <Input
          id='text_find'
            name="email"
            placeholder="umartinez@gmail.com"
            className="font-opensans leading-[normal] p-0 placeholder:text-blue_gray-100 text-left text-xl w-full"
            wrapClassName="mt-2.5 w-full"
            type="email"
          ></Input>
          <Text
            className="mt-[27px] text-base text-gray-500"
            size="txtOpenSansRomanRegular16Gray500"
          >
            Company Name
          </Text>
          <Img
            className="h-[75px] mt-[7px]"
            src="images/img_342group.svg"
            alt="342group"
          />
          <Text
            className="mt-6 text-base text-gray-500"
            size="txtOpenSansRomanRegular16Gray500"
          >
            Email address
          </Text>
          <Img
            className="h-[75px] mt-2.5"
            src="images/img_342group.svg"
            alt="353group"
          />
          <Text
            className="mt-[23px] text-base text-gray-500"
            size="txtOpenSansRomanRegular16Gray500"
          >
            Phone Number
          </Text>
          <Img
            className="h-[75px] mt-2.5"
            src="images/img_342group.svg"
            alt="353group_One"
          />
          <Text
            className="mt-[23px] text-base text-gray-500"
            size="txtOpenSansRomanRegular16Gray500"
          >
            Remarks
          </Text>
          <Img
          id='footer_remarks'
            className="h-[132px] mt-2.5"
            src="images/img_342group.svg"
            alt="353group_Two"
          />
          <Button
            className="cursor-pointer font-inter leading-[normal] max-w-[450px] sm:min-w-full mt-10 text-center text-xl"
            shape="square"
            color="amber_300"
            size="md"
            variant="fill"
          >
            Submit
          </Button>
        </div>
        {/* <Text
          className="absolute bottom-[4%] left-[18%] text-blue_gray-900 text-sm"
          size="txtOpenSansRomanBold14"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim venia
        </Text> */}
      </div>
      <div id="hidden_trynow" className="bg-white-A700 flex flex-col items-center justify-center mx-auto w-full">
      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1440px] mx-auto md:px-5 w-full">
      <div id="left_site_main_content" className="bg-white-A700 font-opensans h-[1117px] relative w-[100%] md:w-full">
        <div id="left_site_main" className="absolute bg-amber-300 flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto p-[97px] md:px-5">
          <div id="text_left_site" className="flex flex-col items-start justify-start mb-[66px] mt-[25px] w-full">
            <Text
            id='heading'
              className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900"
              size="txtOpenSansRomanBold36Bluegray900"
            >
              Subscribe to our Enterprise Plan{" "}
            </Text>
            <Text
            id="bolder_text"
              className="mt-[35px] text-base text-blue_gray-900"
              size="txtOpenSansRomanRegular16Bluegray900"
            >
              <>
                Our Enterprise Plan is designed for businesses and organizations
                that want to provide their employees or members with a
                personalized plans to achieve their health and wellness goals.
                With our Enterprise Plan, you&#39;ll get access to a suite of
                advanced features and tools.
                <br />
                <br />
                To request more information about our Enterprise Plan , please
                fill out the form below. One of our representatives will be in
                touch with you shortly.
              </>
            </Text>
            <Img
              className="h-6 mt-[45px] w-6"
              src="images/img_checkmark_blue_gray_900.svg"
              alt="checkmark"
            />
            <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start mt-[69px] w-full">
              <Img
                className="h-6 md:mt-0 mt-[5px] w-6"
                src="images/img_checkmark_blue_gray_900.svg"
                alt="checkmark_One"
              />
              <Text
              id="bolder_text"
                className="sm:flex-1 text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-[95%] sm:w-full"
                size="txtOpenSansRomanBold24Bluegray900"
              >
                Priority access to our team of experts for technical assistance
                and troubleshooting
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start mt-8 w-full">
              <Img
                className="h-6 md:mt-0 mt-[5px] w-6"
                src="images/img_checkmark_blue_gray_900.svg"
                alt="checkmark_Two"
              />
              <Text
              id="bolder_text"
                className="sm:flex-1 text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-[95%] sm:w-full"
                size="txtOpenSansRomanBold24Bluegray900"
              >
                <>
                  Access advanced analytics and reporting to track your
                  organization&#39;s fitness and wellness goals
                </>
              </Text>
            </div>
          </div>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Img
              className="h-48 md:h-auto md:ml-[0]  mt-[40px] object-cover w-[193px] sm:w-full"
              src="images/img_760rectangle.png"
              alt="760rectangle"
              id='Deatox'
            />

            </div>
        </div>

        </div>
      </div>
      <div style={{display:'flex',justifyContent:'center',width:'100%' ,padding:'0px 22px', paddingBottom:'20px'}} >
      <div className="flex md:flex-1 flex-col   w-[100%]  md:w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-gray-700"
            size="txtOpenSansRomanBold36"
            id='heading'
          >
            Enterprise Plan Request
          </Text>
          <Text
            className="mt-[37px] text-base text-gray-500"
            size="txtOpenSansRomanRegular16Gray500"
          >
            Full Name
          </Text>
          <Input
            name="email"
            placeholder="umartinez@gmail.com"
            className="font-opensans leading-[normal] p-0 placeholder:text-blue_gray-100 text-left text-xl w-full"
            wrapClassName="mt-2.5 w-full"
            type="email"
          ></Input>
          <Text
            className="mt-[27px] text-base text-gray-500"
            size="txtOpenSansRomanRegular16Gray500"
          >
            Company Name
          </Text>
          <Input
            name="email"
           
            className="font-opensans leading-[normal] p-0 placeholder:text-blue_gray-100 text-left text-xl w-full"
            wrapClassName="mt-2.5 w-full"
            type="email"
          ></Input>
          <Text
            className="mt-6 text-base text-gray-500"
            size="txtOpenSansRomanRegular16Gray500"
          >
            Email address
          </Text>
          <Input
            name="email"
           
            className="font-opensans leading-[normal] p-0 placeholder:text-blue_gray-100 text-left text-xl w-full"
            wrapClassName="mt-2.5 w-full"
            type="email"
          ></Input>
          <Text
            className="mt-[23px] text-base text-gray-500"
            size="txtOpenSansRomanRegular16Gray500"
          >
            Phone Number
          </Text>
          <Input
            name="email"
           
            className="font-opensans leading-[normal] p-0 placeholder:text-blue_gray-100 text-left text-xl w-full"
            wrapClassName="mt-2.5 w-full"
            type="email"
          ></Input>
          <Text
            className="mt-[23px] text-base text-gray-500"
            size="txtOpenSansRomanRegular16Gray500"
          >
            Remarks
          </Text>
          <Img
            className="h-[132px] mt-2.5"
            src="images/img_342group.svg"
            alt="353group_Two"
          />
          <Button
            className="cursor-pointer font-inter leading-[normal] min-w-[450px] sm:min-w-full mt-10 text-center text-xl"
            shape="square"
            color="amber_300"
            size="md"
            variant="fill"
          >
            Submit
          </Button>
        </div>
      </div>

    </div>
    </>
  );
};

export default TryNowPage;
