const darkBgColor = '#2f3545';
const white = '#fff';
const black = '#000';
const darkGray = '#3d3d3d';
const warmGray = '#9e9e9e';

const theme = {
  viewModeTheme: {
    light: {
      wrapPageBgColor: white,
      bgColor: white,
      color: '#000000',
      // sideBar
      sideBarBgColor: '#0c0c59',
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
    },
    dark: {
      wrapPageBgColor: '#171c28',
      bgColor: darkBgColor,
      color: '#6c7486',
      // sideBar
      sideBarBgColor: darkBgColor,
      // footer
      footerBgColor: darkBgColor,
      footerColor: '#6c7486',
      // profile
      profileNameColor: '#99a3ba',
      // TextBox
      firstTextColor: white,
      secondTextColor: '#898d92',
      // SelectCard
      wrapMiddleText: '#99a3ba',
      wrapBottomText: '#99a3ba',
      wrapContainerBorder: `border: solid 0.2vh ${warmGray};`,
    },
  },
};

export default theme;
