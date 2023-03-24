import React from 'react';
import {TextInput, View} from 'react-native';

import Styles from './styles';

const InputText = props => {
  const {value, placeholder, onChangeText, keyboardType} = props;

  return (
    <View style={Styles.container}>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        style={Styles.inputContainer}
      />
    </View>
  );
};

export default InputText;
