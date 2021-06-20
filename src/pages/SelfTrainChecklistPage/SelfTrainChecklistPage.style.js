import styled from 'styled-components';

const CloseButton = styled.div`
  position: absolute;
  top: 5.3vh;
  right: 10.5vh;
  border: none;
  cursor: pointer;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #eef0ff;
`;

const WrapContent = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EndingTitle = styled.span`
  display: block;
  color: #000000;
  font-family: AppleSDGothicNeoEB00;
  font-size: 3.1vh;
  padding-top: 3.9vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 9vh;
`;

const LeftContent = styled.div`
  height: 67.1vh;
  width: 47vh;
  padding-top: 3vh;
`;

const RightContent = styled.div`
  height: 67.1vh;
  margin-left: 6.1vh;
`;

const VideoContainer = styled.figure`
  width: 47vh;
  margin: 0;

  & video {
    width: 100%;
    border-radius: 2vh;
    box-shadow: 0 0.6vh 2.4vh 0 rgba(4, 4, 161, 0.04);
  }
`;

const ControlWrapper = styled.div`
  overflow: hidden;
  background-color: #ffffff;
  width: 100%;
  position: relative;
  border-radius: 1vh;
  margin-top: 1vh;
  padding: 1vh;
  box-sizing: border-box;
  box-shadow: 0 0.6vh 1.2vh 0 rgba(4, 4, 161, 0.1);
`;

const ButtonWrapper = styled.button`
  height: 5.1vh;
  width: 5.1vh;
  > button {
    height: 5.1vh;
    width: 5.1vh;
  }
  display: block;
  height: 100%;
  float: left;
  border: none;
  cursor: pointer;
  background: transparent;
  margin: 0;
  padding: 0;

  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.5;
  }
`;

const ProgressWrapper = styled.div`
  display: block;
  width: 80%;
  height: 100%;
  float: left;
  margin-left: 5%;
  padding: 0;

  & progress {
    display: block;
    height: 2vh;
    width: 100%;
    margin-top: 2vh;
    border: none;
    overflow: hidden;
    -moz-border-radius: 0.2vh;
    -webkit-border-radius: 0.2vh;
    border-radius: 0.2vh;
    color: #6e6eff;
    cursor: pointer;
    &::-moz-progress-bar {
      background-color: #6e6eff;
    }
    &::-webkit-progress-value {
      background-color: #6e6eff;
    }
    &::-webkit-progress-bar {
      background-color: #d3d3d3;
    }
  }
`;

const CheckPointWrapper = styled.div`
  position: relative;
  background: transparent;

  & > div {
    position: absolute;
    cursor: pointer;
  }
`;

const ButtonsWrapper = styled.div`
  height: 18vh;
  width: inherit;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 5.5vh;

  > div {
    width: 22.5vh;
    height: 6vh;
    > p {
      font-size: 1.9vh;
    }
    box-shadow: 0 0.6vh 2.4vh 0 rgba(4, 4, 161, 0.04);
  }
`;

const CheckListContainer = styled.div`
  display: inline-block;
  width: 52vh;
  height: 67vh;
  box-sizing: border-box;
  margin-right: 2.6vh;
  padding: 4.3vh 5.5vh 0 5.5vh;
  border-radius: 1vh;
  box-shadow: 0 0.6vh 1.2vh 0 rgba(4, 4, 161, 0.1);
  background-color: #ffffff;
  font-family: AppleSDGothicNeoM00;
  text-align: left;

  & > ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      display: table;
      font-size: 1.5vh;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      text-align: left;
      letter-spacing: normal;
      text-align: left;
      color: #3d3d3d;
      margin-bottom: 2vh;

      i {
        margin-right: 2.5vh;
        cursor: pointer;
        vertical-align: middle;
      }

      span {
        display: table-cell;
        vertical-align: middle;
        line-height: 1.5;
      }
    }
  }
`;

const CheckListTitle = styled.h2`
  font-size: 2.5vh;
  margin-bottom: 3vh;
`;

const CheckPoint = styled.div`
  left: calc(${({ point }) => `${point} * 97%`});
`;

const SmallCheckList = styled.div`
  display: inline-block;
  vertical-align: top;

  & > * {
    display: block;
    height: 32vh;
    margin: 0;
    margin-bottom: 3vh;
  }
`;

const ChecklistEach = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;

  > span {
    font-size: 1.9vh;
  }
`;

export default {
  CloseButton,
  Wrapper,
  WrapContent,
  EndingTitle,
  Content,
  LeftContent,
  RightContent,
  VideoContainer,
  ControlWrapper,
  ButtonWrapper,
  CheckPointWrapper,
  ProgressWrapper,
  ButtonsWrapper,
  CheckListContainer,
  CheckListTitle,
  CheckPoint,
  SmallCheckList,
  ChecklistEach,
};
