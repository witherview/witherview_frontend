import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 5vh;
`;

const ProfileWrapper = styled.div`
  display: flex;
  width: 120vh;
  height: 17.1vh;
  padding: 3.66vh 5.1vh;
  border-radius: 1vh;
  box-shadow: 0 0.6vh 1.2vh 0 rgba(158, 158, 158, 0.1);
  border: solid 0.1vh #f6f6f6;
  background-color: #ffffff;
`;

const Profile = styled.div`
  display: flex;
  width: 55.5vh;
  border-right: solid 0.1vh #d3d3d3;
`;

const ProfileInfo = styled.div`
  display: flex;
  margin-left: 5vh;
  flex-direction: column;
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.2vh;

  input {
    height: 3.1vh;
    font-size: 2.4vh;
    margin-right: 7.9vh;
  }
`;

const NameText = styled.div`
  height: 3.1vh;
  margin-right: 1vh;
  font-family: AppleSDGothicNeoEB00;
  font-size: 2.4vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.46;
  letter-spacing: normal;
  text-align: left;
  color: #3d3d3d;
`;

const Jobs = styled.div`
  margin-bottom: 3.2vh;
  font-family: AppleSDGothicNeoM00;
  font-size: 2vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: left;
  color: #0c0c59;
`;

const Reliability = styled.div`
  font-family: AppleSDGothicNeoB00;
  font-size: 2vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: #3d3d3d;
`;

const BarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Bar = styled.progress`
  width: 16.1vh;
  height: 0.8vh;
  & {
    border: 0;
    background: #d6d6d6;
    border-radius: 1vh;
  }

  &::-moz-progress-bar {
    border-radius: 1vh;
    background: linear-gradient(to right, #2323de 1%, #4848da 91%);
  }

  &::-webkit-progress-bar {
    background: #d6d6d6;
    border-radius: 1vh;
  }

  &::-webkit-progress-value {
    border-radius: 1vh;
    background: linear-gradient(to right, #2323de 1%, #4848da 91%);
  }
`;

const BarText = styled.span`
  height: 3.2vh;
  margin-left: 2.2vh;
  font-family: TitilliumWeb;
  font-size: 2vh;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: left;
  color: #6e6eff;
`;

const InfoWrapper = styled.div`
  display: flex;
  width: 96.8vh;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7.7vh;
  flex: 0 0 40%;

  input {
    height: 30px;
    font-size: 1.5vh;
    margin-bottom: 2vh;
  }
`;

const Title = styled.div`
  font-family: AppleSDGothicNeoB00;
  font-size: 1.5vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: #3d3d3d;
`;
const Content = styled.div`
  margin-bottom: 3.3vh;
  font-family: TitilliumWeb;
  font-size: 1.5vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: left;
  color: #9e9e9e;
`;

const Block = styled.div`
  margin-top: 1vh;
`;

const BlockItem = styled.div`
  display: inline-block;
  height: 2.2vh;
  padding: 0.9vh 2vh;
  margin-right: 2vh;
  border-radius: 1vh;
  background-color: ${({ theme }) =>
    theme === 'blue' ? '#6e6eff' : '#f2886b'};
  font-family: AppleSDGothicNeoM00;
  font-size: 1.5vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;

const BoxWrapper = styled.div`
  display: flex;
  width: 130.2vh;
  justify-content: space-between;
  margin-top: 3.7vh;
  flex-wrap: wrap;
`;

export default {
  Wrapper,
  ProfileWrapper,
  Profile,
  ProfileInfo,
  NameWrapper,
  NameText,
  Jobs,
  Reliability,
  BarWrapper,
  Bar,
  BarText,
  Info,
  InfoWrapper,
  Title,
  Content,
  Block,
  BoxWrapper,
  BlockItem,
};
