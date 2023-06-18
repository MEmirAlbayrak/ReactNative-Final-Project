import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const CategoryListScreen = ({ navigation }: { navigation: any }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

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
      fetchData(); // Fetch the updated list of categories after deletion
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
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDelete(category.id)}
      >
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {categories.map(renderCategory)}
      </ScrollView>
      <TouchableOpacity
        style={styles.updateButton}
        onPress={() => navigation.navigate('AddCategory')}
      >
        <Text style={styles.updateButtonText}>Update</Text>
      </TouchableOpacity>
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
  },
  updateButton: {
    backgroundColor: 'green',
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    paddingVertical: 16,
    borderRadius: 4,
  },
  updateButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CategoryListScreen;
