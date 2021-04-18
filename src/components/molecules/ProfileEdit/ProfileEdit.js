import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { postProfileImageApi } from '@repository/accountRepository';
import A from '@atoms';
import { setImage } from '@store/Auth/auth';
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
  const { image } = useSelector(get('auth'));
  const fileRef = useRef();

  const onChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const formData = new FormData();
      formData.append('profileImg', file, file.name);

      try {
        await postProfileImageApi(formData);
        dispatch(setImage({ image: reader.result }));
      } catch (error) {
        console.error(error);
        alert(error);
      }
    };
    reader.onerror = (error) => {
      console.error(error);
      alert(error);
    };
  };

  return (
    <Wrapper>
      <Image src={image || src} alt="profile_image" />
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
