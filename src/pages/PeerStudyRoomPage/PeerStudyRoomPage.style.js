import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
`;

const WrapperContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapContainer = styled.div`
  height: 63vh;
  width: 140vh;
  display: flex;
  justify-content: space-around;
`;

const InterviewRoomSection = styled.div`
  width: 100vh;
  display: flex;
  flex-direction: column;
`;

const InterviewRoomInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 5vh;
  border-radius: 2vh;
  box-shadow: 0 0.6vh 1.2vh 0 rgba(4, 4, 161, 0.1);
  border: solid 0.1vh #f6f6f6;
  background-color: #ffffff;
`;

const TextWrapper = styled.div`
  width: 75vh;
`;

const RoomTitle = styled.p`
  font-size: 3.1vh;
  font-family: AppleSDGothicNeoEB00;
  color: #6e6eff;
  margin-bottom: 1.5vh;
`;

const DateInfo = styled.p`
  font-size: 1.9vh;
  font-family: AppleSDGothicNeoEB00;
  margin-bottom: 4.5vh;
`;

const Description = styled.p`
  font-size: 1.9vh;
  font-family: AppleSDGothicNeoM00;
  color: #3d3d3d;
`;

const BoxWrapper = styled.div`
  width: 30vh;
  & div:first-child {
    margin-bottom: 2.5vh;
  }
  ${({ theme }) => theme.button}
`;

const UserInfoWrapper = styled.div`
  width: 100%;
  margin: 2.39vh 5vh 0 0;
  padding: 0 0 0.1vh;
  border-radius: 2vh;
  box-shadow: 0 0.6vh 1.2vh 0 rgba(4, 4, 161, 0.1);
`;

const UserInfoHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 7.3vh;
  background-color: #eef0ff;
  border-radius: 2vh 2vh 0 0;
`;

const TableColumn = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: ${({ value }) => `${value > 0 ? value / 12 : 0}vh`};
  font-family: AppleSDGothicNeoB00;
  font-size: 2vh;
  color: ${({ color }) => (color === 'blue' ? '#6e6eff' : '#3d3d3d')};
`;

const UserInfoContent = styled.div`
  width: 100%;
  padding: 4.1vh 0 0 0;
`;

const ContentRow = styled.div`
  position: relative;
  height: 6vh;
  padding: 0 8.8vh;
  margin-bottom: 6vh;
`;

const UserInfo = styled.div`
  width: 15vh;
  margin-left: 2.6vh;

  & > p {
    font-family: AppleSDGothicNeoEB00;
    color: #3d3d3d;
    margin-bottom: 1.6vh;
  }
`;

const TagsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const TagItem = styled.label`
  background-color: ${({ color }) =>
    color === 'blue' ? '#eef0ff' : '#fff3ef'};
  font-size: 1vh;
  color: ${({ color }) => (color === 'blue' ? '#6e6eff' : '#f2886b')};
  border-radius: 0.5vh;
  padding: 0.3vh 1.1vh 0.3vh 1vh;
`;

const ItemInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1.5vh;
  font-weight: bold;
`;

const ProgressBar = styled.progress`
  width: 24.5vh;
  margin-right: 2.2vh;
  border: none;
  overflow: hidden;
  -webkit-border-radius: 5vh;
  border-radius: 5vh;
  &::-webkit-progress-value {
    background-image: linear-gradient(to right, #2323de 1%, #4848da 91%);
  }
  &::-webkit-progress-bar {
    background-color: #d3d3d3;
  }
`;

export default {
  Wrapper,
  WrapperContent,
  WrapContainer,
  InterviewRoomSection,
  InterviewRoomInfo,
  TextWrapper,
  RoomTitle,
  DateInfo,
  Description,
  BoxWrapper,
  UserInfoWrapper,
  UserInfoHeader,
  TableColumn,
  UserInfoContent,
  ContentRow,
  UserInfo,
  TagsWrapper,
  TagItem,
  ItemInnerWrapper,
  ProgressBar,
};
