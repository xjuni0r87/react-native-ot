import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

// ----------------------------------------------------------------------

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  variant: PropTypes.oneOf([
    'headlineLarge',
    'headlineMedium',
    'headlineSmall',
    'titleLarge',
    'titleMedium',
    'titleSmall',
    'paragraphLarge',
    'paragraphMedium',
    'paragraphSmall',
    'captionLarge',
    'captionMedium',
    'captionSmall',
  ]),
  family: PropTypes.oneOf(['regular', 'medium', 'bold']),
  lineHeight: PropTypes.number,
  capitalize: PropTypes.bool,
  color: PropTypes.string,
  fontSize: PropTypes.number,
};

const Title = styled.Text`
  font-size: ${(props) =>
    props.fontSize || props.theme.fontSizes[props.variant] || 14}px;
  line-height: ${(props) =>
    props.lineHeight
      ? props.lineHeight
      : props.fontSize || props.theme.fontSizes[props.variant]
      ? (props.fontSize || props.theme.fontSizes[props.variant]) + 6
      : 14}px;
  color: ${(props) => props.color || props.theme.colors.font.default};
`;

// ----------------------------------------------------------------------

const OTTypography = ({
  variant,
  family,
  lineHeight,
  capitalize,
  children,
  style,
  color,
  fontSize,
}) => {
  return (
    <Title
      variant={variant}
      family={family}
      style={style}
      lineHeight={lineHeight}
      color={color}
      fontSize={fontSize}
    >
      {capitalize && typeof children === 'string'
        ? children.toUpperCase()
        : children}
    </Title>
  );
};

// ----------------------------------------------------------------------

OTTypography.propTypes = propTypes;

OTTypography.defaultProps = {
  variant: 'paragraphLarge',
  family: 'regular',
  capitalize: false,
};

export default OTTypography;
