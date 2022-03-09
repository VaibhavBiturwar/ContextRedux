import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';

import {useContext} from 'react';
import AppContext from './Context/appContext';

export const Component1 = props => {
  const a = useContext(AppContext);
  const [val, setVal] = useState('');
  return (
    <View>
      <Text>In Container 1</Text>
      <Text>{a.data1}</Text>
      <TextInput
        placeholder="Type here"
        onChangeText={e => {
          setVal(e);
        }}
      />
      <Button
        onPress={() => {
          a.updateData1(val);
        }}
        // onPress={a.updateData1}
        title="Change State"
      />
    </View>
  );
};
