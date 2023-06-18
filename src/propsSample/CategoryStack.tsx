import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddCategoryScreen from './AddCategoryScreen';
import CategoryListScreen from './CategoryListScreen';

const Stack = createNativeStackNavigator();


const CategoryStack = () => {
  return (
  <SafeAreaProvider>    
      <Stack.Navigator>
        <Stack.Screen name="Category List Screen" component={CategoryListScreen} />
        <Stack.Screen name="Add Category Screen" component={AddCategoryScreen} />
      </Stack.Navigator>
  </SafeAreaProvider>
  );
};

export default CategoryStack;
