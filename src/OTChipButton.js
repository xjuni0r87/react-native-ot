import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import OTTypography from './OTTypography';
import { useTheme } from 'styled-components/native';

// ----------------------------------------------------------------------

const propTypes = {
  /**
   * Whether OTChipButton is selected
   */
  selected: PropTypes.bool,
  /**
   * Function to execute on press
   */
  onPress: PropTypes.func,
  /**
   * Icon to display for the OTChipButton
   */
  icon: PropTypes.node,
  /**
   * Text to display for the OTChipButton
   */
  text: PropTypes.string,
};

const Container = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${props =>
    props.selected ? props.theme.colors.orange : props.theme.colors.white};
  border-radius: 45px;
  padding-horizontal: 20px;
  height: 45px;
  justify-content: center;
  align-items: center;
  elevation: ${props => (props.selected ? 0 : 3)};
`;
const Icon = styled.Image`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const OTChipButton = ({ selected, onPress, icon, text }) => {
  const theme = useTheme();

  return (
    <Container selected={selected} onPress={onPress}>
      {Boolean(icon) && <Icon source={icon} resizeMode="contain" />}
      <OTTypography
        variant="titleSmall"
        family="bold"
        color={selected ? theme.colors.font.white : theme.colors.font.blue}>
        {text}
      </OTTypography>
    </Container>
  );
};

// ----------------------------------------------------------------------

OTChipButton.propTypes = propTypes;

OTChipButton.defaultProps = { selected: false };

export default OTChipButton;
