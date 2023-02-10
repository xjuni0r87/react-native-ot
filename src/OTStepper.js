import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { useTheme } from 'styled-components/native';
import OTTypography from './OTTypography';
import { times } from 'lodash';

// ----------------------------------------------------------------------

const propTypes = {
  /**
   * Number of steps of the OTStepper
   */
  dotsNumber: PropTypes.number,
  /**
   * Text to display on the low end side of the OTStepper.
   */
  lowEndText: PropTypes.string,
  /**
   * Text to display on the high end side of the OTStepper.
   */
  highEndText: PropTypes.string,
  /**
   * Function to execute when a dot is pressed
   */
  onPress: PropTypes.func,
};

const Container = styled.View`
  width: 100%;
  background-color: ${(props) => props.theme.colors.lightGray};
`;
const UpperBox = styled.View`
  padding-top: 50px;
  padding-horizontal: 30px;
  padding-bottom: 40px;
`;
const DotsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const BackgroundLine = styled.View`
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.line};
  left: 0;
  top: 15px;
`;
const Dot = styled.TouchableHighlight`
  align-items: center;
  justify-content: center;
  border-radius: 29px;
  border: 1px solid
    ${(props) =>
      props.selected ? props.theme.colors.font.blue : props.theme.colors.line};
  width: 29px;
  height: 29px;
  background-color: ${(props) =>
    props.selected ? props.theme.colors.font.blue : props.theme.colors.white};
`;
const Divider = styled.View`
  height: 1px;
  background-color: ${(props) => props.theme.colors.line};
`;
const LowerBox = styled.View`
  padding-top: 10px;
  padding-horizontal: 30px;
  padding-bottom: 13px;
`;
const LabelsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 9px;
`;
const Label = styled(OTTypography)`
  text-align: ${(props) => (props.right ? 'right' : 'left')};
  max-width: 100px;
`;
const MeterContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
const MeterDot = styled.View`
  width: 7px;
  height: 7px;
  border-radius: 7px;
  background-color: ${(props) => props.theme.colors.orange};
`;
const MeterLine = styled.View`
  flex: 1;
  height: 1px;
  background-color: ${(props) => props.theme.colors.orange};
`;

const OTStepper = ({ dotsNumber, lowEndText, highEndText, onPress }) => {
  const theme = useTheme();
  const [value, setValue] = useState();

  const onPressDot = (dotValue) => {
    setValue(dotValue);
    onPress && onPress(dotValue);
  };

  return (
    <Container>
      <UpperBox>
        <DotsContainer>
          <BackgroundLine />
          {times(dotsNumber).map((dot, index) => {
            const dotValue = index + 1;
            const isSelected = value === dotValue;
            return (
              <Dot
                key={index}
                selected={isSelected}
                onPress={() => onPressDot(dotValue)}
                activeOpacity={0.2}
                underlayColor="white"
              >
                <OTTypography
                  variant={'titleLarge'}
                  family={'bold'}
                  color={
                    isSelected ? theme.colors.white : theme.colors.font.blue
                  }
                >
                  {dotValue}
                </OTTypography>
              </Dot>
            );
          })}
        </DotsContainer>
      </UpperBox>
      <Divider />
      <LowerBox>
        <LabelsContainer>
          <Label variant={'titleSmall'} color={theme.colors.font.gray}>
            {lowEndText || ''}
          </Label>
          <Label right variant={'titleSmall'} color={theme.colors.font.gray}>
            {highEndText || ''}
          </Label>
        </LabelsContainer>
        <MeterContainer>
          <MeterDot />
          <MeterLine />
          <MeterDot />
        </MeterContainer>
      </LowerBox>
    </Container>
  );
};

// ----------------------------------------------------------------------

OTStepper.propTypes = propTypes;

OTStepper.defaultProps = {
  dotsNumber: 5,
  lowEndText: 'Totalmente in disaccordo',
  highEndText: "Pienamente d'accordo",
};

export default OTStepper;
