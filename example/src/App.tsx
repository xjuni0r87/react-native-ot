import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import {
  multiply,
  OTBadge,
  OTTypography,
  ThemeProvider,
} from 'react-native-ot';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Text>Result: {result}</Text>
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
