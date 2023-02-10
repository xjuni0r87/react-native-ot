import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import OTTypography from './OTTypography';
import { BUTTON, SIZES } from './constants';

// ----------------------------------------------------------------------

const propTypes = {
  /**
   * Additional style for the OTButton
   */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /**
   * Variant of the OTButton
   */
  variant: PropTypes.oneOf([BUTTON.VARIANTS.contained, BUTTON.VARIANTS.text]),
  /**
   * Size of the OTButton
   */
  size: PropTypes.oneOf([SIZES.medium, SIZES.large]),
  /**
   * Color to display as background color for the OTButton (only for contained variant)
   */
  color: PropTypes.string,
  /**
   * Width of the OTButton (only for contained variant)
   */
  width: PropTypes.number,
  /**
   * Title to display for the OTButton
   */
  title: PropTypes.string,
  /**
   * Color of the OTButton's title
   */
  titleColor: PropTypes.string,
  /**
   * Function to execute on press
   */
  onPress: PropTypes.func,
  /**
   * Icon to display for the OTButton
   */
  icon: PropTypes.node,
  /**
   * Position of the OTButton's icon
   */
  iconPosition: PropTypes.oneOf(['start', 'end']),
  /**
   * Additional style for the OTButton's icon
   */
  iconStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const Container = styled.TouchableOpacity`
  background-color: ${props => props.color || props.theme.colors.button.orange};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center
  padding-vertical: ${props => (props.size === SIZES.large ? 16 : 10)}px
  padding-horizontal: 26px
  border-radius: 8px
  ${props =>
    (props.width || props.size === SIZES.large) &&
    `width:  ${props.width ? props.width : 226}px`}
`;
const TitleButton = styled(OTTypography)`
  color: ${props => props.titleColor || props.theme.colors.button.white};
`;
const TextContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-vertical: ${props => (props.size === SIZES.large ? 16 : 10)}px;
  padding-horizontal: 10px;
`;
const Icon = styled.Image`
  margin-left: ${props => (props.iconPosition === 'end' ? 6 : 0)}px;
  margin-right: ${props => (props.iconPosition === 'start' ? 6 : 0)}px;
`;

const OTButton = ({
  style,
  variant,
  size,
  width,
  color,
  title,
  titleColor,
  onPress,
  icon,
  iconPosition,
  iconStyle,
}) => {
  const renderIcon = () => (
    <Icon iconPosition={iconPosition} style={iconStyle} source={icon} />
  );

  if (variant === BUTTON.VARIANTS.contained) {
    return (
      <Container
        style={style}
        width={width}
        color={color}
        size={size}
        activeOpacity={0.6} // default is .2
        onPress={onPress}>
        {icon && iconPosition === 'start' && renderIcon()}
        <TitleButton
          variant={size === SIZES.large ? 'titleLarge' : 'paragraphLarge'}
          family={'bold'}
          titleColor={titleColor}>
          {title || ''}
        </TitleButton>
        {icon && iconPosition === 'end' && renderIcon()}
      </Container>
    );
  } else if (variant === BUTTON.VARIANTS.text) {
    return (
      <TextContainer
        style={style}
        activeOpacity={0.6} // default is .2
        onPress={onPress}>
        {icon && iconPosition === 'start' && renderIcon()}
        <TitleButton
          variant={size === SIZES.large ? 'titleLarge' : 'paragraphLarge'}
          family={'bold'}
          titleColor={titleColor}>
          {title || ''}
        </TitleButton>
        {icon && iconPosition === 'end' && renderIcon()}
      </TextContainer>
    );
  } else {
    return <TitleButton>missing</TitleButton>;
  }
};

// ----------------------------------------------------------------------

OTButton.propTypes = propTypes;

OTButton.defaultProps = {
  style: {},
  variant: BUTTON.VARIANTS.contained,
  size: SIZES.medium,
  iconPosition: 'end',
  iconStyle: {},
};

export default OTButton;
