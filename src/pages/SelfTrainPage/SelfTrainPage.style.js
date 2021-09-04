import styled from 'styled-components';
import { commonStyles } from '@style';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${({ source }) => source});
  background-size: cover;
`;

const WrapContainer = styled.div`
  height: 80vh;
`;

const WrapAbsolute = styled.div`
  position: absolute;
  top: 5.3vh;
  right: 10.5vh;
  > i {
    cursor: pointer;
  }
`;

const WrapContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const WrapBottom = styled.div`
  height: 7.2vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 132.6vh;
  margin-bottom: -0.6vh;
`;

const WrapBottomSide = styled.div`
  width: 25vh;
  display: flex;
  justify-content: ${({ right }) => (right ? 'flex-end' : 'flex-start')};
  align-items: center;
`;

const WrapText = styled.div`
  user-select: none;
  padding-right: 2.5vh;
  font-family: AppleSDGothicNeoB00;
  font-size: 1.9vh;
  color: #6e6eff;
`;

const WrapCamView = styled.div`
  height: 59vh;
  width: 132.6vh;
  display: flex;
  flex-direction: row;
  justify-content: ${({ isShowAnswer }) =>
    isShowAnswer ? 'space-between' : 'center'};
`;

const WrapButton = styled.div`
  ${commonStyles.button}
`;

export default {
  Wrapper,
  WrapContainer,
  WrapAbsolute,
  WrapContent,
  WrapBottom,
  WrapBottomSide,
  WrapText,
  WrapCamView,
  WrapButton,
};
