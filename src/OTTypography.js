import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

// ----------------------------------------------------------------------

const VARIANTS = {
  headlineLarge: 'headlineLarge',
  headlineMedium: 'headlineMedium',
  headlineSmall: 'headlineSmall',
  titleLarge: 'titleLarge',
  titleMedium: 'titleMedium',
  titleSmall: 'titleSmall',
  paragraphLarge: 'paragraphLarge',
  paragraphMedium: 'paragraphMedium',
  paragraphSmall: 'paragraphSmall',
  captionLarge: 'captionLarge',
  captionMedium: 'captionMedium',
  captionSmall: 'captionSmall',
};

const FAMILIES = {
  regular: 'regular',
  medium: 'medium',
  bold: 'bold',
};

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  variant: PropTypes.oneOf([
    VARIANTS.headlineLarge,
    VARIANTS.headlineMedium,
    VARIANTS.headlineSmall,
    VARIANTS.titleLarge,
    VARIANTS.titleMedium,
    VARIANTS.titleSmall,
    VARIANTS.paragraphLarge,
    VARIANTS.paragraphMedium,
    VARIANTS.paragraphSmall,
    VARIANTS.captionLarge,
    VARIANTS.captionMedium,
    VARIANTS.captionSmall,
  ]),
  family: PropTypes.oneOf([FAMILIES.regular, FAMILIES.medium, FAMILIES.bold]),
  lineHeight: PropTypes.number,
  capitalize: PropTypes.bool,
  color: PropTypes.string,
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
  variant: VARIANTS.paragraphLarge,
  family: FAMILIES.regular,
  capitalize: false,
};

export default OTTypography;
