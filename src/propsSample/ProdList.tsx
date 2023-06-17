import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const ProdList = () => {
  return (
  <SafeAreaProvider>    
      <Stack.Navigator>
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
  </SafeAreaProvider>
  );
};

export default ProdList;
