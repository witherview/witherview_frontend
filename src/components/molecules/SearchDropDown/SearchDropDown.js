/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import A from '@atoms';
import commonStyles from '@style/commonStyles';
import { INDUSTRY, JOB } from './depth';

const { flexRow } = commonStyles;

const WrapDropDownTop = styled.div`
  position: absolute;
  top: -0.2vh;
  right: 12vh;

  z-index: 2;

  width: 25.5vh;
  height: 7.3vh;

  box-shadow: 0 1.2vh 3.6vh 0 rgba(4, 4, 161, 0.15);
  background-color: white;
  border-top-left-radius: 2vh;
  border-top-right-radius: 2vh;
`;

const WrapDropDownBottom = styled.div`
  position: absolute;
  background-color: white;

  top: 7.1vh;
  width: 108vh;
  height: 40vh;
  box-shadow: 0 1.2vh 3.6vh 0 rgba(4, 4, 161, 0.15);

  border-radius: 2vh;
`;

const Container = styled(WrapDropDownBottom)`
  box-shadow: none;
  z-index: 10;
  font-size: 1.6vh;

  .header {
    font-size: 2vh;
    font-weight: bold;
    ${flexRow('space-between')}

    > div:first-child {
      width: 50%;

      ${flexRow()}
      > div {
        width: 100%;
      }
    }
    border-bottom: 1px solid lightgray;
    padding: 2vh 2.4vh;
  }
  .body {
    height: calc(40vh - 9vh);
    ${flexRow('spce-between')}

    > div:first-child {
      width: 50%;
      height: 100%;

      ${flexRow()}
      > div {
        width: 100%;
      }
    }

    > div:last-child {
      width: 50%;
    }

    .scroll {
      height: 100%;
      overflow-y: auto;

      ::-webkit-scrollbar {
        background-color: #ffffff;
        width: 7px;
      }

      ::-webkit-scrollbar-track {
        background-color: #ffffff;
      }

      ::-webkit-scrollbar-thumb {
        background-color: #0c0c59;
      }
    }
    .selected {
      background-color: #eef0ff;
      color: #6e6eff;
    }
    .each {
      :first-child {
        margin-top: 1vh;
      }
      padding: 2vh 2.4vh;
      .text {
        padding-left: 4vh;
      }
      label {
        span {
          top: -0.5vh;
          width: 2.4vh;
          height: 2.4vh;
          border-radius: 0.5vh;
          &::after {
            left: 0.9vh;
            width: 0.5vh;
            height: 1vh;
          }
        }
      }
    }
  }
`;

export default function SearchDropDown({ setToggle }) {
  const [checkBox, setCheckBox] = useState({
    산업: [],
    직무: {
      '경영기획/사무': [],
      '마케팅/유통': [],
      영업: [],
      생산품질: [],
      '연구개발/설계': [],
      'IT 서비스': [],
      디자인: [],
      기타: [],
    },
  });
  const [selectedJob, setSelectedJob] = useState('');

  const handleCheck = (evt, temp) => {
    evt.persist();

    if (temp === '산업') {
      return setCheckBox((prev) => ({
        ...prev,
        [temp]: prev[temp]?.includes(evt.target.name)
          ? [...prev[temp]?.filter((each) => each !== evt.target.name)]
          : [...prev[temp], evt.target.name],
      }));
    }

    if (temp === '직무') {
      return setCheckBox((prev) => ({
        ...prev,
        [temp]: {
          ...prev[temp],
          [evt.target.name]: evt.target.checked ? JOB[evt.target.name] : [],
        },
      }));
    }

    return setCheckBox((prev) => ({
      ...prev,
      직무: {
        ...prev.직무,
        [selectedJob]: prev.직무[selectedJob]?.includes(evt.target.name)
          ? [
              ...prev.직무[selectedJob]?.filter(
                (each) => each !== evt.target.name,
              ),
            ]
          : [...prev.직무[selectedJob], evt.target.name],
      },
    }));
  };

  return (
    <>
      <WrapDropDownTop onClick={() => setToggle(false)} />
      <WrapDropDownBottom />
      <Container>
        <div className="header">
          <div>
            <div>산업</div>
            <div>직무</div>
          </div>
          <A.Icon type="refresh" />
        </div>
        <div className="body">
          <div>
            <div className="scroll">
              {INDUSTRY.map((each) => (
                <div key={each} className="each">
                  <A.CheckBox
                    name={each}
                    func={(e) => handleCheck(e, '산업')}
                  />
                  <div className="text">{each}</div>
                </div>
              ))}
            </div>
            <div className="scroll">
              {Object.keys(JOB).map((each) => (
                <div
                  key={each}
                  className={`each ${each === selectedJob ? 'selected' : ''}`}
                >
                  <A.CheckBox
                    name={each}
                    func={(e) => handleCheck(e, '직무')}
                  />
                  <div className="text" onClick={() => setSelectedJob(each)}>
                    {each}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="scroll">
            {selectedJob &&
              JOB[selectedJob]?.map((each) => (
                <div key={each} className="each">
                  <A.CheckBox
                    name={each}
                    func={(e) => handleCheck(e, '세부직무')}
                    checked={checkBox.직무[selectedJob]?.includes(each)}
                  />
                  <div className="text">{each}</div>
                </div>
              ))}
          </div>
        </div>
      </Container>
    </>
  );
}

SearchDropDown.propTypes = {
  setToggle: PropTypes.func,
};
