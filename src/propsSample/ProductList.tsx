import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


interface Product {
    id: number;
    supplierId: number;
    categoryId: number;
    quantityPerUnit: string;
    unitPrice: number;
    unitsInStock: number;
    unitsOnOrder: number;
    reorderLevel: number;
    discontinued: boolean;
    name: string;
    supplier: {
      id: number;
      companyName: string;
      contactName: string;
      contactTitle: string;
      address: {
        street: string;
        city: string;
        region: string;
        postalCode: number;
        country: string;
        phone: string;
      };
    };
  }
const ProductList = ( ) => {
  const [products, setProducts] =useState<Product[]>([]);
 const navigation = useNavigation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://northwind.vercel.app/api/products');
        setProducts(response.data.slice(0, 5));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  const handleProductClick = (product: Product) => {
    // Navigate to the other page and pass the selected product
    //navigation.navigate('ProductDetails', { product: product });    
  };

  return (
    <View>
      {products.map((product) => (
        <TouchableOpacity key={product.id} onPress={() => handleProductClick(product)}>
          <Text>{product.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ProductList;
  

  