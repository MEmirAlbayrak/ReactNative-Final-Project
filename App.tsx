import React from 'react';
import { Text, View } from 'react-native';

import { SafeAreaView  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ProductList from './src/propsSample/ProductList';
import ProductDetails from './src/propsSample/ProductDetails'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


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
      <Stack.Navigator>
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />

      </Stack.Navigator>
    </NavigationContainer>

  </SafeAreaProvider>
  );
};

export default App;
