import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { List, Button } from 'react-native-paper';

const CategoryListScreen = ({ navigation }: { navigation: any }) => {
  const [categories, setCategories] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
      return () => {};  
    }, []) 
  );
  

  const fetchData = async () => {
    try {
      const response = await axios.get('https://northwind.vercel.app/api/categories');
      const data = response.data;
      setCategories(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`https://northwind.vercel.app/api/categories/${id}`);
      console.log('Category deleted:', id);
      fetchData(); 
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  const renderCategory = (category: any) => (
    <View key={category.id} style={styles.category}>
      <View style={styles.categoryInfo}>
        <Text style={styles.categoryName}>Name: {category.name}</Text>
        <Text style={styles.categoryDescription}>Description: {category.description}</Text>
      </View>
      <Button
        buttonColor='rgb(200, 45, 45)'
        textColor='rgb(255, 255, 255)'
        style={{ borderRadius: 20,  
         width: 80,
         height: 40,
         justifyContent: 'center',
         alignItems: 'center'}}
        onPress={() => handleDelete(category.id)}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </Button>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {categories.map(renderCategory)}
      </ScrollView>
      <Button
        buttonColor='rgb(45, 200, 45)'
        textColor='rgb(255, 255, 255)'
        style={{ 
        position: 'absolute',
        bottom: 16,
        left: 16,
        right: 16,
        paddingVertical: 5,
        borderRadius: 4 }} 
        onPress={() => navigation.navigate('Add Category Screen')}>
        <Text style={{ fontWeight:"900" }}>Update</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 60,
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  categoryInfo: {
    flex: 1,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  categoryDescription: {
    fontSize: 12,
    color: 'gray',
  },
  deleteButton: {
    backgroundColor: 'red',
    width: 80,
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default CategoryListScreen;
