import mainLogoBlack from '@assets/images/bi_black.png';
import mainLogoWhite from '@assets/images/bi_white.png';

const darkBgColor = '#2f3545';
const white = '#fff';
const black = '#000';
const blueBlack = '#0c0c59';
const darkGray = '#3d3d3d';
const warmGray = '#9e9e9e';
const lightGray = '#99a3ba';

const theme = {
  viewModeTheme: {
    light: {
      wrapPageBgColor: white,
      bgColor: white,
      color: '#000000',
      // assets
      mainLogo: mainLogoBlack,
      // sideBar
      sideBarBgColor: blueBlack,
      // footer
      footerBgColor: '#f6f6f6',
      footerColor: darkGray,
      // profile
      profileNameColor: darkGray,
      // TextBox
      firstTextColor: black,
      secondTextColor: darkGray,
      // SelectCard
      wrapMiddleText: black,
      wrapBottomText: darkGray,
      wrapContainerBorder: 'border: none;',
      // peer-study
      studyTextColor: black,
      buttonWrapperColor: black,
      partTextColor: blueBlack,
      profileInfoContainerWrapper: darkGray,
    },
    dark: {
      wrapPageBgColor: '#171c28',
      bgColor: darkBgColor,
      color: '#6c7486',
      // assets
      mainLogo: mainLogoWhite,
      // sideBar
      sideBarBgColor: darkBgColor,
      // footer
      footerBgColor: darkBgColor,
      footerColor: '#6c7486',
      // profile
      profileNameColor: lightGray,
      // TextBox
      firstTextColor: white,
      secondTextColor: '#898d92',
      // SelectCard
      wrapMiddleText: lightGray,
      wrapBottomText: lightGray,
      wrapContainerBorder: `border: solid 0.2vh ${warmGray};`,
      // peer-study
      studyTextColor: white,
      buttonWrapperColor: lightGray,
      partTextColor: lightGray,
      profileInfoContainerWrapper: lightGray,
    },
  },
};

export default theme;
