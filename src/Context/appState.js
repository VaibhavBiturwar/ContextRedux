import React, {useState} from 'react';
import AppContext from './appContext';

export const AppState = props => {
  const [data1, setData1] = useState('Dafault Data 1');
  const [data2, setData2] = useState('Dafault Data 2');
  const [data3, setData3] = useState('Dafault Data 3');

  const updateData1 = props => {
    setData1(props);
  };
  const updateData2 = () => {
    if (data2 == 'Dafault Data 2') {
      setData2('Data Updated 2');
    } else {
      setData2('Dafault Data 2');
    }
  };
  const updateData3 = () => {
    if (data3 == 'Dafault Data 3') {
      setData3('Data Updated 3');
    } else {
      setData3('Dafault Data 3');
    }
  };
  return (
    <AppContext.Provider
      value={{data1, updateData1, data2, updateData2, data3, updateData3}}>
      {props.children}
    </AppContext.Provider>
  );
};
