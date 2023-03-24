import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  listBodyContainer: {
    width: '100%',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  emptyContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 250,
  },
  emptyListIcon: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
  },
  noProductFoundTxt: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default Styles;
