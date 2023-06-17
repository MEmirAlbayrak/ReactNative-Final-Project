import React, { useEffect, useState  } from 'react';
import { View, Text, TouchableOpacity,Pressable, FlatList  } from 'react-native';
import axios from 'axios';


const ProductList = ( {navigation}: any) => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    axios.get('https://northwind.vercel.app/api/products')
        .then(res => {
            setproducts(res.data);
        })
  },[])

  return (
    <FlatList
        data={products.slice(0,5)}
        renderItem={({ item }: any) => <Pressable onPress={() => navigation.navigate('ProductDetails', { id: item.id })}><Text style={{ fontSize: 30 }}>{item.name}</Text></Pressable>}
    />
  )
};

export default ProductList;
  

  