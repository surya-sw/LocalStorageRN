import React, {useEffect, useState} from 'react';
import {View, FlatList, RefreshControl, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment-timezone';

import Styles from './styles';
import ScreenNames from '../../constants/ScreenNames';
import {createProductsTable} from '../../database/CreateTables';
import {getTablesData} from '../../database/GetTablesData';
import Images from '../../constants/Images';
import Strings from '../../constants/Strings';
import {deleteTables} from '../../database/DeleteTables';

import FloatingButton from '../../components/FloatingButton';
import ProductCardView from '../../components/ProductCardView';
import Loader from '../../components/Loader';

const ProductListScreen = () => {
  const navigation = useNavigation();

  const [allProduct, setAllProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    createProductsTable();
    // deleteTables('products_table');
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getProductTableListDate();
    });
    return unsubscribe;
  }, [navigation]);

  const getProductTableListDate = async () => {
    setIsLoading(true);
    const query = 'SELECT * FROM products_table ORDER BY created_date ASC';

    try {
      const newData = await getTablesData(query);
      setIsLoading(false);
      setAllProduct(newData);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const renderItem = ({item}) => {
    return (
      <ProductCardView
        productImg={item.product_img}
        productName={item?.product_name}
        productPrice={item?.product_price}
        productDsc={item?.product_dsc}
        productDate={
          item?.created_date
            ? moment(JSON.parse(item?.created_date)).format('DD-MM-YYYY')
            : '--'
        }
      />
    );
  };

  const renderListEmptyView = () => {
    return (
      <View style={Styles.emptyContainer}>
        <Image source={Images.emptyListIcon} style={Styles.emptyListIcon} />
        <Text style={Styles.noProductFoundTxt}>{Strings.noProductFound}</Text>
      </View>
    );
  };

  return (
    <View style={Styles.container}>
      {isLoading && <Loader />}
      <FlatList
        data={allProduct}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${index}_product_key`}
        contentContainerStyle={Styles.listBodyContainer}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {
              getProductTableListDate();
            }}
          />
        }
        ListEmptyComponent={renderListEmptyView}
      />
      <FloatingButton
        onPress={() => navigation.navigate(ScreenNames.addProductScreen)}
      />
    </View>
  );
};

export default ProductListScreen;
