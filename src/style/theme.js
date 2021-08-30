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
const transparent = 'transparent';
const none = 'none';
const inherit = 'inherit';

const theme = {
  viewModeTheme: {
    light: {
      name: 'lightMode',
      textBtnPropsTextColor: black,
      // assets
      mainLogo: mainLogoBlack,
      iconImage: iconImageLight,
      // common
      common: {
        wrapPageBgColor: white,
        bgColor: white,
        color: '#000000',
        // SideBar
        sideBarBgColor: blueBlack,
        // ProfileMenuContainer
        profileNameColor: darkGray,
        // TimeButton
        boxBorder: 'none;',
        boxColor: black,
      },
      // '/' home
      landingPage: {
        // TextBoxA
        textBoxA: {
          wrapPaddingColor: black,
          mainPageBoldColor: black,
        },
        // TextBoxB
        textBoxB: {
          wrapTextHeaderColor: purple1,
          WrapTextContentColor: black,
          wrapTextSummaryColor: darkGray,
        },
        // TextBoxC
        textBoxC: {
          wrapContentBorder: '#f6f6f6',
          wrapTextHeaderColor: 'inherit',
          wrapTextSummaryColor: 'inherit',
          wrapPaddingColor: 'inherit',
        },
        // LandingHeader
        wrapperBgColor: darkBgColor,
        wrapTextButtonColor: '#e4ecfa',
        // LandingFooter
        wrapLeftInnerColor: black,
        footerColor: darkGray,
        footerBgColor: '#f6f6f6',
      },
      // /login
      login: {
        // LoginPage
        wrapSubTitle: darkGray,
      },
      // /self
      self: {
        // /questionlist
        questionlist: {
          // QuestionListPage
          questionListPageTitle: black,
          questionListPageSecondSelect: darkGray,
          // IsQuestionList
          addQuestionListBgColor: '#f6f6f6',
          addQuestionListColor: blueBlack,
          // QuestionCardView
          border: '#f6f6f6',
          contentColor: black,
          subTextColor: darkGray,
          titleTextColor: black,
          subTitleColor: black,
        },
        // /question:id
        questionId: {
          // QuestionPage
          titleColor: black,
        },
        // TextBox
        firstTextColor: black,
        secondTextColor: darkGray,
        // SelectCard
        wrapMiddleText: black,
        wrapBottomText: darkGray,
        wrapContainerBorder: 'border: none;',
      },
      // peer-study
      peerStudy: {
        // ProfileInfoContainer
        profileInfoContainerWrapper: darkGray,
        // PeerStudyMainPage.style
        studyTextColor: black,
        buttonWrapperColor: black,
        partTextColor: blueBlack,
        searchWrapper: white,
        searchWrapperBorder: none,
        addStudyBgColor: '#f6f6f6',
        addStudyBdColor: 'solid 0.1vh #f6f6f6',
        addTextColor: '#0c0c59',
        // StudyCardView
        boxBgColor: white,
        boxColor: darkGray,
        titleColor: black,
        buttonTextColor: purple1,
      },
      // /replay
      replay: {
        // MyVideoPage
        historyMenuBoxColor: black,
        // ReplayCardView
        titleAreaColor: black,
      },
    },
    dark: {
      name: 'darkMode', // for storybook addon
      textBtnPropsTextColor: '#e4ecfa',
      // assets
      mainLogo: mainLogoWhite,
      iconImage: iconImageDark,
      // common
      common: {
        wrapPageBgColor: '#171c28',
        bgColor: darkBgColor,
        color: '#6c7486',
        // SideBar
        sideBarBgColor: darkBgColor,
        // ProfileMenuContainer
        profileNameColor: lightGray,
        // TimeButton
        boxBorder: 'solid 0.3vh #9e9e9e;',
        boxColor: white,
      },
      // '/' home
      landingPage: {
        // TextBoxA
        textBoxA: {
          wrapPaddingColor: lightGray,
          mainPageBoldColor: '#e4ecfa',
        },
        // TextBoxB
        textBoxB: {
          wrapTextHeaderColor: purple1,
          WrapTextContentColor: '#e4ecfa',
          wrapTextSummaryColor: '#e4ecfa',
        },
        // TextBoxC
        textBoxC: {
          wrapContentBorder: warmGray,
          wrapTextHeaderColor: lightGray,
          wrapTextSummaryColor: lightGray,
          wrapPaddingColor: lightGray,
        },
        // LandingHeader
        wrapperBgColor: darkBgColor,
        wrapTextButtonColor: '#e4ecfa',
        // LandingFooter
        wrapLeftInnerColor: '#e4ecfa',
        footerBgColor: darkBgColor,
        footerColor: '#6c7486',
      },
      // /login
      login: {
        // LoginPage
        wrapSubTitle: lightGray,
      },
      // /self
      self: {
        // /questionlist
        questionlist: {
          // QuestionListPage
          questionListPageTitle: white,
          questionListPageSecondSelect: '#898d92',
          // IsQuestionList
          addQuestionListBgColor: darkBgColor,
          addQuestionListColor: '#d3d3d3',
          // QuestionCardView
          border: warmGray,
          contentColor: white,
          subTextColor: lightGray,
          titleTextColor: lightGray,
          subTitleColor: lightGray,
        },
        // /question:id
        questionId: {
          // QuestionPage
          titleColor: white,
        },
        // TextBox
        firstTextColor: white,
        secondTextColor: '#898d92',
        // SelectCard
        wrapMiddleText: lightGray,
        wrapBottomText: lightGray,
        wrapContainerBorder: `border: solid 0.2vh ${warmGray};`,
      },
      // /peer-study
      peerStudy: {
        // ProfileInfoContainer
        profileInfoContainerWrapper: lightGray,
        // PeerStudyMainPage.style
        studyTextColor: white,
        buttonWrapperColor: lightGray,
        partTextColor: lightGray,
        searchWrapper: transparent,
        searchWrapperBorder: purple1,
        addStudyBgColor: '#2e3444',
        addStudyBdColor: 'none',
        addTextColor: '#d3d3d3',
        // StudyCardView
        boxBgColor: transparent,
        boxColor: lightGray,
        titleColor: inherit,
        buttonTextColor: purple1,
      },
      // /replay
      replay: {
        // MyVideoPage
        historyMenuBoxColor: white,
        // ReplayCardView
        titleAreaColor: white,
      },
    },
  },
};

export default theme;
