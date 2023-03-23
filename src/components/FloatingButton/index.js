import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

import Styles from './styles';
import Images from '../../constants/Images';

const FloatingButton = props => {
  const {onPress} = props;
  return (
    <TouchableOpacity
      style={Styles.floatingBtn}
      onPress={onPress}
      activeOpacity={0.6}>
      <Image source={Images.addIcon} style={Styles.addIcon} />
    </TouchableOpacity>
  );
};

export default FloatingButton;
