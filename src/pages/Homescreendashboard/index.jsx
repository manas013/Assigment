import React, { useState } from "react";

import { Button, Img, Text } from "components";
import "./homescreendashboard.css";
import Modal from '@mui/material/Modal';
import ModalPopup from "modals/Uploadfilefrom";

const HomescreendashboardOnePage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isClicked, setIsClicked] = useState(true);
  const [isClicked_speech, setIsClicked_speech] = useState(false);
  const [isClicked_trancription, setIsClicked_trancription] = useState(false);
  const [isClicked_translate, setIsClicked_translate] = useState(false);
  const [isClicked_folder, setIsClicked_folder] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
    setIsClicked_speech(false);
    setIsClicked_trancription(false);
    setIsClicked_translate(false);
    setIsClicked_folder(false);
  };
  const handleClickspeech = () => {
    setIsClicked_speech(!isClicked_speech);
    setIsClicked(false);
    setIsClicked_trancription(false);
    setIsClicked_translate(false);
    setIsClicked_folder(false);
  };
  const handleClicktrancription = () => {
    setIsClicked_trancription(!isClicked_trancription);
    setIsClicked(false);
    setIsClicked_speech(false);
    setIsClicked_translate(false);
    setIsClicked_folder(false);
  };
  const handleClicktranslate = () => {
    setIsClicked_translate(!isClicked_translate);
    setIsClicked(false);
    setIsClicked_speech(false);
    setIsClicked_trancription(false);
    setIsClicked_folder(false);
  };
  const handleClickfolder = () => {
    setIsClicked_folder(!isClicked_folder);
    setIsClicked(false);
    setIsClicked_speech(false);
    setIsClicked_trancription(false);
    setIsClicked_translate(false);
  };

  const imagestyle = {
    display: isClicked ? "none" : "block", // Change text color based on click
  };
  const textstyle = {
    color: isClicked ? "#BAEF58" : "",
  };
  const imagestyle_2 = {
    display: isClicked ? "block" : "none",
  };
  const div = {
    display: isClicked ? "block" : "none",
  };
  const div_1 = {
    display: isClicked_speech ? "block" : "none",
  };
  const div_2 = {
    display: isClicked_trancription ? "block" : "none",
  };
  const div_3 = {
    display: isClicked_translate ? "block" : "none",
  };
  const div_4 = {
    display: isClicked_folder ? "block" : "none",
  };
  const imagestyle_speech = {
    display: isClicked_speech ? "none" : "block",
  };
  const imagestyle_2_speech = {
    display: isClicked_speech ? "block" : "none",
  };
  const textstyle_speech = {
    color: isClicked_speech ? "#BAEF58" : "",
  };
  const imagestyle_folder = {
    display: isClicked_folder ? "none" : "block",
  };
  const imagestyle_2_folder = {
    display: isClicked_folder ? "block" : "none",
    backgroundcolor: "green",
  };
  const textstyle_folder = {
    color: isClicked_folder ? "#BAEF58" : "",
  };
  const imagestyle_translate = {
    display: isClicked_translate ? "none" : "block",
  };
  const imagestyle_2_translate = {
    display: isClicked_translate ? "block" : "none",
  };
  const textstyle_translate = {
    color: isClicked_translate ? "#BAEF58" : "",
  };
  const imagestyle_trancription = {
    display: isClicked_trancription ? "none" : "block",
  };
  const imagestyle_2_trancription = {
    display: isClicked_trancription ? "block" : "none",
  };
  const textstyle_trancription = {
    color: isClicked_trancription ? "#BAEF58" : "",
  };

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="homeScreen_dashboard">
        <div
          id="check_response"
          style={{ width: "100%", display: "flex", flex: "1" }}
        >
          <div className="homescreen_dashboard_left">
            <div className="drawer">
              <div className="heading_drawer">
                <Img
                  className="h-[41px] mt-[23px] mr-[16px]"
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
            </div>
            <div className="first_buttom">
              <Img
                className="h-11 w-11"
                src="images/img_pluscircle_gray_100.svg"
                alt="pluscircle"
                style={imagestyle}
                onClick={handleClick}
              />
              <Img
                className="h-11 w-11"
                src="images/PlusCircle.svg"
                alt="pluscircle"
                style={imagestyle_2}
                onClick={handleClick}
              />
              <p
                className="text-center text-gray-100 text-shadow-ts text-xl w-auto"
                size="txtDMSansMedium20"
                style={textstyle}
                onClick={handleClick}
              >
                Add New
              </p>
            </div>
            <div className="first_buttom">
              <Img
                className="h-11 mr-1"
                src="images/img_thumbsup.svg"
                alt="thumbs_up"
                style={imagestyle_speech}
                onClick={handleClickspeech}
              />
              <Img
                className="h-11 w-11"
                src="images/MagicWand.svg"
                alt="pluscircle"
                style={imagestyle_2_speech}
                onClick={handleClickspeech}
              />
              <p
                className="text-center text-gray-100 text-shadow-ts text-xl w-auto"
                size="txtDMSansMedium20"
                style={textstyle_speech}
                onClick={handleClickspeech}
              >
                Speech Enhacement
              </p>
            </div>
            <div className="first_buttom">
              <Img
                className="h-11 w-11"
                src="images/img_television.svg"
                alt="television"
                style={imagestyle_trancription}
                onClick={handleClicktrancription}
              />

              <Img
                className="h-11 w-11"
                src="images/img_television_light_green_a200.svg"
                alt="television_Two"
                style={imagestyle_2_trancription}
                onClick={handleClicktrancription}
              />
              <p
                className="text-center text-gray-100 text-shadow-ts text-xl w-auto"
                size="txtDMSansMedium20"
                style={textstyle_trancription}
                onClick={handleClicktrancription}
              >
                Transcription
              </p>
            </div>
            <div className="first_buttom">
              <Img
                className="h-11 w-11"
                src="images/Group 1000001473 (1).svg"
                alt="pluscircle"
                style={imagestyle_translate}
                onClick={handleClicktranslate}
              />
              <Img
                className="h-11 w-11"
                src="images/Group 1000001473.svg"
                alt="pluscircle"
                style={imagestyle_2_translate}
                onClick={handleClicktranslate}
              />
              <p
                className="text-center text-gray-100 text-shadow-ts text-xl w-auto"
                size="txtDMSansMedium20"
                style={textstyle_translate}
                onClick={handleClicktranslate}
              >
                Translation
              </p>
            </div>{" "}
            <div className="first_buttom">
              <Img
                className="h-11 w-11"
                src="images/img_foldernotchopen.svg"
                alt="pluscircle"
                style={imagestyle_folder}
                onClick={handleClickfolder}
              />
              <Img
                className="h-11 w-11"
                src="images/img_foldernotchopen.svg"
                alt="pluscircle"
                style={imagestyle_2_folder}
                onClick={handleClickfolder}
              />
              <p
                className="text-center text-gray-100 text-shadow-ts text-xl w-auto"
                size="txtDMSansMedium20"
                style={textstyle_folder}
                onClick={handleClickfolder}
              >
                Folders
              </p>
            </div>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <div className="navbar">
            <a
              href="javascript:"
              className="text-center text-gray-100 text-lg w-auto"
            >
              <Text size="txtDMSansRegular18">FAQs</Text>
            </a>
            <div className="flex flex-col items-center justify-start w-auto mx-20">
              <Text
                className="text-center text-gray-100 text-lg w-auto"
                size="txtDMSansRegular18"
              >
                How to Use
              </Text>
            </div>
            <a
              href="javascript:"
              className="text-center text-gray-100 text-lg w-auto mr-20"
            >
              <Text size="txtDMSansRegular18">Support</Text>
            </a>
            <Text
              className="text-center text-gray-100 text-lg w-auto"
              size="txtDMSansRegular18"
            >
              Plans
            </Text>
            <div style={{ position: "relative" }}>
              <Img
                className="h-8 w-8 ml-20"
                src="images/img_usercircle.svg"
                alt="usercircle"
              />
              <Text
                className="absolute bg-red-900 flex h-4 items-center justify-center right-[0] rounded-[50%] text-[8px] text-center text-gray-100 top-[0] w-4"
                size="txtDMSansRegular8"
              >
                05
              </Text>
            </div>
          </div>

          <div id="hamburger-menu">
            <button className="hamburger-button" onClick={handleToggleMenu}>
              ☰
            </button>
            <div className={`nav-links ${menuOpen ? "open" : ""}`}>
              <a href="#">How to use </a>
              <a href="#">Plans</a>
              <a href="#">FAQ</a>
              <a href="#">Support</a>
            </div>
          </div>

          <div className="upload-section">
            <div className="Upload_file" style={div}>
              <div className="main_content_file">
                <Img
                  className="h-9 w-[100%] mt-[74px]"
                  src="images/FileArrowUp.svg"
                  alt="television"
                />
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "40px",
                    }}
                  >
                    <Button
                    onClick={handleOpen}
                      className="cursor-pointer flex items-center justify-center max-w-[354px] w-[100%]"
                      rightIcon={
                        <Img
                          className="h-[18px] ml-2 my-px"
                          src="images/FileArrowUp.svg"
                          alt="television"
                        />
                      }
                      shape="round"
                      size="md"
                      variant="gradient"
                      color="light_green_A200_light_green_A700"
                    >
                      <div className="font-medium text-base text-center">
                        Upload The File
                      </div>
                    </Button>
                    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <ModalPopup  handleClose={handleClose}/>
      </Modal>

                  </div>
                  <Text
                    className="text-center text-gray-100 text-sm w-auto mt-5"
                    size="txtDMSansRegular14Gray100"
                  >
                    Or drag here
                  </Text>
                  <div className="flex flex-col items-center justify-center mt-[45px] w-auto">
                    <Text
                      className="text-center text-gray-300 text-sm w-auto"
                      size="txtDMSansRegular14"
                    >
                      Audio and Video file only
                    </Text>
                  </div>
                  <Text
                    className="capitalize mt-[46px] text-base text-center text-gray-300 underline"
                    size="txtDMSansRegular16"
                  >
                    <span className="text-gray-300 font-dmsans font-normal">
                      View Recently{" "}
                    </span>
                    <span className="text-gray-300 font-dmsans font-normal">
                      Transcription
                    </span>
                    <span className="text-gray-300 font-dmsans font-normal">
                      {" "}
                      files
                    </span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="Upload_file" style={div_1}>
              <div className="main_content_file">
                <Text
                  className="capitalize mt-1.5 text-center text-gray-300 text-lg"
                  size="txtDMSansRegular18Gray300"
                >
                  Speech Enhancement
                </Text>
                <Img
                  className="h-9 w-[100%] mt-[74px]"
                  src="images/FileAudio.svg"
                  alt="television"
                />
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "40px",
                    }}
                  >
                    <Button
                      onClick={handleOpen}
                      className="cursor-pointer flex items-center justify-center max-w-[354px] w-[100%]"
                      rightIcon={
                        <Img
                          className="h-[18px] ml-2 my-px"
                          src="images/MagicWand (1).svg"
                          alt="television"
                        />
                      }
                      shape="round"
                      size="md"
                      variant="gradient"
                      color="light_green_A200_light_green_A700"
                    >
                      <div className="font-medium text-base text-center">
                        Start Transcription
                      </div>
                    </Button>
                    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <ModalPopup handleClose={handleClose}/>
      </Modal>
                  </div>
                  <Text
                    className="text-center text-gray-100 text-sm w-auto mt-5"
                    size="txtDMSansRegular14Gray100"
                  >
                    Or drag here
                  </Text>
                  <div className="flex flex-col items-center justify-center mt-[45px] w-auto">
                    <Text
                      className="text-center text-gray-300 text-sm w-auto"
                      size="txtDMSansRegular14"
                    >
                      Audio and Video file only
                    </Text>
                  </div>
                  <Text
                    className="capitalize mt-[46px] text-base text-center text-gray-300 underline"
                    size="txtDMSansRegular16"
                  >
                    <span className="text-gray-300 font-dmsans font-normal">
                      View Recently{" "}
                    </span>
                    <span className="text-gray-300 font-dmsans font-normal">
                      Transcription
                    </span>
                    <span className="text-gray-300 font-dmsans font-normal">
                      {" "}
                      files
                    </span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="Upload_file" style={div_2}>
              <div className="main_content_file">
                <Text
                  className="capitalize mt-1.5 text-center text-gray-300 text-lg"
                  size="txtDMSansRegular18Gray300"
                >
                  Transcription
                </Text>
                <Img
                  className="h-9 w-[100%] mt-[74px]"
                  src="images/img_television_white_a700.svg"
                  alt="television"
                />
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "40px",
                    }}
                  >
                    <Button
                    onClick={handleOpen}
                      className="cursor-pointer flex items-center justify-center max-w-[354px] w-[100%]"
                      rightIcon={
                        <Img
                          className="h-[18px] ml-2 my-px"
                          src="images/img_television_black_900.svg"
                          alt="television"
                        />
                      }
                      shape="round"
                      size="md"
                      variant="gradient"
                      color="light_green_A200_light_green_A700"
                    >
                      <div className="font-medium text-base text-center">
                        Start Transcription
                      </div>
                    </Button>
                    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <ModalPopup  handleClose={handleClose}/>
      </Modal>
                  </div>
                  <Text
                    className="text-center text-gray-100 text-sm w-auto mt-5"
                    size="txtDMSansRegular14Gray100"
                  >
                    Or drag here
                  </Text>
                  <div className="flex flex-col items-center justify-center mt-[45px] w-auto">
                    <Text
                      className="text-center text-gray-300 text-sm w-auto"
                      size="txtDMSansRegular14"
                    >
                      Audio and Video file only
                    </Text>
                  </div>
                  <Text
                    className="capitalize mt-[46px] text-base text-center text-gray-300 underline"
                    size="txtDMSansRegular16"
                  >
                    <span className="text-gray-300 font-dmsans font-normal">
                      View Recently{" "}
                    </span>
                    <span className="text-gray-300 font-dmsans font-normal">
                      Transcription
                    </span>
                    <span className="text-gray-300 font-dmsans font-normal">
                      {" "}
                      files
                    </span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="Upload_file" style={div_3}>
              <div className="main_content_file">
                <Text
                  className="capitalize mt-1.5 text-center text-gray-300 text-lg"
                  size="txtDMSansRegular18Gray300"
                >
                  Translation
                </Text>
                <Img
                  className="h-9 w-[100%] mt-[74px]"
                  src="images/Group 1000001473 (1).svg"
                  alt="television"
                />
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "40px",
                    }}
                  >
                    <Button
                    onClick={handleOpen}
                      className="cursor-pointer flex items-center justify-center max-w-[354px] w-[100%]"
                      rightIcon={
                        <Img
                          className="h-[18px] ml-2 my-px"
                          src="images/Group 1000001473 (1).svg"
                          alt="television"
                        />
                      }
                      shape="round"
                      size="md"
                      variant="gradient"
                      color="light_green_A200_light_green_A700"
                    >
                      <div className="font-medium text-base text-center">
                        Start Transcription
                      </div>
                    </Button>
                    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <ModalPopup  handleClose={handleClose}/>
      </Modal>
                  </div>
                  <Text
                    className="text-center text-gray-100 text-sm w-auto mt-5"
                    size="txtDMSansRegular14Gray100"
                  >
                    Or drag here
                  </Text>
                  <div className="flex flex-col items-center justify-center mt-[45px] w-auto">
                    <Text
                      className="text-center text-gray-300 text-sm w-auto"
                      size="txtDMSansRegular14"
                    >
                      Audio and Video file only
                    </Text>
                  </div>
                  <Text
                    className="capitalize mt-[46px] text-base text-center text-gray-300 underline"
                    size="txtDMSansRegular16"
                  >
                    <span className="text-gray-300 font-dmsans font-normal">
                      View Recently{" "}
                    </span>
                    <span className="text-gray-300 font-dmsans font-normal">
                      Transcription
                    </span>
                    <span className="text-gray-300 font-dmsans font-normal">
                      {" "}
                      files
                    </span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="Upload_file" style={div_4}>
              <div className="main_content_file">
                <Text
                  className="capitalize mt-1.5 text-center text-gray-300 text-lg"
                  size="txtDMSansRegular18Gray300"
                >
                  Folders
                </Text>
                <Img
                  className="h-9 w-[100%] mt-[74px]"
                  src="images/img_foldernotchopen.svg"
                  alt="television"
                />
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "40px",
                    }}
                  >
                    <Button
                    onClick={handleOpen}
                      className="cursor-pointer flex items-center justify-center max-w-[354px] w-[100%]"
                      rightIcon={
                        <Img
                          className="h-[18px] ml-2 my-px"
                          src="images/img_foldernotchopen.svg"
                          alt="television"
                        />
                      }
                      shape="round"
                      size="md"
                      variant="gradient"
                      color="light_green_A200_light_green_A700"
                    >
                      <div className="font-medium text-base text-center">
                        Start Transcription
                      </div>
                    </Button>
                    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <ModalPopup handleClose={handleClose}/>
      </Modal>
                  </div>
                  <Text
                    className="text-center text-gray-100 text-sm w-auto mt-5"
                    size="txtDMSansRegular14Gray100"
                  >
                    Or drag here
                  </Text>
                  <div className="flex flex-col items-center justify-center mt-[45px] w-auto">
                    <Text
                      className="text-center text-gray-300 text-sm w-auto"
                      size="txtDMSansRegular14"
                    >
                      Audio and Video file only
                    </Text>
                  </div>
                  <Text
                    className="capitalize mt-[46px] text-base text-center text-gray-300 underline"
                    size="txtDMSansRegular16"
                  >
                    <span className="text-gray-300 font-dmsans font-normal">
                      View Recently{" "}
                    </span>
                    <span className="text-gray-300 font-dmsans font-normal">
                      Transcription
                    </span>
                    <span className="text-gray-300 font-dmsans font-normal">
                      {" "}
                      files
                    </span>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div style={{marginTop:"231px"}}>
            <Text
              className="border border-gray-700_01 border-solid ml-[-1px] mt-auto sm:px-5 px-[35px] py-4 text-center text-gray-100 text-lg w-auto z-[1]"
              size="txtDMSansRegular18"
            >
              <span className="text-gray-100 font-gothica font-light">
                Copyright © 2023 Decrackle{" "}
              </span>
              <span className="text-gray-100 font-gothica font-light">
                Terms of service Privacy policy Cookie policy
              </span>
              <span className="text-gray-100 font-gothica font-light"> </span>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomescreendashboardOnePage;
