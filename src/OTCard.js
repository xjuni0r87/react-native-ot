import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

// ----------------------------------------------------------------------

const propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /**
   * Color to display as background color for the OTCard
   */
  bgColor: PropTypes.string,
  /**
   * Whether OTCard is disabled
   */
  disabled: PropTypes.bool,
  /**
   * Whether OTCard has not shadows
   */
  hideShadows: PropTypes.bool,
  /**
   * Text content of the OTCard
   */
  children: PropTypes.node,
};

const Container = styled.View`
  border-radius: 4px;
  background-color: ${(props) => props.bgColor};
  ${(props) => !props.hideShadows && 'elevation: 3'}
  ${(props) => !props.hideShadows && 'shadowColor: #000'}
  ${(props) => !props.hideShadows && 'shadowOffset: 0px 3px'}
  ${(props) => !props.hideShadows && 'shadowOpacity: 0.2'}
  ${(props) => !props.hideShadows && 'shadowRadius: 3px'}
`;
const OpaqueLayer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: 1;
  background-color: white;
  border-radius: 4px;
`;

const OTCard = ({ style = {}, bgColor, disabled, hideShadows, children }) => {
  return (
    <Container style={style} bgColor={bgColor} hideShadows={hideShadows}>
      {disabled && <OpaqueLayer />}
      {children}
    </Container>
  );
};

// ----------------------------------------------------------------------

OTCard.propTypes = propTypes;

OTCard.defaultProps = { bgColor: 'white', hideShadows: false };

export default OTCard;
