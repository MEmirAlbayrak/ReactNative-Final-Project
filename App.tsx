import React from 'react';
import { Text, View } from 'react-native';

import { SafeAreaView  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ProductList from './src/propsSample/ProductList';
import ProductDetails from './src/propsSample/ProductDetails'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategotyList from './src/propsSample/CategoryList';
import ProdList from './src/propsSample/ProdList';
import OrderPage from './src/propsSample/OrderPage';
import { PaperProvider } from 'react-native-paper';
import CategoryList from './src/propsSample/CategoryList';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const theme = {
  colors: {
    primary: 'rgb(220, 184, 255)',
    secondary: 'rgb(208, 193, 218)',
  },
};


const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="Product" component={ProdList} />
          <Tab.Screen name="Category" component={CategoryList} />
          <Tab.Screen name="Orders" component={OrderPage} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
