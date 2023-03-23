import React from 'react';
import {View, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Styles from './styles';
import Images from '../../constants/Images';
import ScreenNames from '../../constants/ScreenNames';

import FloatingButton from '../../components/FloatingButton';
import ProductCardView from '../../components/ProductCardView';

const ProductListScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({item}) => {
    return (
      <ProductCardView
        productImg={Images.productImg}
        productName={`Product ${item}`}
        productPrice={item * 100}
        productDsc={`Product short description ${item}`}
      />
    );
  };

  return (
    <View style={Styles.container}>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8.9]}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${index}_product_key`}
        contentContainerStyle={Styles.listBodyContainer}
      />
      <FloatingButton
        onPress={() => navigation.navigate(ScreenNames.addProductScreen)}
      />
    </View>
  );
};

export default ProductListScreen;
