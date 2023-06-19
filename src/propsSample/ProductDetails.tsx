import axios from "axios";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from 'react-native-paper';

const ProductDetails = ( {route} : any) => {

    let {id} = route.params;

    const[detail, setdetail] = useState<any>({});

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/products/' +id).then(res => {
                setdetail(res.data);
        })
    }, [])

    return(
        <View>
            
            <Text variant="displayMedium">{detail.name} </Text>
            <Text variant="headlineMedium">{detail.unitPrice} </Text>
            <Text variant="headlineMedium">{detail.unitsInStock} </Text>
        </View>
    )
}; 
export default ProductDetails;


