import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 53px 0 50px 245px;
`;

const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 798px;
    height: 73px;
    border-radius: 20px;
    box-shadow: 0 6px 12px 0 rgba(30, 30, 215, 0.04);
    background-color: #f6f6f6;
`;

const IconWrapper = styled.div`
    margin-left: 52px;
`;

const Input = styled.input`
    width: 650px;
    margin-left: 30px;
    border: none;
    outline: none;
    background-color: #f6f6f6;
    font-family: TitilliumWeb;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.55;
    letter-spacing: normal;
    text-align: left;
    color: #3d3d3d;
`;

const StudyText = styled.div`
    margin-top: 60px;
    font-family: AppleSDGothicNeoEB00;
    font-size: 36px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
`;

const ContentWrapper = styled.div`
    margin-top: 15px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 35px;
    align-items: center;
`;

const TextButtonWrapper = styled.div`
    margin-right: 45px;
`;

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 1222px;
    margin-right: 60px;
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

const partiText = styled.div`
    margin-bottom: 40px;
    font-family: AppleSDGothicNeoEB00;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.45;
    letter-spacing: normal;
    text-align: left;
    color: #0c0c59;
`;

const StudyListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 41px;
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
    width: 374px;
    height: 382px;
    border-radius: 20px;
    box-shadow: 0 6px 12px 0 rgba(4, 4, 161, 0.1);
    border: solid 1px #f6f6f6;
    background-color: #f6f6f6;
`;

const AddText = styled.div`
    margin-top: 30px;
    font-family: AppleSDGothicNeoB00;
    font-size: 24px;
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
  partiText,
  StudyListWrapper,
  AddStudy,
  AddText,
  Wrap,
};
