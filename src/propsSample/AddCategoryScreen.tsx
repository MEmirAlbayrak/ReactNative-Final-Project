import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const AddCategoryScreen = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = (text: string) => {
    setName(text);
  };

  const handleDescriptionChange = (text: string) => {
    setDescription(text);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://northwind.vercel.app/api/categories', {
        id: Date.now(), 
        name,
        description,
      });
      console.log('Category added:', response.data);
     
    } catch (error) {
      console.error('Error adding category:', error);
     
    }
  };

  return (
    <View style={styles.container}>
      <Text>Add Category</Text>
      <View style={styles.formContainer}>
        <Text>Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={handleNameChange}
        />
        <Text>Description:</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={handleDescriptionChange}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    marginTop: 16,
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  submitButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    borderRadius: 4,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AddCategoryScreen;
