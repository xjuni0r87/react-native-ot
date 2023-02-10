import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import OTTypography from './OTTypography';

// ----------------------------------------------------------------------

const propTypes = {
  /**
   * Title to display for the OTBadge
   */
  title: PropTypes.string,
  /**
   * Icon to display for the OTBadge
   */
  icon: PropTypes.node,
  /**
   * Color to display as background color for the OTBadge
   */
  color: PropTypes.string,
  /**
   * Color to display for the OTBadge title
   */
  titleColor: PropTypes.string,
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center
  padding-horizontal: 11px;
  height: 21px
  border-radius: 10px
  background-color: ${(props) => props.color || props.theme.colors.badge.orange}
`;
const Icon = styled.Image`
  width: 12px
  height: 12px
  margin-right: 5px
`;
const Title = styled(OTTypography)`
  color: ${(props) => props.titleColor || props.theme.colors.font.lightGray};
`;

// ----------------------------------------------------------------------

const OTBadge = ({ style, title, icon, color, titleColor }) => {
  return (
    <Container style={style} color={color}>
      {Boolean(icon) && <Icon source={icon} />}
      <Title variant="paragraphMedium" titleColor={titleColor}>
        {title}
      </Title>
    </Container>
  );
};

// ----------------------------------------------------------------------

OTBadge.propTypes = propTypes;

export default OTBadge;
