import React from 'react';
import { Text, View } from 'react-native';

import { SafeAreaView  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategotyList from './CategotyList';

const Tab = createBottomTabNavigator();
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
