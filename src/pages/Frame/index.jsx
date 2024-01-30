import React from "react";

import { Button, Img, Line, Text } from "components";
import { Link } from "react-router-dom";

const FramePage = () => {
  return (
    <>
      <div className="bg-gradient1  flex flex-col font-opensans sm:gap-10 md:gap-10 gap-[98px] items-center justify-start mx-auto w-full">
        <div className="sm:h-[2970px] h-[3140px] md:h-[4609px] md:px-5 relative w-full">
          <div className="sm:h-[2970px] h-[3140px] md:h-[4609px] m-auto w-full">
            <div className="md:h-[2911px] h-[3140px] m-auto w-full">
              <div className="absolute flex flex-col inset-[0] justify-center m-auto w-full">
                <div className="bg-amber-400 flex flex-row items-center justify-start mx-auto md:px-10 sm:px-5 px-[70px] shadow-bs w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <div className="bg-gray-700 flex flex-col h-[50px] items-center justify-start md:mt-0 my-[15px] pb-0.5 rounded-[50%] w-[50px]">
                      <Img
                        className="h-12 md:h-auto object-cover rounded-tl-[25px] rounded-tr-[25px] w-full"
                        src="images/img_869rectangle.png"
                        alt="869rectangle"
                      />
                    </div>
                  
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[1218px] sm:px-5 px-8 py-[23px] w-auto">
                   
                      <div
                        href="javascript:"
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                      >
                         
                        <Text size="txtOpenSansRomanRegular24">LOG IN</Text>
                       
                      </div>
                    </div>
                  
                    <Link to="/signup">
                    <Button
                      className="cursor-pointer leading-[normal] min-w-[158px] ml-1 md:ml-[0] md:mt-0 my-2.5 text-2xl md:text-[22px] text-center sm:text-xl"
                      shape="square"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    >
                      SIGN UP
                    </Button>
                    </Link>
                  </div>
                </div>
                <div className="bg-gray-700 flex flex-col font-oswald items-center justify-end mb-auto ml-[150px] mt-[-80px] p-0.5 w-[26%] z-[0]">
                  <Text
                    className="mt-[1245px] md:text-5xl text-8xl text-amber-400"
                    size="txtOswaldExtraLight96"
                  >
                    FEATURES
                  </Text>
                  <div className="md:h-[1037px] h-[257px] mt-[894px] relative w-[71%]">
                    <Text
                      className="absolute inset-x-[0] mx-auto md:text-5xl text-8xl text-white-A700 top-[0] w-max"
                      size="txtOswaldBold96"
                    >
                      DEATOX
                    </Text>
                    <Text
                      className="absolute bottom-[0] inset-x-[0] mx-auto md:text-5xl text-8xl text-amber-400 w-max"
                      size="txtOswaldExtraLight96"
                    >
                      PACKAGE
                    </Text>
                  </div>
                  <div className="bg-amber-400 flex flex-col justify-start mb-1 mt-[25px] pb-[70px] md:pr-10 sm:pr-5 pr-[70px] w-[96%] md:w-full">
                    <div className="md:h-20 h-28 relative w-[46%]">
                      <Text
                        className="absolute bottom-[0] right-[0] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtOswaldBold24"
                      >
                        MONTHLY
                      </Text>
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-[86px] items-center justify-end left-[0] p-[21px] sm:px-5 top-[0] w-[86px]"
                        style={{
                          backgroundImage: "url('images/img_group17.svg')",
                        }}
                      >
                        <div className="bg-amber-400 md:h-[38px] h-[43px] relative rounded-[21px] w-[43px]">
                          <div className="absolute bg-gray-700 h-[38px] inset-[0] justify-center m-auto rounded-[50%] w-[38px]"></div>
                          <Img
                            className="absolute h-9 inset-x-[0] mx-auto object-cover top-[0] w-[91%]"
                            src="images/img_869rectangle.png"
                            alt="1067rectangle"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col font-opensans items-center justify-start md:ml-[0] ml-[70px] my-0.5 w-[81%] md:w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-4xl sm:text-[32px] md:text-[34px] text-gray-700"
                          size="txtOpenSansRomanRegular36"
                        >
                          $9.99
                        </Text>
                        <Line className="bg-gray-700 h-[3px] w-full" />
                      </div>
                      <Text
                        className="leading-[175.68%] mt-[22px] text-base text-gray-700"
                        size="txtOpenSansRomanRegular16"
                      >
                        <>
                          Customized workout plans
                          <br />
                          Access to healthy recipes
                          <br />
                          Advanced health tracking tools
                          <br />
                          Personalized recommendations based on your goals
                          <br />
                          Unlimited customer support{" "}
                        </>
                      </Text>
                      <Button
                        className="cursor-pointer leading-[normal] min-w-[282px] mt-[26px] text-base text-center"
                        shape="square"
                        color="gray_700"
                        size="xs"
                        variant="fill"
                      >
                        GET NOW
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute border-[12px] border-solid border-yellow-400 h-[478px] left-[8%] rounded-[50%] top-[11%] w-[478px]"></div>
              <div className="absolute border-[12px] border-solid border-yellow-400_cc h-[578px] left-[5%] rounded-[50%] top-[9%] w-[578px]"></div>
              <div className="absolute border-[12px] border-solid border-yellow-400_99 h-[682px] left-[2%] rounded-[50%] top-[8%] w-[682px]"></div>
              <Img
                className="absolute h-[774px] left-[0] object-cover top-[6%] w-[44%]"
                src="images/img_851ellipse.png"
                alt="851ellipse"
              />
              <div className="absolute h-[862px] left-[0] top-[5%] w-[47%] md:w-full">
                <div className="h-[862px] m-auto w-full">
                  <Img
                    className="h-[862px] m-auto object-cover w-full"
                    src="images/img_852ellipse.png"
                    alt="852ellipse"
                  />
                  <Img
                    className="absolute h-[420px] left-[19%] object-cover top-[23%] w-[56%]"
                    src="images/img_869rectangle.png"
                    alt="853rectangle"
                  />
                </div>
                <div className="absolute flex flex-row h-max inset-y-[0] items-start justify-between my-auto right-[1%] w-[43%]">
                  <div className="flex flex-col md:gap-10 gap-[385px] justify-start">
                    <Img
                      className="h-[165px] md:h-auto md:ml-[0] ml-[81px] rounded-[50%] w-[165px]"
                      src="images/img_858ellipse.png"
                      alt="858ellipse"
                    />
                    <Img
                      className="h-[209px] md:h-auto mr-[37px] rounded-[50%] w-[209px]"
                      src="images/img_855ellipse.png"
                      alt="855ellipse"
                    />
                  </div>
                </div>
                <Img
                  className="absolute h-[166px] left-[0] object-cover rounded-[83px] top-[34%] w-[17%]"
                  src="images/img_857ellipse.png"
                  alt="857ellipse"
                />
              </div>
            </div>
            <div className="absolute flex flex-col font-oswald h-max inset-[0] items-start justify-center m-auto w-[95%]">
              <div className="flex flex-col gap-10 justify-start md:ml-[0] ml-[134px] w-[86%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mr-[59px] w-[96%] md:w-full">
                  <Img
                    className="h-[215px] md:h-auto mb-[185px] rounded-[50%] w-[215px]"
                    src="images/img_859ellipse.png"
                    alt="859ellipse"
                  />
                  <div className="h-[190px] md:mt-0 mt-[210px] relative w-[59%] md:w-full">
                    <Text
                      className="m-auto md:text-5xl text-[64px] text-gray-700 tracking-[9.60px]"
                      size="txtOswaldBold64"
                    >
                      <>
                        CHANGE YOUR HABITS
                        <br />
                        CHANGE YOUR LIFE
                      </>
                    </Text>
                    <Text
                      className="absolute bottom-[3%] right-[2%] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                      size="txtOswaldRegular36"
                    >
                      WITH AI
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col font-opensans gap-10 items-start justify-start md:ml-[0] ml-[556px] w-[61%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-700 sm:text-xl w-full"
                    size="txtOpenSansRomanRegular24Gray700"
                  >
                    Our AI-powered algorithm takes into consideration your
                    goals, dietary restrictions, food preferences, and fitness
                    level to create a comprehensive plan that optimizes your
                    health and fitness journey.
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end md:ml-[0] ml-[43px] w-[95%] md:w-full">
                  <Img
                      className="h-[33px] md:ml-[0] ml-[25px] w-[33px]"
                      src="images/img_checkmark.svg"
                      alt="checkmark_One"
                    />
                    <Text
                      className="text-2xl md:text-[22px] text-gray-700 sm:text-xl"
                      size="txtOpenSansRomanRegular24Gray700"
                    >
                      EASY ONBOARDING
                    </Text>
                    <Img
                      className="h-[33px] md:ml-[0] ml-[25px] w-[33px]"
                      src="images/img_checkmark.svg"
                      alt="checkmark_One"
                    />
                    <Text
                      className="ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-gray-700 sm:text-xl"
                      size="txtOpenSansRomanRegular24Gray700"
                    >
                      EASY ONBOARDING
                    </Text>
                    <Img
                      className="h-[33px] md:ml-[0] ml-[25px] w-[33px]"
                      src="images/img_checkmark.svg"
                      alt="checkmark_Two"
                    />
                    <Text
                      className="ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-gray-700 sm:text-xl"
                      size="txtOpenSansRomanRegular24Gray700"
                    >
                      EASY ONBOARDING
                    </Text>
                  </div>
                  <Link to='/trynow'>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[186px] md:ml-[0] ml-[3px] text-2xl md:text-[22px] text-center sm:text-xl"
                    shape="square"
                    color="gray_700"
                    size="xs"
                    variant="fill"
                  >
                    TRY NOW
                  </Button>
                  </Link>
                </div>
              </div>
              <Img
                className="h-[202px] md:h-auto mt-[34px] rounded-[50%] w-[202px]"
                src="images/img_856ellipse.png"
                alt="856ellipse"
              />
              <div className="bg-white-A700 flex flex-col items-center justify-end md:ml-[0] ml-[133px] mt-[344px] p-[62px] md:px-10 sm:px-5 shadow-bs1 w-[82%] md:w-full">
                <div className="flex md:flex-col flex-row gap-[19px] items-center justify-start mt-[7px] w-[90%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-[1%] md:w-full">
                    <Line className="bg-amber-400 h-[182px] w-1.5" />
                    <Line className="bg-amber-400 h-[114px] mt-[58px] w-1.5" />
                    <Line className="bg-amber-400 h-[110px] mt-[67px] w-1.5" />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-700"
                          size="txtOswaldBold32"
                        >
                          <>
                            PERSONALISED <br />
                            RECOMMENDATIONS
                          </>
                        </Text>
                        <Text
                          className="mt-3 text-base text-gray-700 w-full"
                          size="txtOpenSansRomanLight16"
                        >
                          DEATOX uses AI to analyze user data such as age,
                          gender, weight, height, dietary preferences, and
                          fitness goals to generate personalized meal and
                          fitness plans.
                        </Text>
                        <Text
                          className="mt-[68px] md:text-3xl sm:text-[28px] text-[32px] text-gray-700"
                          size="txtOswaldBold32"
                        >
                          MEAL PLANNING
                        </Text>
                        <Text
                          className="mt-2.5 text-base text-gray-700 w-full"
                          size="txtOpenSansRomanLight16"
                        >
                          DEATOX generates weekly meal plans based on your
                          dietary preferences, calorie requirements, and
                          nutrient needs.
                        </Text>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-[45px] items-center justify-start md:ml-[0] ml-[122px] w-[1%] md:w-full">
                        <Line className="bg-amber-400 h-[133px] w-1.5" />
                        <Line className="bg-amber-400 h-[132px] w-1.5" />
                      </div>
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[17px]">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-700"
                          size="txtOswaldBold32"
                        >
                          PROGRESS TRACKING
                        </Text>
                        <Text
                          className="mt-2.5 text-base text-gray-700 w-full"
                          size="txtOpenSansRomanLight16"
                        >
                          DEATOX allows you to track their progress towards
                          their fitness goals by tracking metrics such as
                          weight, body fat percentage, and workout intensity.
                        </Text>
                        <Text
                          className="mt-[53px] md:text-3xl sm:text-[28px] text-[32px] text-gray-700"
                          size="txtOswaldBold32"
                        >
                          ML BASED RECOMMENDATIONS
                        </Text>
                        <Text
                          className="mt-2.5 text-base text-gray-700 w-full"
                          size="txtOpenSansRomanLight16"
                        >
                          DEATOX uses machine learning algorithms to learn from
                          your data and improve the accuracy and relevance of
                          its meal and fitness recommendations over time.
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[572px] mt-[15px] md:text-3xl sm:text-[28px] text-[32px] text-amber-400"
                      size="txtOswaldBold32Amber400"
                    >
                      Get your fitness plan for free!
                    </Text>
                    <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-2.5 w-full">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-gray-700"
                        size="txtOswaldBold32"
                      >
                        FITNESS PLANNING
                      </Text>
                      <Text
                        className="text-gray-700 text-xl"
                        size="txtOpenSansRomanRegular20"
                      >
                        Join the Deatox community today and start your journey
                        towards a healthier and happier you.{" "}
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row font-opensans sm:gap-10 items-start justify-between mt-2 w-[65%] md:w-full">
                      <Text
                        className="mb-[13px] text-base text-gray-700"
                        size="txtOpenSansRomanLight16"
                      >
                        DEATOX generates weekly fitness plans based on your
                        fitness goals, workout preferences, and fitness level.
                      </Text>
                      <Button
                        className="cursor-pointer leading-[normal] min-w-[102px] sm:mt-0 mt-[15px] text-base text-center"
                        shape="square"
                        color="amber_400"
                        size="xs"
                        variant="fill"
                      >
                        TRY NOW
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className="h-[834px] sm:h-auto md:ml-[0] ml-[751px] mt-[181px] object-cover w-[54%] md:w-full"
                src="images/img_1050rectangle.png"
                alt="1050rectangle"
              />
            </div>
            <div className="absolute flex md:flex-col flex-row font-opensans md:gap-10 gap-[65px] items-center justify-center left-[9%] sm:px-5 px-[26px] py-[23px] top-[0] w-auto">
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                size="txtOpenSansRomanRegular24"
              >
                HOME
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                size="txtOpenSansRomanRegular24"
              >
                ABOUT
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                size="txtOpenSansRomanRegular24"
              >
                MEAL PLANS
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                size="txtOpenSansRomanRegular24"
              >
                WORKOUT ROUTINE
              </Text>
            </div>
          </div>
          <div className="absolute bottom-[0] flex flex-col items-start justify-start right-[9%] w-[54%]">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-amber-400"
              size="txtOswaldBold32Amber400"
            >
              Get your fitness plan for free!
            </Text>
            <Text
              className="mt-2.5 text-gray-700 text-xl w-[52%] sm:w-full"
              size="txtOpenSansRomanRegular20"
            >
              Join the Deatox community today and start your journey towards a
              healthier and happier you.{" "}
            </Text>
            <Button
              className="cursor-pointer font-opensans leading-[normal] min-w-[102px] mt-[23px] text-base text-center"
              shape="square"
              color="amber_400"
              size="xs"
              variant="fill"
            >
              TRY NOW
            </Button>
            <div className="flex md:flex-col flex-row font-oswald md:gap-10 items-center justify-between mt-[53px] w-full">
              <div className="bg-amber-400 flex md:flex-1 flex-col items-start justify-start pb-[70px] md:pr-10 sm:pr-5 pr-[70px] w-[46%] md:w-full">
                <div className="flex flex-col justify-start w-full">
                  <div className="md:h-20 h-28 relative w-[41%]">
                    <Text
                      className="absolute bottom-[0] right-[0] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtOswaldBold24"
                    >
                      YEARLY
                    </Text>
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-[86px] items-center justify-end left-[0] p-[21px] sm:px-5 top-[0] w-[86px]"
                      style={{
                        backgroundImage: "url('images/img_group17.svg')",
                      }}
                    >
                      <div className="bg-amber-400 md:h-[38px] h-[43px] relative rounded-[21px] w-[43px]">
                        <div className="absolute bg-gray-700 h-[38px] inset-[0] justify-center m-auto rounded-[50%] w-[38px]"></div>
                        <Img
                          className="absolute h-9 inset-x-[0] mx-auto object-cover top-[0] w-[91%]"
                          src="images/img_869rectangle.png"
                          alt="1093rectangle"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-opensans items-start justify-start md:ml-[0] ml-[70px] mt-[3px] w-[81%] md:w-full">
                    <div className="flex flex-row gap-4 items-end justify-start ml-0.5 md:ml-[0] w-[73%] md:w-full">
                      <div className="h-[50px] relative w-[56%]">
                        <Text
                          className="m-auto text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                          size="txtOpenSansRomanRegular36WhiteA700"
                        >
                          $99.99
                        </Text>
                        <Line className="absolute bg-gray-700 bottom-[42%] h-0.5 inset-x-[0] mx-auto w-full" />
                      </div>
                      <Text
                        className="mb-1 mt-3 text-2xl md:text-[22px] text-gray-700 sm:text-xl"
                        size="txtOpenSansRomanRegular24Gray700"
                      >
                        $99.99
                      </Text>
                    </div>
                    <Line className="bg-gray-700 h-[3px] ml-0.5 md:ml-[0] mt-2 w-full" />
                    <Text
                      className="leading-[175.68%] ml-0.5 md:ml-[0] mt-[23px] text-base text-gray-700"
                      size="txtOpenSansRomanRegular16"
                    >
                      <>
                        Customized workout plans
                        <br />
                        Access to healthy recipes
                        <br />
                        Advanced health tracking tools
                        <br />
                        Personalized recommendations based on your goals
                        <br />
                        Unlimited customer support{" "}
                      </>
                    </Text>
                    <Button
                      className="cursor-pointer leading-[normal] min-w-[282px] mt-[25px] text-base text-center"
                      shape="square"
                      color="gray_700"
                      size="xs"
                      variant="fill"
                    >
                      GET NOW
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex md:flex-1 flex-col md:gap-10 gap-[62px] justify-start pb-[70px] md:pr-10 sm:pr-5 pr-[70px] w-[46%] md:w-full">
                <div className="md:h-20 h-28 relative w-[55%]">
                  <Text
                    className="absolute bottom-[0] right-[0] text-2xl md:text-[22px] text-gray-700 sm:text-xl"
                    size="txtOswaldBold24Gray700"
                  >
                    ENTERPRISE
                  </Text>
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-[86px] items-center justify-end left-[0] p-[21px] sm:px-5 top-[0] w-[86px]"
                    style={{ backgroundImage: "url('images/img_group20.svg')" }}
                  >
                    <div className="bg-amber-400 md:h-[38px] h-[43px] relative rounded-[21px] w-[43px]">
                      <div className="absolute bg-gray-700 h-[38px] inset-[0] justify-center m-auto rounded-[50%] w-[38px]"></div>
                      <Img
                        className="absolute h-9 inset-x-[0] mx-auto object-cover top-[0] w-[91%]"
                        src="images/img_869rectangle.png"
                        alt="1106rectangle"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-opensans items-center justify-start md:ml-[0] ml-[70px] w-[81%] md:w-full">
                  <Line className="bg-amber-400 h-[3px] w-full" />
                  <Text
                    className="mt-[23px] text-base text-gray-700"
                    size="txtOpenSansRomanRegular16"
                  >
                    <>
                      Looking to offer personalized fitness and meal plans to
                      your employees? <br />
                      Our Enterprise Plan brings you the best features.
                    </>
                  </Text>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[282px] mt-36 text-base text-center"
                    shape="square"
                    color="amber_400"
                    size="xs"
                    variant="fill"
                  >
                    CONTACT US
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-gray-700 flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center mb-40 ml-[150px] mr-[116px] mt-[33px] w-[85%]">
            <div className="flex flex-col gap-[15px] items-start justify-start w-[250px]">
              <Text
                className="text-2xl md:text-[22px] text-amber-300 sm:text-xl w-auto"
                size="txtOpenSansRomanBold24"
              >
                COMPANY
              </Text>
              <ul className="flex flex-col items-start justify-start md:w-full common-column-list">
                <li>
                  <a
                    href="javascript:"
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  >
                    <Text size="txtOpenSansRomanRegular24">About us</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="mt-[15px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  >
                    <Text size="txtOpenSansRomanRegular24">Team</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="mt-[17px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  >
                    <Text size="txtOpenSansRomanRegular24">Blogs</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="mt-3 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  >
                    <Text size="txtOpenSansRomanRegular24">Meal Plans</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="mt-[15px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  >
                    <Text size="txtOpenSansRomanRegular24">Fitness Plans</Text>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[15px] items-start justify-start ml-10 md:ml-[0] w-[250px]">
              <Text
                className="text-2xl md:text-[22px] text-amber-300 sm:text-xl w-auto"
                size="txtOpenSansRomanBold24"
              >
                DEATOX +
              </Text>
              <ul className="flex flex-col items-start justify-start md:w-full common-column-list">
                <li>
                  <a
                    href="javascript:"
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  >
                    <Text size="txtOpenSansRomanRegular24">
                      Partner with us
                    </Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="mt-[17px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  >
                    <Text size="txtOpenSansRomanRegular24">
                      Enterprise package
                    </Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="mt-[15px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  >
                    <Text size="txtOpenSansRomanRegular24">Build gym</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="mt-[15px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  >
                    <Text size="txtOpenSansRomanRegular24">For enterprise</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="mt-[11px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  >
                    <Text size="txtOpenSansRomanRegular24">
                      t&c for business
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[15px] items-start justify-start ml-10 md:ml-[0] w-[250px]">
              <a
                href="javascript:"
                className="text-2xl md:text-[22px] text-amber-300 sm:text-xl w-auto"
              >
                <Text size="txtOpenSansRomanBold24">CONTACT US</Text>
              </a>
              <ul className="flex flex-col gap-[15px] items-start justify-start md:w-full common-column-list">
                <li>
                  <a
                    href="javascript:"
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  >
                    <Text size="txtOpenSansRomanRegular24">
                      Help and support
                    </Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  >
                    <Text size="txtOpenSansRomanRegular24">Enquire</Text>
                  </a>
                </li>
              </ul>
            </div>
            <Img
              className="h-[444px] sm:h-auto md:ml-[0] ml-[162px] object-cover w-[33%] md:w-full"
              src="images/img_869rectangle.png"
              alt="853rectangle_One"
            />
          </div>
        </footer>
      </div>
    </>
  );
};

export default FramePage;
