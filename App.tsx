import React from 'react';
import { Text, View } from 'react-native';

import { SafeAreaView  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ProductList from './src/propsSample/ProductList';
import ProductDetails from './src/propsSample/ProductDetails'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategotyList from './src/propsSample/CategotyList';
import ProdList from './src/propsSample/ProdList';
import OrderPage from './src/propsSample/OrderPage';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Product" component={ProductList} />
        <Tab.Screen name="Category" component={CategotyList} />
        <Tab.Screen name="Orders" component={OrderPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
