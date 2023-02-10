import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { OTBadge, OTTypography, ThemeProvider } from 'react-native-ot';

const themeOverrides = {
  colors: {
    badge: {
      orange: 'pink',
    },
  },
};
export default function App() {
  return (
    <ThemeProvider themeConfig={themeOverrides}>
      <View style={styles.container}>
        <OTTypography variant="headlineSmall">Hello World</OTTypography>
        <OTBadge title="100" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
