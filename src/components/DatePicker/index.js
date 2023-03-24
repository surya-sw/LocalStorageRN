import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import Styles from './styles';
import Images from '../../constants/Images';
import Strings from '../../constants/Strings';

const DatePicker = props => {
  const {date, open, onConfirm, onCancel, datePickerClicked} = props;

  return (
    <View style={Styles.container}>
      <TouchableOpacity
        style={Styles.dateContainer}
        onPress={datePickerClicked}
        activeOpacity={0.5}>
        <Image source={Images.calendarIcon} style={Styles.calendarIcon} />
        <Text style={date ? Styles.dateSelectedTxt : Styles.dateTxt}>
          {date ? date : Strings.selectDate}
        </Text>
        <DateTimePickerModal
          minimumDate={new Date()}
          isVisible={open}
          mode="date"
          onConfirm={onConfirm}
          onCancel={onCancel}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DatePicker;
