import {StyleSheet} from 'react-native';

import Colors from '../../constants/Colors';

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    position: 'absolute',
    zIndex: 1,
    opacity: 0.7,
  },
});

export default Styles;
