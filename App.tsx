import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProdList from './src/propsSample/ProdList';
import OrderPage from './src/propsSample/OrderPage';
import { PaperProvider } from 'react-native-paper';
import CategoryStack from './src/propsSample/CategoryStack';

const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="Product" component={ProdList}/>
          <Tab.Screen name="Category" component={CategoryStack} />
          <Tab.Screen name="Orders" component={OrderPage} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
