import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1;
  flex-direction: column;
`;

const WrapperContent = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InterviewRoomSection = styled.div`
  width: 1196px;
`;

const InterviewRoomInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 6px 12px 0 rgba(4, 4, 161, 0.1);
  border: solid 1px #f6f6f6;
  background-color: #ffffff;
`;

const TextWrapper = styled.div`
  width: 750px;
`;

const RoomTitle = styled.p`
  font-size: 36px;
  font-family: AppleSDGothicNeoEB00;
  color: #6e6eff;
  margin-bottom: 15px;
`;

const DateInfo = styled.p`
  font-size: 24px;
  font-family: AppleSDGothicNeoEB00;
  margin-bottom: 45px;
`;

const Description = styled.p`
  font-size: 24px;
  font-family: AppleSDGothicNeoM00;
  color: #3d3d3d;
`;

const BoxWrapper = styled.div`
  width: 300px;
  & div:first-child {
    margin-bottom: 25px;
  }
`;

const UserInfoWrapper = styled.div`
  width: 1196px;
  margin: 23.9px 50px 0 0;
  padding: 0 0 1px;
  border-radius: 20px;
  box-shadow: 0 6px 12px 0 rgba(4, 4, 161, 0.1);
`;

const UserInfoHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 73px;
  background-color: #eef0ff;
  border-radius: 20px 20px 0 0;
`;

const TableColumn = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: ${({ value }) => `${value > 0 ? value : 0}px`};
  font-family: AppleSDGothicNeoB00;
  font-size: 20px;
  color: ${({ color }) => (color === 'blue' ? '#6e6eff' : '#3d3d3d')};
`;

const UserInfoContent = styled.div`
  width: 100%;
  padding: 41px 0 0 0;
`;

const ContentRow = styled.div`
  position: relative;
  height: 60px;
  padding: 0 88px;
  margin-bottom: 60px;
`;

const UserInfo = styled.div`
  width: 150px;
  margin-left: 26px;

  & > p {
    font-family: AppleSDGothicNeoEB00;
    color: #3d3d3d;
    margin-bottom: 16px;
  }
`;

const TagsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const TagItem = styled.label`
  background-color: ${({ color }) => (color === 'blue' ? '#eef0ff' : '#fff3ef')};
  font-size: 15px;
  color: ${({ color }) => (color === 'blue' ? '#6e6eff' : '#f2886b')};
  border-radius: 5px;
  padding: 3px 11px 3px 10px;
`;

const ItemInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 15px;
  font-weight: bold;
`;

const ProgressBar = styled.progress`
  width: 245px;
  height: 8px;
  margin-right: 22px;
  border: none;
  overflow: hidden;
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  border-radius: 50px;
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
