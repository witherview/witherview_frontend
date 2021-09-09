import styled from 'styled-components';
import commonStyles from '@style/commonStyles';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  .main-page-container {
    width: 100%;
  }
  .wrapper {
    width: 100%;
  }
`;

const StudyText = styled.div`
  margin-top: 6vh;
  font-family: AppleSDGothicNeoEB00;
  font-size: 3.1vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: normal;
  text-align: left;
  color: ${({
    theme: {
      peerStudy: { studyTextColor },
    },
  }) => studyTextColor};
`;

const FilterWrapper = styled.div`
  margin-left: auto;
`;

const WrapTitleContainer = styled.div`
  display: flex;
  height: 10vh;
  align-items: center;
  color: ${({
    theme: {
      peerStudy: { buttonWrapperColor },
    },
  }) => buttonWrapperColor};
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 127.8vh;
`;

const ContentWrapper = styled.div`
  margin-top: 1.5vh;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 127.8vh;
`;

const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PartiWrapper = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    margin-bottom: 2vh;
  }
`;

const PartiText = styled.div`
  margin-bottom: 4vh !important;
  font-family: AppleSDGothicNeoB00;
  font-size: 2vh;
  color: ${({
    theme: {
      peerStudy: { partTextColor },
    },
  }) => partTextColor};
`;

const StudyListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 4.1vh;

  > div:not(:nth-child(3n)) {
    margin-right: calc((100% - 112.2vh) / 2.15);
  }
`;

const Wrap = styled.div`
  display: flex;
`;

const AddStudy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 37.4vh;
  height: 38.2vh;
  border-radius: 2vh;
  box-shadow: 0 0.6vh 1.2vh 0 rgba(4, 4, 161, 0.1);
  border: ${({
    theme: {
      peerStudy: { addStudyBdColor },
    },
  }) => addStudyBdColor};
  background-color: ${({
    theme: {
      peerStudy: { addStudyBgColor },
    },
  }) => addStudyBgColor};
  color: ${({
    theme: {
      peerStudy: { addTextColor },
    },
  }) => addTextColor};

  & > span {
    font-size: 50px;
  }
`;

const AddText = styled.div`
  margin-top: 3vh;
  font-family: AppleSDGothicNeoB00;
  font-size: 2.4vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.42;
  letter-spacing: normal;
  text-align: left;
`;

const ButtonWrapper = styled.div`
  ${commonStyles.button}
  > div {
    width: 100%;
    height: 4.5vh;
    border-width: 0.2vh;
    border-radius: 1vh;
    > p {
      font-size: 2vh;
    }
  }
`;

export default {
  Wrapper,
  StudyText,
  ContentWrapper,
  BoxWrapper,
  PartiWrapper,
  ListWrapper,
  FilterWrapper,
  WrapTitleContainer,
  PartiText,
  StudyListWrapper,
  AddStudy,
  AddText,
  Wrap,
  ButtonWrapper,
};
