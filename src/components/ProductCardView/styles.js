import {StyleSheet} from 'react-native';

import Colors from '../../constants/Colors';

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.secondary,
    borderRadius: 10,
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 3,
    marginBottom: 10,
  },
  leftView: {
    width: '40%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightView: {
    width: '60%',
    height: 150,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  productImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 20,
    color: Colors.black,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 15,
    color: Colors.black,
    marginTop: 5,
    fontWeight: '600',
  },
  productDsc: {
    fontSize: 14,
    color: Colors.black,
    marginTop: 5,
  },
});

export default Styles;
