import {StyleSheet} from 'react-native';

import Colors from '../../constants/Colors';

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  addProductBtn: {
    width: 200,
    height: 50,
    backgroundColor: Colors.secondary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addTxt: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Styles;
