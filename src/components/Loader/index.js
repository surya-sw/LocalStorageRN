import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import Colors from '../../constants/Colors';
import Styles from './styles';

const Loader = () => {
  return (
    <View style={Styles.container}>
      <ActivityIndicator size={60} color={Colors.secondary} />
    </View>
  );
};

export default Loader;
