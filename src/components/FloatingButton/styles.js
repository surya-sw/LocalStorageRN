import {StyleSheet} from 'react-native';

import Colors from '../../constants/Colors';

const Styles = StyleSheet.create({
  floatingBtn: {
    width: 52,
    height: 52,
    borderRadius: 100,
    backgroundColor: Colors.secondary,
    position: 'absolute',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
  },
  addIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: Colors.white,
  },
});

export default Styles;
