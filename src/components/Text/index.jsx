import React from "react";

const sizeClasses = {
  txtOpenSansRomanRegular20Gray500: "font-normal font-opensans",
  txtOswaldBold32: "font-bold font-oswald",
  txtOswaldBold96: "font-bold font-oswald",
  txtOpenSansRomanRegular36WhiteA700: "font-normal font-opensans",
  txtInterRegular20: "font-inter font-normal",
  txtGothicA1SemiBold28: "font-gothica font-semibold",
  txtOpenSansRomanBold36Bluegray900: "font-bold font-opensans",
  txtOpenSansRomanRegular16Gray500: "font-normal font-opensans",
  txtGothicA1Regular20: "font-gothica font-normal",
  txtOswaldRegular36: "font-normal font-oswald",
  txtOpenSansRomanRegular24: "font-normal font-opensans",
  txtOpenSansRomanBold36: "font-bold font-opensans",
  txtOpenSansRomanBold14: "font-bold font-opensans",
  txtOpenSansRomanRegular16Bluegray900: "font-normal font-opensans",
  txtOpenSansRomanLight16: "font-light font-opensans",
  txtOpenSansRomanRegular24Gray700: "font-normal font-opensans",
  txtOpenSansRomanRegular20: "font-normal font-opensans",
  txtDMSansRegular14Gray100: "font-dmsans font-normal",
  txtOpenSansRomanBold24Bluegray900: "font-bold font-opensans",
  txtOswaldBold32Amber400: "font-bold font-oswald",
  txtDMSansRegular18Gray300: "font-dmsans font-normal",
  txtOswaldBold24: "font-bold font-oswald",
  txtOswaldBold24Gray700: "font-bold font-oswald",
  txtOswaldBold64: "font-bold font-oswald",
  txtDMSansRegular8: "font-dmsans font-normal",
  txtProximaNovaRegular6686: "font-normal font-proximanova",
  txtDMSansMedium20: "font-dmsans font-medium",
  txtOpenSansRomanRegular16: "font-normal font-opensans",
  txtDMSansMedium20LightgreenA200: "font-dmsans font-medium",
  txtGothicA1Medium16: "font-gothica font-medium",
  txtPoppinsBold1566: "font-bold font-poppins",
  txtDMSansMedium20WhiteA700: "font-dmsans font-medium",
  txtOpenSansRomanRegular36: "font-normal font-opensans",
  txtOswaldExtraLight96: "font-oswald font-thin",
  txtPoppinsBold1528: "font-bold font-poppins",
  txtDMSansRegular14: "font-dmsans font-normal",
  txtPoppinsBold2155: "font-bold font-poppins",
  txtOpenSansRomanBold24: "font-bold font-opensans",
  txtDMSansRegular16: "font-dmsans font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtDMSansRegular18: "font-dmsans font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
