import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import { theme } from './theme';

// ----------------------------------------------------------------------

const propTypes = {
  children: PropTypes.node,
  themeConfig: PropTypes.object,
};

const ThemeProvider = ({ children, themeConfig }) => {
  return (
    <StyledThemeProvider theme={{ ...theme, ...themeConfig }}>
      {children}
    </StyledThemeProvider>
  );
};

// ----------------------------------------------------------------------

ThemeProvider.propTypes = propTypes;

ThemeProvider.defaultProps = {
  themeConfig: {},
};

export default ThemeProvider;
