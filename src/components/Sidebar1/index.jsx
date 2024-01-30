import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Text } from "components";

const Sidebar1 = (props) => {
  return (
    <>
      <Sidebar className={props.className}>
        <div className="flex flex-row gap-[11px] items-start justify-center md:ml-[0] mt-[34px] mx-[45px] pr-[3px] w-[66%]">
          <Img
            className="h-[41px] mt-[13px]"
            src="images/img_frame3.svg"
            alt="frameThree"
          />
          <Text
            className="md:text-5xl text-[66.86px] text-gray-100"
            size="txtProximaNovaRegular6686"
          >
            <span className="md:text-[33.44px] sm:text-[31.439999999999998px] text-gray-100 font-oxygen text-left text-[35.44px] font-normal">
              D
            </span>
            <span className="md:text-[27px] sm:text-[25px] text-gray-100 font-oxygen text-left text-[29px] font-normal">
              ecrackle
            </span>
          </Text>
        </div>
        <div className="flex flex-col md:gap-10 gap-20 items-start justify-start mb-[204px] mr-[3px] mt-[66px] w-auto">
          <div className="bg-gray-900_01 flex flex-col items-start justify-start p-2.5 w-full">
            <div className="flex flex-row gap-2 items-center justify-start ml-0.5 md:ml-[0] w-auto">
              <Img
                className="h-11 w-11"
                src="images/img_pluscircle_gray_100.svg"
                alt="pluscircle"
              />
              <Text
                className="text-center text-gray-100 text-shadow-ts text-xl w-auto"
                size="txtDMSansMedium20"
              >
                Add New
              </Text>
            </div>
          </div>
          <Button
            className="border-l-4 border-light_green-A200 border-solid cursor-pointer flex items-center justify-center min-w-[261px]"
            leftIcon={
              <Img
                className="h-11 mr-1"
                src="images/img_thumbsup_light_green_a200.svg"
                alt="thumbs_up"
              />
            }
            shape="square"
            color="gray_900_01"
            size="xs"
            variant="fill"
          >
            <div className="!text-light_green-A200 font-dmsans font-medium text-center text-xl">
              Speech Enhacement
            </div>
          </Button>
          <div className="bg-gray-900_01 flex flex-col items-start justify-start p-2 w-full">
            <div className="flex flex-row gap-2 items-center justify-start mb-1 ml-1 md:ml-[0] w-auto">
              <Img
                className="h-11 w-11"
                src="images/img_television.svg"
                alt="television"
              />
              <Text
                className="text-center text-gray-100 text-xl w-auto"
                size="txtDMSansMedium20"
              >
                Transcription
              </Text>
            </div>
          </div>
          <div className="bg-gray-900_01 flex flex-col items-start justify-start p-2 w-full">
            <div className="flex flex-row gap-2 items-center justify-start mb-1.5 md:ml-[0] ml-[7px] w-auto">
              <div className="md:h-[27px] h-[41px] relative w-10">
                <div className="md:h-[27px] h-[41px] m-auto w-10">
                  <Img
                    className="absolute h-[26px] left-[0] rounded top-[0] w-[27px]"
                    src="images/img_rectangle660.svg"
                    alt="rectangle660"
                  />
                  <div
                    className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-7 items-end justify-end p-0.5 right-[0] rounded w-[27px]"
                    style={{ backgroundImage: "url('images/img_group7.svg')" }}
                  >
                    <Text
                      className="mr-1 text-[15.28px] text-center text-white-A700"
                      size="txtPoppinsBold1528"
                    >
                      A
                    </Text>
                  </div>
                </div>
                <Img
                  className="absolute h-3 left-[15%] top-[12%] w-[13px]"
                  src="images/img_thumbsup_white_a700.svg"
                  alt="thumbsup"
                />
              </div>
              <Text
                className="text-center text-white-A700 text-xl w-auto"
                size="txtDMSansMedium20WhiteA700"
              >
                Translation
              </Text>
            </div>
          </div>
          <div className="bg-gray-900_01 flex flex-col items-start justify-start p-2 w-full">
            <div className="flex flex-row gap-2 items-center justify-start mb-1 ml-1 md:ml-[0] w-auto">
              <Img
                className="h-11 w-11"
                src="images/img_foldernotchopen.svg"
                alt="foldernotchopen"
              />
              <Text
                className="text-gray-100 text-xl w-auto"
                size="txtDMSansMedium20"
              >
                Folders
              </Text>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
