import React from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';
import closeImg from '../assets/modal/close.png';

const windowWidth = Dimensions.get('window').width - 10;
const windowHeight = Dimensions.get('window').height;

const propTypes = {
  /**
   * Whether OTDialog is visible on the screen
   */
  visible: PropTypes.bool.isRequired,
  /**
   * Function to execute when closing OTDialog
   */
  onClose: PropTypes.func,
  /**
   * Content of the OTDialog
   */
  children: PropTypes.node.isRequired,
};

const Container = styled.View`
  flex: 1
  justify-content: center
  align-items: center
  background-color: ${props => props.theme.colors.modal.background}
`;

const Background = styled.View`
  width: ${props => windowWidth - props.theme.padding.horizontal * 2}px;
  justify-content: flex-start
  background-color: #fff
  padding-bottom: 20px
  border-radius: 10px
  max-height: ${windowHeight - 140}px
`;
const Top = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;
const CloseButton = styled.TouchableOpacity`
  padding-vertical: 20px;
  padding-horizontal: 20px;
`;
const CloseIcon = styled.Image``;
const Content = styled.ScrollView`
  padding-horizontal: 20px;
`;
const OTDialog = ({ visible, children, onClose }) => (
  <Modal visible={visible} transparent animationType={'fade'}>
    <Container>
      <Background>
        <Top>
          <CloseButton onPress={onClose}>
            <CloseIcon source={closeImg} />
          </CloseButton>
        </Top>
        <Content bounces={false} showsVerticalScrollIndicator={false}>
          {children}
        </Content>
      </Background>
    </Container>
  </Modal>
);

OTDialog.propTypes = propTypes;

OTDialog.defaultProps = {
  visible: false,
};

export default OTDialog;
