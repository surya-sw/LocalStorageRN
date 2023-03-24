import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';

import Styles from './styles';
import Images from '../../constants/Images';
import {Configurations} from '../../constants/Config';

const ImagePicker = props => {
  const {getImageData, imageData} = props;

  const chooseImage = async () => {
    try {
      await ImageCropPicker.openPicker(Configurations.IMAGE_CROP_PICKER_CONFIG)
        .then(image => {
          getImageData(image);
        })
        .catch(error => {});
    } catch (err) {}
  };

  const openCamera = async () => {
    try {
      await ImagePicker.openCamera(Configurations.IMAGE_CROP_PICKER_CONFIG)
        .then(image => {
          getImageData(image);
        })
        .catch(error => {});
    } catch (err) {}
  };

  return (
    <View style={Styles.container}>
      <TouchableOpacity style={Styles.imgpickerContainer} onPress={chooseImage}>
        {imageData ? (
          <Image
            source={{uri: imageData}}
            style={Styles.uploadedImg}
            borderRadius={10}
          />
        ) : (
          <Image
            source={Images.uploadCameraIcon}
            style={Styles.uploadCameraIcon}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ImagePicker;
