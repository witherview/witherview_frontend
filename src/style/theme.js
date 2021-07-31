import mainLogoBlack from '@assets/images/bi_black.png';
import mainLogoWhite from '@assets/images/bi_white.png';
import iconImageLight from '@assets/images/icon-light.png';
import iconImageDark from '@assets/images/icon-dark.png';

const darkBgColor = '#2f3545';
const white = '#fff';
const black = '#000';
const blueBlack = '#0c0c59';
const darkGray = '#3d3d3d';
const warmGray = '#9e9e9e';
const lightGray = '#99a3ba';
const purple1 = '#6e6eff';

const theme = {
  viewModeTheme: {
    light: {
      wrapContentBgColor: white,
      mainPageBoldColor: black,
      wrapPaddingColor: black,
      bgColor: white,
      color: '#000000',
      landingTopBtn: 'blue',
      landingHeaderBtn: 'outline',
      /* URL: / */
      // landingHeader
      landingHeaderWrapTextButtonColor: 'inherit',
      textBtnPropsTextColor: black,
      // landingMiddleOne
      textBoxBHeaderColor: purple1,
      textBoxBContentColor: 'inherit',
      textBoxCWrapContentBorder: '#f6f6f6',
      textBoxCWrapTextHeader: 'inherit',
      textBoxCWrapTextSummary: '#99a3ba',
      // landingFooter
      landingFooterWrapLeftInnerColor: black,
      // timeButton
      boxBorder: 'none',
      boxColor: black,
      // questionListPage
      questionListPageTitle: black,
      questionListPageSecondSelect: darkGray,
      // isQuestionList
      addQuestionListBgColor: '#f6f6f6',
      addQuestionListColor: blueBlack,
      // questionCardView
      questionCardView: {
        border: '#f6f6f6',
        contentColor: black,
        subTextColor: darkGray,
        titleTextColor: black,
        subTitleColor: black,
      },
      // questionPage
      questionPage: {
        titleColor: black,
      },
      // loginPage
      loginPage: {
        wrapSubTitle: darkGray,
      },
      // assets
      mainLogo: mainLogoBlack,
      iconImage: iconImageLight,
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
      wrapContentBgColor: '#171c28',
      mainPageBoldColor: '#e4ecfa',
      wrapPaddingColor: lightGray,
      bgColor: darkBgColor,
      color: '#6c7486',
      landingTopBtn: 'outline',
      landingHeaderBtn: 'grayForDarkMode',
      // landingHeader
      landingHeaderWrapTextButtonColor: '#99a3ba',
      textBtnPropsTextColor: '#e4ecfa',
      // landingMiddleOne
      textBoxBHeaderColor: purple1,
      textBoxBContentColor: '#e4ecfa',
      textBoxCWrapContentBorder: '#9e9e9e',
      textBoxCWrapTextHeader: '#99a3ba',
      textBoxCWrapTextSummary: '#99a3ba',
      // landingFooter
      landingFooterWrapLeftInnerColor: '#e4ecfa',
      // timeButton
      boxBorder: 'solid 0.3vh #9e9e9e;',
      boxColor: white,
      // questionListPage
      questionListPageTitle: white,
      questionListPageSecondSelect: '#898d92',
      // isQuestionList
      addQuestionListBgColor: darkBgColor,
      addQuestionListColor: '#d3d3d3',
      // questionCardView
      questionCardView: {
        border: warmGray,
        contentColor: white,
        subTextColor: lightGray,
        titleTextColor: lightGray,
        subTitleColor: lightGray,
      },
      // questionPage
      questionPage: {
        titleColor: white,
      },
      // loginPage
      loginPage: {
        wrapSubTitle: lightGray,
      },
      // assets
      mainLogo: mainLogoWhite,
      iconImage: iconImageDark,
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
