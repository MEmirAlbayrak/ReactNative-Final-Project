import React from 'react';
import { Text, View } from 'react-native';

import { SafeAreaView  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ProductList from './src/propsSample/ProductList';
const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}


const App = () => {
  return (

    <SafeAreaProvider>
      
      
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={ProductList} />
      <Tab.Screen name="Settings" component={ProductList} />
    </Tab.Navigator>
  </NavigationContainer>
   
  </SafeAreaProvider>
  );
};

export default App;
