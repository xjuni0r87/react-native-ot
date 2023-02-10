import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { SIZES } from './constants';

// ----------------------------------------------------------------------

const propTypes = {
  /**
   * Color to display as background color for the OTIconBox
   */
  bgColor: PropTypes.string,
  /**
   * Whether OTIconBox has more rounded borders
   */
  rounded: PropTypes.bool,
  /**
   * Size of the OTIconBox
   */
  size: PropTypes.oneOf([SIZES.large, SIZES.medium, SIZES.small]),
  /**
   * Icon to display for the OTIconBox
   */
  icon: PropTypes.node,
};

const Container = styled.View`
  background-color: ${props => props.bgColor || props.theme.colors.orange};
  border-radius: ${props => (props.rounded ? 10 : 4)}px;
  width: ${props =>
    props.size === SIZES.large ? 58 : props.size === SIZES.small ? 38 : 48}px;
  height: ${props =>
    props.size === SIZES.large ? 58 : props.size === SIZES.small ? 38 : 48}px;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.Image`
  width: ${props => (props.size === SIZES.large ? 30 : 20)}px;
  height: ${props => (props.size === SIZES.large ? 30 : 20)}px;
`;

const OTIconTag = ({ bgColor, rounded, size, icon }) => {
  return (
    <Container bgColor={bgColor} rounded={rounded} size={size}>
      {Boolean(icon) && <Icon source={icon} size={size} resizeMode="contain" />}
    </Container>
  );
};

// ----------------------------------------------------------------------

OTIconTag.propTypes = propTypes;

OTIconTag.defaultProps = {
  rounded: false,
  size: SIZES.medium,
};

export default OTIconTag;
