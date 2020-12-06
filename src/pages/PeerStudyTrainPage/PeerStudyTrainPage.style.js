import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1;
  flex-direction: column;
  background-image: url(${({ source }) => source});
  background-size: cover;
`;

const WrapContainer = styled.div`
  height: 100vh;
`;

const WrapAbsolute = styled.div`
  @media only screen and (max-width: 480px) {
    display: none;
  }

  position: absolute;
  top: 53px;
  right: 105px;
`;

const WrapContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WrapBottom = styled.div`
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ width }) => width}px;
`;

const WrapBottomSide = styled.div`
  width: 250px;
  display: flex;
  justify-content: ${({ right }) => (right ? 'flex-end' : 'flex-start')};
  align-items: center;
`;

const WrapText = styled.div`
  @media only screen and (max-width: 1280px) {
    display: none;
  }
  use-select: none;
  padding-right: 25px;
  font-family: AppleSDGothicNeoB00;
  font-size: 24px;
  color: #6e6eff;
`;

const WrapCamView = styled.div`
  position: relative;
  width: ${({ width }) => width}px;
  padding: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
};
