import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import moment from 'moment-timezone';
import {useNavigation} from '@react-navigation/native';

import Styles from './styles';
import {InsertData} from '../../database/InsertData';

import InputText from '../../components/InputText';
import DatePicker from '../../components/DatePicker';
import ImagePicker from '../../components/ImagePicker';
import Loader from '../../components/Loader';
import Strings from '../../constants/Strings';

const AddProductScreen = () => {
  const navigation = useNavigation();

  const [productImg, setProductImg] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDsc, setProductDsc] = useState('');
  const [createDate, setCreateDate] = useState('');

  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const insertDataOnDatabase = async () => {
    setIsLoading(true);
    const data = await InsertData(
      'INSERT INTO products_table (created_date, product_name, product_price, product_dsc, product_img) VALUES (?,?,?,?,?)',
      [
        createDate ? createDate : JSON.stringify(new Date()),
        productName,
        productPrice,
        productDsc,
        JSON.stringify(productImg?.data),
      ],
    );
    if (data) {
      setIsLoading(false);
      navigation.goBack();
    } else {
      setIsLoading(false);
      alert(Strings.cantAddProduct);
    }
  };

  return (
    <View style={Styles.container}>
      {isLoading && <Loader />}
      <InputText
        value={productName}
        placeholder={'Product Name'}
        onChangeText={value => setProductName(value)}
      />
      <InputText
        value={productPrice}
        placeholder={'Product Price'}
        onChangeText={value => setProductPrice(value)}
        keyboardType={'number-pad'}
      />
      <InputText
        value={productDsc}
        placeholder={'Product Description'}
        onChangeText={value => setProductDsc(value)}
      />
      <DatePicker
        date={
          createDate ? moment(JSON.parse(createDate)).format('DD-MM-YYYY') : ''
        }
        open={isDateOpen}
        datePickerClicked={() => setIsDateOpen(true)}
        onConfirm={date => {
          setCreateDate(JSON.stringify(date));
          setIsDateOpen(false);
        }}
        onCancel={() => setIsDateOpen(false)}
      />
      <ImagePicker
        getImageData={imgData => setProductImg(imgData)}
        imageData={productImg?.path}
      />
      <TouchableOpacity
        style={Styles.addProductBtn}
        activeOpacity={0.6}
        onPress={insertDataOnDatabase}>
        <Text style={Styles.addTxt}>Add Product</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddProductScreen;
