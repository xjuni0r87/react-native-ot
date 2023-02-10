import React from 'react';
import PropTypes from 'prop-types';
import styled, { useTheme } from 'styled-components/native';
import OTTypography from './OTTypography';

// ----------------------------------------------------------------------

const propTypes = {
  /**
   * Text to display for the OTIconTag
   */
  title: PropTypes.string,
  /**
   * Color to display for the OTIconTag's title
   */
  titleColor: PropTypes.string,
  /**
   * Icon to display for the OTIconTag
   */
  icon: PropTypes.node,
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Icon = styled.Image`
  width: 21px;
  height: 21px;
  margin-right: 8px;
`;

const OTIconTag = ({ title, titleColor, icon }) => {
  const theme = useTheme();

  return (
    <Container>
      {Boolean(icon) && <Icon source={icon} resizeMode="contain" />}
      <OTTypography
        variant={'paragraphMedium'}
        family={'medium'}
        color={titleColor || theme.colors.font.white}
      >
        {title}
      </OTTypography>
    </Container>
  );
};

// ----------------------------------------------------------------------

OTIconTag.propTypes = propTypes;

OTIconTag.defaultProps = {
  title: '',
};

export default OTIconTag;
