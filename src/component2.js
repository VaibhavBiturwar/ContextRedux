import React from 'react';
import {View, Text, Button} from 'react-native';

import {useContext} from 'react';
import AppContext from './Context/appContext';

export const Component2 = props => {
  const a = useContext(AppContext);
  return (
    <View>
      <Text>In Container 2</Text>
      <Text>{a.data2}</Text>
      <Button onPress={a.updateData2} title="Change State" />
    </View>
  );
};
