import {StyleSheet} from 'react-native';

import Colors from '../../constants/Colors';

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  dateContainer: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: Colors.secondary,
    borderRadius: 10,
    paddingLeft: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  dateTxt: {
    marginLeft: 10,
  },
  dateSelectedTxt: {
    marginLeft: 10,
    color: Colors.black,
  },
});

export default Styles;
