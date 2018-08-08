import React from 'react';
import { Alert, Button, View } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Button
          onPress={() => {
            Alert.alert('You tapped the button!');
          }}
          title="Press Me Please"
        />
      </View>
    );
  }
}
