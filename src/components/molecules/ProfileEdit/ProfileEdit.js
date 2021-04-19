import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { postProfileImageApi } from '@repository/accountRepository';
import A from '@atoms';
import { setProfileImg } from '@store/Auth/auth';
import { get } from '@utils/snippet';
import profileDefault from '@assets/images/profile_default.png';

const Wrapper = styled.div`
  position: relative;
`;

const Image = styled.div`
  width: 14.9vh;
  height: 15.6vh;
  border-radius: 2vh;
  user-select: none;
  background-image: url(${({ src }) => src});
  background-position: center center;
  background-size: cover;
`;

const IconWrapper = styled.span`
  display: inline-block;
  position: absolute;
  top: 11.5vh;
  left: 12vh;
  > i {
    cursor: pointer;
  }
`;

export default function ProfileEdit({ src = profileDefault }) {
  const dispatch = useDispatch();
  const { profileImg } = useSelector(get('auth'));
  const fileRef = useRef();

  const onChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    try {
      if (file.type.match('image.*')) {
        throw new Error('이미지 파일 형식이 아닙니다.');
      }
      if (file.size < 5 * 1024 * 1024) {
        throw new Error('5MB 이하의 이미지 파일만 업로드 가능합니다.');
      }
      reader.readAsDataURL(file);
      reader.onload = async () => {
        const formData = new FormData();
        formData.append('profileImg', file, file.name);
        await postProfileImageApi(formData);
        dispatch(setProfileImg({ profileImg: reader.result }));
      };
      reader.onerror = (error) => {
        console.error(error);
        alert(error);
        reader.abort();
      };
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  return (
    <Wrapper>
      <Image src={profileImg || src} alt="profile_image" />
      <IconWrapper onClick={() => fileRef.current.click()}>
        <input
          type="file"
          accept="image/*"
          onChange={onChange}
          style={{ display: 'none' }}
          ref={fileRef}
        />
        <A.Icon type="capture" alt="" isCircle />
      </IconWrapper>
    </Wrapper>
  );
}

ProfileEdit.propTypes = {
  src: PropTypes.string,
};
