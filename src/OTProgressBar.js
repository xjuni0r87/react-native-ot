import React from 'react';
import PropTypes from 'prop-types';
import styled, { useTheme } from 'styled-components/native';
import OTTypography from './OTTypography';
import { times } from 'lodash';

// ----------------------------------------------------------------------

const propTypes = {
  /**
   * Number of steps of the OTProgressBar
   */
  dotsNumber: PropTypes.number,
  /**
   * Current step of the OTProgressBar
   */
  value: PropTypes.number,
};

const Container = styled.View`
  width: 100%;
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
  background-color: ${props => props.theme.colors.line};
  left: 0;
  top: 6px;
  z-index: 2;
`;
const BackgroundSelectedLine = styled.View`
  position: absolute;
  width: ${props => props.length}%;
  height: 1px;
  background-color: ${props => props.theme.colors.font.blue};
  left: 0;
  top: 6px;
  z-index: 2;
`;
const Dot = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 1px solid
    ${props =>
      props.done
        ? props.theme.colors.font.blue
        : props.current
        ? props.theme.colors.orange
        : props.theme.colors.line};
  width: 12px;
  height: 12px;
  background-color: ${props =>
    props.done ? props.theme.colors.font.blue : props.theme.colors.white};
  z-index: 4;
`;
const LabelContainer = styled.View`
  align-items: center;
  padding-top: 5px;
`;

const OTProgressBar = ({ dotsNumber, value }) => {
  const theme = useTheme();

  const selectedLineLength =
    dotsNumber === 0 || value === 0
      ? 0
      : (100 / (dotsNumber - 1)) * (value - 1);

  if (value > dotsNumber || value < 1) {
    return null;
  }

  return (
    <Container>
      <DotsContainer>
        <BackgroundLine />
        <BackgroundSelectedLine length={selectedLineLength} />
        {times(dotsNumber).map((dot, index) => {
          const dotValue = index + 1;
          const isCurrent = value === dotValue;
          const isDone = value > dotValue;
          return <Dot key={index} current={isCurrent} done={isDone} />;
        })}
      </DotsContainer>
      <LabelContainer>
        <OTTypography
          variant={'titleSmall'}
          family={'bold'}
          color={theme.colors.font.blue}>
          {`${value}/${dotsNumber}`}
        </OTTypography>
      </LabelContainer>
    </Container>
  );
};

// ----------------------------------------------------------------------

OTProgressBar.propTypes = propTypes;

OTProgressBar.defaultProps = {
  dotsNumber: 5,
  value: 1,
};

export default OTProgressBar;
