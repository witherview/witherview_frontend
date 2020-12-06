import styled from 'styled-components';

const Background = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: #f6f6f6;
`;

const Wrapper = styled.div`
    margin-top: 178px;
    margin-left: 250px;
`;

const ProfileWrapper = styled.div`
    display: flex;
    width: 1451px;
    height: 171px;
    padding: 36.5px 51px;
    border-radius: 10px;
    box-shadow: 0 6px 12px 0 rgba(158, 158, 158, 0.1);
    border: solid 1px #f6f6f6;
    background-color: #ffffff;
`;

const Profile = styled.div`
    display: flex;
    width: 555px;
    border-right: solid 1px #d3d3d3;
`;

const ProfileInfo = styled.div`
    display: flex;
    margin-left: 50px;
    flex-direction: column;
`;

const NameWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 12px;
`;

const NameText = styled.div`
    height: 31px;
    margin-right: 10px;
    font-family: AppleSDGothicNeoEB00;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.46;
    letter-spacing: normal;
    text-align: left;
    color: #3d3d3d;
`;

const Jobs = styled.div`
    margin-bottom: 32px;
    font-family: AppleSDGothicNeoM00;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: normal;
    text-align: left;
    color: #0c0c59;
`;

const Reliability = styled.div`
    font-family: AppleSDGothicNeoB00;
    font-size: 20px;
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
  width: 161px;
  height: 8px;
  & {
    border: 0;
    background: #d6d6d6;
    border-radius: 10px;
  }
  
  &::-moz-progress-bar {
    border-radius: 10px;
    background: linear-gradient(to right, #2323de 1%, #4848da 91%);
  }
  
  &::-webkit-progress-bar {
    background: #d6d6d6;
    border-radius: 10px;
  }
  
  &::-webkit-progress-value {
    border-radius: 10px;
    background: linear-gradient(to right, #2323de 1%, #4848da 91%);
  }
`;

const BarText = styled.span`
    height: 32px;
    margin-left: 22px;
    font-family: TitilliumWeb;
    font-size: 20px;
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
  width: 968px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 77px;
  flex: 0 0 40%;
`;

const Title = styled.div`
    font-family: AppleSDGothicNeoB00;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: normal;
    text-align: left;
    color: #3d3d3d;
`;
const Content = styled.div`
    margin-bottom: 33px;
    font-family: TitilliumWeb;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.55;
    letter-spacing: normal;
    text-align: left;
    color: #9e9e9e;
`;

const Block = styled.div`
  margin-top: 10px;
`;

const BlockItem = styled.div`
  display: inline-block;
  height: 22px;
  padding: 9px 20px;
  margin-right: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => (theme === 'blue' ? '#6e6eff' : '#f2886b')};
  font-family: AppleSDGothicNeoM00;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;

const BoxWrapper = styled.div`
  display: flex;
  width: 1555px;
  justify-content: space-between;
  margin-top: 37px;
  flex-wrap: wrap;
`;

export default {
  Background,
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
