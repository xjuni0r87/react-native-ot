import PropTypes from 'prop-types';
import React, { useState } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import styled, { useTheme } from 'styled-components/native';

// ----------------------------------------------------------------------

const propTypes = {
  /**
   * Whether the OTCheckbox is selected or not
   */
  status: PropTypes.bool,
  /**
   * Text to display for the OTCheckbox
   */
  label: PropTypes.string,
  /**
   * Function to execute on press.
   */
  onPress: PropTypes.func,
};

const Container = styled.View``;

const OTCheckbox = ({ style = {}, status = false, label, onPress }) => {
  const theme = useTheme();
  const [checked, setChecked] = useState(status);

  const onChangeValue = () => {
    setChecked(!checked);
    onPress && onPress(!checked);
  };

  return (
    <Container style={style}>
      <BouncyCheckbox
        size={22}
        fillColor={theme.colors.checkbox.orange}
        unfillColor="#FFFFFF"
        text={label}
        iconStyle={{ borderRadius: 5, borderWidth: 0 }}
        iconImageStyle={{ width: 11, height: 11 }}
        innerIconStyle={{
          borderRadius: 5,
          borderWidth: 1,
          borderColor: checked
            ? theme.colors.checkbox.orange
            : theme.colors.checkbox.gray,
        }}
        textStyle={{
          textDecorationLine: 'none',
          fontFamily: 'DMSans-Medium',
          fontSize: 18,
          color: theme.colors.font.gray,
        }}
        isChecked={checked}
        onPress={onChangeValue}
      />
    </Container>
  );
};

// ----------------------------------------------------------------------

OTCheckbox.propTypes = propTypes;

export default OTCheckbox;
