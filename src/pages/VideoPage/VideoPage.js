/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Hls from 'hls.js';
import { getVideoApi } from '@repository/requestVideoRepository';
import { setUploadedLocation, setIsLoading } from '@store/Train/train';
import { get } from '@utils/snippet';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const VideoContainer = styled.figure`
  width: 50%;
  height: auto;

  & video {
    width: 100%;
    border-radius: 20px;
  }
`;

export default function VideoPage({ match }) {
  const dispatch = useDispatch();
  const { uploadedLocation, isLoading } = useSelector(get('train'));
  const videoHlsJs = useRef();
  const { id } = match.params;

  useEffect(() => {
    getVideoApi().then((resp) => {
      dispatch(setIsLoading({ isLoading: false }));
      const { savedLocation } = resp.data.find(
        (elem) => elem.id === parseInt(id, 10),
      );
      dispatch(setUploadedLocation({ uploadedLocation: savedLocation }));
    });
    if (Hls.isSupported()) {
      const hls = new Hls({
        xhrSetup: (xhr, url) => {
          xhr.withCredentials = true;
        },
      });
      hls.attachMedia(videoHlsJs.current);
      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        hls.loadSource(uploadedLocation);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          videoHlsJs.current.play();
        });
      });
    }
  }, [uploadedLocation]);

  return (
    <Wrapper>
      {isLoading || (
        <>
          <VideoContainer>
            <video controls ref={videoHlsJs} autoPlay={false}>
              <track
                src=""
                kind="captions"
                srcLang="ko"
                label="korean_captions"
              />
            </video>
          </VideoContainer>
        </>
      )}
    </Wrapper>
  );
}
