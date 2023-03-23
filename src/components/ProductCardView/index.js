import React from 'react';
import {View, Image, Text} from 'react-native';

import Styles from './styles';
import Strings from '../../constants/Strings';

const ProductCardView = props => {
  const {productImg, productName, productPrice, productDsc} = props;
  return (
    <View style={Styles.container}>
      <View style={Styles.leftView}>
        {productImg ? (
          <Image
            source={productImg}
            style={Styles.productImg}
            borderTopLeftRadius={10}
            borderBottomLeftRadius={10}
          />
        ) : (
          <Text style={Styles.productPrice}>{Strings.imageNotFound}</Text>
        )}
      </View>
      <View style={Styles.rightView}>
        <Text
          style={Styles.productName}
          ellipsizeMode={'tail'}
          numberOfLines={2}>
          {productName ? productName : '--'}
        </Text>
        <Text
          style={Styles.productPrice}
          ellipsizeMode={'tail'}
          numberOfLines={1}>{`${productPrice ? productPrice : 0} $`}</Text>
        <Text
          style={Styles.productDsc}
          ellipsizeMode={'tail'}
          numberOfLines={3}>
          {productDsc ? productDsc : Strings.noDescription}
        </Text>
      </View>
    </View>
  );
};

export default ProductCardView;
