import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 5.3vh 0 0 0;
    align-items: center;
`;

const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 79.8vh;
    height: 7.3vh;
    border-radius: 2vh;
    box-shadow: 0 0.6vh 1.2vh 0 rgba(30, 30, 215, 0.04);
    background-color: #f6f6f6;
`;

const IconWrapper = styled.div`
    margin-left: 5.2vh;
`;

const Input = styled.input`
    width: 65vh;
    margin-left: 3vh;
    border: none;
    outline: none;
    background-color: #f6f6f6;
    font-family: TitilliumWeb;
    font-size: 2vh;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.55;
    letter-spacing: normal;
    text-align: left;
    color: #3d3d3d;
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
    color: ${({ theme: { studyTextColor } }) => studyTextColor};
`;

const ContentWrapper = styled.div`
    margin-top: 1.5vh;
`;

const ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 3.5vh;
    align-items: center;
    color: ${({ theme: { buttonWrapperColor } }) => buttonWrapperColor};
`;

const TextButtonWrapper = styled.div`
    margin-right: 4.5vh;
`;

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 120vh;
    margin-right: 6vh;
`;

const BoxWrapper = styled.div`
    display: flex;
`;

const FilterWrapper = styled.div`
    margin-left: auto;
`;

const PartiWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const PartiText = styled.div`
    margin-bottom: 4vh;
    font-family: AppleSDGothicNeoEB00;
    font-size: 2vh;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.45;
    letter-spacing: normal;
    text-align: left;
    color: ${({ theme: { partTextColor } }) => partTextColor};
`;

const StudyListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 4.1vh;
`;

const Wrap = styled.div`
    display: flex;
    flex: 0 0 33.333%;
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
    border: solid 0.1vh #f6f6f6;
    background-color: #f6f6f6;
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
    color: #0c0c59;
`;

export default {
  Wrapper,
  SearchWrapper,
  IconWrapper,
  Input,
  StudyText,
  ContentWrapper,
  ButtonWrapper,
  TextButtonWrapper,
  BoxWrapper,
  PartiWrapper,
  ListWrapper,
  FilterWrapper,
  PartiText,
  StudyListWrapper,
  AddStudy,
  AddText,
  Wrap,
};
