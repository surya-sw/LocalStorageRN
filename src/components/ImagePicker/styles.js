import {StyleSheet} from 'react-native';

import Colors from '../../constants/Colors';

const Styles = StyleSheet.create({
  container: {
    width: '50%',
    marginBottom: 20,
  },
  imgpickerContainer: {
    width: '100%',
    height: 150,
    borderWidth: 1,
    borderColor: Colors.secondary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  uploadCameraIcon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  uploadedImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default Styles;
