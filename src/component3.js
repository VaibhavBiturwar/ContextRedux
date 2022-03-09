import React from 'react';
import {View, Text, Button} from 'react-native';

import {useContext} from 'react';
import AppContext from './Context/appContext';

export const Component3 = props => {
  const a = useContext(AppContext);
  return (
    <View>
      <Text>In Container 3</Text>
      <Text>{a.data3}</Text>
      <Button onPress={a.updateData3} title="Change State" />
    </View>
  );
};
