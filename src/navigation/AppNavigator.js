import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import ScreenNames from '../constants/ScreenNames';
import Strings from '../constants/Strings';

import ProductListScreen from '../screens/ProductListScreen';
import AddProductScreen from '../screens/AddProductScreen';

const AppNavigator = () => {
  const App = createStackNavigator();
  return (
    <NavigationContainer>
      <App.Navigator>
        <App.Screen
          options={{
            title: Strings.productListing,
          }}
          name={ScreenNames.productListScreen}
          component={ProductListScreen}
        />
        <App.Screen
          options={{
            title: Strings.addProduct,
          }}
          name={ScreenNames.addProductScreen}
          component={AddProductScreen}
        />
      </App.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
