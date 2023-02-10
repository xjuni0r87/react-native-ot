import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import OTTypography from './OTTypography';
import { SIZES } from './constants';

// ----------------------------------------------------------------------

const propTypes = {
  /**
   * Title to display for the OTSectionTitle
   */
  title: PropTypes.string,
  /**
   * Color to display for the title of the OTSectionTitle
   */
  titleColor: PropTypes.string,
  /**
   * Color to display for the bottom border of the OTSectionTitle
   */
  highlightColor: PropTypes.string,
  /**
   * Text and bottom border alignment of the OTSectionTitle
   */
  align: PropTypes.oneOf(['left', 'center', 'right']),
  /**
   * Size of the OTSectionTitle
   */
  size: PropTypes.oneOf([SIZES.large, SIZES.small]),
};

const Container = styled.View`
  align-items: ${props =>
    props.align === 'center'
      ? props.align
      : props.align === 'right'
      ? 'flex-end'
      : 'flex-start'};
`;
const Highlight = styled.View`
  margin-top: 2px;
  margin-left: 1px;
  height: 2px;
  width: ${props => (props.size === SIZES.large ? 74 : 50)}px;
  background-color: ${props => props.color || props.theme.colors.orange};
`;

const OTSectionTitle = ({ title, titleColor, highlightColor, align, size }) => {
  return (
    <Container align={align}>
      <OTTypography
        variant={size === SIZES.large ? 'headlineMedium' : 'titleLarge'}
        family={'bold'}
        color={titleColor}>
        {title}
      </OTTypography>
      <Highlight color={highlightColor} size={size} />
    </Container>
  );
};

// ----------------------------------------------------------------------

OTSectionTitle.propTypes = propTypes;

OTSectionTitle.defaultProps = {
  title: '',
  align: 'left',
  size: SIZES.large,
};

export default OTSectionTitle;
