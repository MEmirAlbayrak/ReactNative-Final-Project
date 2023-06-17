import axios from "axios";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

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
        <Text style={{fontSize:35}}>{detail.name} </Text>
        <Text style={{fontSize:35}}>{detail.unitPrice} </Text>
        <Text style={{fontSize:35}}>{detail.unitsInStock} </Text>

        </View>
    )
}; 
export default ProductDetails;