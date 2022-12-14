import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'ui-kit';

import { styles } from './Main.styles';

// Main
//

export const Main: React.FC = () => (
  <View style={styles.main}>
    <Text style={styles.title}>Hello from ReactNative!</Text>
    <Button title='Click me!' />
  </View>
);
