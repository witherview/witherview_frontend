import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import profileExample from '@assets/images/profile_example.png';
import Icon from '@components/Icon';

const Wrapper = styled.div`
    position: relative;
`;

const Image = styled.div`
  width: 149px;
  height: 156px;
  border-radius: 20px;
  user-select: none;
  background-image: url(${({ src }) => src});
  background-position: center center;
  background-size: cover;
`;

const IconWrapper = styled.span`
    display: inline-block;
    position: absolute;
    top: 115px;
    left: 120px;
`;

export default function ProfileEdit({ src }) {
  return (
    <Wrapper>
      <Image src={src} alt="profile_image" />
      <IconWrapper>
        <Icon type="capture" alt="" isCircle />
      </IconWrapper>
    </Wrapper>
  );
}

ProfileEdit.propTypes = {
  src: PropTypes.string,
};

ProfileEdit.defaultProps = {
  src: profileExample,
};
