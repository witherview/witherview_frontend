import {
  useCallback, useEffect, useRef, useState,
} from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { get } from '@utils/snippet';

import { setLocalBlob, setUploadedLocation } from '@store/Train/train';

import {
  postVideoApi,
  getVideoApi,
} from '@repository/requestVideoRepository';

export default function useReactMediaRecorder({
  audio = true,
  video = false,
  onStop = () => null,
  blobPropertyBag,
  screen = false,
  mediaRecorderOptions = null,
}) {
  const dispatch = useDispatch();
  const { selectedQnaId } = useSelector(get('train'));
  const mediaRecorder = useRef(null);
  const mediaChunks = useRef([]);
  const mediaChunkEach = useRef([]);
  const mediaStream = useRef(null);

  const [status, setStatus] = useState('idle');
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [mediaBlobUrl, setMediaBlobUrl] = useState(null);
  const [error, setError] = useState('NONE');

  const getMediaStream = useCallback(async () => {
    setStatus('acquiring_media');
    const requiredMedia = {
      audio: typeof audio === 'boolean' ? !!audio : audio,
      video: typeof video === 'boolean' ? !!video : video,
    };
    try {
      if (screen) {
        const stream = await window.navigator.mediaDevices.getDisplayMedia({
          video: video || true,
          audio: true,
        });
        if (audio) {
          const audioStream = await window.navigator.mediaDevices.getUserMedia({
            audio,
          });

          audioStream
            .getAudioTracks()
            .forEach((audioTrack) => stream.addTrack(audioTrack));
        }
        mediaStream.current = stream;
      } else {
        const stream = await window.navigator.mediaDevices.getUserMedia(
          requiredMedia,
        );
        mediaStream.current = stream;
      }
      setStatus('idle');
    } catch (err) {
      setError(err.name);
      setStatus('idle');
    }
  }, [audio, video, screen]);

  useEffect(() => {
    if (!window.MediaRecorder) {
      throw new Error('Unsupported Browser');
    }

    if (screen) {
      if (!window.navigator.mediaDevices.getDisplayMedia) {
        throw new Error("This browser doesn't support screen capturing");
      }
    }

    const checkConstraints = (mediaType) => {
      const supportedMediaConstraints = navigator.mediaDevices.getSupportedConstraints();
      const unSupportedConstraints = Object.keys(mediaType).filter(
        (constraint) => !supportedMediaConstraints[constraint],
      );

      if (unSupportedConstraints.length > 0) {
        console.error(
          `The constraints ${unSupportedConstraints.join(
            ',',
          )} doesn't support on this browser. Please check your ReactMediaRecorder component.`,
        );
      }
    };

    if (typeof audio === 'object') {
      checkConstraints(audio);
    }
    if (typeof video === 'object') {
      checkConstraints(video);
    }

    if (mediaRecorderOptions && mediaRecorderOptions.mimeType) {
      if (!MediaRecorder.isTypeSupported(mediaRecorderOptions.mimeType)) {
        console.error(
          "The specified MIME type you supplied for MediaRecorder doesn't support this browser",
        );
      }
    }

    if (!mediaStream.current) {
      getMediaStream();
    }
  }, [audio, screen, video, getMediaStream, mediaRecorderOptions]);

  // Media Recorder Handlers

  const onRecordingActive = ({ data }) => {
    mediaChunkEach.current.push(data);
  };

  const onRecordingStop = async () => {
    mediaChunks.current.push(...mediaChunkEach.current);

    const [chunk] = mediaChunks.current;
    const blobProperty = {
      type: chunk.type,
      ...(blobPropertyBag
        || (video || screen ? { type: 'video/mp4' } : { type: 'audio/wav' })),
    };
    const blob = new Blob(mediaChunks.current, blobProperty);
    const url = URL.createObjectURL(blob);

    setStatus('stopped');
    setMediaBlobUrl(url);
    dispatch(setLocalBlob({ localBlob: url }));

    onStop(url, blob);

    // TODO: 혼자연습하기 체크리스트에서 재생할 수 있도록 해야 함
    const blobData = new Blob(mediaChunks.current, {
      type: 'video/webm;codecs=vp8,opus',
    });
    const formData = new FormData();
    formData.append('videoFile', blobData);
    formData.append('questionListId', selectedQnaId);

    // TODO: 서버의 Response를 기다리는 로딩 상황임을 알려주는 Progress Bar 혹은 Spinner가 렌더링 되게끔 하는 상태를 추가해야 함
    await postVideoApi(formData)
      .then((response) => {
        const { id } = response.data;
        getVideoApi().then((res) => {
          const { savedLocation } = res.data.find((elem) => elem.id === id);
          const uploadedLocation = `${savedLocation.substring(0, 27)}videos/${savedLocation.substring(27)}`;
          dispatch(setUploadedLocation({ uploadedLocation }));
        });
      })
      .catch((err) => {
        alert(err);
      });

    mediaChunks.current = [];
    mediaChunkEach.current = [];
  };

  const startRecording = async () => {
    setError('NONE');
    if (!mediaStream.current) {
      await getMediaStream();
    }
    if (mediaStream.current) {
      const isStreamEnded = mediaStream.current
        .getTracks()
        .some((track) => track.readyState === 'ended');
      if (isStreamEnded) {
        await getMediaStream();
      }
      mediaRecorder.current = new MediaRecorder(mediaStream.current);
      mediaRecorder.current.ondataavailable = onRecordingActive;
      mediaRecorder.current.onstop = onRecordingStop;
      mediaRecorder.current.onerror = () => {
        setError('NO_RECORDER');
        setStatus('idle');
      };
      mediaRecorder.current.start();
      setStatus('recording');
    }
  };

  const muteAudio = (mute) => {
    setIsAudioMuted(mute);
    if (mediaStream.current) {
      mediaStream.current
        .getAudioTracks()
        // eslint-disable-next-line no-return-assign
        .forEach((audioTrack) => (audioTrack.enabled = !mute));
    }
  };

  const pauseRecording = () => {
    if (mediaRecorder.current && mediaRecorder.current.state === 'recording') {
      mediaRecorder.current.pause();
    }
  };
  const resumeRecording = () => {
    if (mediaRecorder.current && mediaRecorder.current.state === 'paused') {
      mediaRecorder.current.resume();
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current) {
      if (mediaRecorder.current.state !== 'inactive') {
        setStatus('stopping');
        mediaRecorder.current.stop();
        if (mediaStream.current) {
          mediaStream.current.getTracks().forEach((track) => track.stop());
        }
      }
    }
  };

  return {
    error,
    muteAudio: () => muteAudio(true),
    unMuteAudio: () => muteAudio(false),
    startRecording,
    pauseRecording,
    resumeRecording,
    stopRecording,
    mediaBlobUrl,
    status,
    isAudioMuted,
    previewStream: mediaStream.current
      ? new MediaStream(mediaStream.current.getVideoTracks())
      : null,
    clearBlobUrl: () => setMediaBlobUrl(null),
  };
}
